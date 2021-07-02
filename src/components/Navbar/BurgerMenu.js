import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
////
function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({
    home: false,
    company: false,
    portfolio: false,
    services: false,
    blog: false,
  });

  ////
  const toggleBurgerBtn = () => {
    const burgerSecretMenu = document.querySelector(".burgerSecretMenu");
    burgerSecretMenu.classList.toggle("active");
    setTimeout(() => {
      setBurgerOpen(!burgerOpen);
    }, 200);
  };
  const openCloseHandler = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("active");
  };
  ////
  return (
    <>
      <div className="burgerHeader px-3">
        <h5>Menu</h5>
        {!burgerOpen ? (
          <MenuIcon onClick={toggleBurgerBtn} />
        ) : (
          <CloseIcon onClick={toggleBurgerBtn} />
        )}
      </div>
      <div className="burgerSecretMenu">
        <div className="sammpleListHolder">
          <ul>
            <li>
              <div
                className="listHeader"
                onClick={(e) => {
                  setIsOpen({ ...isOpen, home: !isOpen.home });
                  openCloseHandler(e);
                }}
              >
                <h6>Home</h6>
                <span>{isOpen.home ? <RemoveIcon /> : <AddIcon />}</span>
              </div>
              <div className="listSecret">
                <ul>
                  <li>
                    <Link to="/home-minimal">Home - Minimal</Link>
                  </li>
                  <li>
                    <Link to="/home-freelancer">Home - Freelancer</Link>
                  </li>
                  <li>
                    <Link to="/home-agency">Home - Agency</Link>
                  </li>
                  <li>
                    <Link to="/home-onepage">Home One Page</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sammpleListHolder">
          <ul>
            <li>
              <div
                className="listHeader"
                onClick={(e) => {
                  setIsOpen({ ...isOpen, company: !isOpen.company });
                  openCloseHandler(e);
                }}
              >
                <h6>Company</h6>
                <span>{isOpen.company ? <RemoveIcon /> : <AddIcon />}</span>
              </div>
              <div className="listSecret">
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/single-team">Single Team</Link>
                  </li>
                  <li>
                    <div
                      className="listHeader"
                      onClick={(e) => {
                        setIsOpen({ ...isOpen, portfolio: !isOpen.portfolio });
                        openCloseHandler(e);
                      }}
                      style={{ padding: "0.75rem 2rem 0.75rem 5rem" }}
                    >
                      Portfolio
                      <span>
                        {isOpen.portfolio ? <RemoveIcon /> : <AddIcon />}
                      </span>
                    </div>
                    <div className="listSecret">
                      <ul>
                        <li>
                          <Link
                            to="/"
                            style={{ padding: "0.75rem 0.75rem 0.75rem 10rem" }}
                          >
                            Portfolio 3 Column
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{ padding: "0.75rem 0.75rem 0.75rem 10rem" }}
                          >
                            Portfolio 4 Column
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{ padding: "0.75rem 0.75rem 0.75rem 10rem" }}
                          >
                            Portfolio Full 3 Column
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            style={{ padding: "0.75rem 0.75rem 0.75rem 10rem" }}
                          >
                            Portfolio Full 4 Column{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sammpleListHolder">
          <ul>
            <li>
              <div
                className="listHeader"
                onClick={(e) => {
                  setIsOpen({ ...isOpen, services: !isOpen.services });
                  openCloseHandler(e);
                }}
              >
                <h6>Services</h6>
                <span>{isOpen.services ? <RemoveIcon /> : <AddIcon />}</span>
              </div>
              <div className="listSecret">
                <ul>
                  <li>
                    <Link to="/">Services 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Services 4 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Services Full 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Services Full 4 Column </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sammpleListHolder">
          <ul>
            <li>
              <div
                className="listHeader"
                onClick={(e) => {
                  setIsOpen({ ...isOpen, blog: !isOpen.blog });
                  openCloseHandler(e);
                }}
              >
                <h6>Blog</h6>
                <span>{isOpen.blog ? <RemoveIcon /> : <AddIcon />}</span>
              </div>
              <div className="listSecret">
                <ul>
                  <li>
                    <Link to="/">Blog 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Blog 4 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Blog Full 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/">Blog Full 4 Column </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sammpleListHolder">
          <div className="listHeader" onClick={toggleBurgerBtn}>
            <h6>Cotact</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
