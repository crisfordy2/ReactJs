class Observable{

    constructor(){
        this.observers = [];
    }

    subcribe(notifyingClass){ 
        this.observers.push(notifyingClass)
    }

    unSubcribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    notifyObservable(notification){
        this.observers.forEach(observer => {
            observer.notify(notification);
        })
    }
}


class Operation extends Observable{
    constructor(){
        super();
        this.value = 0;
    }

    add(valor){
        this.value+= valor;
        this.notifyObservable(this);
    }

    subtract(valor){
        this.value-= valor;
        this.notifyObservable(this);
    }
}


class NumberSum{
    notify(notification){
        console.log(`the result of the operation is: ${notification.value}`);
    }
}

let operation = new Operation();

operation.subcribe(new NumberSum())

operation.add(10);
operation.add(20);
operation.subtract(5);

