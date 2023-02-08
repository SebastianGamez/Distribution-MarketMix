const { createApp } = Vue;


const app = createApp({
    data (){
        return {
            cantidad: '',
            tipoPeso: '',
            bodegaUno: 100000,
            bodegaDos: 230000
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

            if(this.bodegaUno - cantidadKilos > this.bodegaUno / 2) {
                alert("Compra realizada con exito!");
                this.bodegaUno -= cantidadKilos;
            } else if(this.bodegaUno - cantidadKilos < this.bodegaUno / 10) {
                alert("No queda suficiente arroz en esta bodega, por favor elija otra bodega");
            } else {
                alert("Quedan menos de la mitad de arroz en esta bodega, por favor elija otra bodega");
            }
        },
        compraBodegaDos() {
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

            if(this.bodegaDos - cantidadKilos > this.bodegaDos / 2) {
                alert("Compra realizada con exito!");
                this.bodegaDos -= cantidadKilos;
            } else if(this.bodegaDos - cantidadKilos < this.bodegaDos / 10) {
                alert("No queda suficiente arroz en esta bodega, por favor elija otra bodega");
            } else {
                alert("Quedan menos de la mitad de arroz en esta bodega, por favor elija otra bodega");
            }
        }
    }
});

app.mount('#app');
