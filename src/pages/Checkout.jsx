import data from '../data.json';
import { useLocation } from 'react-router-dom';
import Massage from '../components/Massage';
import main from '/public/main-video.mp4';
// import sec from '//public/sec-main video.mp4';
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


        <div className="bside">
            <div className="c-s">
                <Massage count={units} age={age} />
            </div>
            <div className="t-p">
                <h3>تفصيل التكلفة:</h3>
                {age === 'less' && <p><h5>إجمالي تكلفة المنتج:</h5>  {units === "Compo 1" ? '3300' : units === "Compo 2" ? '6500' : costDetails.productCost} ريال</p>}
                {age === 'greater' && <p><h5>إجمالي تكلفة المنتج:</h5>  {units === "Compo 1" ? '5800' : units === "Compo 2" ? '11500' : costDetails.productCost} ريال</p>}
                <>
                    <p><h5>إجمالي تكلفة الشحن:</h5> {units === "Compo 1" ? '--' : units === "Compo 2" ? '--' : costDetails.shipmentCost} ريال</p>
                    <p><h5>قيمة الضريبة :</h5> {units === "Compo 1" ? '--' : units === "Compo 2" ? '--' : costDetails.tax} ريال</p>
                    <p><h5>التكلفة الإجمالية:</h5> {units === "Compo 1" ? '--' : units === "Compo 2" ? '--' : costDetails.totalCost} ريال</p></>
            </div>
            <a className='submit__btn ad' href="https://store.nndprochildren.com/%D8%A7%D9%84%D9%85%D9%83%D9%85%D9%84-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D8%A7%D9%86-%D8%A7%D9%86-%D8%AF%D9%8A-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/p496109765">أكمـل عمليـة الشراء</a>
        </div>

    );
}


function FixedSide() {
    return (
        <>
            <div className="aside">
                <video className='m-v
                    ' src={main} type="video/mp4" controls autoPlay muted>
                </video>
            </div>
        </>
    )
}


export default function Details() {
    return (
        <>
            <div className='checkout__page container'>
                <FixedSide />
                <Checkout />
            </div>
        </>
    )
}