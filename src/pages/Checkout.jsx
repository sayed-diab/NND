import data from '../data.json';
import { useLocation } from 'react-router-dom';
import Massage from '../components/Massage';
import main from '/public/main-video.mp4';
import { Link } from "react-router-dom";
import logo from '/public/favicon.png';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

// import sec from '/public/sec-main video.mp4';
// import thred from '/public/sec-video.mp4';

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
                </div>
                <div className="t-p">
                    <h3>تفصيل التكلفة:</h3>
                    {age === 'less' && <p ><h4>إجمالي تكلفة المنتج:</h4> <span id='p-clr'> {units === "Compo 1" ? '3300' : units === "Compo 2" ? '6500' : units == "" ? "--" : costDetails.productCost}</span>  ريال</p>}
                    {age === 'greater' && <p><h4>إجمالي تكلفة المنتج:</h4> <span id="p-clr">{units === "Compo 1" ? '5800' : units === "Compo 2" ? '11500' : units == "" ? "--" : costDetails.productCost}</span>  ريال</p>}
                    <>
                        <p><h4>إجمالي تكلفة الشحن:</h4> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units == "" ? '--' : costDetails.shipmentCost}</span> ريال</p>
                        <p><h4>قيمة الضريبة :</h4> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units == "" ? '--' : costDetails.tax}</span> ريال</p>
                        <p><h4>التكلفة الإجمالية:</h4> <span id="p-clr">{units === "Compo 1" || units === "Compo 2" || units == "" ? '--' : costDetails.totalCost}</span> ريال</p></>
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
                    ' src={main} type="video/mp4" controls muted>
                    </video>
                </div>

            </div>
        </>
    )
}


export default function Details() {

    const logoRef = useRef(null);


    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { y: 1000, opacity: 0 }, // Start from above with opacity 0
            { duration: 2, y: 0, opacity: 0.2, ease: 'power.out' } // End with original position and opacity
        );

    }, []);


    return (
        <>
            <div className='checkout__page container'>
                <div className="big__screens">
                    <Checkout />
                </div>
                <section className='main__art'>
                    <div className="screen__moblie">
                        <Checkout />
                    </div>
                    <div className="col__section">
                        <article className='info___col___section '>
                            <div className="t-art">
                                <div className="check__logo">
                                    <img ref={logoRef} src={logo} alt="logo" />

                                    <h1>NND Pro Childern</h1>

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
                        </article>
                        <FixedSide />
                    </div>
                </section>
            </div>
        </>
    )
}



