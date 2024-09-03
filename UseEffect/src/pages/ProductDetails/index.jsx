import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.css";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Product not found');
                }
                return res.json();
            })
            .then((data) => {
                setProduct(data);
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
        <div className="product-detail-container">
            <Helmet>
                <title>Product Detail</title>
                <meta name="description" content={`Details for product ${product?.title}`} />
            </Helmet>
            <h1 className="product-detail-title">{product?.title}</h1>
            {product && (
                <>
                    <div className="product-detail-image-container">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-detail-image"
                        />
                    </div>
                    <p className="product-detail-description">{product.description}</p>
                    <p className="product-detail-price">${product.price}</p>
                </>
            )}
            <Link to="/products" className="go-back-button">
                Go Back
            </Link>
        </div>
    );
};

export default ProductDetail;
