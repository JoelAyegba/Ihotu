import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        id: 1,
        question: "How do I place an order?",
        answer: "Simply browse our collection, select the product you love, choose your quantity, and click 'Order via WhatsApp'. This will open a chat with us where you can confirm your order and discuss any customizations."
    },
    {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including bank transfer, mobile money, and cash on delivery (depending on your location). We'll discuss payment options when you contact us via WhatsApp."
    },
    {
        id: 3,
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-7 business days for domestic orders and 10-14 days for international orders. We'll provide tracking information once your order ships."
    },
    {
        id: 4,
        question: "Can I customize a piece?",
        answer: "Absolutely! We love creating custom pieces. Contact us via WhatsApp with your ideas, and we'll work together to create something uniquely yours."
    },
    {
        id: 5,
        question: "What is your return policy?",
        answer: "We want you to love your jewelry! If you're not completely satisfied, you can return unworn items within 14 days for a full refund or exchange."
    },
    {
        id: 6,
        question: "How do I care for my bead jewelry?",
        answer: "Store your jewelry in a dry place away from direct sunlight. Clean gently with a soft cloth. Avoid contact with water, perfumes, and harsh chemicals to maintain the beads' natural beauty."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <h2 className="section-title text-center">Frequently Asked Questions</h2>
                <p className="section-subtitle text-center">
                    Everything you need to know about our handmade bead jewelry
                </p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openId === faq.id ? 'active' : ''} animate-fade-in animate-delay-${Math.min(index % 4 + 1, 4)}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openId === faq.id ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
