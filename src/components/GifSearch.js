import React, {Component} from 'react'

export default class GifSearch extends Component {

    state = {
        formData: ""
    }

    handleInput = (e) => {
        this.setState({formData: e.target.value})
    }

    render() {
        return(
            <div>
                <form onSubmit={(e)=>this.props.submitHandler(e, this.state.formData)}>
                    <input
                        type="text"
                        name="searchTerm"
                        value={this.state.formData}
                        onChange={(e)=>this.handleInput(e)}
                    ></input>
                    <input
                        type="submit"
                        name="submit"
                    ></input>
                </form>
                GifSearch
            </div>
        )
    }
}