import React from 'react'


export default class GifList extends React.Component {
    
    render(){
        return(
            <ul>
                <img src={this.props.images.original.url}/>                
            </ul>
        )
    }
}