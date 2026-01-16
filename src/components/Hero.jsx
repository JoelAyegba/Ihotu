import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-beads.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">
                        Handcrafted Beads,
                        <span className="hero-title-accent"> Timeless Beauty</span>
                    </h1>
                    <p className="hero-description animate-fade-in animate-delay-1">
                        Each piece is lovingly crafted by hand, combining traditional techniques
                        with contemporary design. Discover unique bead jewelry that tells your story.
                    </p>
                    <div className="hero-cta animate-fade-in animate-delay-2">
                        <Link to="/shop" className="btn btn-primary btn-lg">
                            Shop Collection
                        </Link>
                        <a href="#about" className="btn btn-outline btn-lg">
                            Our Story
                        </a>
                    </div>
                </div>
                <div className="hero-image animate-fade-in animate-delay-3">
                    <img
                        src={heroImage}
                        alt="Handcrafted bead jewelry"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
