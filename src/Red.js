import Neurona from './Neurona';
import Capa from './Capa';
import { tranings } from './Conf';

export default class Red {
  constructor(entradas) {
    this.capaEntrada = new Capa(10, entradas);
    this.capaSalida = new Capa(1, undefined);
  }

  getArregloIdentidad(n) {
    const arr = new Array(10).fill(0);
    arr[n] = 1;
    return arr;
  }

  entrenarConSet() {
    for(let i = 0; i < 10; i++) {
      tranings[i].forEach((set) => {
        const entradas = set.join().split(',').map(n => parseInt(n));
        console.log(entradas);
        this.entrenarCapaEntrada(entradas,this.getArregloIdentidad(i));
      })
    }
  }


  guardarPesos() {
    const pesosEntrada = [];
    const pesosSalida = [];
    this.capaEntrada.neuronas.forEach((neurona, index) => {
      pesosEntrada.push(neurona.pesos);
    });
    this.capaSalida.neuronas.forEach((neurona, index) => {
      pesosSalida.push(neurona.pesos);
    });

    return {
      entrada: pesosEntrada,
      salida: pesosSalida
    }
  }

  setEntradas(entradas) {
    this.capaEntrada.setEntradas(entradas);
  }

  obtenerResultadosEntrada(entradas) {
    this.capaEntrada.setEntradas(entradas);
    return this.capaEntrada.getSalidas();
  }

  getSalidasOfEntrada() {
    return this.capaEntrada.getSalidas();
  }

  entrenarCapaEntrada(entradas, valoresDeseados) {
    this.capaEntrada.setEntradas(entradas);
    this.capaEntrada.entrenarNeuronas(valoresDeseados);
  }

  entrenarCapaSalida(valoresDeseados) {
    this.capaSalida.setEntradas(this.capaEntrada.getSalidas());
    this.capaSalida.entrenarNeuronas(valoresDeseados);
  }
}