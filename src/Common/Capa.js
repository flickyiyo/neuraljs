// import Neurona from './Neurona';
const Neurona = require('./Neurona');

module.exports = class Capa {
  /**
   * 
   * @param {Array<Neurona>} neuronas 
   */
  constructor(neuronas) {
    this.neuronas = neuronas;
  }

  calcularSalidas() {
    for (let i = 0; i < this.neuronas.length; i++) {
      this.neuronas[i].entradas = this.entradas;
      this.neuronas[i].activacion();
      this.salidas[i] = this.neuronas[i].salida;
    }
    return this.salidas;

  }

  /**
   * 
   * @param {Array} entradas 
   */
  setEntradas(entradas) {
    this.entradas = entradas;
    for (let i = 0; i < this.neuronas.length; i++) {

      this.neuronas[i].entradas = entradas;
    }
  }

  getSalidas() {
    for (let i = 0; i < this.neuronas.length; i++) {
      this.salidas = this.neuronas[i].salida;
    }
    return this.neuronas.map(neurona => neurona.salida);
  }

  /**
   * 
   * @param {Array} valoresEsperados 
   */
  entrenarCapa(valoresEsperados) {
    if (valoresEsperados.length === this.neuronas.length) {
      this.neuronas.forEach((neurona, indiceNeurona) => {
        neurona.activacion();
        const salida = neurona.salida;
        let error = valoresEsperados[indiceNeurona] - salida;
        neurona.entrenarNeurona();
        let valor = salida;
        while (
          neurona.salida !== valor &&
          neurona.salida !== valoresEsperados[indiceNeurona]
          || error === 0
        ) {
          valor = neurona.salida;
          neurona.entrenarNeurona(error);
          error = valoresEsperados[indiceNeurona] - neurona.salida;
        }
      });
    }
  }

  entrenar() {
    for(let i = 0; i < this.neuronas.length; i++) {
      while(error !== 0 ){
        this.neuronas[i].activacion();
        this.neuronas[i].entrenarNeurona(error);
        this.neuronas[i].activacion();
        this.salidas[i] = this.neuronas[i].salida;
      } 
    }
  }

  /**
   *  
   * @param {Array} erroresBeyond 
   * @param {Array<Array>} pesosBeyond
   */
  getErrorBackPropagation(erroresBeyond, pesosBeyond) {
    this.errores
  }
}
