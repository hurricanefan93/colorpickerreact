import React, { Component } from 'react'

class Colorvalue extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div className='colorvalue'>
        <span>{`hsla(${this.props.hue}, ${this.props.saturation}, ${this.props.lightness}, ${this.props.alpha})`}</span>
      </div>
    } else {
      return <div className='colorvalue'>
        <span>{`hsl(${this.props.hue}, ${this.props.saturation}, ${this.props.lightness})`}</span>
      </div>
    }
  }
}

export default Colorvalue
