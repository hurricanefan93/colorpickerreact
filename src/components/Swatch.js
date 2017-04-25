import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class Swatch extends Component {
  render () {
    let color = `hsla(${store.hue}, ${store.saturation}%, ${store.lightness}%, ${store.alpha})`
    return <div>
      <div className='swatch' style={{backgroundColor: color}} />
    </div>
  }
}

export default Swatch
