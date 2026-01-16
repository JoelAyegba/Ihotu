import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        text: "Absolutely beautiful! The craftsmanship is incredible and I get compliments every time I wear my bracelet.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        name: "Emily Chen",
        text: "I love how unique each piece is. You can really feel the care that goes into making them.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "Maria Garcia",
        text: "The ordering process through WhatsApp was so easy! Beautiful jewelry and excellent customer service.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=9"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section">
            <div className="container">
                <h2 className="section-title text-center">What Our Customers Say</h2>
                <p className="section-subtitle text-center">
                    Join hundreds of happy customers who love our handcrafted jewelry
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card animate-scale animate-delay-${index + 1}`}
                        >
                            <div className="stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <span className="author-name">{testimonial.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
