import React, { PropTypes, Component } from 'react'
import { HelloWorld } from '~/components'

export class AppContainer extends Component {
  render () {
    return (
      <div>
      <div>APP</div>
      <HelloWorld />
      </div>
    )
  }
}
