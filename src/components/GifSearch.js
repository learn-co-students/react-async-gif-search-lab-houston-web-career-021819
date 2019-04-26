import React from 'react'


export default class GifSearch extends React.Component {

    state = {
        inputValue: ""
    }

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        //  console.log ("fired")
        event.preventDefault()
        this.props.callBack(this.state.inputValue)
    }
     
    render() {
        return(
           <form onSubmit={ (event) => this.handleSubmit(event)}>
                <p>Enter A Search Term:</p>
                <input type="text" value={this.state.inputValue} onChange=
                {this.handleChange}/>
                <button type="submit">Find Gifs</button>
            </form>
        )
    
    }
}