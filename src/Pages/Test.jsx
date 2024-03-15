import { useContext, React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalculatorContext } from '../Context/CalculatorContext';
import Testt from '../Components/test/Testt';
import './Test.css'


const Test = () => {

    const { express, setexpress, arrayy } = useContext(CalculatorContext);
    useEffect(() => { }, [express])
    var arrayyy = [];
    console.log(arrayy);
    console.log(arrayy.length);


    arrayyy = [...arrayy];

    arrayyy.reverse();
    console.log(arrayyy.length);
    for (var i = 0; i < arrayyy.length; i++) {
        console.log(arrayyy);
        // exp:express,equal:equal,current:current,startzero:startzero,prev:prev,mul:mul,result:result,prevexpress:prevexpress,prevsafe:prevsafe
    }

    // window.setInterval(function() {
    //     var elem = document.getElementById('data');
    //     elem.scrollTop = elem.scrollHeight;
    //   }, 5000);

    return (
        <div>


            {/* <div><button>click to copy</button></div> */}
            <div className="history">
                <div className='history-rows'>

                    <div className="history-header"><h1>History</h1></div>
                    <Link to={"/"}><button className="back-button" onClick={() => setexpress(express)} >x</button></Link>
                </div>
                <div className="history-col">
                    <div className="history-values-box">
                        <div className='history-values' id='data'>{
                            arrayyy.map((item, i) => {
                                return (<Testt key={i} exp={item.exp} equal={item.equal} current={item.current} startzero={item.startzero} prev={item.prev} mul={item.mul} result={item.result} prevexpress={item.prevexpress} prevsafe={item.prevsafe} />);
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Test