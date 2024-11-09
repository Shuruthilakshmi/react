import React from 'react';

function BeachResort() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
            {/* Header */}
            <header style={{ textAlign: 'center', backgroundColor: '#e3f2fd', padding: '2em' }}>
                <h1>NSV Beach Resort</h1>
                <p>Your dream vacation awaits!</p>
            </header>

            {/* Navigation Bar */}
            <nav style={{ backgroundColor: '#1976d2', padding: '1em' }}>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '2em' }}>
                    <li><a href="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
                    <li><a href="#services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Services</a></li>
                    <li><a href="#gallery" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Gallery</a></li>
                    <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
                </ul>
            </nav>

            {/* Banner */}
            <section id="home" style={{
                textAlign: 'center',
                backgroundImage: 'url("./room-2.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                padding: '4em 1em',
                fontSize: '1.5em'
            }}>
                <div>Welcome to NSV</div>
            </section>

            {/* Services Section */}
            <section id="services" style={{ padding: '2em 1em', textAlign: 'center' }}>
                <h2>Our Services</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <h3>Luxury Suites</h3>
                        <p>Enjoy beachfront views from our luxurious suites.</p>
                    </div>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <h3>Spa & Wellness</h3>
                        <p>Relax and rejuvenate with our world-class spa facilities.</p>
                    </div>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <h3>Adventure Activities</h3>
                        <p>Dive into adventure with our snorkeling, surfing, and more.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" style={{ padding: '2em 1em', textAlign: 'center' }}>
                <h2>Gallery</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <img src="./room-3.jpeg" alt="Beach" style={{ width: '100%', borderRadius: '5px' }} />
                        <p>Beach view from our Luxury Suite, perfect for sunset watching.</p>
                    </div>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <img src="./room-1.jpeg" alt="Spa" style={{ width: '100%', borderRadius: '5px' }} />
                        <p>Indulge in our spa facilities with breathtaking views.</p>
                    </div>
                    <div style={{
                        flex: '1 1 200px',
                        maxWidth: '300px',
                        padding: '1em',
                        backgroundColor: '#f0f4c3',
                        borderRadius: '8px',
                        margin: '1em'
                    }}>
                        <img src="./room-2.jpeg" alt="Suite" style={{ width: '100%', borderRadius: '5px' }} />
                        <p>Our luxurious suite, equipped with modern amenities.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '2em 1em', textAlign: 'center' }}>
                <h2>Contact Us</h2>
                <p>Email: info@nsvbeachresort.com</p>
                <p>Phone: +1 (555) 123-4567</p>
            </section>

            {/* Footer */}
            <footer style={{ textAlign: 'center', padding: '1em', backgroundColor: '#c5cae9', fontSize: '0.9em' }}>
                <p>&copy; 2024 NSV Beach Resort. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default BeachResort;
