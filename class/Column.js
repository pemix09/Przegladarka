export default class Column{
    numbers = [];
    constructor(number){
        this.column = document.getElementById('column'+number);
    }
    AddNumber(number){
        this.numbers.push(number);
    }
    SortNumbers(){
        this.numbers.sort();
    }
    Display(){
        
        this.numbers.forEach(number => {

            let element = document.createElement('p');
            element.innerHTML = number;
            this.column.appendChild(element);

        });
    }
}