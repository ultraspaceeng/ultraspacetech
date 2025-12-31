'use client';

import { useState } from 'react';
import styles from './page.module.css';
import {
    FaBars,
    FaTimes,
    FaCode,
    FaCogs,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaGlobe,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaArrowRight,
    FaMicrochip,
    FaFlask,
    FaShieldAlt,
    FaAtom,
    FaLightbulb
} from 'react-icons/fa';

// --- CONTENT VARIABLES ---

const HEADER_CONTENT = {
    logo: 'UltraSpace',
    logoHighlight: 'Innov',
    navLinks: [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
        { label: 'Store', href: 'https://ultrasstore.vercel.app/' },
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
            icon: <FaMicrochip />,
            title: 'Technology Consulting',
            description: 'Strategic guidance to help you navigate the digital landscape and optimize your IT infrastructure.'
        },
        {
            icon: <FaCogs />,
            title: 'Engineering Solutions',
            description: 'End-to-end engineering services, from system architecture to deployment and maintenance.'
        },
        {
            icon: <FaFlask />,
            title: 'Medicine Research',
            description: 'Pioneering medical breakthroughs and healthcare solutions.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Military Research',
            description: 'Advanced defense technologies and strategic innovations.'
        },
        {
            icon: <FaAtom />,
            title: 'Spiritual (Quantum Research)',
            description: 'Exploring the intersection of consciousness and quantum mechanics.'
        },
        {
            icon: <FaLightbulb />,
            title: 'All Innovations',
            description: 'A hub for all forward-thinking ideas and technological advancements.'
        }
    ]
};

const PRODUCTS_CONTENT = {
    title: 'Our Products',
    description: 'We are building something amazing. Stay tuned for our upcoming suite of enterprise-grade software/technology/engineering products designed to revolutionize your workflow.',
    status: 'Launched',
    items: [
        {
            title: 'FlashMailPro',
            category: "SaaS",
            description: 'Helping businesses grow through the power of email. Our mission is to make professional email marketing accessible to everyone.',
            image: "https://flashmailpro.vercel.app/imgs/about.jpg",
            link: 'https://flashmailpro.vercel.app/'
        },
        {
            title: 'DropifyPro',
            category: "B2B (Ecommerce)",
            description: 'A powerful B2B e-commerce solution designed to streamline wholesale operations and simplify supply chain management for growing enterprises.',
            image: "https://dropifypro.vercel.app/imgs/logo.png",
            link: 'https://dropifypro.vercel.app/'
        },
        {
            title: "xSearchPro",
            category: "B2C",
            description: 'An AI Powered search engine designed to provide users with a fast and efficient way to search for contents from the internet',
            image: "https://x-searchpro.vercel.app/logo.png",
            link: 'https://x-searchpro.vercel.app/'
        },
        {
            title: "xRecPro",
            category: "B2C",
            description: 'An AI Powered HR Interviewing Platform designed to help businesses find the right candidates for their roles.',
            image: "https://x-recpro.vercel.app/images/logo.png",
            link: 'https://x-recpro.vercel.app/'
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
            socials: { website: "https://akinleyejoshua.vercel.app/", twitter: 'https://x.com/Joshuaakinleye4', linkedin: 'https://www.linkedin.com/in/joshua-a-9895b61ab/', github: 'https://github.com/Akinleyejoshua' }
        },
    ]
};

const CONTACT_CONTENT = {
    title: 'Get In Touch',
    subtitle: "Have a project in mind or want to discuss a new idea? We'd love to hear from you.",
    items: [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Visit Us',
            value: 'International! & Nigeria',
            link: null
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Us',
            value: 'ultraspaceeng@gmail.com',
            link: 'mailto:ultraspaceeng@gmail.com'
        },
        {
            icon: <FaPhone />,
            title: 'Call Us',
            value: '+234 08131519518',
            link: 'tel:+23408131519518'
        }
    ]
};

const FOOTER_CONTENT = {
    brand: 'UltraSpace Tech',
    description: 'Empowering businesses with next-gen technology & Innovative solutions.',
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
                { label: 'Telegram', href: 'https://t.me/UltraSpaceTech' },
                { label: 'TickTock', href: 'https://www.tiktok.com/@ultra_space_innov' },
                { label: 'Instagram', href: 'https://www.instagram.com/ultraspace.inno/' },
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
                    <br />
                    <br />
                    <br />
                    <br />

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
                                        {member.socials.website && (
                                            <a target='_blank' href={member.socials.website} className={styles.socialIcon} rel="noopener noreferrer" title="Personal Website"><FaGlobe /></a>
                                        )}
                                        {member.socials.twitter && (
                                            <a target='_blank' href={member.socials.twitter} className={styles.socialIcon} rel="noopener noreferrer"><FaTwitter /></a>
                                        )}
                                        {member.socials.linkedin && (
                                            <a target='_blank' href={member.socials.linkedin} className={styles.socialIcon} rel="noopener noreferrer"><FaLinkedin /></a>
                                        )}
                                        {member.socials.github && (
                                            <a target='_blank' href={member.socials.github} className={styles.socialIcon} rel="noopener noreferrer"><FaGithub /></a>
                                        )}
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
                        <p className={styles.sectionDesc}>{CONTACT_CONTENT.subtitle}</p>
                        <br />
                        <div className={styles.contactGrid}>
                            {CONTACT_CONTENT.items.map((item, index) => (
                                item.link ? (
                                    <a key={index} href={item.link} className={styles.contactCard}>
                                        <div className={styles.contactCardIcon}>{item.icon}</div>
                                        <h3 className={styles.contactCardTitle}>{item.title}</h3>
                                        <p className={styles.contactCardValue}>{item.value}</p>
                                    </a>
                                ) : (
                                    <div key={index} className={styles.contactCard}>
                                        <div className={styles.contactCardIcon}>{item.icon}</div>
                                        <h3 className={styles.contactCardTitle}>{item.title}</h3>
                                        <p className={styles.contactCardValue}>{item.value}</p>
                                    </div>
                                )
                            ))}
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
