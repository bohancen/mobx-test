import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {observer,PropTypes as ObservablePropTypes} from 'mobx-react'

@observer
class App extends Component {
  static propTypes = {
    store:PropTypes.shape({
      add: PropTypes.func,
      queue: ObservablePropTypes.observableArray
    })
  }
  render() {
    return (
      <h2>{this.props.store.queue.length} <button onClick={this.props.store.add}></button></h2>
    )
  }
}

export default App;
