import HtmlForm from './SignUpForm'
import './Form.css'

export default function Form() {
    return (
        <>
            <div className="form_container">
                <HtmlForm />
                <div>
                    <img src={"./dark-mode/logo.png"} alt="main logo" className="logo_form big_screen" />
                    <img src={"./dark-mode/Asset 2.svg"} alt="main logo" className="logo_form small_screen" />
                </div>
            </div>
        </>
    )
}