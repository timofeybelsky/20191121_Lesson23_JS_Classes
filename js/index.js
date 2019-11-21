'use strict';

class AnimalC {

    getVoice() {
        console.log(this.voice);
    }

}

class CatC extends AnimalC{

    constructor(name, jumpHeight){
        super();
        this.name = name;
        this.voice = "Meow-meow";
        this.jumpHeight = jumpHeight;

    }

    run(times){
        for (let i = 0; i < times; i++){
            console.log("Running! ");
        }
    }

    jump(){
        console.log(this.jumpHeight);
    }
}

const catC = new CatC("Barsik",3);