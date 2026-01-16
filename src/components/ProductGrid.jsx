import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { categories } from '../data/products';
import './ProductGrid.css';

const ProductGrid = ({ products, showFilters = true }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="product-grid-container">
            {showFilters && (
                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            <div className="product-grid">
                {filteredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className={`animate-fade-in animate-delay-${Math.min(index % 4 + 1, 4)}`}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="no-products">
                    <p>No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
