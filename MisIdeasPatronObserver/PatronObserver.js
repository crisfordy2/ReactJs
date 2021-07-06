
// Clase de los observables aqui se podra agregar, eliminar y listar los observables
class Observable{

    constructor(){
        this.observers = [];
    }

    // Agrega un Observable al array observers
    subcribe(notifyingClass){ 
        this.observers.push(notifyingClass)
    }

    // Elimina un Observable del array observers
    unSubcribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    // Lista las notificaciones de los observables del array 
    notifyObservable(model){
        this.observers.forEach(observer => {
            observer.notify(model);
        })
    }
}


// Extiende de la clase Observable, y aqui se podra incrementar las notificaciones
class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0;
    }

    // Incrementa la notificacion 
    increment(){
        this.value++;
        this.notifyObservable(this);
    }
}


class NumberExampleSpanish{
    // imprime la notificacion en español
    notify(model){
        console.log(`El nuevo nuemero es: ${model.value}`);
    }
}

class NumberExampleEnglish{
// imprime la notificacion en ingles
    notify(model){
        console.log(`the new number is: ${model.value}`);
    }
}

// se crea una instancia de la hija de Observable
let numberExample = new NumberExample();

// se agregan dos observables al array
numberExample.subcribe(new NumberExampleSpanish())
numberExample.subcribe(new NumberExampleEnglish())

// incrementan y se listan las notificaciones
numberExample.increment();
numberExample.increment();

