import React from "react";

class For extends React.Component{

    render(){

        return(
            <form onSubmit = {this.props.loadWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button className={"btn"}>Get Weather</button>
            </form>

        )
    }
}

export default For;
