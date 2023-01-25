import React,{Component} from "react";

class Heading extends Component{
    constructor(props){
        super(props)
        this.state = {id:''}
    }
    render(){
        return (
        <div id={this.props.id}>
            <h1>HI THERE</h1>
        </div>
        )

        }

}

export default Heading;