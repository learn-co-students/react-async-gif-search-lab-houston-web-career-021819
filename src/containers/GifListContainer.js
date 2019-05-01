import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    filterGifs = (input) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
        .then( res => res.json() )
        .then( gifData => {
            this.setState({
                gifs: gifData.data
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.gifs.slice(0,3).map( gif => (
                    <GifList {...gif} />
                    )
                )}
                <GifSearch filterGifs={this.filterGifs}/>
            </div>
        )
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
        .then( res => res.json() )
        .then( gifData => {
            this.setState({
                gifs: gifData.data
            })
        })
    }



}