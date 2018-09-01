import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MobxApp from './MobxApp';
import registerServiceWorker from './registerServiceWorker';

import {observable, action} from 'mobx'
class Store {
  @observable queue = []
  @action.bound add(){
    this.queue.push(1)
  }
}
const store = new Store()

ReactDOM.render(<MobxApp store={store} />, document.getElementById('root'));
registerServiceWorker();
