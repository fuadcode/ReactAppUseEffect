import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import AddCategory from "../AddCategory";
import './index.css';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCategories(
        categories.filter(category =>
          category.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, categories]);

  return (
    <div className="category-page">
      <Helmet>
        <title>Category Management</title>
      </Helmet>

      <h1 className="category-page-title">Category Management</h1>

      <AddCategory setCategories={setCategories} />

      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by category name..."
          className="search-input"
        />
      </div>

      {loading && <Loading />}

      <ul className="category-list">
        {filteredCategories.map((category) => (
          <li key={category.id} className="category-item">
            <div className="category-details">
              <span className="category-name">{category.title}</span><br />
              <span className="category-description">
                {category.description}
              </span>
            </div>
            <div className="category-actions">
              <MdDelete
                className="delete-icon"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this category?")) {
                    fetch(`https://fakestoreapi.com/products/${category.id}`, {
                      method: "DELETE",
                    }).then(() => {
                      setCategories(categories.filter((ctg) => ctg.id !== category.id));
                    });
                  }
                }}
              />
              <Link to={`/detail/${category.id}`}>
                <Button variant="warning" className="detail-button">
                  Detail
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
