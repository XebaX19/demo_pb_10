class ProductosApi {
  constructor() {
    this.productos = [];
  }
  static idCount = 0;

  listarTodos() {
    return [...this.productos];
  };

  listarPorId(id) {
    const prod = this.productos.find(prod => prod.id === +id);
    return prod || { error: `Producto con id ${id} no encontrado!` };
  };

  guardar(prod) {
    const cuerpoFormulario = Object.keys(prod);
    const { titulo, precio, thumbnail } = cuerpoFormulario;
    if (!titulo || !precio ) return { error: 'Titulo y precio son campos obliigatorios' };
    if (isNaN(precio)) return { error: 'El precio debe ser de tipo numérico' };
    const nuevoProd = { ...prod, id: ++productosApi.idCount };
    this.productos.push(nuevoProd);
    return nuevoProd;
  };

  actualizar(prod, id) {
    const indice = this.productos.findIndex(prod => prod.id === +id);
    if (indice < 0) return { error: `Producto con id ${id} no encontrado!` };
    this.productos[indice] = { id: +id, ...prod };
    return this.productos[indice];
  };

  eliminar(id) {
    const indice = this.productos.findIndex(prod => prod.id === +id);
    if (indice < 0) return { error: `Producto con id ${id} no encontrado!` };
    return this.productos.splice(indice, 1);
  }
}

module.exports = ProductosApi;