class Nodo {
    constructor (dato) {
        this.valor = dato;
        this.siguiente = null;
    }
}

class listaSimple {
    constructor() {
        this.primero = null;
        this.size = 0;
    }

    agregar(dato) {
        let nodo = new Nodo(dato);
        if (this.primero == null) {
            this.primero = nodo;
        }else {
            let actual = this.primero;
            while (actual.siguiente != null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nodo;
        }
        this.size += 1;
    }

    eliminar(dato) {
        let actual = this.primero;
        let anterior = null;

        try {
            while (actual.valor != dato) {
                anterior = actual;
                actual = actual.siguiente;
            }
            if (anterior == null) {
                this.primero = actual.siguiente;
            } else {
                anterior.siguiente = actual.siguiente
                actual.siguiente = null;
            }
            this.size -= 1;
        }
        
        catch {
            return false;
        }
    }

    buscar(dato) {
        let actual = this.primero;

        while (actual != null) {
            if (actual.valor == dato) {
                return actual.valor
            } 
            actual = actual.siguiente;
        }
        return false;
    }

    actualizar(dato, nuevo) {
        let actual = this.primero;

        if (this.buscar(dato)) {
            while (actual.valor != dato) {
                actual = actual.siguiente;
            }
            console.log(`Se remplazo ${actual.valor} por ${nuevo}`);
            actual.valor = nuevo;
        }
        else {
            console.log(`No existe ${dato} en la lista`);
        }
    }

    longitud() {
        return this.size;
    }

    mostrar() {
        let actual = this.primero;
        let string = ''
        for (let i = 0; i < this.size; i++) {
            string += actual.valor
            string += ' -> '
            actual = actual.siguiente;
        }
        console.log(string)
    }
}

const lista = new listaSimple()

const dato = document.getElementById('dato')

const agregar = document.getElementById('agregar')
const eliminar = document.getElementById('eliminar')
const actualizar = document.getElementById('actualizar')
const cambiar = document.getElementById('cambiar')
const buscar = document.getElementById('buscar')
const ver = document.getElementById('mostrar')


const salida ={
    operasion: 'Lista enlazada simple',
    lista: []
}

agregar.addEventListener("click", (e) => {
    e.preventDefault()
    if(dato.value != ''){
        lista.agregar(dato.value)
        salida.lista.push(dato.value)
    }
})

eliminar.addEventListener("click", (e) => {
    e.preventDefault()
    if(dato.value != ''){
        lista.eliminar(dato.value)
        const indice = salida.lista.indexOf(dato.value)
        salida.lista.splice(indice, 1)
    }
})

actualizar.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById('oculto').style.display = 'block'
    
})

buscar.addEventListener("click", (e) => {
    e.preventDefault()
    if(dato.value != ''){
        console.log(lista.buscar(dato.value))
    }
})

cambiar.addEventListener("click", (e) => {
    const nuevo = document.getElementById('dato2')
    if(dato.value != '' && nuevo.value != ''){
        lista.actualizar(dato.value, nuevo.value)
        const indice = salida.lista.indexOf(dato.value)
        salida.lista[indice] = nuevo.value
    }
    document.getElementById('oculto').style.display = 'none'
})


ver.addEventListener("click", (e) => {
    e.preventDefault()
    lista.mostrar()
    console.log(salida)
})
