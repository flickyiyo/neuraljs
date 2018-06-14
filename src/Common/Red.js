// import Capa from './Capa';
const Capa = require('./Capa');
const _ = require('lodash');

module.exports = class Red {
  /**
   * 
   * @param {Array<Capa>} capas 
   */
  constructor(capas) {
    this.capas = capas;
  }

  /**
   * 
   * @param {Array} entradas 
   */
  feedforward(entradas) {
    this.capas[0].entradas = entradas;
    for (let i = 0; i < this.capas.length; i++) {
      this.capas[i].getSalidas();
    }
  }

  /**
   * 
   * @param {Array} entradas 
   */
  setEntradas(entradas) {
    this.capas[0].setEntradas(entradas);
  }

  /**
   * 
   * @param {Array} valoresEsperados 
   * @param {Array} valoresActuales 
   */
  getErrores(valoresEsperados, valoresActuales) {
    if (valoresEsperados.length === valoresActuales.length) {
      const errores = new Array(valoresEsperados.length).fill(0);
      valoresActuales.forEach((valor, indiceValor) => {
        errores[indiceValor] = valoresEsperados[indiceValor] - valor;
      });
      return errores;
    }
    else {
      throw new Error('Los dos arreglos tienen que ser del mismo tamaño en getErrores');
    }
  }

  /**
   * 
   * @param {Array} valoresEsperadosSalida 
   */
  backpropagation(valoresEsperadosSalida) {
    for (let i = this.capas.length - 1; i >= 0; i--) {
      if (i === this.capas.length - 1) {
        const salidas = this.capas[i].getSalidas();
        const errores = this.getErrores(valoresEsperadosSalida, salidas);
        this.capas[i].entrenarCapa(valoresEsperadosSalida);
      }
    }
  }

  /**
   * 
   * @param {Array} valoresEsperadosSalida 
   */
  entrenar(valoresEsperadosSalida) {

  }
}