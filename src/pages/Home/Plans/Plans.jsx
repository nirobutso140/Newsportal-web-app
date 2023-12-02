import React from 'react';
import './Plans.css'
const Plans = () => {
    return (
        <>
            <section class="pricing-plans">
                <div class="pricing-card basic">
                    <div class="heading">
                        <h4>BASIC</h4>
                        <p>for small websites or blogs</p>
                    </div>
                    <p class="price">
                        $0
                        <sub>/month</sub>
                    </p>
                    <ul class="features">
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Limited access to</strong> articles
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Ad-supported</strong> content
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Basic</strong> features
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Basic</strong>  customer support
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Offline reading for a limited</strong> number of articles
                        </li>
                    </ul>
                    <button class="cta-btn">SELECT</button>
                </div>
                <div class="pricing-card standard">
                    <div class="heading">
                        <h4>STANDARD</h4>
                        <p>for medium-sized businesses</p>
                    </div>
                    <p class="price">
                        $5
                        <sub>/month</sub>
                    </p>
                    <ul class="features">
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Unlimited access to</strong> all articles
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Ad-free</strong> experience
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Basic customization and</strong> offline reading
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Enhanced customization</strong> options
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Access to</strong> global news sources
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Language translation for</strong> select articles
                        </li>
                    </ul>
                    <button class="cta-btn">SELECT</button>
                </div>
                <div class="pricing-card premium">
                    <div class="heading">
                        <h4>PREMIUM</h4>
                        <p>for small businesses</p>
                    </div>
                    <p class="price">
                        $10
                        <sub>/month</sub>
                    </p>
                    <ul class="features">
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>All features of the</strong> Standard Plan
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Early access to</strong> breaking news
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Exclusive interviews </strong>and articles
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Premium</strong> customer support
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Access to news articles in </strong>audio format
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Advanced search </strong>and filtering options
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <strong>Multi-user licenses </strong>for businesses
                        </li>
                    </ul>
                    <button class="cta-btn">SELECT</button>
                </div>
            </section>
        </>
    );
};

export default Plans;