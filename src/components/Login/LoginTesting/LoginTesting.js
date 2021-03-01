import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {findUser} from "../../../actions/users";
import {setTrue} from "../../../actions/auth";
import {Redirect} from "react-router-dom";
//import ElevateButton from "../../Home/ElevateButton.js"
import Home from "../../Home/Home.js";
import {toggleGMButtons} from "../../Home/Home.js";

const LoginTesting = () => {
    const [ generalManager ] = useState({employeeID: '12971', password:'1234'});
    const [ shiftManager ] = useState({employeeID: '90205', password:'1234'});
    const [ cashier ] = useState({employeeID: '08909', password:'1234'});
    const [ isAuth, setIsAuth ] = useState(false);

    //Edited by Fah Sysavanh
    //setting employee variables 
    const [isGManager,setIsGM] = useState(false);
    const [isSManager,setIsSM] = useState(false);
    const [isCashier,setIsCashier] = useState(false);
    const dispatch = useDispatch();


    const loginGeneralManager = () => {

        console.log("Logging in as a General Manager")
        dispatch(findUser(generalManager)).then(() => {
            let user = JSON.parse(sessionStorage.getItem("user"));

            if (user != null){
                //new ElevateButton().toggleBoolean('1');
                console.log("Login Success")
                setIsAuth(true);
                dispatch(setTrue());
                
            }else{
                console.log("Login Failed")
            }
        })
    };

    const loginShiftManager = () => {
        console.log("Logging in as a Shift Manager")
        dispatch(findUser(shiftManager)).then(() => {
            let user = JSON.parse(sessionStorage.getItem("user"));

            if (user != null){
                console.log("Login Success")
                setIsAuth(true);
                dispatch(setTrue());
            }else{
                console.log("Login Failed")
            }
        })
    };

    const loginCashier = () => {
        console.log("Logging in as a Cashier")
        dispatch(findUser(cashier)).then(() => {
            let user = JSON.parse(sessionStorage.getItem("user"));

            if (user != null){
                console.log("Login Success")
                setIsAuth(true);
                dispatch(setTrue());
            }else{
                console.log("Login Failed")
            }
        })
    };

    if(isAuth){
        return <Redirect to={'/home'} push/>
    }

    return (

        

        <div className={"loginTest"}>
            {/*<button onClick={loginGeneralManager}>Login as General Manager</button>*/}
            {/*() => {Login(); validateInput(loginData.employeeID,loginData.password)}} )*/}
            <button onClick = {() => {loginGeneralManager();new Home().toggleBoolean(1);}}>Login as General Manager</button>
    {/*<button onClick = {() => {loginGeneralManager();new Home().toggleBoolean(1);}}>Login as General Manager</button>*/}
            
            <button onClick={loginShiftManager}>Login as Shift Manager</button>
            <button onClick={loginCashier}>Login as Cashier</button>
        </div>
    )
}

export default LoginTesting