import React from 'react'
import {Row, Col, Container, Card, Button, Form} from 'react-bootstrap'

function DetailProduk() {
  return (
    <div>
      <Container>
        <div className="d-flex mt-3">
          <section>
            <Row>
              <Col md={4}>
                <img style={{width: 100+'%'}} src={require('../assets/merek-whiskas.png').default} alt="produk" />
                <p className="mt-3">
                  <img style={{width: 30+'px'}} src={require('../assets/shop.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;Momo petshop
                </p>
                <p>
                  <img style={{width: 30+'px'}} src={require('../assets/pin.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;Jl. Sunu
                </p>
                <p>
                  <img style={{width: 30+'px'}} src={require('../assets/call.png').default} alt="petshop"/>
                  &nbsp;&nbsp;&nbsp;0821 9049 4097
                </p>
              </Col>
              <Col md={8}>
                <p style={{textAlign: 'left', fontSize: 48+'px', color: '#7435AB', borderLeft: 4+'px solid #7435AB'}}>
                  &nbsp;Whiskas <span style={{float: 'right', color: 'black', fontSize: 24+'px'}}>Rp. 10.000</span></p>
                <p style={{textAlign: 'justify'}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta laudantium quas vel laborum at, ex atque in delectus consequuntur explicabo alias reprehenderit ipsam error corporis consequatur adipisci aliquid. Obcaecati.
                </p>
              </Col>
            </Row>
          </section>
          <aside className="ml-3" style={{float: 'right'}}>
            <Card style={{width: '214px', backgroundColor: '#F3EAFF', border: 'none', padding: '21px 24px'}}>

              <p>Pcs</p>
              <form>
                <Form.Control size="sm" type="number" placeholder="Small text" />
                <p className="mt-2" style={{align: 'left'}}>Total
                  <span style={{float: 'right', color: '#7435AB', fontWeight: 'bold'}}>
                  Rp. 20.000
                  </span>
                </p>
                <Button  className="mt-3"
                style={{width: 100+'%', backgroundColor: '#7453AB', border: 'none', fontSize: 12+'px'}}>
                  Tambahkan ke keranjang</Button>
              </form>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  )
}

export default DetailProduk
