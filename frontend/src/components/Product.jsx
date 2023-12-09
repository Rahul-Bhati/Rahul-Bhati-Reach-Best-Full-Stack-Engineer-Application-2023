import React, { useState } from 'react'
import { Data } from '../data'
import ProductCard from './ProductCard'

const Product = () => {
  // const [page, setPage] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [filter, setFiltered] = useState("");

  const handleGenre = (event) => {
    const value = event.target.value;
    let filtered;
    if (year == "") {
      filtered = Data.filter(item => {
        return item.category.includes(value);
      });
    } else {
      filtered = Data.filter(item => {
        return item.category.includes(value) || item.year === year;
      });
    }
    setFiltered(filtered);
  }
  const handleYear = (event) => {
    const value = event.target.value;
    let filtered;
    if (genre == "") {
      filtered = Data.filter(item => {
        return item.year===value ;
      });
    } else {
      filtered = Data.filter(item => {
        return item.category.includes(genre) || item.year === value;
      });
    }
    setFiltered(filtered);
  }

  console.log(genre + "  " + year + " " + filter);
  return (
    <>
      <div className="container-fluid product" style={{ marginTop: "80px", width: "80%" }}>
        <div className="row ms-5" id="filter" style={{ paddingLeft: "15%" }}>
          <div className="select m-2 ms-4">
            <select name="format" id="format" onChange={handleGenre}>
              <option selected disabled>Choose a book genres</option>
              <option value="History">History</option>
              <option value="Action">Action </option>
              <option value="Mystery">Mystery</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Novel">Novel</option>
              <option value="Story">Story</option>
            </select>
          </div>
          {/* <div className="select col-sm-4 m-2 ms-4">
            <select name="format" id="format" onChange={(e) => setPage(e.target.value)}>
              <option selected disabled>no of pages</option>
              <option value="100">100</option>
              <option value="100-200">100-200</option>
              <option value="200-500">200-500</option>
              <option value="500-1000">500-1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div> */}
          <div className="select m-2 ms-4">
            <select name="format" id="format" onChange={handleYear}>
              <option selected disabled>Published year</option>
              <option value="before 2000">before 2000</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>

        <div className="row" id="products">
          {Data.map((item) => (
            // console.log(item)
            (<ProductCard product={item} />)
          ))}
          {Data.filter((item) => {
            return item.category === genre
          })}
        </div>
      </div>
    </>
  )
}

export default Product