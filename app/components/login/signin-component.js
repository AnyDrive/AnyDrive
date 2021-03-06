import { Component } from 'react';
import { Form, FormControl , FormGroup, Col, Button, ControlLabel, Checkbox, Image } from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <Image src="../../img/upload-files.png" responsive />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <Form horizontal>
              <FormGroup>
                <Col sm={8}>
                  <Button className="btn btn-primary" type="button">
                    Sign in with Google
                  </Button>
                </Col>
                <Col sm={4}>
                  or <a href="" className="">
                    create an account</a>
                </Col>
              </FormGroup>

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
                  <Button className="btn btn-primary" type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
