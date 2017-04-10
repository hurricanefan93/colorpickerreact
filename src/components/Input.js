import React, { Component } from 'react'

class Input extends Component {

render () {
  return <input type='range' step={this.props.step} max={this.props.max} onInput={this.props.onInput} />
}
}

export default Input
