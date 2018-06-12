import { observable } from 'mobx';
import Red from './Red';
import Neurona from './Neurona';
import Conf from './Conf';
import autobind from 'autobind-decorator';

class Store {
  @observable conf = Conf;
  @observable deseado = 1;
  deseados = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];

  setExpected(value) {
    this.deseados = this.deseados.map((v, i) => {
      if (i === value) {
        return 1;
      }
      return 0;
    });
    console.log(this.deseados);
  }
  @autobind
  trainWithSet() {
    this.red.entrenarConSet();
  }

  neurona = undefined;
  constructor() {
    this.red = new Red(this.conf.join().split(',').map(n => parseInt(n)));
  }
  changeValue(chkIndex, arrIndex) {
    const casilla = this.conf[arrIndex][chkIndex];
    if (casilla === 0) {
      this.conf[arrIndex][chkIndex] = 1;
    } else {
      this.conf[arrIndex][chkIndex] = 0;
    }
  }
  @autobind
  obtenerValor() {
    this.red.entrenarConSet();
    const entradas = this.conf.join().split(',');
    console.log(this.red.obtenerResultadosEntrada(entradas));
  }


  mostrarEntrenamiento() {
    const entradas = this.conf.join().split(',');
    this.red.entrenarCapaEntrada(entradas, this.deseados);
    console.log(this.red.capaEntrada);
    // if(this.neurona === undefined) {
    //   this.neurona = new Neurona(entradas);
    // }
    // // const neurona = new Neurona(entradas);
    // console.log(this.neurona);
    // const salida = this.neurona.activacion();
    // const error = this.deseado - salida;
    // this.neurona.entrenar(error, this.deseado);
    // console.log(this.neurona);
  }

}

const store = new Store();

export default store;
