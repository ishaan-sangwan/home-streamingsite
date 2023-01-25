import React, {Component} from "react";
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class Formed extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.state = {value:'',password:'', resp_data:''}
    }

    handleSubmit(event){
        // console.log(this.state)
        // alert('a name was submitted :'+this.state.value+' '+this.state.password)
        const cred = {value:this.state.value, password:this.state.password}
        fetch("http://192.168.1.103:8000/api/posts?name="+this.state.value, {
            method:'POST',
            body:JSON.stringify(cred),
            headers:{'Content-type':'application/json'}

        }).then(response => response.text()).then(data => {
            this.setState({resp_data: data})
            console.log(this.state.resp_data)
        })
        
        event.preventDefault()
        
    }

    handleChange(event){
        this.setState({value:event.target.value})
        // event.PreventDefault()
    }

    handlePassChange(event){
        this.setState({password:event.target.value})
    }
    render(){
        // if (this.state.resp_data == ''){
        // return(
        //     <form id={this.props.id}>
        //         <label>
        //         name:
        //         <input type='text' value={this.state.value} onChange={this.handleChange}/>
        //         </label>

        //         <p>
        //         <label>
        //             password:
        //             <input type='password' ref="password" onChange={this.handlePassChange} value={this.state.password}/>
        //         </label>
        //         </p>
        //         <button onClick={this.handleSubmit} >clickme</button>
        //     </form>
        // )}
        // else{
        //     return this.state.resp_data
        // }
        return(
            <form id={this.props.id}>
                <label>
                name:
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>

                <p>
                <label>
                    password:
                    <input type='password' ref="password" onChange={this.handlePassChange} value={this.state.password}/>
                </label>
                </p>
                <button onClick={this.handleSubmit} >clickme</button>
            </form>
        )
    }

}


export default Formed;