import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./ServicePageLayout.module.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function ServicePageLayout({
  title,
  image,
  intro,
  strategies,
}) {
  const location = useLocation();

  const menu = [
    { name: "SOCIAL MEDIA HANDLING (ORGANIC)", path: "/services/social-media-handling" },
    { name: "ADS / PAID MARKETING", path: "/services/ads-paid-marketing" },
    { name: "GRAPHICS CREATION", path: "/services/graphics-creation" },
    { name: "VIDEO EDITING & MARKETING  ", path: "/services/video-marketing" },
    { name: "LEADS GENARATION", path: "/services/leads-genaration" },
    { name: "WEBSITE DEVELOPMENT", path: "/services/web-development" },
    { name: "PHOTOGRAPHY/VIDEOGRAPHY", path: "/services/photography-vediography" },
    { name: "SEO & CONTENT WRITTING", path: "/services/seo-content-writting" },
    { name: "ANALYTICS & DATA INSIGHTS", path: "/services/analytics-and-data" },
    { name: "REPORTING", path: "/services/reporting" },
  ];

  return (
    <div className={styles["wd-page-wrapper"]}>
      {/* HERO */}
      <div className={styles["wd-header-section"]}>
        <div className={styles["wd-header-overlay"]}></div>
        <div className={`${styles["wd-container"]} ${styles["wd-header-content"]}`}>
          <h1 className={styles["wd-title-large"]}>{title}</h1>
          <p className={styles["wd-breadcrumb"]}>
            <NavLink to="/" className={styles["wd-home"]}>
              Home
            </NavLink>
            <span className={styles["wd-separator"]}>/</span>
            <span className={styles["wd-active-link"]}>{title}</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles["wd-main-section"]}>
        <div className={styles["wd-container"]}>
          <div className={styles["wd-media-services-grid"]}>
            <div className={styles["wd-image-placeholder"]}>
              <img src={image} alt={title} />
            </div>

            {/* Dynamic Menu */}
            <div className={styles["wd-services-menu"]}>
              <h3 className={styles["wd-services-title"]}>ALL SERVICES</h3>
              <ul className={styles["wd-services-list"]}>
                {menu.map((service) => {
                  const isActive = location.pathname === service.path;
                  return (
                    <li
                      key={service.name}
                      className={`${styles["wd-service-item"]} ${
                        isActive ? styles["wd-service-active"] : ""
                      }`}
                    >
                      <NavLink to={service.path} className={styles["wd-service-link"]}>
                        <span>{service.name}</span>
                        {isActive ? (
                          <span className={styles["wd-checkmark"]}>✓</span>
                        ) : (
                          <span className={styles["wd-arrow"]}>›</span>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Introduction + Strategy Sections */}
          <div className={styles["wd-content-grid"]}>
            <div className={styles["wd-main-content"]}>
              {/* 1. Intro Block */}
              <div className={styles["wd-text-block"]}>
                <h2 className={styles["wd-section-title"]}>{title}</h2>
                <p className={styles["wd-paragraph"]}>{intro}</p>
              </div>

              {/* 2. Dynamic Strategy Blocks */}
              {strategies &&
                strategies.map((section, index) => (
                  <div key={index} className={styles["wd-strategy-block"]}>
                    
                    {/* CHECK IF IMAGE EXISTS */}
                    {section.image ? (
                      /* WITH IMAGE LAYOUT */
                      <div className={styles["wd-strategy-row"]}>
                        <div className={styles["wd-strategy-img-col"]}>
                          <img src={section.image} alt={section.heading} />
                        </div>
                        <div className={styles["wd-strategy-text-col"]}>
                          <h2 className={styles["wd-subtitle"]}>{section.heading}</h2>
                          
                          {/* Para 1 (Before List) */}
                          {section.para1 && (
                            <p className={styles["wd-paragraph"]}>{section.para1}</p>
                          )}

                          {/* The List */}
                          <ul className={styles["wd-strategy-list"]}>
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <strong className={styles["wd-highlight-text2"]}>
                                  {item.label}:
                                </strong>{" "}
                                {item.desc}
                              </li>
                            ))}
                          </ul>

                          {/* Para 2 (After List) */}
                          {section.para2 && (
                            <p className={styles["wd-paragraph"]}>{section.para2}</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* NO IMAGE LAYOUT (FULL WIDTH) */
                      <>
                        <h2 className={styles["wd-subtitle"]}>{section.heading}</h2>
                        
                        {/* Para 1 */}
                        {section.para1 && (
                            <p className={styles["wd-paragraph"]}>{section.para1}</p>
                        )}

                        <ul className={styles["wd-strategy-list"]}>
                          {section.items.map((item, i) => (
                            <li key={i}>
                              <strong className={styles["wd-highlight-text2"]}>
                                {item.label}:
                              </strong>{" "}
                              {item.desc}
                            </li>
                          ))}
                        </ul>

                        {/* Para 2 */}
                        {section.para2 && (
                            <p className={styles["wd-paragraph"]}>{section.para2}</p>
                        )}
                      </>
                    )}
                  </div>
                ))}
            </div>

            {/* SIDEBAR */}
            <aside className={styles["wd-sidebar"]}>
              <div className={styles["wd-contact-widget"]}>
                <h3 className={styles["wd-widget-title"]}>NEED SPARKWAVE HELP?</h3>
                <p className={styles["wd-widget-text"]}>
                  Prefer speaking with a human to filling out a form?
                </p>
                <p className={styles["wd-phone-number"]}>
                  <FaPhoneAlt /> +91 8794645418
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className={styles["wd-banner-section"]}>
        <div className={`${styles["wd-container"]} ${styles["wd-banner-content"]}`}>
          <h2 className={styles["wd-banner-headline"]}>
            Your audience is waiting—let’s connect and grow
          </h2>
          <button className={styles["wd-contact-button"]}>
            <NavLink
              to="/contact"
              style={{ color: "white" }}
              className={styles["wd-contact-link"]}
            >
              CONTACT WITH US
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}