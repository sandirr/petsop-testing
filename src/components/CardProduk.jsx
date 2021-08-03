import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function CardProduk() {
  const history = useHistory()

  return (
    <Card style={{width: 214+'px', borderRadius: 22+ 'px'}}>
      <Card.Img variant="top"
        className="card-image"
        src={require('../assets/merek-whiskas.png').default} />
      <Card.Body style={{paddingTop: 0,}}>
        <p style={{textAlign: 'left'}}>Whiskas
          <span className="float-right">Rp. 10.000</span>
        </p>
        <p className="text-secondary">Momo petshop</p>
        <center>
          <Button onClick={()=>history.push('/produk/detail')}
            style={{backgroundColor: '#7453AB', border: 'none', width: 110+'px'}}>
              Beli</Button>
        </center>
      </Card.Body>
    </Card>
  )
}

export default CardProduk
