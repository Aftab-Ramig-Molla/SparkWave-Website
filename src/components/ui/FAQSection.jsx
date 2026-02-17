    import React, { useState,  useRef} from "react";
    import "./FAQSection.css";
    import emailjs from "@emailjs/browser";

    export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    //const [formsData, setFormsData] = useState()

    const formRef = useRef(null);
        //console.log(formsData); //This data sent to backend
        
    const faqs = [
        {
        question: " What is the minimum budget to start digital marketing services?",
        answer:
            "Depending on your goals, platforms and extent of services, the minimum budget needed in order to initiate digital marketing services usually starts between 10,000 and 20,000 per month. Higher budgeting will allow faster development, paid promotion, and more advanced strategies.",
        },
        {
        question: "How can I achieve organic social media growth?",
        answer:
            "Organic social media growth can be achieved with quality content creation, keywords optimisation and maintaining consistency in regular social media posting. In organic strategy, it is important to focus on the real questions of audiences. It will include keyword research, profile and captions optimization, enhance SEO, develop engaging posts and implement clear call-to actions.",
        },
        {
        question: "How much should I cost to build a website?",
        answer: "The cost of website development varies based on what the individual intends to achieve, what features are required, design requirements and functionality requirements. The level of customization, integration needs, content amount and constant maintenance are some of the variables that have a bearing on the overall investment. The most reasonable solution would be to clearly state what one wants to accomplish and choose a solution that would be consistent with the brand and long-term growth perspective.",
        },
        {
        question: " Can I grow my business through digital marketing?",
        answer:
            "In fact, online marketing can make a significant contribution towards your business development. It helps you to connect the target audience online, boosts brand awareness, creates quality leads and converts shoppers at a low cost. Under the right approach, digital marketing will provide quantifiable results, better ROI, and achieve expansion growth to enterprises of any scale. ",
        },
        {
        question: " Google ads and facebook ads are the best way to promote business?",
        answer: 
        [
            "It is true that Google Ads and Facebook Ads are some of the best ways to promote a business, but they should use them properly.",
            "● Google Ads will be most effective when users are in the process of searching your product or service, thus being high intention and enabling quick conversions. ", 
            "● Instagram and Facebook Ads should be used to promote brand mass awareness, target particular audiences, and trigger engagement and lead generation. ",
            "The best outcomes occur when using both platforms simultaneously, Google Ads to target existing demand and Facebook Ads to generate and develop demand. They can provide strong returns on investment and growth in scale, along with a specific strategy and high-performing landing pages."
        ]
        },
        {
        question: "How can I start digital marketing services with Sparkwave Solutions? ",
        answer:
            [
                "The digital marketing services offered by SparkWave Solutions can be initiated in a couple of easy steps, including: ",
                "● Get in touch with the team of VoxMediaSolutions and talk about your business objectives and needs.",
                "● Choose the right services (SEO, social media marketing, Google/Facebook ads, web design, etc.), depending on your goals.",
                "● Determine a targeted business plan and budget.",
                "● Initiate campaigns and track performance, including frequent reports and optimisation towards better performance.",
                "VoxMediaSolutions is a strategy-first, results-only company that enables successful business expansion in the digital market."
            ]
        },
        {
        question: "How long does it take to see results from digital marketing? ",
        answer: "The results usually start after 3 to 6 months, depending on the strategy, competition and the platforms used. Compared to SEO and organic social media, paid advertising can be used to achieve faster results and long-term growth. "
        },
        {
        question: " Is influencer marketing effective for small businesses?",
        answer: "Yes, Small businesses can use the highly efficient influencer marketing technique, especially when working with micro-influencers. It makes it possible to build brand awareness, create trust, and make conversions at a lower price than a conventional advertisement."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // const handleFormSubmit = (formData) => {
    //     const formInputData = Object.fromEntries(formData.entries());
    //     //setFormsData(formInputData);
    const handleSubmit = (e) => {
        e.preventDefault();
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
    }

    return (
        <div className="faq-container">
        {/* Left Section */}
        <div className="faq-left">
            <div className="section-header">
            <h3 className="section-title blue-text">FAQs</h3>
            <div className="section-dash"></div>
            </div>
            <h2 className="faq-heading">Freequently Asked Question</h2>

            <div className="faq-list">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-wrapper">
                <div
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                        {activeIndex === index ? "−" : "+"}
                    </span>
                    </div>
                </div>
                {activeIndex === index && (
                    <div className="faq-answer-box">
                    {/* <p className="faq-answer">{faq.answer}</p> */}
                    {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, i) => (
                        <p key={i} className="faq-answer">
                        {line}
                        </p>
                    ))
                    ) : (
                    <p className="faq-answer">{faq.answer}</p>
                    )}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>

        {/* Right Section */}
        <div className="faq-right">
            <div className="section-header">
            <h3 className="section-title blue-text">Get In Touch</h3>
            <div className="section-dash"></div>
            </div>
            <h2 className="faq-heading">Make An Free IT Consultant</h2>

            {/* <form 
                action={handleFormSubmit}
                ref={formRef}
                className="contact-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    handleFormSubmit(formData);
                    e.target.reset();
                }} */}
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                
            <div className="form-row">
                <input type="text" placeholder="Enter Your Name*" autoComplete="false" name="name" required />
                <input type="email" placeholder="Enter Your Mail*" autoComplete="false" name="email" required />
            </div>
            <div className="form-row">
                <input type="text" placeholder="Your Phone Number" autoComplete="false" name="number" />
                <select name="service">
                    <option value="">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                </select>
            </div>
            <textarea placeholder="Your Message*" rows="4" autoComplete="false" required></textarea>
            <button type="submit" className="submit-btn">
                Submit Now <span>+</span>
            </button>
            </form>
        </div>
        </div>
    );
    };




// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./FAQSection.css";

// export const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const formRef = useRef();

//   const faqs = [
//     {
//       question: "What is the minimum budget to start digital marketing services?",
//       answer:
//         "Our purpose is to build your business with a low budget, spend money according to your business.",
//     },
//     {
//       question: "How much should I cost to build a website?",
//       answer: "It depends on your project scope, design, and features you want.",
//     },
//     {
//       question: "Can I grow my business through digital marketing?",
//       answer:
//         "Yes, digital marketing helps in reaching targeted customers effectively.",
//     },
//     {
//       question: "Google ads and facebook ads is best way to promote business?",
//       answer:
//         "Both platforms are effective depending on your audience and marketing goals.",
//     },
//     {
//       question: "How I can start digital marketing services with voxmediasolutions?",
//       answer:
//         "You can start by contacting us through the form provided and we’ll reach out to guide you.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_twr1eb8",
//         "template_7y1u0eh",
//         formRef.current,
//         "dwGnB5JSYjfpW3J0A"
//       )
//       .then(() => {
//         alert("✅ Message sent successfully!");
//         formRef.current.reset();
//       })
//       .catch((error) => {
//         alert("❌ Failed to send message");
//         console.error(error);
//       });
//   };

//   return (
//     <div className="faq-container">
//       {/* LEFT */}
//       <div className="faq-left">
//         <h2 className="faq-heading">Frequently Asked Questions</h2>

//         {faqs.map((faq, index) => (
//           <div key={index} className="faq-wrapper">
//             <div
//               className={`faq-item ${activeIndex === index ? "active" : ""}`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <span>{faq.question}</span>
//               <span>{activeIndex === index ? "−" : "+"}</span>
//             </div>
//             {activeIndex === index && (
//               <p className="faq-answer">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* RIGHT */}
//       <div className="faq-right">
//         <h2 className="faq-heading">Make A Free IT Consultant</h2>

//         <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <input name="name" type="text" placeholder="Your Name*" required />
//             <input name="email" type="email" placeholder="Your Email*" required />
//           </div>

//           <div className="form-row">
//             <input name="number" type="text" placeholder="Phone Number" />
//             <select name="service">
//               <option value="">Select Service</option>
//               <option value="Web Development">Web Development</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//               <option value="Graphic Design">Graphic Design</option>
//             </select>
//           </div>

//           <textarea
//             name="message"
//             placeholder="Your Message*"
//             rows="4"
//             required
//           ></textarea>

//           <button type="submit" className="submit-btn">
//             Submit Now <span>+</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
