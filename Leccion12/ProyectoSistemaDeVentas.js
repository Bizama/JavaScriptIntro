class Producto{

    static contadorProductos = 0; 

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio
    }
    get idProducto(){
        return this._idProducto;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `${this._idProducto}: ${this._nombre} tiene un valor de: ${this._precio}`
    }
}   


class Orden{
    
    static get MAX_PRODUCTOS(){
        return 5;
    }
    static numeroOrdenes = 0; 
    
    constructor(){
        this._idOrden = ++Orden.numeroOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    
    get idOrden(){
        return this._idOrden;
    }
    
    agregarProducto(producto){
        if ( this._productos.length < Orden.MAX_PRODUCTOS ){
            this._productos.push(producto);
            this._contadorProductosAgregados++;
            console.log('Producto Agregado')
            /*
            TAMBIEN SE PUEDE HACER:
            this._productos[_contadorProductosAgregados++] = producto;
            */
           
        } else {
            console.log('No se pueden agregar más productos.')
        }
    }
    
    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto._precio;
        }
        return totalVenta;
    }
    
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += producto.toString() + '\n';
        }
        console.log(`Orden ${this._idOrden} Total: $${this.calcularTotal()}\nProductos:\n${productosOrden}`)
    }
}
let zapatillas = new Producto('Sharma 2022', 159000);
let casco = new Producto('The Capitan', 119000);

let orden = new Orden();
orden.mostrarOrden();
orden.agregarProducto(zapatillas);
orden.agregarProducto(casco);
orden.mostrarOrden();

let arnes = new Producto('Arnes', 50000);
let orden2 = new Orden();
orden2.agregarProducto(zapatillas);
orden2.agregarProducto(casco);
orden2.agregarProducto(arnes);
orden2.mostrarOrden();