import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router,
        Switch, Route, Link, useHistory, useLocation} from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import Login from './Login'
import Beranda from './Beranda'
import ProdukLainnya from './ProdukLainnya'
import DetailProduk from './DetailProduk'
import PesananProduk from './customer/PesananProduk'

function Main() {
  const history = useHistory()
  const location = useLocation()
  // const [isLogin, setIslLogin] = useState(true)

  // useEffect(() => {
  //   location.pathname == '/login' ? setIslLogin(false) : setIslLogin(true)
  // }, [])

  const toLogin = () =>{
    // setIslLogin(false)
    history.replace('/login')
  }

  return ( 
    // <Router>
      <div id="main" className="main-page">
        {/* {
          isLogin?  */}
          <Navbar className="bg-primary-c" variant="light">
            
              <Navbar.Brand>
                <img className="navbar-logo" src={require('../assets/LOGO PNG.png').default} alt="logo"/>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link >
                  <Link className="nav-link text-white" to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link text-white" to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link text-white" to="/daftar-pesanan">daftar pesanan</Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex mr-3">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              {/* <Link to="/login"> */}
                <Button variant="info" onClick={toLogin}>Login</Button>
              {/* </Link> */}
          </Navbar> 
          {/* : ''
        } */}

      <Switch>
        <Route exact path="/" component={Beranda}/>
        {/* <Route path="/login" component={Login}></Route> */}
        <Route exact path="/products" component={ProdukLainnya}/>
        <Route path="/produk/detail" component={DetailProduk}/>
        <Route path="/daftar-pesanan" component={PesananProduk}/>
          {/* <DetailProduk/>
        </Route> */}
      </Switch>
      </div>
    // </Router>
  )
}

export default Main
