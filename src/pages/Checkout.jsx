import data from '../data.json';
import { useLocation } from 'react-router-dom';
import Massage from '../components/ProductShow';
import main from '/main-video.mp4';
import { Link } from "react-router-dom";
import logo from '/favicon.png';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from "../components/Testimonials"
import sec from '/sec-main video.mp4';
// import thred from '/new-product-video.mp4';

function Checkout() {
    const location = useLocation();
    const { age, units } = location.state || {};

    function calcCost(units) {
        const productCost = data.productPrice * units;
        let shipmentCost = data.firstShipmentCost;

        if (units > 1) {
            shipmentCost += data.additionalShipmentCost * (units - 1);
        }

        const totalBeforeTax = productCost + shipmentCost;
        const tax = totalBeforeTax * data.taxRate;
        const totalCost = totalBeforeTax + tax;

        const roundedProductCost = parseFloat(productCost.toFixed(2));
        const roundedShipmentCost = parseFloat(shipmentCost.toFixed(2));
        const roundedTax = parseFloat(tax.toFixed(2));
        const roundedTotalCost = parseFloat(totalCost.toFixed(2));

        return {
            productCost: roundedProductCost,
            shipmentCost: roundedShipmentCost,
            tax: roundedTax,
            totalCost: roundedTotalCost
        };
    }

    const costDetails = calcCost(units || 1);

    return (

        <>
            <div className="bside">
                <div className="c-s">
                    <Massage count={units} age={age} />
                </div><div className="t-p">
                    <h3>تفصيل التكلفة:</h3>
                    {age === 'less' && (
                        <div>
                            <p><span><strong>إجمالي تكلفة المنتج:</strong></span> <span id='p-clr'>{units === "Compo 1" ? '3300' : units === "Compo 2" ? '6500' : units === "" ? "--" : costDetails.productCost}</span>  ريال</p>
                        </div>
                    )}
                    {age === 'greater' && (
                        <div>
                            <p><span><strong>إجمالي تكلفة المنتج:</strong></span> <span id="p-clr">{units === "Compo 1" ? '5800' : units === "Compo 2" ? '11500' : units === "" ? "--" : costDetails.productCost}</span>  ريال</p>
                        </div>
                    )}
                    <div>
                        <p><span><strong>إجمالي تكلفة الشحن:</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.shipmentCost}</span> ريال</p>
                        <p><span><strong>قيمة الضريبة :</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.tax}</span> ريال</p>
                        <p><span><strong>التكلفة الإجمالية:</strong></span> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units === "" ? '--' : costDetails.totalCost}</span> ريال</p>
                    </div>
                </div>
                {units !== "" ? <a className='submit__btn ad' href="https://store.nndprochildren.com/%D8%A7%D9%84%D9%85%D9%83%D9%85%D9%84-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D8%A7%D9%86-%D8%A7%D9%86-%D8%AF%D9%8A-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/p496109765">تابع الشراء</a> :
                    <Link className='submit__btn ad' to="/Options">الرجوع الي قائمة العروض</Link>
                }
            </div>
        </>
    );
}

function FixedSide() {
    return (
        <>
            <div className="aside">
                <div>
                    <video className='m-v
                    ' src={main} type="video/mp4" autoPlay controls muted>
                    </video>
                </div>

            </div>
        </>
    )
}





gsap.registerPlugin(ScrollTrigger);

export default function Details() {

    const logoRef = useRef(null);
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
            logoRef.current,
            { y: 1000, opacity: 0 },
            { duration: 2, y: 0, opacity: 0.2, ease: 'power.out' }
        );
        gsap.fromTo(
            checkRef.current,
            { opacity: 0 },
            { duration: 2, opacity: 1, ease: 'power3.out' }
        );
    }, [logoRef, checkRef]);



    return (
        <div className='checkout-hero'>

            <div className='checkout__page'>
                <div className="big__screens">
                    <Checkout />
                </div>
                <section className='main__art'>
                    <div className="screen__mobile">
                        <Checkout />
                    </div>
                    <div className="col__section">
                        <div className="vid--screen--big">
                            <FixedSide />
                        </div>
                        <article className='info___col___section'>
                            <div className="t-art">
                                <div className="check__logo">
                                    <img ref={logoRef} src={logo} alt="logo" />
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
                            </div>
                        </article>
                        <div className="vid--screen--small">
                            <FixedSide />
                        </div>

                    </div>
                </section>
            </div>
            <article className="last__info">
                <h1>مستخلص من :</h1>
                <div className='flex__info'>
                    <div className='components'>
                        <h2><strong>خلاصة براعم وبذور البروكولي:</strong></h2>
                        <p><strong> - تشير بعض الدراسات</strong> إلى <strong>تحسن الأعراض</strong> لدى مرضى التوحد عند استعمال <strong>خلاصة البروكولي</strong>. يحتوي على <strong>مضادات أكسدة مهمة</strong>. المكمل يحتوي على <strong>كمية متوازنة</strong> من مستخلص البروكولي مع الإنزيم الخاص لزيادة <strong>امتصاص المواد الفعالة</strong> من المركب.</p>
                        <h2><strong>كويرسيتين:</strong></h2>
                        <p> - عنصر مستخلص من الفواكه والخضروات، وهام ل<strong>نشاط الجهاز العصبي</strong> و<strong>مضاد للتأكسد</strong>.</p>

                        <h2><strong>خلاصة بذور الخردل البني:</strong></h2>
                        <p> - يوفر <strong>كمية مناسبة</strong> من الإنزيم الخاص بتكسير مكونات البروكولي ل<strong>تعظيم الفائدة الحيوية</strong>.</p>

                        <h2><strong>خلاصة ثمار الفلفل الأسود:</strong></h2>
                        <p>- يزيد <strong>امتصاص المواد الفعالة</strong> من المكمل.</p>
                    </div>
                    <video className='sec__video
                    ' src={sec} type="video/mp4" autoPlay controls muted>
                    </video>
                </div>
            </article>
            <Testimonials />
        </div>
    );
}

