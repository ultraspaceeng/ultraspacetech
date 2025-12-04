'use client';

import { useState } from 'react';
import styles from './page.module.css';
import {
    FaBars,
    FaTimes,
    FaCode,
    FaLaptopCode,
    FaCogs,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaArrowRight
} from 'react-icons/fa';

// --- CONTENT VARIABLES ---

const HEADER_CONTENT = {
    logo: 'UltraSpace',
    logoHighlight: 'Tech',
    navLinks: [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
    ]
};

const HERO_CONTENT = {
    title: 'Innovating the Future of',
    titleHighlight: 'Innovative Solutions',
    subtitle: 'We craft cutting-edge software, robust engineering systems, and transformative technologies to propel your business into the next era.',
    cta: 'Get Started'
};

const ABOUT_CONTENT = {
    title: 'Who We Are',
    description: 'UltraSpace Tech is a premier technology firm dedicated to solving complex problems through innovation. We bridge the gap between imagination and reality, delivering scalable, secure, and aesthetic solutions for modern enterprises.'
};

const SERVICES_CONTENT = {
    title: 'Our Expertise',
    items: [
        {
            icon: <FaCode />,
            title: 'Software Development',
            description: 'Custom web and mobile applications built with the latest frameworks to ensure speed, scalability, and security.'
        },
        {
            icon: <FaLaptopCode />,
            title: 'Technology Consulting',
            description: 'Strategic guidance to help you navigate the digital landscape and optimize your IT infrastructure.'
        },
        {
            icon: <FaCogs />,
            title: 'Engineering Solutions',
            description: 'End-to-end engineering services, from system architecture to deployment and maintenance.'
        }
    ]
};

const PRODUCTS_CONTENT = {
    title: 'Our Products',
    description: 'We are building something amazing. Stay tuned for our upcoming suite of enterprise-grade software products designed to revolutionize your workflow.',
    status: 'Coming Soon',
    items: [
        {
            title: 'FlashMailPro',
            category: "SaaS",
            description: 'helping businesses grow through the power of email. Our mission is to make professional email marketing accessible to everyone.',
            image: "https://flashmailpro.vercel.app/imgs/about.jpg",
            link: 'https://flashmailpro.vercel.app/'
        },
       
    ]
};

const TEAM_CONTENT = {
    title: 'Meet The Team',
    members: [
        {
            name: 'Joshua Akinleye',
            role: 'CEO & Founder, Software Developer',
            image: 'https://pbs.twimg.com/profile_images/1921202683211374592/EPtjK_X1_400x400.jpg',
            socials: { twitter: 'https://x.com/Joshuaakinleye4', linkedin: 'https://www.linkedin.com/in/joshua-a-9895b61ab/', github: 'https://github.com/Akinleyejoshua' }
        },
    ]
};

const CONTACT_CONTENT = {
    title: 'Get In Touch',
    info: {
        address: 'Lagos State, Nigeria',
        email: 'ultraspaceeng@gmail.com',
        phone: '+234 08131519518'
    }
};

const FOOTER_CONTENT = {
    brand: 'UltraSpace Tech',
    description: 'Empowering businesses with next-gen technology solutions.',
    columns: [
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '#about' },
                // { label: 'Careers', href: '#' },
                // { label: 'Blog', href: '#' },
            ]
        },
        // {
        //     title: 'Legal',
        //     links: [
        //         // { label: 'Privacy Policy', href: '#' },
        //         // { label: 'Terms of Service', href: '#' },
        //     ]
        // },
        {
            title: 'Social',
            links: [
                { label: 'Twitter', href: 'https://x.com/UltraSpaceTech' },
                { label: 'Facebook', href: 'https://web.facebook.com/61584268426595/' },
                // { label: 'LinkedIn', href: '#' },
                // { label: 'Instagram', href: '#' },
            ]
        }
    ],
    copyright: '© 2025 UltraSpace Tech. All rights reserved.'
};

export default function LandingPage() {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

    return (
        <main className={styles.main}>
            {/* HEADER */}
            <header className={styles.header}>
                <div className={`${styles.container} ${styles.navContainer}`}>
                    <div className={styles.logo}>
                        {HEADER_CONTENT.logo}<span>{HEADER_CONTENT.logoHighlight}</span>
                    </div>

                    <nav className={styles.desktopNav}>
                        {HEADER_CONTENT.navLinks.map((link, index) => (
                            <a key={index} href={link.href} className={styles.navLink}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <button className={styles.menuBtn} onClick={toggleSidenav}>
                        <FaBars />
                    </button>
                </div>
            </header>

            {/* SIDENAV */}
            <div className={`${styles.sidenavOverlay} ${isSidenavOpen ? styles.open : ''}`} onClick={toggleSidenav} />
            <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={toggleSidenav}>
                    <FaTimes />
                </button>
                <nav className={styles.mobileNav}>
                    {HEADER_CONTENT.navLinks.map((link, index) => (
                        <a key={index} href={link.href} className={styles.mobileNavLink} onClick={toggleSidenav}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* HERO */}
            <section id="hero" className={styles.hero}>
                <div className={`${styles.container} ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        {HERO_CONTENT.title} <br />
                        <span>{HERO_CONTENT.titleHighlight}</span>
                    </h1>
                    <p className={styles.heroSubtitle}>{HERO_CONTENT.subtitle}</p>
                    <a href="#contact" className={styles.ctaButton}>{HERO_CONTENT.cta}</a>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{ABOUT_CONTENT.title}</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
                        {ABOUT_CONTENT.description}
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{SERVICES_CONTENT.title}</h2>
                    <div className={styles.servicesGrid}>
                        {SERVICES_CONTENT.items.map((item, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>{item.icon}</div>
                                <h3 className={styles.serviceTitle}>{item.title}</h3>
                                <p className={styles.serviceDesc}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{PRODUCTS_CONTENT.title}</h2>
                    <small className={styles.sectionDesc}>{PRODUCTS_CONTENT.description}</small>
                    {PRODUCTS_CONTENT.items && PRODUCTS_CONTENT.items.length > 0 ? (
                        <div className={styles.productsScrollContainer}>
                            {PRODUCTS_CONTENT.items.map((product, index) => (
                                <div key={index} className={styles.productCard}>
                                    <img src={product.image} alt={product.title} className={styles.productImage} />
                                    <div className={styles.productContent}>
                                        <h3 className={styles.productTitle}>{product.title}</h3>
                                        <p className={styles.productCategory}>{product.category}</p>
                                        <p className={styles.productDescription}>{product.description}</p>
                                        <a target='_blank' href={product.link} className={styles.productLink}>
                                            Learn More <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.productPlaceholder}>
                            <p className={styles.productDesc}>{PRODUCTS_CONTENT.description}</p>
                            <span className={styles.productStatus}>{PRODUCTS_CONTENT.status}</span>
                        </div>
                    )}
                </div>
            </section>

            {/* TEAM */}
            <section id="team" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{TEAM_CONTENT.title}</h2>
                    <div className={styles.teamGrid}>
                        {TEAM_CONTENT.members.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <img src={member.image} alt={member.name} className={styles.teamImage} />
                                <div className={styles.teamOverlay}>
                                    <h3 className={styles.teamName}>{member.name}</h3>
                                    <p className={styles.teamRole}>{member.role}</p>
                                    <div className={styles.socialLinks}>
                                        <a target='_blank' href={member.socials.twitter} className={styles.socialIcon} rel="noopener noreferrer"><FaTwitter /></a>
                                        <a target='_blank' href={member.socials.linkedin} className={styles.socialIcon} rel="noopener noreferrer"><FaLinkedin /></a>
                                        <a target='_blank' href={member.socials.github} className={styles.socialIcon} rel="noopener noreferrer"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contactWrapper}>
                        <h2 className={styles.sectionTitle}>{CONTACT_CONTENT.title}</h2>
                        <div className={styles.contactDetailsCentered}>
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>{CONTACT_CONTENT.info.address}</span>
                            </div>
                            <a href={`mailto:${CONTACT_CONTENT.info.email}`} className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <span>{CONTACT_CONTENT.info.email}</span>
                            </a>
                            <a href={`tel:${CONTACT_CONTENT.info.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                                <FaPhone className={styles.contactIcon} />
                                <span>{CONTACT_CONTENT.info.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logo}>
                                {HEADER_CONTENT.logo}<span>{HEADER_CONTENT.logoHighlight}</span>
                            </div>
                            <p>{FOOTER_CONTENT.description}</p>
                        </div>
                        {FOOTER_CONTENT.columns.map((col, index) => (
                            <div key={index} className={styles.footerCol}>
                                <h4>{col.title}</h4>
                                <div className={styles.footerLinks}>
                                    {col.links.map((link, idx) => (
                                        <a key={idx} href={link.href} className={styles.footerLink} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.label}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.footerBottom}>
                        <p>{FOOTER_CONTENT.copyright}</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
