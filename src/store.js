import {observable} from 'mobx';
import Red from './Red';
import Neurona from './Neurona';
import Conf from './Conf';

class Store {
  @observable red = new Red();
  @observable conf = Conf;
  @observable deseado = 1;
  neurona = undefined;

  changeValue(chkIndex, arrIndex) {
    console.log(this.conf[arrIndex]);
    const casilla = this.conf[arrIndex][chkIndex];
    if(casilla===0) {
      this.conf[arrIndex][chkIndex] = 1;
    } else {
      this.conf[arrIndex][chkIndex] = 0;      
    }
  }

  mostrarEntrenamiento() {
    const entradas = this.conf.join().split(',');
    if(this.neurona === undefined) {
      this.neurona = new Neurona(entradas);
    }
    // const neurona = new Neurona(entradas);
    console.log(this.neurona);
    const salida = this.neurona.activacion();
    const error = this.deseado - salida;
    this.neurona.entrenar(error, this.deseado);
    console.log(this.neurona);
  }

}

const store = new Store();

export default store;
