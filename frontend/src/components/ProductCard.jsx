import React from 'react'

const ProductCard = ({ product }) => {
     return (
          <>
               <div className="card mt-5 m-1" style={{ width: "18rem" }}>
                    <img src={product.imageLink} className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title"><center>{product.title}</center></h5>
                         <p className="card-text"><center>Year : {product.year}</center></p>
                    </div>
                    <div className='total_page'>
                         Page <br />{product.pages}
                    </div>
               </div>
          
          </>
     )
}

export default ProductCard