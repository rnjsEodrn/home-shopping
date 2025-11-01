import Navbar from '../component/Navbar';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({setLogin}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("loginUser");
    setLogin(true);
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Form onSubmit={(event) =>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="Enter ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
