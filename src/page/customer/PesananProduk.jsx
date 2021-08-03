import React from 'react'
import { Container, Button, Card, Accordion } from 'react-bootstrap'
import {useHistory, withRouter} from 'react-router-dom'


function PesananProduk() {
  const history = useHistory()

  return (
    <Container>
      <h1 className="text-center color-primary">Daftar pesanan produk</h1>
      <hr className="hr-bottom"/>
      <div className="mt-3" align="center">

      <Card body style={{width: 672+'px'}}>
        <div className="d-flex">
          <img src={require('../../assets/merek-whiskas.png').default} alt="produk" 
            style={{width: 80+'px'}}/>
          <p>Whiskas</p>
        </div>
      </Card>
      {/* <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion> */}
      {/* <center> */}
        <Button  className="mt-3" onClick={()=>history.push('/products')}
          style={{backgroundColor: '#7453AB', border: 'none', }}>
            Checkout</Button>
          {/* </center> */}
      </div>
    </Container>
  )
}

export default withRouter(PesananProduk)
