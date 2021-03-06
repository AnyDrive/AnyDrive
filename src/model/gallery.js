'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = Schema({
  name: {type: String, required: false},
  desc: {type: String, required: false},
  created: {type: Date, required:true, default: Date.now},
  userID: {type: Schema.Types.ObjectId, required: false},
});

module.exports = mongoose.model('gallery', gallerySchema);
