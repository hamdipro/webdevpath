// this instruction will log a message in the console
console.log('hello world');
/* 
This is 
Multi line 
comment
*/

var x = 5;
var chaine = 'hello : ';
console.log('x = ' , x);
x = x + 5;
console.log('x = ', x);
y = x / 2;
console.log('y = ', y);
console.log('x = ', x);
console.log('Chaine length = ', chaine);


txt1 = "John";
txt2 = "Doe";
txt3 = txt1 + " " + txt2;
console.info(txt3);
txt1 = "What a very ";
txt1 += "nice day";
console.info(txt1);
x = 5 + 5;
console.log(x)
y = "5" + 5;
console.log(y)
console.log(typeof(y))
z = "Hello" + 5;
console.log(z)
console.log(typeof(z))
console.log('------ COMPARE ----- ')
console.log(5=="5");
console.log(5==="5");
console.log(5!="5");
console.log(5!==5);

function percentage (a, b) {
    return a * 100 / b;
}

var nbR = 21;
var nbT = 25;
var percentage_reussite = percentage(nbR, nbT);

if (percentage_reussite >= 80 ) {
    console.info('Taux de réussite est = ', percentage_reussite);
} else if (percentage_reussite >= 60 ) {
    console.info('Taux de réussite est inferieur a 80 ');
} else if (percentage_reussite >= 40 ) {
    console.info('Taux de réussite est inferieur a 60 ');
} else {
    console.info('Taux de réussite est inferieur a 40 ');
}

var gender = "Male";
switch(gender) {
    case 'Male' : 
        console.info('Gender is Male ');
        break;
    case 'Female' : 
        console.info('Gender is Female ');
        break;
    default: 
    console.info('Gender is Unknown ');
    break
}

for (var index = 0; index < 10; index++) {
    console.info('iteration = ', index);
}
var index = 0;

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.id + ' ' + this.firstName + " " + this.lastName;
    }
};
console.info(person.fullName())
console.info(gender.length);
console.log(gender.indexOf('i'));
console.log(gender.concat(' Female'))


