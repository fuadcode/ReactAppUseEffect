import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet-async";
import "./index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    .filter(
      (product) =>
        selectCategory === "" || product.category === selectCategory
    );

  const deleteProduct = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <div className="container">
        <header className="header">
          <h1 className="header-title">Product List</h1>
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="search-input1"
            type="text"
            placeholder="Search by Product Name"
          />
        </header>

        <nav className="category-nav">
          <ul className="category-list1">
            <li
              onClick={() => setSelectCategory("")}
              className={`category-item ${selectCategory === "" ? "active" : ""}`}
            >
              All
            </li>
            <li
              onClick={() => setSelectCategory("men's clothing")}
              className={`category-item ${selectCategory === "men's clothing" ? "active" : ""}`}
            >
              Men
            </li>
            <li
              onClick={() => setSelectCategory("women's clothing")}
              className={`category-item ${selectCategory === "women's clothing" ? "active" : ""}`}
            >
              Women
            </li>
            <li
              onClick={() => setSelectCategory("jewelery")}
              className={`category-item ${selectCategory === "jewelery" ? "active" : ""}`}
            >
              Jewellery
            </li>
            <li
              onClick={() => setSelectCategory("electronics")}
              className={`category-item ${selectCategory === "electronics" ? "active" : ""}`}
            >
              Electronics
            </li>
          </ul>
        </nav>

        <div className="card-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} className="product-card">
                <Card.Img
                  className="card-img"
                  variant="top"
                  alt={product.title}
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title className="card-title">{product.title}</Card.Title>
                  <Card.Text className="card-description">
                    {product.description.slice(0, 80)}...
                  </Card.Text>
                  <div className="card-footer">
                    <span className="card-price">${product.price}</span>
                    <div className="card-buttons">
                      <Link to={`/product/${product.id}`}>
                        <button className="view-details-button">View Details</button>
                      </Link>
                      <button
                        className="delete-button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
