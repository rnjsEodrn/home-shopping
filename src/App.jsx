import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllProductPage from './page/AllProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import PrivateRoute from './Route/PrivateRoute';

//1. 전체 상품 페이지, 로그인, 상품 상세 페이지가 있다.
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버트을 누르면 로그인 페이지가 나온다.
//4. 로그인 되어 있지 않으면 상품 상세 페이지로 갈 시 로그인 페이지가 나온다.
//5. 로그인이 되어 있을 때는 상품 상세 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 누르면 로그아웃이 된다.
//7. 상품 상세 페이지에서 로그아수 버튼 누를 시 로그인 페이지로 간다.
//8. 로그인 상태에서는 로그아웃이 보이고, 로그아웃 상태에서는 로그인이 보인다.
//9. 상품을 검색할 수 있다.

function App() {

  const [login, setLogin] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProductPage login={login} setLogin={setLogin}/>}></Route>
        <Route path="/product/:id" element={<PrivateRoute login={login} setLogin={setLogin}/>}></Route>
        <Route path="/login" element={<LoginPage setLogin={setLogin}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
