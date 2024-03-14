import { useContext, React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalculatorContext } from '../Context/CalculatorContext';
import Testt from '../Components/test/Testt';


const Test = () => {
    const { express,setexpress, arrayy } = useContext(CalculatorContext);
    useEffect(() => { }, [express])
    for (var i = 0; i < arrayy.length; i++) {
        console.log(arrayy);
        // exp:express,equal:equal,current:current,startzero:startzero,prev:prev,mul:mul,result:result,prevexpress:prevexpress,prevsafe:prevsafe
    }
    return (

        <div>
            <Link to={"/"}><button onClick={()=>setexpress(express)} >go to calculator</button></Link>
            <div><button>click to copy</button></div>
            <div>{
                arrayy.map((item, i) => {
                    return (<Testt key={i} exp={item.exp} equal={item.equal} current={item.current} startzero={item.startzero} prev={item.prev} mul={item.mul} result={item.result} prevexpress={item.prevexpress} prevsafe={item.prevsafe} />);
                })}
            </div>
        </div>
    )
}

export default Test