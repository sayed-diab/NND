



// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import './CollapesdDiv.css'
function AllCollapseExample() {


    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='move'> <h5 className='ddd'>خلاصة براعم وبذور البروكولي</h5> </Accordion.Header>
                <Accordion.Body>
                    <p> - تشير بعض الدراسات إلى تحسن الأعراض
                        لدى مرضى التوحد عند استعمال خلاصة البروكولي. يحتوي على
                        مضادات أكسدة مهمة. المكمل يحتوي على كمية متوازنة
                        من مستخلص البروكولي مع الإنزيم الخاص لزيادة امتصاص المواد الفعالة
                        من المركب.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><h5>كويرسيتين</h5></Accordion.Header>
                <Accordion.Body>
                    <p> - عنصر مستخلص من الفواكه والخضروات، وهام لنشاط الجهاز العصبي
                        ومضاد للتأكسد.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><h5>خلاصة بذور الخردل البني</h5></Accordion.Header>
                <Accordion.Body>
                    <p> - يوفر كمية مناسبة من الإنزيم الخاص بتكسير مكونات البروكولي لتعظيم الفائدة الحيوية.</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header id='ddd'><h5>خلاصة ثمار الفلفل الأسود</h5></Accordion.Header>
                <Accordion.Body>
                    <p>- يزيد امتصاص المواد الفعالة من المكمل.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AllCollapseExample;



{/* 


<h2></h2>

<h2>خلاصة ثمار الفلفل الأسود:</h2>
 */}