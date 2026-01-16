import React from 'react';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop-page">
            <section className="shop-hero">
                <div className="container">
                    <h1 className="shop-title animate-fade-in">Our Collection</h1>
                    <p className="shop-description animate-fade-in animate-delay-1">
                        Browse our complete range of handcrafted bead jewelry.
                        Each piece is unique and made with love.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <ProductGrid products={products} showFilters={true} />
                </div>
            </section>
        </div>
    );
};

export default Shop;
