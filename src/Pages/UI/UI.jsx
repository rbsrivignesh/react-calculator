import React, { useState, useEffect, useRef, useContext } from 'react'
import './UI.css';
import Keys from '../../Components/Keys/Keys'
import Keyss from '../../Components/Keyss/Keyss'
import click from '../../Components/audio/click.mp3'
import soup from '../../Components/audio/soup.mpeg'
import { CalculatorContext } from '../../Context/CalculatorContext';
import { Route, Router } from 'react-router-dom';





const UI = () => {

    // const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    const audio = new Audio(soup)
    audio.volume = 0.5;
    const buttons = document.querySelectorAll(".result");

    // buttons.forEach(button => {
    //     button.addEventListener("click", () => {

    //         audio.play();
    //     });
    // });
    const { express, setexpress } = useContext(CalculatorContext)
    const [equal, setequal] = useState("");
    // const [express, setexpress] = useState("")
    const [current, setcurrent] = useState("")
    const [startzero, setstartzero] = useState("");
    const [prev, setprev] = useState("");
    const [mul, setmul] = useState("");
    const menu = useRef();
    const menu1 = useRef();
    const [result, setresult] = useState("");
    const [prevexpress, setprevexpress] = useState("");
    const [prevsafe, setprevsafe] = useState("");

    useEffect(() => {

    }, [express])
    const calc = () => {
        if (express.toString().length !== 0 && equal !== "true") {

            menu.current.classList.toggle("equals_express");
            menu1.current.classList.toggle("equals_result");
        }


        if (express.toString().length !== 0) {


            try {
                const strings = express.toString();
                if (strings === "143") {
                    audio.play();
                    setTimeout(() => {

                        alert("சூத்த மூடிட்டு இருக்க மாட்டியாடா ?  ");
                    }, 500)




                }

                console.log(strings.toString().substring(strings.toString().length - 1) + " " + prev.toString());
                if (prev.toString().substring(prev.toString().length - 3) === "ope") {
                    setexpress("");
                    setprev("");
                    setcurrent("");

                }
                else {
                    if (strings.includes("%")) {
                        // let ans = eval(strings);
                        console.log("working")
                        let anss = strings.replace("%", "*(1/100)*");
                        console.log(anss + ",.,");
                        let ans = eval(anss);
                        setprevexpress(express);
                        setexpress(ans);
                        setresult(ans);
                        setprevsafe(prev);
                        setprev("");
                        setequal("true");
                    }
                    else {
                        let ans = eval(express);
                        setprevsafe(prev);
                        setprev("");
                        setresult(ans);

                        setprevexpress(express);
                        setexpress(ans);
                        setequal("true");
                    }
                }

            }
            catch (err) {
                console.log(err);
                setexpress("error")
            }
        }


    }
    const deletes = () => {
        // setresult("");
        var expressing = express.toString();
        var previous = prev.toString();
        if (equal === "true") {
            // const anss = result.toString().substring(0, result.toString().length - 1); setresult(anss)
            setexpress(prevexpress);
            console.log(express + "  ???")
            setresult("");
            setprev(prevsafe);
            previous = prevsafe;
            console.log(prev.toString() + "  is this working")
            menu.current.classList.toggle("equals_express");
            menu1.current.classList.toggle("equals_result");

            expressing = prevexpress.toString();

        }

        if (express.toString() === "error" || express.toString() === "Infinity" || express.toString() === "NaN") {
            setprev("");
            setcurrent("");
            setexpress("");
        }
        else {
            if (equal !== "true") {

                setprev(previous.toString().substring(0, previous.toString().length - 3));
                if (previous.toString().substring(previous.toString().length - 3, previous.toString().length) === "dot") {
                    setcurrent("dot");
                    setprev(previous.toString().substring(0, previous.toString().length - 3));

                }
            }
            const strings = expressing.toString();
            console.log(previous.toString());


            if (strings.length !== undefined) {
                // if(strings==="error")
                if (equal === "true") {
                    setequal("false");
                    var ans = strings.substring(0, strings.length); setexpress(ans)

                }
                else {
                    var ans = strings.substring(0, strings.length - 1); setexpress(ans)

                }
                console.log("working ???")
            }
        }

    }
    const func_click = (action, expression) => {
        console.log(express + ".." + prev + ".." + action + ".." + expression);
        setresult("");

        if (equal.toString() === "true") {
            menu.current.classList.toggle("equals_express");
            menu1.current.classList.toggle("equals_result");
            setequal("false");
        }
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
            var str = expression.toString();
            console.log(typeof str + " " + expression + " " + expression.includes("+"));
            if (express.toString().length == 1 && (express.toString() === "+" || express.toString() === "-") && (!expression.includes("+") && !expression.includes("-"))) {
                // console.log(express + "...express");
                // console.log(expression + "...expression");
                // const exp = express;
                // const expr = expression;
                // console.log(exp + " testing " + expr + " " + typeof exp);
                // console.log("expr === " + expr);
                // console.log(expr === "+" + "is this working ");
                // console.log("expr === " + expr);
                // console.log(expr === "-" + "is this working ");
                // console.log(exp + " testing " + expr + " " + typeof expr);

                // console.log(typeof expression);
                // console.log(express.toString().length == 1);
                // console.log(express.toString() === "+" || express.toString() === "-");
                // console.log(".=." + expression.toString() !== "+" || expression.toString() !== "-");
                // console.log(".=." + expression.toString() + "..." + expression.toString() !== "-");

            }
            else if (prev.toString() === "dot") {

            }

            else if ((express.toString().length === 0) || prev.toString().length === 0) {
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
                setstartzero("false");
            }
            else {
                console.log(express.toString().substring(express.length - 1));
                if (express.toString().substring(express.length - 1) === "*") {
                    if (expression === "+" || expression === "-") {
                        setprev(prev.toString() + "ope");
                        setcurrent("");
                        setstartzero("false");
                        setexpress(express + expression);
                        setmul("true");


                    }
                    else {

                        setexpress(express.substring(0, express.length - 1) + expression);
                        if (!(prev.toString().substring(prev.toString().length - 6, prev.toString().length - 3) === "dot")) {
                            setprev(prev.toString() + "dot" + "ope");
                        }
                        setstartzero("false");
                        setcurrent("");
                        console.log(prev.toString());

                    }
                }
                else {
                    if (mul.toString() === "true") {
                        setexpress(express.substring(0, express.length - 2) + expression);
                        if (!(prev.toString().substring(prev.toString().length - 6, prev.toString().length - 3) === "dot")) {
                            setprev(prev.toString() + "dot" + "ope");
                        }
                        setstartzero("false");
                        setcurrent("");
                        setmul("false");
                        console.log(prev.toString())
                    }
                    else {

                        setexpress(express.substring(0, express.length - 1) + expression);
                        if (!(prev.toString().substring(prev.toString().length - 6, prev.toString().length - 3) === "dot")) {
                            setprev(prev.toString() + "dot" + "ope");
                        }
                        setstartzero("false");
                        setcurrent("");
                        console.log(prev.toString());
                    }

                }

            }
        }
        else if (action === "dot") {
            if (prev.toString().length === 0 && express.toString().includes(".")) {

                console.log("dot working");
            }
            else if (!express.toString().includes(".") || !((prev.toString().substring(prev.toString().length - 3, prev.toString().length)) === "dot") && current.toString() !== "dot") {

                setexpress(express + expression);
                setprev(prev + "dot");
                setcurrent("dot");
                setstartzero("false");
            }
            console.log(prev.toString());
        }
        else if (action === "clear") {
            setexpress("");
            setprev("");
            setcurrent("");
            setresult("");
        }
    }

    const sci = () => {
        menu.current.classList.toggle("equals_express");
        // console.dir(keyspan);
    }
    const valueUpdate = () => {
        if (equal === "true") {
            return prevexpress.toString();
        }
        else {
            return express.toString();
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
                    <div className='expression'>

                        <input ref={menu} type="text" id='express' value={valueUpdate()} placeholder='calculator' onChange={() => {
                            valueUpdate();
                        }} />
                    </div>
                    <div className='resultexpression'>

                        <input ref={menu1} type="text" id='result' value={result} />
                    </div>
                    {/* <button id='express'>{express}</button> */}

                </div>
                <div className='allkeys'>
                    {/* <div className='clickable' onClick={()=>{ const val=express;console.log(express);setexpress(val+""+1)}}> */}
                    <div className="row1">
                        <div className='result' onClick={() => { func_click("clear", "") }}>
                            <Keyss id={"C"} value={"C"} />
                        </div>
                        <div className='result' onClick={() => { deletes() }}>
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
                        <div className='clickable' onClick={() => { sci() }}>
                            <Keys id={"sci"} value={"sci"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("num", "0") }}>
                            <Keys id={"0"} value={"0"} />
                        </div>
                        <div className='clickable' onClick={() => { func_click("dot", ".") }}>
                            <Keys id={"."} value={"."} />
                        </div>

                        <div className='result' onClick={() => { calc() }}>
                            <Keyss id={"="} value={"="} />
                        </div>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default UI