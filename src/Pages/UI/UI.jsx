import React, { useState, useEffect } from 'react'
import './UI.css';
import Keys from '../../Components/Keys/Keys'
import Keyss from '../../Components/Keyss/Keyss'

const UI = () => {
    const [express, setexpress] = useState("")
    const [result, setresult] = useState("")
    useEffect(() => {
        console.log(express + " >>");
    }, [express])
    const calc = () => {
        try {
                const strings=express.toString();
            if (strings.includes("%")) {
                // let ans = eval(strings);
                console.log("working")
                let anss = strings.replace("%", "*(1/100)*");
                console.log(anss + ",.,");
                let ans = eval(anss);
                setexpress(ans);
            }
            else {
                let ans = eval(express);
                setexpress(ans);
            }

        }
        catch (err) {
            console.log(err);
            setexpress("error")
        }



    }
    const deletes = () => {
        const strings = express.toString();



        console.log(strings + "}" + (strings.length));

        console.log(strings)
        if (strings.length != undefined) {
            console.log("working??");
            const ans = strings.substring(0, strings.length - 1); setexpress(ans)
        }

    }

    return (
        <div className="ui">
            <div className="cal">
                <div className='answer'>
                    {/* <div className='expression'>
                    <input type="text" id='calc-expression' className='form-value' value={express} />
                </div>
                <div className='result'>
                    <input type="text" id='calc-result' className='form-value' value={result}/>

                </div> */}
                    <button id='express'>{express}</button>

                </div>
                <div className='allkeys'>
                    {/* <div onClick={()=>{ const val=express;console.log(express);setexpress(val+""+1)}}> */}
                    <div className="row1">
                        <div onClick={() => { setexpress("") }}>
                            <Keyss id={"C"} value={"C"} />
                        </div>
                        <div onClick={() => { deletes() }}>
                            <Keyss id={"del"} value={"del"} />
                        </div>
                        <div onClick={() => { setexpress(express + "" + "%") }}>
                            <Keys id={"%"} value={"%"} />
                        </div>
                        <div onClick={() => { setexpress(express + "" + "+") }}>
                            <Keys id={"+"} value={"+"} />

                        </div>
                    </div>
                    <div className="rows">
                        <div onClick={() => { setexpress(express + "" + 1) }}>
                            <Keys id={1} value={1} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 2) }}>
                            <Keys id={2} value={2} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 3) }}>
                            <Keys id={3} value={3} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + "-") }}>
                            <Keys id={"-"} value={"-"} />
                        </div>


                    </div>
                    <div className="rows">
                        <div onClick={() => { setexpress(express + "" + 4) }}>
                            <Keys id={4} value={4} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 5) }}>
                            <Keys id={5} value={5} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 6) }}>
                            <Keys id={6} value={6} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + "*") }}>
                            <Keys id={"*"} value={"*"} />
                        </div>

                    </div>
                    <div className="rows">
                        <div onClick={() => { setexpress(express + "" + 7) }}>
                            <Keys id={7} value={7} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 8) }}>
                            <Keys id={8} value={8} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + 9) }}>
                            <Keys id={9} value={9} />

                        </div>
                        <div onClick={() => { setexpress(express + "" + "/") }}>
                            <Keys id={"/"} value={"/"} />
                        </div>


                    </div>
                    <div className="rows">
                        <div onClick={() => { setexpress(express + "" + 0) }}>
                            <Keys id={0} value={0} />
                        </div>
                        <div onClick={() => { setexpress(express + "" + "00") }}>
                            <Keys id={"00"} value={"00"} />
                        </div>
                        <div onClick={() => { setexpress(express + "" + ".") }}>
                            <Keys id={"."} value={"."} />
                        </div>

                        <div onClick={() => { calc() }}>
                            <Keyss id={"="} value={"="} />
                        </div>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default UI