import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
   state = {
       gifs:[]
   }

    componentDidMount(){
      fetch('http://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl')
      .then(res => {return res.json()})
      .then(gifsData => {
        //console.log(gifsData.data.map(imageObj=>imageObj.images))
          this.setState({
              gifs:gifsData.data.map(imageObj=>imageObj.images.original)
          })
        
      })
    }
  
    fetchNewGifs = (newGifs) =>{
        console.log(newGifs)
        this.setState({
            gifs:newGifs
        })
    }
   
    render(){
        return(
            <div>
                <GifSearch handleChange = {this.handleChange} gifs = {this.fetchNewGifs}/>
                <ul>
                  {this.state.gifs.map(gif => <GifList {...gif} />)}
                </ul>
            </div>
        )
    }
}
