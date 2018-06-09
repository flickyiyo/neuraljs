import React from 'react';
import LineOfChecks from './LineOfChecks';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind';

@inject('store') @observer 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeCheck = this.changeCheck.bind(this);
  }

  changeCheck(chkIndex, arrIndex){
    this.props.store.changeValue(chkIndex, arrIndex);
  }

  render() {
    const chks = this.props.store.conf;
    const rendereables = chks.map((arr, arrIndex) => {
      return (
        <div>
          {
            arr.map((chk, chkIndex) => (
              <input type="checkbox" checked={chk===1} onClick={() => this.changeCheck(chkIndex, arrIndex)} />
            ))
          }
        </div>
      )
    });

    return (
      <div>
        <h1>
          This is the Neural Network Practice
        </h1>
        <div>
          {
            rendereables
          }
        </div>
      </div>
    )
  }
}
export default App;