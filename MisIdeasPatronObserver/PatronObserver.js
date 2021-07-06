
// Clase de los observables aqui se podra agregar, eliminar y listar los observadores
class Observable{

    constructor(){
        this.observers = [];
    }

    // Agrega un observador al array observers
    subcribe(notifyingClass){ 
        this.observers.push(notifyingClass)
    }

    // Elimina un observador del array observers
    unSubcribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    // Se actualiza la informacion mediante notificaciones a los observadores del array 
    notifyObservable(model){
        this.observers.forEach(observer => {
            observer.notify(model);
        })
    }
}


// Clase observada , extiende de la clase Observable, y aqui se podran lanzar las notificaciones
class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0;
    }

    // Incrementa el valor en 1 y luego notifica a los observadores de este cambio  
    increment(){
        this.value++;
        this.notifyObservable(this);
    }
}

// clase observadora
class NumberExampleSpanish{
    // metodo que maneja la informacion actualizada del observable, imprime la notificacion en español 
    notify(model){
        console.log(`El nuevo nuemero es: ${model.value}`);
    }
}

// clase observadora
class NumberExampleEnglish{
// metodo que maneja la informacion actualizada del observable, imprime la notificacion en ingles
    notify(model){
        console.log(`the new number is: ${model.value}`);
    }
}

// se crea una instancia de la clase Observada
let numberExample = new NumberExample();

// se registran dos observadores a la clase observada
numberExample.subcribe(new NumberExampleSpanish())
numberExample.subcribe(new NumberExampleEnglish())

// se ejecuta el metodo que notifica a los observadores 
numberExample.increment();
numberExample.increment();

