import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          This is the Neural Network Practice
        </h1>
      </div>
    )
  }
}
export default App;