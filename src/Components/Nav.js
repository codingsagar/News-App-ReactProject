import React, { useState } from "react";
import logo from "../Images/news_logo.png";
import info_logo from "../Images/info_logo.png";
import { NavLink } from "react-router-dom";
import Menu from "../Images/menu.png";
import CancelImg from "../Images/cancel.png";

const Nav = ({ setCountry, country }) => {
  const [ismenuOpen, setmenu] = useState(false);

  const handleMenu = () => {
    let ul = document.querySelector("ul");
    let img = document.querySelector(".menuimg");
    if (ismenuOpen === false) {
      ul.style.left = "0";
      setmenu(true);
    } else {
      ul.style.left = "-999px";
      setmenu(false);
    }
  };

  return (
    <>
      <header>
        <div className="menu" onClick={() => handleMenu()}>
          {!ismenuOpen && <img src={Menu} alt=""  className="menuimg"/>}
          {ismenuOpen && <img src={CancelImg} alt=""  className="menuimg"/>}
        </div>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
            <NavLink to="/" style={{textDecoration:"none"}}>
            <h2>NEWSAPP</h2>
            </NavLink>
          </div>
          <div className="navitems">
            <ul onClick={() => handleMenu()}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  General
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/health"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Business
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/entertainment"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/science"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sports"
                  className={({ isActive }) =>
                    isActive ? "activeClassName" : "navlink"
                  }
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <select
                  name=""
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option value="in">IN</option>
                  <option value="us">US</option>
                  <option value="au">AU</option>
                  <option value="ru">RU</option>
                  <option value="gb">UK</option>
                  <option value="fr">FR</option>
                </select>
              </li>
              <NavLink to="about">
                <li style={{paddingTop:"5px"}}>
              <img src={info_logo} alt="" />
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
