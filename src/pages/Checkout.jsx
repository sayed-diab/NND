import main from '/main-video.mp4';
import { Link } from "react-router-dom";
import logo from '/favicon.png';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from "../components/Testimonials"
import sec from '/sec-main video.mp4';
// import thred from '/new-product-video.mp4';
import Preloader from '../components/Preloader';
import CollapsedDiv from '../components/CollapsedDiv'
import Footer from '../components/Footer';


function FixedSide() {
    return (
        <>
            <div className="aside">
                <div>
                    <video className='m-v
                    ' src={main} type="video/mp4" controls>
                    </video>
                </div>

            </div>
        </>
    )
}





gsap.registerPlugin(ScrollTrigger);

function Details() {

    const checkRef = useRef(null);
    const textRef = useRef(null);



    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 993px)", () => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1, duration: 1, y: 600, delay: 1, scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 60%',
                        end: '+=800',
                        scrub: 1,
                    }
                }
            );
        });
        mm.add("(max-width: 991px) and (min-width: 768px)", () => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1, duration: 1, y: 600, delay: 1, scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 60%',
                        end: '+=800',
                        scrub: 1,
                    }
                }
            );
        });

        mm.add("(max-width: 767px) ", () => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: -300 },
                {
                    opacity: 1, duration: 1, y: 0, delay: 1, scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 60%',
                        end: '+=800',
                        scrub: 1,
                    }
                }
            );
        });

        // Clean up ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                trigger.kill();
            });
            mm.revert();
        };
    }, []); // Adding textRef to the dependency array


    useEffect(() => {


        gsap.fromTo(
            checkRef.current,
            { opacity: 0 },
            { duration: 2, opacity: 1, ease: 'power3.out' }
        );
    }, [checkRef]);




    return (
        <>
            <div className='checkout-hero'>
                <div className="check__logo">
                    <img src={logo} alt="logo" />
                    <div className='info_' ref={textRef}>
                        <h1>NND Pro Children</h1>
                        <p>
                            <strong style={{ color: '#ff7d25' }}>مكمل غذائي</strong> فريد يضم
                            <strong style={{ color: '#00c0c7' }}> فيتامينات</strong>،
                            <strong style={{ color: '#ff9495' }}> معادن</strong>،
                            <strong style={{ color: '#ff7d25' }}> خضروات</strong>،
                            <strong style={{ color: '#00c0c7' }}> دهون</strong>، و
                            <strong style={{ color: '#ff9495' }}> أحماض أمينية</strong> من مصادر طبيعية تم تصميمه واختيار مكوناته بعناية وفقًا لمعايير
                            <strong style={{ color: '#ff7d25' }}> العلوم العصبية</strong> وتمت مراجعته وتحليله لضمان
                            <strong style={{ color: '#00c0c7' }}> الجودة</strong> و
                            <strong style={{ color: '#ff9495' }}> الفعالية</strong>.
                        </p>
                    </div>
                </div>
                <FixedSide />
                <Testimonials />
                <div className="last__info">
                    <h1>مستخلص من :</h1>
                    <div className='flex__info'>
                        <div className='components'>
                            <CollapsedDiv />
                        </div>
                        <video className='sec__video
        ' src={sec} type="video/mp4" controls >
                        </video>
                    </div>
                </div>
                <div className="div-learn-more">
                    <h1>خطط الاسعار</h1>
                    <div>
                        <h1>خطط الجرعات</h1>
                        <h3>حزمة صحة بلس</h3>
                        <p>مكونة من عبوة واحدة من المكمل</p>

                        <h2>الكورسات</h2>
                        <h3>باكج رعاية المستقبل</h3>

                        <h4>لعمر أقل من 12 عام:</h4>
                        <ul>
                            <li>الدورة الأولى: مكونة من عدد 2 عبوة مكمل تكفي لمدة زمنية قدرها عدد 1 شهر.</li>
                            <li>الدورة الثانية: مكونة من عدد 4 عبوة مكمل تكفي لمدة زمنية قدرها عدد 2 شهر.</li>
                            <li>الدورة الثالثة: مكونة من عدد 6 عبوة مكمل تكفي لمدة زمنية قدرها عدد 3 أشهر.</li>
                        </ul>

                        <h4>لعمر أكبر من 12 عام:</h4>
                        <ul>
                            <li>الدورة الأولى: مكونة من عدد 4 عبوة مكمل تكفي لمدة زمنية قدرها عدد 1 شهر.</li>
                            <li>الدورة الثانية: مكونة من عدد 8 عبوة مكمل تكفي لمدة زمنية قدرها عدد 2 شهر.</li>
                        </ul>

                        <h3>باكج الرعاية الذهبية الشاملة</h3>

                        <h4>لعمر أقل من 12 عام:</h4>
                        <ul>
                            <li>الدورة الأولى: مكونة من عدد 6 عبوة مكمل + 2 أبر وخز تحفيزي تكفي لمدة زمنية قدرها عدد 4 أشهر.</li>
                            <li>الدورة الثانية: مكونة من عدد 12 عبوة مكمل + 4 أبر وخز تحفيزي تكفي لمدة زمنية قدرها عدد 6 أشهر.</li>
                        </ul>

                        <h4>لعمر أكبر من 12 عام:</h4>
                        <ul>
                            <li>الدورة الأولى: مكونة من عدد 12 عبوة مكمل + 2 أبر وخز تحفيزي تكفي لمدة زمنية قدرها عدد 3 أشهر.</li>
                            <li>الدورة الثانية: مكونة من عدد 24 عبوة مكمل + 6 أبر وخز تحفيزي تكفي لمدة زمنية قدرها عدد 6 أشهر.</li>
                        </ul>

                        <p>ملحوظة: عند طلبك إحدى باكجات الرعاية الذهبية يرجى ملء الفورم بالبيانات المطلوبة ليقوم أحد وكلائنا بالتواصل معك وتحديد موعد الزيارة للعيادة الطبية.</p>

                    </div>
                    <div className="go">
                        <Link className="learn__more" to="/Options"><strong>خطط الاسعار</strong></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}






export default function Output() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Preloader /> : (
                <Details />)}
        </>
    )
}



