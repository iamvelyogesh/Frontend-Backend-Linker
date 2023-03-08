import React,{Component} from "react";
import axios from "axios";

class Create extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        vehicleName:'',
        fuelType:'',
        fuelConsumption:'',
        fuelPrice:'',
        fuelAmount:'',
        dateee:'',
    };
    }

    handlevehicleNameChange = (event) =>{
        this.setState({ vehicleName : event.target.value});
    };
    handlefuelType = (event) =>{
        this.setState({ fuelType : event.target.value});
    };
    handlefuelConsumption = (event) =>{
        this.setState({ fuelConsumption : event.target.value});
    };
    handlefuelPrice = (event) =>{
        this.setState({ fuelPrice : event.target.value});
    };
    handlefuelAmount = (event) =>{
        this.setState({ fuelAmount: event.target.value});
    };
    handledateee = (event) =>{
        this.setState({ dateee : event.target.value});
    };

    handleSubmit = (event) => {
        const data ={
            vehiclename: this.state.vehicleName,
            fueltype: this.state.fuelType,
            fuelconsumption: this.state.fuelType,
            fuelprice: this.state.fuelPrice,
            fuelamount: this.state.fuelAmount,
            datee: this.state.dateee,
        };
        axios.post('http://localhost:8080/fuel',data)
    };

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="fuel" >
               <label className="login-label">Vehicle Name</label>
               <input
               className="fuel"
               type="text"
               value={this.sate.vehicleName}
               />
               <label className="login-label">Fuel Type</label>
               <input
               className="fuel"
               type="text"
               value={this.sate.fuelType}
               />
               <label className="login-label">Fuel Consumption</label>
               <input
               className="fuel"
               type="text"
               value={this.sate.fuelConsumption}
               />
               <label className="login-label">Fuel Amount</label>
               <input
               className="fuel"
               type="te"
               value={this.sate.fuelAmount}
               />
               <label className="login-label">Datee</label>
               <input
               className="fuel"
               type="text"
               value={this.sate.dateee}
               />
               <button className="submitt" type="submit">

               </button>
               </form>
               );
               
    }
}