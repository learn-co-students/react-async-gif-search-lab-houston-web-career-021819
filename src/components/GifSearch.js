import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        inputValue: ""
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filterGifs(this.state.inputValue)
    }

    render(){
        return(
            <form onSubmit= { (event) => this.handleSubmit(event)}>
                <p>Enter a Search Term:</p>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                <button type="submit">Find Gifs</button>
            </form>
        )
    }
}