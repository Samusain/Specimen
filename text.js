//1.) Hameed is a Yoruba boy Living in Abuja, he is a student of Nile University studying Computer Science, He has two friends John and James, they are also students of Nile University. Hameed wants to apply to Seamfix as a Program manager, so he need to send his credentials. also he wants to create a domiciliary account with Zenith Bank, Model Hameed using OOP, and outline the principle of OOP you applied at any point.

let Hameed = new Object();
Hameed.tribe = "Yoruba";
Hameed.location = "Abuja";
Hameed.school = "Nile University";
Hameed.course = "Computer Science";
Hameed.friends = ["John", "James"];

class Credentails{  constructor(school,course,experience,skills,age){
   this.school = school;
   this.course =  course;
   this.experience = experience;
   this.skills = skills;
   this.age = age;
  }
  getDetails(){
   console.log(`School: ${this.school}`);
   console.log(`Course: ${this.course}`);
   console.log(`Experience: ${this.experience}`);
   console.log(`Skills: ${this.skills}`);
   console.log(`Age: ${this.age}`);
  }
}

 const hameedCred = new Credentials('Nile University','Computer Science','None','Computer expert','26yo');
 console.log(hameedCred.getDetails());
 console.log(Hameed);


class Student{
    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks = marks;
    }
}
var stud = new Student();
stud.setName('John');
stud.setMarks(40);
console.log(stud.getName() +' '+ stud.getMarks());


//2.) Create an object called shape that has the type property and a getType() method. Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle. Add a new method to the prototype called getPerimeter().
class Shape{
  constructor(){
        var type;
  }
  getType(){
    return this.type;
  }
  setType(type){
    this.type = type;
  }
}
var shp = new Shape();
shp.setType('Triangle');
console.log(shp.getType());


