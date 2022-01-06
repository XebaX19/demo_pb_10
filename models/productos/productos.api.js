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
    const { nombre, precio } = prod;
    if (!nombre || !precio ) return { error: 'nombre y precio son campos obligatorios' };
    if (isNaN(precio)) return { error: 'El precio debe ser de tipo numérico' };
    const nuevoProd = { ...prod, id: ++ProductosApi.idCount };
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