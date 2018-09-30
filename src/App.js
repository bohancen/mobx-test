import React, { Component } from 'react';
import {observer,inject,PropTypes as ObservablePropTypes} from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.store.postStore)
    return (
      <React.Fragment>
        {this.props.store.postStore.post.length}
        <button onClick={this.props.store.postStore.addpost}>增加</button>
      </React.Fragment>
    )
  }
}

export default App;
