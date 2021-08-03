import React from 'react'

import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap'

import {BrowserRouter as Router, useHistory} from 'react-router-dom'

import CardProduk from '../components/CardProduk'
import CardLayanan from '../components/CardLayanan'
import Mitra from '../components/Mitra'

function Beranda() {
  const history = useHistory()

  return (
    <div>
      <Jumbotron style={{backgroundImage: `url('BASKET2 2.png')`, 
        backgroundSize: 'cover', height: '550px', backgroundRepeat: 'no-repeat'}} fluid>
        <Container>
          <Row>
            <Col>
              <h2>Halo Sahabat Petshop</h2>
              <p>Temukan kebutuhan hewan peliharaanmu disini dari beberapa Petshop Kota Makassar</p>
            </Col>
            <Col><div className="right-side">
            {/* <Image className="latar-beranda" src="bg.jpg" alt="bg"/>  */}
          </div></Col>
          </Row>
        </Container>
      </Jumbotron> 
      <h1 className="text-center color-primary">Produk</h1>
      <hr className="hr-bottom"/>
      <div className="bg-secondary-c padding-lg" style={{marginBottom: 32+'px'}}>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="3" align="center">
              <CardProduk/>
            </Col>
          </Row>
          <center>
            <Button  className="mt-3" onClick={()=>history.push('/products')}
              style={{backgroundColor: '#7453AB', border: 'none', }}>
                Produk lainnya</Button>
          </center>
        </Container>
      </div>
      <h1 className="text-center color-primary">Layanan</h1>
      <hr className="hr-bottom"/>
      <div className="bg-secondary-c padding-md" style={{marginBottom: 32+'px'}}>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="3" align="center">
              <CardLayanan/>
            </Col>
          </Row>
          <center>
            <Button className="mt-3"
              style={{backgroundColor: '#7453AB', border: 'none', }}>
                Layanan lainnya</Button>
          </center>
        </Container>
      </div>
      <h1 className="text-center color-primary">Mitra kami</h1>
      <hr className="hr-bottom"/>
      <Container>
        <Mitra/>
      </Container>
    </div>
  )
}

export default Beranda