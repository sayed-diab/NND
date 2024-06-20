
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faTiktok, faLinkedin, faSnapchat, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaLinks.css';  // Import the CSS file

const socialMediaLinks = [
    { href: 'https://twitter.com/nndksa', icon: faTwitter },
    { href: 'https://www.facebook.com/nndksa', icon: faFacebook },
    { href: 'https://www.instagram.com/nndksa', icon: faInstagram },
    { href: 'http://www.tiktok.com/@nndksa', icon: faTiktok },
    { href: 'http://www.linkedin.com/in/nndksa', icon: faLinkedin },
    { href: 'https://www.snapchat.com/add/nndksa', icon: faSnapchat },
    { href: 'https://wa.me/9660538979571', icon: faWhatsapp }, // Using WhatsApp icon for WhatsApp link
    { href: 'https://www.youtube.com/@nndksa', icon: faYoutube },
];

// eslint-disable-next-line react/prop-types
const SocialMediaLinks = () => {

    return (
        <ul className="social-media-links">
            {socialMediaLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaLinks;





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram, faTiktok, faLinkedin, faSnapchat, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import './SocialMediaLinks.css';  // Import the CSS file

// const socialMediaLinks = [
//     { href: 'https://twitter.com/nndksa', icon: faTwitter },
//     { href: 'https://www.facebook.com/nndksa', icon: faFacebook },
//     { href: 'https://www.instagram.com/nndksa', icon: faInstagram },
//     { href: 'http://www.tiktok.com/@nndksa', icon: faTiktok },
//     { href: 'http://www.linkedin.com/in/nndksa', icon: faLinkedin },
//     { href: 'https://www.snapchat.com/add/nndksa', icon: faSnapchat },
//     { href: 'https://wa.me/0538979571', icon: faWhatsapp }, // Using WhatsApp icon for WhatsApp link
//     { href: 'https://www.youtube.com/@nndksa', icon: faYoutube },
// ];

// // eslint-disable-next-line react/prop-types
// const SocialMediaLinks = ({ styleType }) => {
//     const className = styleType === 'black' ? 'social-media-links black' : 'social-media-links white';

//     return (
//         <ul className={className}>
//             {socialMediaLinks.map((link, index) => (
//                 <li key={index}>
//                     <a href={link.href} target="_blank" rel="noopener noreferrer">
//                         <FontAwesomeIcon icon={link.icon} />
//                     </a>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default SocialMediaLinks;

