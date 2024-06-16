import { FaStar, FaQuoteRight } from 'react-icons/fa';
import data from '../testimonials.json';
import './Testimonials.css'

const Testimonial = data.map(data => {
    return (
        <div className="testimonial" key={data.id}>
            <div className="testimonial-content">
                <div className="testimonial-head">
                    <div className='avatar'>
                        <img src={data.image} alt={data.name} className="testimonial-image" />
                        <div className='info__'>
                            <h3 className="testimonial-name">{data.name}</h3>
                            <p className="testimonial-relation">{data.relation}</p>
                        </div>
                    </div>
                    <div className='rate'>
                        <p className="testimonial-stars">
                            {Array(data.stars).fill(<FaStar color="#FFD700" />)}
                        </p>
                    </div>
                </div>
                <p className="testimonial-text">
                    <FaQuoteRight className="quote-icon" />
                    {data.testimonial}
                </p>
                <span className="testimonials-date">{data.date}</span>
            </div>
        </div>
    )
})

const Testimonials = () => (
    <div className="testimonials">
        {Testimonial}
    </div>
);

export default Testimonials;
