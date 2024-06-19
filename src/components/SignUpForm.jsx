import { useRef, useState } from "react";

function App() {
    const [choice, setChoice] = useState("")

    const handleChoice = (e) => {
        return setChoice(e.target.value)
    }


    let date = new Date().toLocaleDateString("ar-AR");
    let time = new Date().toLocaleTimeString("ar-SA");


    const formRef = useRef(null);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwJKHgwUb_AXtD5JIGdvsAEcnXhUBaDnQwxobY1Ta5I1J-Mq8iGF9GKJJynTYNyLTt/exec';
    const redirectURL = '/';

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(formRef.current)
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = redirectURL;
                } else {
                    alert("There was an error submitting the form. Please try again.");
                }
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <label>
                    اسم المستخدم
                    <input type="text" name="أسم_العميل" required />
                </label>
                <label>
                    البريد الالكتروني
                    <input type="email" name="البريد_الالكتروني" required />
                </label>
                <label>
                    رقم الهاتف
                    <input type="number" name="رقم_الهاتف" required />
                </label>
                <select name="الباقه_المختاره" value={choice} onChange={handleChoice}>
                    <option value="">اختر الباكج</option>
                    <option value="6 عبوات +2 وخــز تحفـيزي">6 عبوات +2 وخــز تحفـيزي</option>
                    <option value="12 عبوات +4 وخــز تحفـيزي">12 عبوات +4 وخــز تحفـيزي</option>
                    <option value="12 عبوات +2 وخــز تحفـيزي">12 عبوات +2 وخــز تحفـيزي</option>
                    <option value="24 عبوات +4 وخــز تحفـيزي">24 عبوات +4 وخــز تحفـيزي</option>
                </select>
                <label>
                    <input type="hidden" name="التاريخ" value={date} />
                    <input type="hidden" name="التوقيت" value={time} />
                </label>
                <label>
                    الملاحظات
                    <textarea name="الملاحظات" ></textarea>
                </label>
                <input type="submit" value="أرسل لنا" />
            </form>
        </>
    );
}

export default App;