import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class Colorvalue extends Component {
  render () {
    return <div className='colorvalue'>
      <span>{store.color}</span>
    </div>
  }
}

export default Colorvalue
