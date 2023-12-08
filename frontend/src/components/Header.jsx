import React from 'react'

const Header = () => {
     return (
          <>
               <div className="row ">
                    <div className="container-fluid ps-5 pt-5 col-md-12 col-lg-6" id='header-left'>
                         <h1 className='ps-5'>To Succeed you must read</h1>
                         <p className='ps-5'><span><u>Not sure what to read next ?</u></span> <br></br>Find out now by taking Bliss's fun and fast quiz.</p>
                    </div>
                    <div className="container-fluid col-md-12 col-lg-6 p-5 ps-5" id='header-right'>
                         <div className="image_style p-3">
                              <img src='image/book-1.png' className='' id='book-1' alt='book-1' />
                              <img src='image/book-2.png' id='book-2' className='img-fluid' alt='banner-book-1' />
                              <img src='image/book-4.png' id='book-3' className='img-fluid' alt='banner-book-1' />
                              <p className='book-amount'><span>20k+</span> Books</p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Header