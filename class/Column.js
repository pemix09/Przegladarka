export default class Column{
    numbers = [];
    constructor(number){
        this.column = document.getElementById('column'+number);
    }
    AddNumber(number){
        this.numbers.push(number);
    }
    SortNumbers(){
        function compare(a,b){
            if(a>b) return 1;
            else if(a<b) return -1;
            return 0;
        }
        this.numbers.sort(compare);
    }
    Display(){
        
        this.numbers.forEach(number => {

            let element = document.createElement('p');
            element.innerHTML = number;
            this.column.appendChild(element);

        });
    }
}