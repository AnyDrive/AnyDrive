import { Component } from 'react';
import { Form, FormControl , FormGroup, Col, Button, ControlLabel, Checkbox, Image } from 'react-bootstrap';
import request from 'superagent';

const APP_URI = 'http://localhost:3000';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    request
      .get(`${APP_URI}/api/signup`)
      .then(res => {
        console.log(res);
      });
  }

  createUser() {
    request
      .get(`${APP_URI}/api/signup`)
      .then(res => {
        console.log('res', res);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <Form horizontal>

              <FormGroup controlId="formHorizontalEmail">
                <Col sm={12}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col sm={12}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <Button className="btn btn-primary" type="submit" onclick={this.createUser}>
                    Create an account
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
