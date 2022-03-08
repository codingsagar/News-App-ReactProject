import React, { useState } from "react";
import logo from "../Images/news_logo.png";
import info_logo from "../Images/info_logo.png";
import { NavLink } from "react-router-dom";

const Nav = ({ setCountry, country }) => {
  const [menu, setmenu] = useState(false);

  const handleMenu = () => {
    let ul = document.querySelector("ul");
    if (menu === false) {
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
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
            <h2>NEWSAPP</h2>
          </div>
          <div className="navitems">
            <ul onClick={()=>handleMenu()}>
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
              <img src={info_logo} alt="" />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
