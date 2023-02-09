const { createApp } = Vue;


const app = createApp({
    data (){
        return {
            render: {
                verRegistros: false,
                registros: false,
                compra: true
            },
            
            cantidad: '',
            tipoPeso: '',
            bodegaUno: 100000,
            bodegaDos: 230000,

            registros: []
        }
    },



    mounted() {
        this.registros = JSON.parse(localStorage.getItem("registros"))? JSON.parse(localStorage.getItem("registros")) : [];
        if(this.registros.length > 0) {
            this.render.verRegistros = true;
        }
    },

    updated() {
        if(this.registros.length > 0) {
            this.render.verRegistros = true;
        }
    },

    methods: {
        compraBodegaUno() {
            let cantidad = this.cantidad;
            let tipoPeso = this.tipoPeso;
            let cantidadKilos = 0;

            if(tipoPeso == 1) {
                cantidadKilos = cantidad;
            } else if(tipoPeso == 2) {
                cantidadKilos = cantidad * 0.453592;
            } else if(tipoPeso == 3) {
                cantidadKilos = cantidad / 1000;
            }
            if(cantidadKilos === null){
                alert("ingrese el peso q desea comprar")
            }
            else if(this.bodegaUno - cantidadKilos > this.bodegaUno / 2) {
                alert("Compra realizada con exito!");
                this.bodegaUno -= cantidadKilos;
                this.registros.push({
                    bodega: 1,
                    cantidad: cantidadKilos,
                });
                localStorage.setItem("registros", JSON.stringify(this.registros));
                this.cantidad = '';
            } else if(this.bodegaUno - cantidadKilos < this.bodegaUno / 10) {
                alert("No queda suficiente arroz en esta bodega, por favor elija otra bodega");
            } else {
                alert("Quedan menos de la mitad de arroz en esta bodega, por favor elija otra bodega");
            }
        },
        compraBodegaDos() {
            let cantidad = this.cantidad;
            let tipoPeso = this.tipoPeso;
            let cantidadKilos = null;

            if(tipoPeso == 1) {
                cantidadKilos = cantidad;
            } else if(tipoPeso == 2) {
                cantidadKilos = cantidad * 0.453592;
            } else if(tipoPeso == 3) {
                cantidadKilos = cantidad / 1000;
            }
            if(cantidadKilos === null){
                alert("ingrese el peso q desea comprar")
            }
            else if(this.bodegaDos - cantidadKilos > this.bodegaDos / 2) {
                alert("Compra realizada con exito!");
                this.bodegaDos -= cantidadKilos;
                this.registros.push({
                    bodega: 2,
                    cantidad: cantidadKilos,
                });
                localStorage.setItem("registros", JSON.stringify(this.registros));
                this.cantidad = '';
            } else if(this.bodegaDos - cantidadKilos < this.bodegaDos / 10) {
                alert("No queda suficiente arroz en esta bodega, por favor elija otra bodega");
            } else {
                alert("Quedan menos de la mitad de arroz en esta bodega, por favor elija otra bodega");
            }
        },
        obtenerRegistros() {
            this.render.registros = true;
            this.render.compra = false;
        },
        volver() {
            this.render.registros = false;
            this.render.compra = true;
        }
    }
});

app.mount('#app');
