import {observable} from 'mobx';
import Red from './Red';
import Capa from './Capa';
import Neurona from './Neurona';

class {
  @observable red;
  constructor() {
    const capas = [];
    const neuronasEntrada = Array(10).map(() => new Neurona());
    const capaEntrada = (new Capa(neuronasEntrada));
    capas.push(capaEntrada);
    const capaOculta1 = new Capa(Array(10).map(() => new Neurona()));
    const capaOculta2 = new Capa(Array(10).map(() => new Neurona()));
    const capaOculta3 = new Capa(Array(10).map(() => new Neurona()));
    capaOculta1.entradas = capaEntrada.salidas;
    
    capas.push(capaOculta1, capaOculta2, capaOculta3);

    this.red = new Red(capas);
  }
}
