import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const AllProductPage = ({login, setLogin}) => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('title') || "";
    const url = new URL(`http://localhost:3004/products?title_like=${searchQuery}`);
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  }, [query]);
  

  return (
    <div>
      <Navbar login={login} setLogin={setLogin}/>
      <Container>
        <Row>
          {productList.map(item => 
            <Col lg={3} md={6} key={item.id}>
              <ProductCard item={item}/>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default AllProductPage