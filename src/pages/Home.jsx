import React, { useMemo } from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import About from '../components/About';

import FAQ from '../components/FAQ';
import products from '../data/products';

const Home = () => {
    // Get featured products for homepage and randomize order
    const featuredProducts = useMemo(() => {
        const filtered = products.filter(product => product.featured);
        // Fisher-Yates shuffle
        for (let i = filtered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
        return filtered;
    }, []);

    return (
        <div className="home-page">
            <Hero />

            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Featured Collection</h2>
                    <p className="section-subtitle text-center">
                        Discover our most loved handcrafted pieces
                    </p>
                    <ProductGrid products={featuredProducts} showFilters={false} />

                    <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
                        <a href="/shop" className="btn btn-primary btn-lg">
                            View All Products
                        </a>
                    </div>
                </div>
            </section>

            <About />

            <FAQ />
        </div>
    );
};

export default Home;
