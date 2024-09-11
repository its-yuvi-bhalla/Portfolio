import './Footer.css';
import { useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks.jsx';
import { faLinkedin, faGithub, faInstagram, faDropbox } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

function Footer() {
  const footerRef = useRef(null);
  const socialLinksRef = useRef([]);

  useEffect(() => {

    gsap.fromTo(footerRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      socialLinksRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 1, duration: 1, ease: 'power3.in' }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="social-links">
          <SocialLinks
            link='https://www.linkedin.com/in/yuvraj-bhalla-76169a29a/'
            icon={faLinkedin}
            name='LinkedIn'
            ref={(el) => (socialLinksRef.current[0] = el)}
          />
          <SocialLinks
            link='https://github.com/its-yuvi-bhalla'
            icon={faGithub}
            name='Github'
            ref={(el) => (socialLinksRef.current[1] = el)}
          />
          <SocialLinks
            link='https://www.instagram.com/yuvi_hatesyou/?next=%2F'
            icon={faInstagram}
            name='Instagram'
            ref={(el) => (socialLinksRef.current[2] = el)}
          />
        </div>
        <div className="social-links">
          <SocialLinks
            link='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPFdHBbMzjmqqrLRdcLlkqbZgSlzVwWKtHtCtZHjhvpTFhXZqzQPZlXfdwmSVtcBBQJTKlc'
            icon={faDropbox}
            name='Email'
            ref={(el) => (socialLinksRef.current[3] = el)}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
