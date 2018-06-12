import Neurona from './Neurona';
import Capa from './Capa';

export default class Red {
  constructor(entradas) {
    this.capaEntrada = new Capa(10, entradas);
    this.capaSalida = new Capa(1, undefined);
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