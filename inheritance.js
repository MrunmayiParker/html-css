class car{
    setName(name){
        this.name = name;
    }

    engine(){
        console.log('engine for ' +this.name);
    }

    stopengine() {
        console.log('stop engine for '+this.name);
    }

   
}

class toyota extends car{
    speed(carspeed){
        console.log('speed for '+this.name+ ' is ' +carspeed);
    }
}

let mycar = new toyota();
mycar.setName('ignis');
mycar.engine();
mycar.stopengine();
mycar.speed('100');

