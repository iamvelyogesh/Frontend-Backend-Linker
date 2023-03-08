// This is done by Vel Yogesh C B 727721eucs175

import React, { Component } from "react";
import axios from "axios";
import "./Nennw.css";
import "./Table1.css";

class Nennw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleName: "",
            fuelType: "",
            fuelConsumption: "",
            fuelPrice: "",
            fuelAmount: "",
            dateee: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/fuel").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handlevehicleNameChange = (event) => {
        this.setState({ vehicleName: event.target.value });
    };
    handlefuelType = (event) => {
        this.setState({ fuelType: event.target.value });
    };
    handlefuelConsumption = (event) => {
        this.setState({ fuelConsumption: event.target.value });
    };
    handlefuelPrice = (event) => {
        this.setState({ fuelPrice: event.target.value });
    };
    handlefuelAmount = (event) => {
        this.setState({ fuelAmount: event.target.value });
    };
    handledateee = (event) => {
        this.setState({ dateee: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            vehicleName: this.state.vehicleName,
            fuelType: this.state.fuelType,
            fuelConsumption: this.state.fuelConsumption,
            fuelPrice: this.state.fuelPrice,
            fuelAmount: this.state.fuelAmount,
            dateee: this.state.dateee,
        };
        console.log(data);
        axios.post("http://localhost:8080/fuel", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                vehicleName: "",
                fuelType: "",
                fuelConsumption: "",
                fuelPrice: "",
                fuelAmount: "",
                dateee: "",
            });
        });
    };

    // handleUpdate = (id, data) => {
    //     // Send PUT request to update fuel data with the given ID
    //     axios.put(`http://localhost:8080/fuel/${id}`, data).then((response) => {
    //         // Update the state to reflect the updated fuel data
    //         const updatedFuelData = this.state.fuelData.map((fuel) => {
    //             if (fuel.id === response.data.id) {
    //                 return response.data;
    //             } else {
    //                 return fuel;
    //             }
    //         });
    //         this.setState({ fuelData: updatedFuelData });
    //     });
    // };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/fuel/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (fuel) => fuel.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            vehicleName: data.vehicleName,
            fuelType: data.fuelType,
            fuelConsumption: data.fuelConsumption,
            fuelPrice: data.fuelPrice,
            fuelAmount: data.fuelAmount,
            datee: data.datee,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            vehicleName: this.state.vehicleName,
            fuelType: this.state.fuelType,
            fuelConsumption: this.state.fuelConsumption,
            fuelPrice: this.state.fuelPrice,
            fuelAmount:this.state.fuelAmount,
            datee:this.state.datee,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:8080/fuel/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    vehicleName: "",
                    fuelType: "",
                    fuelConsumption: "",
                    fuelPrice: "",
                    fuelAmount:"",
                    datee:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">Vehicle Name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.vehicleName}
                        onChange={this.handlevehicleNameChange}
                    />
                    <br /><br />
                    <label className="login-label">Fuel Type</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.fuelType}
                        onChange={this.handlefuelType}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Consumption</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.fuelConsumption}
                        onChange={this.handlefuelConsumption}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Price</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.fuelPrice}
                        onChange={this.handlefuelPrice}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Amount</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.fuelAmount}
                        onChange={this.handlefuelAmount}
                    />
                    <br /><br />

                    <label className="login-label">Datee</label>
                    <input
                        className="fuel"
                        type="date"
                        value={this.state.dateee}
                        onChange={this.handledateee}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>Vehicle Name</th>
                            <th>Fuel Type</th>
                            <th>Fuel Consumption</th>
                            <th>Fuel Price</th>
                            <th>Fuel Amount</th>
                            <th>Datee</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.vehicleName}</td>
                                <td>{data.fuelType}</td>
                                <td>{data.fuelConsumption}</td>
                                <td>{data.fuelPrice}</td>
                                <td>{data.fuelAmount}</td>
                                <td>{data.dateee}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>Vehicle Name:</label>
                    <input
                        type="text"
                        name="vehicleName"
                        value={this.state.vehicleName}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Type:</label>
                    <input
                        type="text"
                        name="fuelType"
                        value={this.state.fuelType}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Consumption:</label>
                    <input
                        type="number"
                        name="fuelConsumption"
                        value={this.state.fuelConsumption}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Price:</label>
                    <input
                        type="number"
                        name="fuelPrice"
                        value={this.state.fuelPrice}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Amount:</label>
                    <input
                        type="number"
                        name="fuelAmount"
                        value={this.state.fuelAmount}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="datee"
                        value={this.state.dateee}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Nennw;
