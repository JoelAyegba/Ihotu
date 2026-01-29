import React from 'react';
import aboutImage from '../assets/about-new.jpg';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image animate-slide-left">
                        <img
                            src={aboutImage}
                            alt="Artisan crafting beads"
                        />
                    </div>

                    <div className="about-text animate-slide-right">
                        <h2 className="section-title">About IHOTUAURA</h2>
                        <p>
                            Introducing "IHOTUAURA" a brand that specializes in luxury beaded handbags,
                            necklaces, bracelets, and accessories for men and women.
                        </p>
                        <p>
                            Each piece is carefully handcrafted, designed to not only complete your look
                            but to tell a story, reflect your personality, and celebrate your aura.
                        </p>
                        <p>
                            At IHOTUAURA, we believe every bead carries intention, and every creation is
                            made to make you feel confident, radiant, and unique. Whether it’s a handbag
                            that turns heads, a bracelet that starts conversations or a necklace that
                            expresses your style, each piece is made for real people who want to feel
                            seen and celebrated.
                        </p>
                        <p>
                            Step into IHOTUAURA where luxury meets warmth, craftsmanship meets care, and
                            style meets soul.
                        </p>
                        <p className="highlight-text">
                            Wear Art. Wear Luxury. Wear Ihotuaura
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                <span className="feature-icon">✨</span>
                                <div>
                                    <h4>Handmade</h4>
                                    <p>Each piece crafted with care</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">🌍</span>
                                <div>
                                    <h4>Ethically Sourced</h4>
                                    <p>Supporting artisans worldwide</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">💎</span>
                                <div>
                                    <h4>Unique Designs</h4>
                                    <p>No two pieces are exactly alike</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
