import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import emailjs from "@emailjs/browser";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ChevronDown,
    ChevronUp,
    Send,
    Building2,
} from 'lucide-react';
import './Contact.css';
import SEO from "../components/SEO";

export const Contact = () => {
        const [isHoursOpen, setIsHoursOpen] = useState(true);
    //     const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // });
    const formRef = useRef(null);
    // State for dynamic time checking
  const [shopStatus, setShopStatus] = useState({
    isOpen: false,
    currentDayIndex: 0, // 0 = Monday, 6 = Sunday
  });

    // Configuration for your business hours (24-hour format)
    const OPEN_HOUR = 10;  // 9 AM
    const CLOSE_HOUR = 18; // 8 PM

    // List of days matching the index order (Mon=0, Sun=6)
    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    // Logic to check time
    useEffect(() => {
        const checkTime = () => {
        const now = new Date();
        const currentHour = now.getHours();
        
        // Javascript getDay() returns 0 for Sunday, 1 for Monday...
        // We need to shift it so 0 is Monday to match our list above.
        // JS: Sun(0), Mon(1), Tue(2)...
        // Map: Mon(0), Tue(1)... Sat(5), Sun(6)
        let dayIndex = now.getDay() - 1; 
        if (dayIndex === -1) dayIndex = 6; // Handle Sunday

        // Check if within hours
        const isOpenNow = currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR;

        setShopStatus({
            isOpen: isOpenNow,
            currentDayIndex: dayIndex
        });
        };

        checkTime(); // Run immediately
        const interval = setInterval(checkTime, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);
    

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        // alert('Thank you! We’ll get back to you soon.');
        // setFormData({ name: '', email: '', subject: '', message: '' });
        emailjs
        .sendForm(
            "service_twr1eb8",
            "template_7y1u0eh",
            formRef.current,
            "dwGnB5JSYjfpW3J0A"
        )
        .then(() => {
            alert("✅ Message sent successfully!");
            formRef.current.reset();
        })
        .catch((error) => {
            alert("❌ Failed to send message");
            console.error(error);
        });
    };

    return (
        <>
            <SEO
                title="Get In Touch With Us - SparkWave Digital Media"
                description=" Get in touch with our Kolkata digital marketing agency near Airport Gate No 1, 700079. Call or email us today for your growth solutions."
            />
        <div className="contact-section-modern">
        {/* Header */}
        <div className="contact-header-modern">
            <h1 className="gradient-text">Get In Touch</h1>
            <p>
            Have a project in mind? Let's talk about bringing your vision to life
            with cutting-edge digital solutions.
            </p>
        </div>

        <div className="contact-grid">
            {/* Left: Contact Info & Map */}
            <div className="info-card">
            <div className="info-header">
                <Building2 size={28} />
                <h2>Contact Information</h2>
            </div>

            <div className="contact-items">
                <div className="contact-item">
                <div className="icon-circle">
                    <MapPin size={20} />
                </div>
                <div>
                    <h4>Visit Us</h4>
                    <p>
                    Near Airport Gate No - 1<br />
                    Kolkata - 700079, India
                    </p>
                </div>
                </div>

                <div className="contact-item">
                <div className="icon-circle">
                    <Phone size={20} />
                </div>
                <div>
                    <h4>Call Us</h4>
                    <p>+91 8794645418</p>
                </div>
                </div>

                <div className="contact-item">
                <div className="icon-circle">
                    <Mail size={20} />
                </div>
                <div>
                    <h4>Email Us</h4>
                    <p>sparkwave.socialmedia@gmail.com</p>
                </div>
                </div>

                {/* Business Hours Accordion */}
                <div className="hours-accordion">
                <button
                    className="accordion-header"
                    onClick={() => setIsHoursOpen(!isHoursOpen)}
                >
                    <div className="flex-items">
                    <div className="icon-circle">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h4>Business Hours</h4>
                        {/* DYNAMIC STATUS TEXT */}
                    <span 
                        className="status-text"
                        style={{ 
                            color: shopStatus.isOpen ? '#34d399' : '#ef4444', 
                            fontWeight: '600',
                            fontSize: '1.5rem'
                        }}
                        >
                        {shopStatus.isOpen ? 'Open Now' : 'Closed Now'} • 10:00 AM - 6:00 PM
                    </span>
                    </div>
                    </div>
                    {isHoursOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <div className={`accordion-content ${isHoursOpen ? 'open' : ''}`}>
                <ul>
                    {daysOfWeek.map((day, index) => (
                        <li 
                        key={day} 
                        // Check if this row index matches the calculated current day
                        className={index === shopStatus.currentDayIndex ? 'today' : ''}
                        >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {day}
                            {/* Add a small dot indicator for today */}
                            {index === shopStatus.currentDayIndex && (
                            <span style={{ width: '6px', height: '6px', background: '#60a5fa', borderRadius: '50%' }}></span>
                            )}
                        </span>
                        <span className="time">10:00 AM - 6:00 PM</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            {/* Map */}
            <div className="map-wrapper">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.123456789!2d88.4287636!3d22.6444337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f17c32d4341%3A0xd3d579455a7bad06!2sSparkWave%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SparkWave Solutions Location"
                ></iframe>

            </div>
            </div>

            {/* Right: Form */}
            <div className="form-card">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} ref={formRef} className="modern-form">
                <div className="input-group">
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                />
                </div>

                <div className="input-group">
                <label>Email Address</label>
                <input
                    // type="email"
                    // name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    // placeholder="you@example.com"
                    // required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                />
                </div>

                <div className="input-group">
                <label>Subject</label>
                <input
                    // type="text"
                    // name="subject"
                    // value={formData.subject}
                    // onChange={handleChange}
                    // placeholder="e.g. Digital Markeeting Inquiry"
                    // required
                    type="text"
                    name="subject"
                    placeholder="e.g. Digital Marketing Inquiry"
                    required
                />
                </div>

                <div className="input-group">
                <label>Your Message</label>
                <textarea
                    // name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    // rows="6"
                    // placeholder="Tell us about your project, goals, or how we can help..."
                    // required
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project, goals, or how we can help..."
                    required
                ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={20} />
                </button>
            </form>
            </div>
        </div>
        </div>
        </>
    );
    };
