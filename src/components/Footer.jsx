import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="left">
                <span>made by </span>
                <a href="https://khamsat.com/user/sayed_diab" target="_blank" rel="noopener noreferrer" className="link">
                    Sayed Diab
                </a>
            </div>
            <div className="right">
                <span>{currentYear}</span>
                <span>NND Pro Children © حقوق النشر محفوظة    </span>
            </div>
        </footer>
    );
};

export default Footer;