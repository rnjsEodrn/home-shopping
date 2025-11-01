import { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = ({login, setLogin}) => {
  const [product, setProduct] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const getProductById = async () => {
    const url = new URL(`https://my-json-server.typicode.com/rnjsEodrn/home-shopping/products/${params.id}`);
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      <Navbar login={login} setLogin={setLogin}/>
      <Container>
        <Row>
          <Col md="6">
            <div id='img-area'>
              <Image src={product?.img} alt='' fluid></Image>
            </div>
          </Col>
          <Col md="6">
            <div className='mb-3'>{product?.title}</div>
            <div className='mb-3'>₩{product?.price}</div>
            <div className='mb-3'>{product?.choice ? 'Conscious choice' : ' '}</div>
            <div className='mb-5'>
              <select name="size" id="size">
                <option>사이즈 선택</option>
                {product?.size.map((size) => (<option value={size} key={size}>{size}</option>))}
              </select>
            </div>
            <div>
              <Button variant="danger" onClick={()=>navigate("/")}>추가하기</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
