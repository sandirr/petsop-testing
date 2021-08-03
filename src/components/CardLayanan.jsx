import React from 'react'
import {Card, Button} from 'react-bootstrap'

function CardProduk() {
  return (
    <Card style={{width: 214+'px', borderRadius: 22+ 'px'}}>
      <Card.Img variant="top"
        className="card-image"
        src={require('../assets/merek-whiskas.png').default} />
      <Card.Body style={{paddingTop: 0,}}>
        <p style={{textAlign: 'left'}}>Mandi
          <span className="float-right">Rp. 10.000/Kg</span>
        </p>
        <p className="text-secondary">Momo petshop</p>
        <center>
          <Button 
            style={{backgroundColor: '#7453AB', border: 'none', width: 110+'px'}}>
              Booking</Button>
        </center>
      </Card.Body>
    </Card>
  )
}

export default CardProduk
