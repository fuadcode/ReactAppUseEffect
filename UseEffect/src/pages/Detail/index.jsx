import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CategoryDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products//${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Category not found');
        }
        return res.json();
      })
      .then((data) => {
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <Helmet>
        <title>Category Detail</title>
        <meta name="description" content={`Details for category ${category?.name}`} />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">Category Detail</h1>
      {category ? (
        <div>
          <p className="text-gray-600 mb-4"><strong>Title:</strong> {category.title}</p>
          <p className="text-gray-600 mb-4"><strong>Description:</strong> {category.description}</p>
        </div>
      ) : (
        <p className="text-gray-600">No category found</p>
      )}
      <Link to="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-red font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default CategoryDetail;
