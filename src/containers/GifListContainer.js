import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';



export default class GifListContainer extends React.Component {

    state = {
        gif: []
    }

    callBack = (inputValue) => {
        // console.log(inputValue)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
        .then(res => res.json())
        .then( gifData => {
            this.setState({
            gif: gifData.data
            })
        })
    }


    render(){
        console.log(this.state.gif)
        return(
            <div> 
            {this.state.gif.slice(0,3).map( gif=>  (
            <GifList {...gif}/>

            
            )
        )}
        <GifSearch callBack = {this.callBack}/>
            
            </div>
        )
    }



    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl')
        .then(res => res.json())
        .then( gifData => {
            this.setState({
            gif: gifData.data
            
        })
    })
    }
}

