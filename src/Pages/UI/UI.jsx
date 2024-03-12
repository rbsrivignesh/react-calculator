import React, { useState, useEffect } from 'react'
import './UI.css';
import Keys from '../../Components/Keys/Keys'
import Keyss from '../../Components/Keyss/Keyss'
import click from '../../Components/audio/click.mp3'
import { act } from 'react-dom/test-utils';

const UI = () => {
    // const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    const audio = new Audio(click)
    audio.volume = 0.05;
    const buttons = document.querySelectorAll("span");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            audio.play();
        });
    });
    const [express, setexpress] = useState("")
    const [current, setcurrent] = useState("")
    const [startzero, setstartzero] = useState("");
    const [prev, setprev] = useState("");

    useEffect(() => {
        console.log(express + " >>");
    }, [express])
    const calc = () => {
        if (express.toString().length !== 0) {

            try {
                const strings = express.toString();
                if (strings.includes("%")) {
                    // let ans = eval(strings);
                    console.log("working")
                    let anss = strings.replace("%", "*(1/100)*");
                    console.log(anss + ",.,");
                    let ans = eval(anss);
                    setexpress(ans);
                    setprev("");
                }
                else {
                    let ans = eval(express);
                    setprev("");
                    setexpress(ans);
                }

            }
            catch (err) {
                console.log(err);
                setexpress("error")
            }
        }


    }
    const deletes = () => {
        if (express.toString() === "error") {
            setprev("");
            setcurrent("");
            setexpress("");
        }
        else {


            setprev(prev.toString().substring(0, prev.toString().length - 3));
            if (prev.toString().substring(prev.toString().length - 3, prev.toString().length) === "dot") {
                setcurrent("dot");
                setprev(prev.toString().substring(0, prev.toString().length - 3));

            }
            const strings = express.toString();
            console.log(prev.toString());

            if (strings.length !== undefined) {
                // if(strings==="error")

                const ans = strings.substring(0, strings.length - 1); setexpress(ans)
            }
        }

    }
    const func_click = (action, expression) => {
        console.log(action + " " + expression + " " + prev.toString());
        if (action === "num") {
            console.log("num working");
            console.log(action + " " + prev.toString())
            if (startzero.toString() === "true" || startzero.toString() === "doubletrue") {
                console.log(prev.toString());
                if (startzero.toString() === "true") {
                    setexpress(express.substring(0, express.length - 1) + expression);
                }
                else {
                    setexpress(express.substring(0, express.length - 2) + expression);

                }
                if (expression !== "0") {

                    setstartzero("false");
                }
                setprev(prev.toString() + "num");
            }
            else if ((expression === "0" || expression === "00") && (prev.toString().length === 0 || (prev.toString().substring(prev.toString().length - 3, prev.toString().length)) === "ope")) {
                // console.log("current 0 and prev operator");
                // console.log(expression, expression === "0")
                // console.log(expression, expression === "00")
                // console.log(expression, prev.toString().substring(prev.toString().length - 3, (prev.toString().length)), prev.toString().substring(prev.toString().length - 3, prev.toString().length) === "ope")
                // console.log(expression, prev.toString().length === 0)
                setstartzero("true");
                if (expression === "00") {
                    setstartzero("doubletrue");

                }
                setprev(prev.toString() + "num");
                setexpress(express + expression);
            }
            else {

                setprev(prev.toString() + "num");
                setexpress(express + expression);

            }
        }
        else if (action === "operator") {
            if (prev.toString() === "dot") {

            }

            else if ((express.toString().length === 0) && prev.toString().length === 0) {
                // else if(prev.toString().length === 0) {
                if (expression === "+" || expression === "-") {
                    setprev(prev.toString() + "ope");
                    setexpress(express + expression);
                    setcurrent("");
                }
            }
            else if (!((prev.toString().substring(prev.toString().length - 3, prev.toString().length)) === "ope")) {
                console.log("operator working");
                if (current.toString() === "dot") {
                    setprev(prev.toString() + "dot" + "ope");
                }
                else {
                    setprev(prev.toString() + "ope");

                }
                setexpress(express + expression);
                setcurrent("");
            }
            else {
                setexpress(express.substring(0, express.length - 1) + expression);
                if (!(prev.toString().substring(prev.toString().length - 6, prev.toString().length - 3) === "dot")) {
                    setprev(prev.toString() + "dot" + "ope");
                }
                setcurrent("");

            }
        }
        else if (action === "dot") {
            if (prev.toString().length === 0 && express.toString().includes(".")) {

                console.log("dot working");
            }
            else if (!express.toString().includes(".") || !((prev.toString().substring(prev.toString().length - 3, prev.toString().length)) === "dot") && current.toString() !== "dot") {

                setexpress(express + expression);
                setprev("dot");
                setcurrent("dot");
                setstartzero("false");
            }
            console.log(prev.toString());
        }
        else if (action === "clear") {
            setexpress("");
            setprev("");
            setcurrent("");
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
                    {/* <div className='clickable' onClick={()=>{ const val=express;console.log(express);setexpress(val+""+1)}}> */}
                    <div className="row1">
                        <div className='clickable' onClick={() => { func_click("clear", "") }}>
                            <Keyss id={"C"} value={"C"} />
                        </div>
                        <div className='clickable' onClick={() => { deletes() }}>
                            <Keyss id={"del"} value={"del"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("operator", "%") }}>
                            <Keys id={"%"} value={"%"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("operator", "+") }}>
                            <Keys id={"+"} value={"+"} />

                        </div>
                    </div>
                    <div className="rows">
                        <div className='clickable' onClick={() => { func_click("num", "1") }}>
                            <Keys id={1} value={1} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "2") }}>
                            <Keys id={2} value={2} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "3") }}>
                            <Keys id={3} value={3} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("operator", "-") }}>
                            <Keys id={"-"} value={"-"} />
                        </div>


                    </div>
                    <div className="rows">
                        <div className='clickable' onClick={() => { func_click("num", "4") }}>
                            <Keys id={4} value={4} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "5") }}>
                            <Keys id={5} value={5} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "6") }}>
                            <Keys id={6} value={6} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("operator", "*") }}>
                            <Keys id={"*"} value={"*"} />
                        </div>

                    </div>
                    <div className="rows">
                        <div className='clickable' onClick={() => { func_click("num", "7") }}>
                            <Keys id={7} value={7} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "8") }}>
                            <Keys id={8} value={8} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "9") }}>
                            <Keys id={9} value={9} />

                        </div>
                        <div className='clickable' onClick={() => { func_click("operator", "/") }}>
                            <Keys id={"/"} value={"/"} />
                        </div>


                    </div>
                    <div className="rows">
                        <div className='clickable' onClick={() => { }}>
                            <Keys id={"sci"} value={"sci"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "0") }}>
                            <Keys id={"0"} value={"0"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("dot", ".") }}>
                            <Keys id={"."} value={"."} />
                        </div>

                        <div className='clickable' onClick={() => { calc() }}>
                            <Keyss id={"="} value={"="} />
                        </div>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default UI