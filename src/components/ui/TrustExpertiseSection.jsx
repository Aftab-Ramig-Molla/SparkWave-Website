import "./TrustExpertiseSection.css";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo1 from "../../assets/deliverlogo.svg";
import logo2 from "../../assets/experience_logo.svg";
import logo3 from "../../assets/happyCustomerlogo.svg";
import logo4 from "../../assets/teammemberlogo.svg";

import client1 from "../../assets/clients/1.png";
import client2 from "../../assets/clients/2.png";
import client3 from "../../assets/clients/3.png";
import client4 from "../../assets/clients/4.png";
import client5 from "../../assets/clients/5.png";
import client6 from "../../assets/clients/6.png";
import client7 from "../../assets/clients/7.png";
import client8 from "../../assets/clients/8.png";
import client9 from "../../assets/clients/9.jpg";
import client10 from "../../assets/clients/10.jpg";
import client11 from "../../assets/clients/11.jpg";
import client12 from "../../assets/clients/12.png";
import client13 from "../../assets/clients/13.JPG";
import client14 from "../../assets/clients/14.jpg";
import client15 from "../../assets/clients/15.jpg";
import client16 from "../../assets/clients/16.jpg";
import client17 from "../../assets/clients/17.jpg";
import client18 from "../../assets/clients/18.jpg";
import client19 from "../../assets/clients/19.jpg";
import client20 from "../../assets/clients/20.png";
import client21 from "../../assets/clients/21.png";
import client22 from "../../assets/clients/22.png";
import client24 from "../../assets/clients/24.png";
import client25 from "../../assets/clients/25.png";
import client26 from "../../assets/clients/26.png";
import client27 from "../../assets/clients/27.png";
import client28 from "../../assets/clients/28.png";
import client29 from "../../assets/clients/29.png";
import client30 from "../../assets/clients/30.png";
import client31 from "../../assets/clients/31.JPG";
import client32 from "../../assets/clients/32.jpg";
import client33 from "../../assets/clients/33.jpg";
import client34 from "../../assets/clients/34.png";



export const formatFollowers = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
};

export const TrustExpertiseSection = () => {

        const countersRef = useRef([]);

    useEffect(() => {
        const counters = countersRef.current;
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");
                let count = 0;
                const increment = target / 100; // smoothness

                const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
                };
                updateCount();
                counter.classList.add("visible");
                observer.unobserve(counter);
            }
            });
        },
        { threshold: 0.5 }
        );

        counters.forEach((counter) => observer.observe(counter));
    }, []);

const clients = [
    { name: "Yamini Singh", img: client34, followers: 5000000 },
    { name: "SHILPI RAJ", img: client10, followers: 2000000 },
    { name: "SHILPI SINGHAL", img: client32, followers: 600000 },
    { name: "JETSHEN DOHNA LAMA", img: client3, followers: 700000 },
    { name: "RANJIT SARKAR", img: client5, followers: 500000 },
    { name: "MAHESH RAO", img: client4, followers: 300000 },
    { name: "INCREASE FASHION", img: client30, followers: 160000 },
    { name: "INDRANI DUTTA", img: client18, followers: 130000 },
    { name: "HOCUS FOCUS", img: client13, followers: 100000 },
    { name: "TRIJOY DEV", img: client14, followers: 50000 },
    { name: "TAROT MANSHA", img: client6, followers: 40000 },
    { name: "DR. NIKITA SARASWAT", img: client31, followers: 41000 },
    { name: "SOMDATTA BANERJEE", img: client15, followers: 40000 },
    { name: "PEYUSH BHATIA", img: client16, followers: 35000 },
    { name: "ASTRO GAYATRI", img: client2, followers: 30000 },
    { name: "GROWIN WITHIN", img: client19, followers: 30000 },
    { name: "DR. BHUPASH SINGHAL", img: client33, followers: 20000 },
    { name: "ASTRO SUKHANSHU", img: client1, followers: 20000 },
    { name: "KANIKA DALMIA", img: client7, followers: 16000 },
    { name: "MONALISA", img: client12, followers: 15000 },
    { name: "SUNITA SHARMA", img: client11, followers: 10000 },
    { name: "PDVB SHOP", img: client26, followers: 10000 },
    { name: "JOY SHAASWAT", img: client9, followers: 10000 },
    { name: "SONNA LUX BROWS", img: client20, followers: 5000 },
    { name: "RITU SARASWAT", img: client25, followers: 5000 },
    { name: "SINDHI HIRA JEWELS", img: client8, followers: 2000 },
    { name: "KARAN EM PROPERTIES", img: client21, followers: 2000 },
    { name: "U.V Fashion Hub", img: client22, followers: 2000 },
    { name: "THE ALPHA FITNESS FO", img: client28, followers: 3000 },
    { name: "SKYWAVES IMPORT CERTIFICATION", img: client27, followers: 1000 },
    { name: "TIMPLY SINGH", img: client17,followers: 1000  },
    { name: "LSONS LED", img: client24, followers: 1000 },
    { name: "ALPHA SUPPLIMENTS STORE", img: client29, followers: 1000  },
];

    return <section className="trustexpertisesection">
            <div className="container trustexpertwrapper">
                <div className="trustexpertiseleft">
                    <div className="trustexpertisepara">
                        <h1>Digital Excellence, Trusted Expertise</h1>
                        <p>Empowering businesses with proven marketing success.</p>
                    </div>
                    <div className="trustexpertisenumbers">
                        {[
                        { img: logo3, num: 100, text: "Happy Clients", suffix: "+" },
                        { img: logo4, num: 10, text: "Team Member", suffix: "+" },
                        { img: logo2, num: 5, text: "Years Experience", suffix: "+" },
                        { img: logo1, num: 95, text: "Deliver Result", suffix: "%" },
                        ].map((item, i) => (
                        <div className="trustexpertiselogo fade-up" key={i}>
                            <div className="trustexpertiseicon">
                                <img src={item.img} alt={item.text} />
                            </div>
                            <div className="trustexpertisenobold">
                                <h1>
                                    <span
                                    className="count"
                                    ref={(el) => (countersRef.current[i] = el)}
                                    data-target={item.num}
                                    >
                                    0
                                    </span>
                                    {item.suffix}
                                </h1>
                                <p>{item.text}</p>
                            </div>
                        </div>
                        ))}
                </div>
                </div>
                <div className="trustexpertiseright">
                    <h2>Our Clients</h2>
                    <div className="partner-scroll">
                        {clients.concat(clients).map((client, i) => (
                            <div key={`${client.name}-${i}`} className="partner-logo">
                            <div className="partner-img">
                                <img src={client.img} alt={client.name} />
                            </div>
                            <div className="partner-info">
                                <h3 className="partner-name">{client.name}</h3>
                                <div className="partner-followers">
                                <FaFacebook style={{ color: '#1877F2' }}/><FaYoutube style={{ color: '#FF0000' }}/><FaInstagram /><span className="highlight">{formatFollowers(client.followers)}</span>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
    </section>
}
