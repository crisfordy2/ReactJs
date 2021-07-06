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


class Random extends Observable{
    constructor(){
        super();
        this.value = 0;
    }

    randomTen(){
        this.value = Math.floor(Math.random() * 10);
        this.notifyObservable(this);
    }

    randomTen_twenty(){
        this.value = Math.floor(Math.random() * (20 - 10) ) + 10;
        this.notifyObservable(this);
    }

    randomTenTwenty_thirty(){
        this.value = Math.floor(Math.random() * (30 - 20) ) + 20;
        this.notifyObservable(this);
    }
}


class NumberRandom{
    notify(notification){
        console.log(`the num random is: ${notification.value}`);
    }
}

let random = new Random();

random.subcribe(new NumberRandom())

random.randomTen();
random.randomTen_twenty();
random.randomTenTwenty_thirty();

