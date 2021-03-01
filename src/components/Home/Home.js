import React from 'react'
import {useState} from "react";
import {Component} from 'react'
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import './Home.css'
//import ElevateButton from './ElevateButton.js'

export class Home extends Component
{
	constructor(props)
    {
        super(props);

        //Define initial state--all will be false
		/*const [isGM, setGM] = useState(false);
		const [ isShiftManager, setIsShiftManager ] = useState(false);
		const [ isCashier, setIsCashier ] = useState(false);*/
		
		this.state = 
		{
			//isGeneralManager: true,
			isShiftManager: false,
            isCashier: false,
        };
        this.isGM = false;

        //console.log('initial gm is ' + this.state.isGeneralManager);
		//console.log('initial gm is ' + this.isGeneralManager);
    }

    toggleBoolean = (option) =>
    {
        console.log('option value is ' + option);
        //console.log('GM boolean is ' + this.isGeneralManager);
        console.log('GM boolean is ' + this.isGM);
        if(option == 1)
        {
            console.log('Entered Option 1')
            //this.setState({[setIsGeneralManager]: !setIsGeneralManager});
            //console.log('gm is ' + this.isGeneralManager)
            this.isGM = true;
            console.log('gm is ' + this.isGM);
        }
		
        if(option == 2)
        {
            console.log('Entered Option 2')
			this.setState({ isShiftManager: !this.state.isShiftManager });
			//this.setState({ isShiftManager: true });
			//setIsShiftManager(true);
            console.log('sm is ' + this.state.isShiftManager)
        }
		
		if(option == 3)
        {
            console.log('Entered Option 3')
			this.setState({ isCashier: !this.state.isCashier });
			//this.setState({ isCashier: true });
			//setIsCashier(true);
            console.log('Cashier is ' + this.state.isCashier)
        }
    }

    ToggleGMButtons = () =>
    {

    }

    CreateEmployee = () =>
    {
        return <div>
            <Button variant="contained" color="primary" component={Link} to={"/test"}>
                    Create Employee
             </Button>
        </div>
    }

    CreateEmployee(props)
    {
        return  <Button variant="contained" color="primary" component={Link} to={"/test"}> Create Employee</Button>;
    }

    render()
    {
        //console.log('I am now rendering... and the state version is ' + this.state.isGeneralManager)
        
       if(this.state.isGeneralManager)
        {
            console.log('Hey! I clicked on the isGeneralManager button!')
            return <div>
                <Button variant="contained" color="primary" component={Link} to={"/test"}>
                    Create Employee
                </Button>
                <Button variant="contained" color="primary" component={Link} to={"/employd"}>
                    Employee Details
                </Button>
                <Button disabled variant="contained" color="primary">
                    Sales Report
                </Button>

            </div>
        }
		
		else if(this.state.isShiftManager)
        {
            return <div>
            <Button variant="contained" color="primary" component={Link} to={"/employd"}>
                Employee Details
            </Button>
            <Button disabled variant="contained" color="primary">
                Cashier Report
            </Button>
            </div>
        }
		
		else if(this.state.isCashier)
        {
            return <div>
                <Button disabled variant="contained" color="primary">
                    Start Transaction
                </Button>
                <Button variant="contained" color="primary" component={Link} to={"/shop"}>
                    Product List
                </Button>  

                </div>
        }
		
        else
        {
            return <div> Null </div>
        }
    }
}

/*
const Home = () => 
{	
	
	return(
	//Edited By Rudy Ramirez 2/18/21
	//Button disabled variant = unclickable button
	//Button variant = clickable buttton
	//I renamed the testing button to Create Employee since that was the function of the button.
	//Task 5 did not request the feature Employee Details Button but since it is a smart inclusion I am going to leave it alone.
	//I added a Sales Report Button and kept it unclickable.
        
		<div className={"mainMenu"}>
            {ILLUSTRATE BUTTON OPTIONS GIVEN THE USER THAT LOGGED IN}
            {EDITED BY FAH SYSAVANH. ALL OF RUDY'S BUTTONS IS IN THE ELEVATEBUTTON.JS FILE}
            {AT FIRST I THOUGHT IT WOULD BE EASIER TO DO CONDITIONAL RENDERING IN A DIFFERENT JS FILE... STILL WORKING ON IT}
                //<ElevateButton/>
        </div>
    
    )
	
}
*/

export default Home;