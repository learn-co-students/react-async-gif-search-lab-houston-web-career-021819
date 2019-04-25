import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    state = {
        gif1: {},
        gif2: {},
        gif3: {}
    }

    submitHandler = (e, searchTerm) => {
        e.preventDefault()
        this.runFetch(searchTerm)
        // this.setState({searchTerm: searchTerm}, this.runFetch)
    }

    componentDidMount(){
        this.runFetch('cat')
    }

    runFetch = (searchTerm) => {
        // console.log(this.state.searchTerm)
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
            .then(res => res.json())
            .then(returnedData => {
                // console.log(returnedData.data[0])
                this.setState({
                    gif1: returnedData.data[0].images.original.url,
                    gif2: returnedData.data[1].images.original.url,
                    gif3: returnedData.data[2].images.original.url
                })
            })
    }

        render(){
            // console.log(this.state.searchTerm)
            // console.log(this.state.gif1)
            // console.log(this.state.gif2)
            // console.log(this.state.gif3)
            return(
                <div>
                    <GifSearch submitHandler={this.submitHandler}/>
                    <GifList url={this.state.gif1}/>
                    <GifList url={this.state.gif2}/>
                    <GifList url={this.state.gif3}/>
                </div>
            )
        }
}









