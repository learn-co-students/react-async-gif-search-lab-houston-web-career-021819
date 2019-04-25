import React from 'react'

export default class GifList extends React.Component {

  render() {
    console.log(this.props)
    return (
      <ul>
        <li>
          <img src={this.props.first === null ? "" : this.props.first.images.original.url} alt=""/>
        </li>

        <li>
          <img src={this.props.second === null ? "" : this.props.second.images.original.url} alt=""/>
        </li>

        <li>
          <img src={this.props.third === null ? "" : this.props.third.images.original.url} alt=""/>
        </li>
      </ul>
    )
  }
}
