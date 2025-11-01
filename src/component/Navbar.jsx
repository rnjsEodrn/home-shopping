import React, { setState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ login, setLogin }) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  const navigate = useNavigate();

  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  const goToLoginPage = () => {
    if (login) {
      setLogin(false);
    } else {
      navigate('/login');
    }
  };

  const searchProducts = (event) => {
    if (event.key === 'Enter') {
      let keyValue = event.target.value;
      navigate(`/?title=${keyValue}`);
    }
  };

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <div>여성</div>
        <div>Divided</div>
        <div>남성</div>
        <div>신생아/유아</div>
        <div>아동</div>
        <div>H&M Home</div>
        <div>Sale</div>
        <div>지속가능성</div>
        <div onClick={goToLoginPage}>{login ? 'Logout' : 'Login'}</div>
      </div>

      <div className="first-line">
        <FontAwesomeIcon icon={faBars} id="side-menu" onClick={openNav} className="openbtn" />
        <div className="search-area">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
          <input
            id="search-button"
            type="text"
            placeholder="search"
            onKeyDown={(event) => {
              searchProducts(event);
            }}
          />
        </div>
        <div className="login-area" onClick={goToLoginPage}>
          <div>{login ? 'Logout' : 'Login'}</div>
          <FontAwesomeIcon icon={faCircleUser} size="lg" id="login-icon" />
        </div>
      </div>
      <div className="second-line" onClick={() => navigate('/')}>
        <img
          id="title"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="third-line">
        <ul id="menu-list">
          {menuList.map((menu) => (
            <li className="menu-item" key={menu}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
