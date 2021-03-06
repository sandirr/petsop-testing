import React from 'react'
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap'

import CardProduk from '../components/CardProduk'

function ProdukLainnya() {

  return (
    <div>
      <Jumbotron style={{backgroundImage: `url('BASKET2 2.png')`, 
        backgroundSize: 'cover', height: '550px', backgroundRepeat: 'no-repeat'}} fluid>
        <Container>
          {/* <Row>
            <Col>
              <h2>Halo Sahabat Petshop</h2>
              <p>Temukan kebutuhan hewan peliharaanmu disini dari beberapa Petshop Kota Makassar</p>
            </Col>
            <Col><div className="right-side">
            <Image className="latar-beranda" src="bg.jpg" alt="bg"/> 
          </div></Col>
          </Row> */}
        </Container>
      </Jumbotron>
      <div align="center">
        <div align="center" style={{width: '800px', padding: 18+'px', 
                      backgroundColor: 'white',
                      borderRadius: 12+'px', marginTop: -80+'px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <Form className="d-flex justify-content-md-center">
            <Form.Group  style={{width: '236px', marginBottom: 0}} controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom>
                <option>BNI</option>
                <option>BRI</option>
                <option>BCA</option>
              </Form.Control>
            </Form.Group> &nbsp;&nbsp;
            <Form.Control style={{width: '236px'}} type="email" placeholder="Enter email" />
            <Button className="ml-3"
              style={{backgroundColor: '#7453AB', border: 'none', width: 80+'px', height: '38px'}}>
                Cari</Button>
          </Form>
        </div>
      </div>
      <h1 className="mt-3 text-center color-primary">Produk</h1>
      <hr className="hr-bottom"/>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={3} align="center">
            <CardProduk/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProdukLainnya
