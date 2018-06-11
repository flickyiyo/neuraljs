import React from 'react';
import LineOfChecks from './LineOfChecks';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind';

@inject('store') @observer
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.changeCheck = this.changeCheck.bind(this);
  }
  @autobind
  changeCheck(chkIndex, arrIndex) {
    this.props.store.changeValue(chkIndex, arrIndex);
  }

  @autobind
  changeExpected(ev) {
    this.props.store.setExpected(parseInt(ev.target.value))
  }

  render() {
    const chks = this.props.store.conf;
    const rendereables = chks.map((arr, arrIndex) => {
      return (
        <div>
          {
            arr.map((chk, chkIndex) => (
              <input type="checkbox" checked={chk === 1} onClick={() => this.changeCheck(chkIndex, arrIndex)} />
            ))
          }
        </div>
      )
    });


    const deseado = (
      <div>
        <input type="radio" name="des" value={0} onChange={this.changeExpected}  /> 0 
        <input type="radio" name="des" value={1} onChange={this.changeExpected} /> 1
        <input type="radio" name="des" value={2} onChange={this.changeExpected} /> 2
        <input type="radio" name="des" value={3} onChange={this.changeExpected} /> 3
        <input type="radio" name="des" value={4} onChange={this.changeExpected} /> 4
        <input type="radio" name="des" value={5} onChange={this.changeExpected} /> 5
        <input type="radio" name="des" value={6} onChange={this.changeExpected} /> 6
        <input type="radio" name="des" value={7} onChange={this.changeExpected} /> 7
        <input type="radio" name="des" value={8} onChange={this.changeExpected}  /> 8
        <input type="radio" name="des" value={9} onChange={this.changeExpected}  /> 9
      </div>
    )

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
        <div>
          <input
            type="number"
            onChange={(ev) => {
              this.props.store.deseado = ev.target.value;
            }}
            value={this.props.store.deseado}
          />
          <button onClick={() => this.props.store.mostrarEntrenamiento()} >Entrenar</button>
          <button onClick={this.props.store.obtenerValor} >Obtener Resultados</button>
        </div>
        <div>
          {
            deseado
          }
        </div>
      </div>
    )
  }
}
export default App;