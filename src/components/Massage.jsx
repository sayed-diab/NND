// import { massage } from '../data.json'
// import logo from '/public/favicon.png';
// import product from '/public/product.png';
import one from '/public/Asset 1.svg';
import two from '/public/Asset 2.svg';
import four from '/public/Asset 4.svg';
import six from '/public/Asset 6.svg';
import eight from '/public/Asset 8.svg';
import syringe1 from '/public/Syringe 2.svg';
import syringe2 from '/public/Syringe 4.svg';


// eslint-disable-next-line react/prop-types
export default function Massage({ count, age }) {


    return (
        <>

            {count == 1 && <label className='select__card mini__card one in'>
                <div className='mb-15 txt-al'>
                    <h3 className='mb-5 mt-10'>عبـوة </h3>
                    <h5 className='clr'>واحـدة فقـط</h5>
                    <h5 className='price'><span className='pr'>بــ</span><span className='gr'> 400 </span> ريـال سـعودي</h5>
                </div>
                <img id='fx-1' src={one} />
            </label>
            }
            {count == 2 && <label className="select__card mini__card two in">
                <img id='fx-2' src={two} />
                <div className='mb-15 mt-40 txt-al'>
                    <h3 className='mb-5'>مـدة شهر </h3>
                    <h5 className='clr'>عبـوتين</h5>
                    <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 800 </span> ريـال سـعودي</h5>
                </div>
            </label>
            }
            {count == 4 && <label className="select__card mini__card two in" >
                <img id='fx-4' src={four} />
                <div className='mb-15 mt-40 txt-al'>
                    <h3 className='mb-5'>مـدة شـهرين </h3>
                    <h5 className='clr'>عبـوات 4</h5>
                    <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 1600 </span> ريـال سـعودي</h5>
                </div>
            </label>
            }
            {count == 6 && <label className="select__card mini__card two in" >
                <img id='fx-6' src={six} />
                <div className='mb-15 mt-40 txt-al'>
                    <h3 className='mb-5'>مــدة<br /> ثـلاث شهور </h3>
                    <h5 className='clr'>عبـوات 6</h5>
                    <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 2400 </span> ريـال سـعودي</h5>
                </div>
            </label >
            }
            {count == 8 && <label className="select__card mini__card two in" >
                <img id='fx-8' src={eight} />
                <div className='mb-15 mt-40 txt-al'>
                    <h3 className='mb-5'>مـدة شهرين </h3>
                    <h5 className='clr'>عبوات 8</h5>
                    <h5 className='price mt-10'><span className='pr'>بــ</span><span className='gr'> 3200 </span> ريـال سـعودي</h5>
                </div>
            </label>
            }
            {count == "Compo 1" && <label className="select__card mini__card three six in">
                <img id='fx-6-s' src={syringe1} />
                <img id='fx-6-a' src={six} />
                <div className='mb-180 mt-10 txt-al'>
                    <h3 className='mb-5'>مـدة<br /> ثـلاث شهور </h3>
                    <h6 className='mb-5 ml-60 clr'>{age === 'less' ? 'عبـوات 6' : 'عبـوة 12'}</h6>
                    <h6 className='ml-75 clr'> + {age === 'less' ? 'جلسـتين' : 'جلسـات 4'}<br /> وخــز تحفـيزي</h6>
                    <h5 className='price mt-15'><span className='pr'>بــ</span><span className='gr'> {age === 'less' ? '3300' : '5800'} </span> ريـال سـعودي</h5>
                </div>
            </label>
            }
            {count == "Compo 2" && <label className="select__card mini__card three in" >
                <img id='fx-12-4' src={syringe2} />
                <img id='fx-12-1' src={four} />
                <img id='fx-12-2' src={eight} />
                {age === 'less' && <img id='fx-12-2' className='on-hv' src={eight} />}
                <div className='mb-180 mt-25 txt-al'>
                    <h3 className='mb-5'>مـدة<br /> ستـة شهور </h3>
                    <h6 className='mb-5 ml-60 clr'>عبـوة {age === 'less' ? '12' : '24'}</h6>
                    <h6 className='ml-75 clr'> + جلسـات 4<br /> وخــز تحفـيزي</h6>
                    <h5 className='price mt-20'><span className='pr'>بــ</span><span className='gr'> {age === 'less' ? '6500' : '11500'} </span> ريـال سـعودي</h5>
                </div>
            </label>
            }

        </>
    )
}

{/* <p>{count == 1 ? massage.one :
                count == 2 ? massage.two :
                    count == 4 ? massage.four :
                        count == 6 ? massage.six :
                            age >= 12 && count == 4 ? massage.fourPlus :
                                count == 8 ? massage.eight :
                                    count == "Compo 1" ? massage.compo1 :
                                        count == "Compo 2" ? massage.compo2 : ''
            }</p> */ }