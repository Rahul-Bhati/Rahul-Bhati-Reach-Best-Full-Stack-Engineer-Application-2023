import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const NavBar = () => {
     return (
          <>
               {/* <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid ms-5">
                         <a className="navbar-brand d-flex justify-content-center"> */}
               {/* <img src="https://reachbest.co/assets/official.8f7b2ca9.webp" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/> */}
               {/* <span className='ms-5 fw-bolder fs-4' style={{fontFamily:"monospace"}}>Bliss.</span>
                         </a>

                         <ul style={{listStyle:"none"}}>
                              <li >About Us</li>
                              <li >Books</li>
                              <li >Blog</li>
                         </ul>
                    </div>
               </nav> */}
               <nav className="navbar navbar-expand-lg" >
                    <div className="container-fluid ms-5 me-5" >
                         <span className="navbar-brand ms-5 fw-bolder fs-2" style={{ fontFamily: "monospace" }}>Bliss.</span>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontFamily: "monospace" }}>
                              <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5 fw-bold">
                                   <li className="nav-item ms-5">
                                        <span className="nav-link">About Us</span>
                                   </li>
                                   <li className="nav-item ms-5">
                                        <span className="nav-link">Books</span>
                                   </li>
                                   <li className="nav-item ms-5">
                                        <span className="nav-link">Blog</span>
                                   </li>
                              </ul>
                              <form className="d-flex ms-5 me-5" role="search">
                                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                   <button className="btn btn-outline-dark fw-bolder fs-6 " type="submit" style={{ fontFamily: "monospace" }}>Search</button>
                              </form>
                         </div>
                    </div>
               </nav>
               <div className="container-fluid" id='nav-border'>
                    <div className="container" style={{ borderBottom: "1px solid rgb(173, 168, 168)" }}>
                    </div>
               </div>
          </>
     );
};

export default NavBar;
