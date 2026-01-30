import '../styles/footerSection.css';


const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main-text">
          Made with love for love
        </div>

        <div className="footer-links">
          <a 
            href="mailto:pipelolailesanmi@gmail.com" 
            className="footer-link"
            aria-label="Send email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>

          <a 
            href="https://github.com/P-lola/" 
            className="footer-link"
            aria-label="Visit GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a 
            href="https://instagram.com/lola_softgal" 
            className="footer-link"
            aria-label="Visit Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-subtext">
          Pipelola Ilesanmi
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;