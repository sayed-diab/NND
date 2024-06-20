import HtmlForm from './SignUpForm'
import Marquee from './Marquee'
import './Form.css'

export default function Form() {
    return (
        <>

            <Marquee />
            <div className="form_container">
                <HtmlForm />
            </div>
        </>
    )
}