import React from 'react'

export default class GifSearch extends React.Component{
    state = {
        searchTerm:""
    }

    handleChange = (e) =>{
        this.setState({
            searchTerm :e.target.value
        })
      }
   
   
    handleSubmit = (e) =>{
      e.preventDefault()
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
      .then(res => res.json())
      .then(newGifs => {
          this.props.gifs(newGifs.data.map(imageObj=>imageObj.images.original))//call function in parent to change gifs array
      })
    }
    
    render(){
        return(
            <div>
              <form onSubmit = {(e) => this.handleSubmit(e)}>
                 <label>Enter a Serch Tearm</label><br/>
                 <input type = "text" onChange = {(e) => this.handleChange(e)}/><br/>
                 <button type = "submit"> Find Gifs</button>
              </form>
            </div>
        )
    }
}
