import Column from './Column.js';

export default class Main{

    constructor(){
        this.columnOne = new Column(1);
        this.columnTwo = new Column(2);
    }
    //generate random numbers
    init(){
        for(let i =0;i<20;i++){
            let number = Math.floor(Math.random() * 100);

            if(number%2 == 0){
                this.columnOne.AddNumber(number);
            }
            else{
                this.columnTwo.AddNumber(number);
            }
        }
        this.columnOne.SortNumbers();
        this.columnTwo.SortNumbers();
    }
    Display(){
        this.columnOne.Display();
        this.columnTwo.Display();
    }
    Generate(){
        this.init();
        this.Display();
    }

}