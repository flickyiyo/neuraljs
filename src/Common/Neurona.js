module.exports = class Neurona {
  pesos = [];
  factorEntrenamiento = 0.1;
  valor = undefined;
  /**
   * 
   * @param {Array} entradas 
   */
  setEntradas(entradas) {
    if (entradas instanceof Array) {
      this.entradas = entradas;
    } else {
      throw new Error('Entradas should be array');
    }
  }

  setRandomWeights() {
    this.pesos.fill(Math.random());
  }

  activacion() {
    let acumulador = 0;
    this.entradas.forEach((entrada, indiceEntrada) => {
      acumulador += this.pesos[indiceEntrada] * entrada;
    });
    this.salida = acumulador > this.umbral ? 1 : 0;
    this.valor = acumulador;
    return this.salida;
  }

  entrenarNeurona(error) {
    const pesosNuevos = [];
    this.entradas.forEach((entrada, indice) => {
      pesosNuevos.push(
        (error * this.factorEntrenamiento * entrada) + this.pesos[indice]
      )
    });
    this.pesos = pesosNuevos;
  }

}