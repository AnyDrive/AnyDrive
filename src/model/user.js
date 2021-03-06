'use strict';

// import bcrypt from 'bcrypt';
// import crypto from 'crypto';
// import jwt from 'jsonwebtoken';
// import Promise from 'bluebird';
// import mongoose from 'mongoose';
// import creatError from 'http-errors';
// import debug from 'debug';
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const creatError = require('http-errors');
const debug = require('debug');

const Schema = mongoose.Schema;
const userSchema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  findHash: { type: String, unique: true },
});

userSchema.methods.generatePasswordHash = function(password) {
  debug('Generate PasswordHash');
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) reject(creatError(400, 'Invalid user information'));
      this.password = hash;
      resolve(this);
    });
  });
};

userSchema.methods.comparePasswordHash = function(password) {
  debug('Compare PasswordHash');
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if (err) return reject(err);
      if(!valid) return reject(creatError(401, 'Incorrect password'));
      resolve(this);
    });
  });
};

// for signup & signin: first create a secure hash (using generateFindHash/crypto) then use it to create temporary token using app secret
userSchema.methods.generateToken = function() {
  debug('Generate Token');
  return new Promise((resolve, reject) => {
    this.generateFindHash()
    .then(findHash => resolve(jwt.sign({token: findHash}, process.env.APP_SECRET)))
    .catch(err => reject(err)); // 500 error from find hash
  });
};

userSchema.methods.generateFindHash = function() {
  debug('generateFindHash');
  return new Promise((resolve, reject) => {
    let tries = 0;
    _generateFindHash.call(this);
    function _generateFindHash(){
      this.findHash = crypto.randomBytes(32).toString('hex');
      this.save()
      .then(() => resolve(this.findHash))
      .catch(err => {
        if(tries > 3) return reject(err); // 500 error
        tries++;
        _generateFindHash.call(this);
      });
    }
  });
};

module.exports = mongoose.model('user', userSchema);
