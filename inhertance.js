class Person {
    constructor(name){
        this.name = name
    }
    showName(){
        return `Your name is ${this.name}`;
    }
}
// const p1 = new Person('Anant');
// console.log(p1.showName());

class PersonDetails extends Person {
    constructor(name,username,city){
        super(name)
        this.username = username;
        this.city = city
    }
    showDetails(){
        return `Your nam is ${this.name}, username is ${this.username} & city is ${this.city}`;
    }
}

const PD1 = new PersonDetails('Pawan', 'pawan_the_destroyer', 'nalasupara');
console.log(PD1.showDetails());
console.log(PD1.showName());