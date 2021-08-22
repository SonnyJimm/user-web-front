import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../styles/img/main.svg";
//imports for users api call
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { useLocation } from "react-router-dom";

function Sidebar(props) {
  const { logoutUser } = props;
  const location = useLocation();
  const activePage = (path) => {
    if (location.pathname === path) {
      return "page_active";
    } else {
      return "";
    }
  };
  return (
    <>
      <nav className='sidebar'>
        <div className='container'>
          <div className='container_header'>
            <img className='logo_main' alt='app logo' src={Logo} />
            <h1 className='app_name'>E-Nom</h1>
          </div>
        </div>
        <div className='sidebar_menu'>
          <ul>
            <li className={activePage("/")}>
              <Link to='/'>Ном</Link>
            </li>
            <li className={activePage("/monitors")}>
              <Link to='/monitors'>Монитор</Link>
            </li>
            <li className={activePage("/admin")}>
              <Link to='/admin'>Админ</Link>
            </li>
            <li>
              <button type='button' onClick={() => logoutUser()}>
                Гарах
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default connect(null, { logoutUser })(Sidebar);
