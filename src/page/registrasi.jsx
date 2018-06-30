import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Logos from '../Logo/logo2';


class registrasi extends Component {
  render(){
    return(
      <div>
      <Container>
        <Logos />
        <br />
      <div  className='formregis'>
      <div>
      <Container>
      <Form>
      <h3>REGISTRASI</h3>
      <FormGroup row>
      <Label  for="exampleText" sm={2}>Owner</Label>
      <Col sm={10}>
        <Input type="text" name="text" id="exampleText" />
      </Col>
      </FormGroup>
      <FormGroup row>
      <Label  for="exampleText" sm={2}>No Kartu</Label>
      <Col sm={10}>
        <Input type="text" name="text" id="exampleText" />
      </Col>
      </FormGroup><FormGroup row>
          <Label  for="exampleText" sm={2}>Instansi</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="exampleText" />
          </Col>
      </FormGroup><FormGroup row>
          <Label  for="exampleText" sm={2}>Tipe</Label>
          <Col sm={10}>
            <Input  type="text" name="text" id="exampleText" />
          </Col>
      </FormGroup><FormGroup row>
          <Label for="exampleText" sm={2}>Saldo</Label>
          <Col sm={10}>
            <Input  type="text" name="text" id="exampleText" />
          </Col>
      </FormGroup><FormGroup row>
          <Label  for="exampleText" sm={2}>Status</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="exampleText" />
          </Col>
      </FormGroup><FormGroup row>
          <Label  for="exampleDate" sm={2}>Tanggal Expired</Label>
          <Col sm={10}>
            <Input  className='inputregis' type="date" name="date" id="exampleDate" />
          </Col>
      </FormGroup>
      </Form>
      <div className='buttonregis'>
        <Button color="info">Submit</Button>{' '}
      </div>
      </Container>
      </div>
      </div>

      </Container>
      </div>
    );
  }
}

export default registrasi;
