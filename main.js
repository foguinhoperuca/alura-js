const age = 26
console.log('My first nodejs program - age is: ' + age)
console.log(age)

const summed_age = age + 2
console.log('Summed age is: ' + summed_age)
console.log('Sum..: ' + (age + 2))
console.log('Sub..: ' + (age - 2))
console.log('Mul..: ' + (age * 2))
console.log('Div..: ' + (age / 2))

const name = 'Jonh Wick'
let year = 2023

console.log('name: ' + name)
console.log('year: ' + year)


const nome = "Lais";
const Sobrenome = "Silva";
const Idade = 30;
const anoDeNascimento = 1993;

console.log(nome + ' ' + Sobrenome + ' ' + Idade + ' ' + anoDeNascimento)


console.log(2 + 2);
console.log(10 + 8 * 2);
console.log((10 + 8) * 2);
console.log(parseInt(1) + parseInt(7))
console.log("10" / "2")
console.log("Jhonny" / "2")
console.log("9" / "2")
console.log(6,5)


let name_02 = 'Patrick'
let surname_02 = 'Master'
console.log(name_02, surname_02)
console.log(`My name is: ${name_02} ${surname_02}`)

const fullname = `${name_02} ${surname_02}`
console.log(fullname)

const destiny = new Array(`Salvador - BA`, `São Paulo - SP`, `Rio de Janeiro - RJ`)
console.log(destiny)

destiny.push(`Curitiba - PR`)
console.log(destiny)

console.log('---------------------------------')
d = destiny.splice(1, 2)

console.log(destiny)
console.log(d)

console.log('******************************************')
de = destiny.concat(d)
const ageBuyer = 19;
console.log(de)
let withParents = false;

if (ageBuyer >= 18) {
  console.log('Buyer can buy!')
  console.log(`age buyer: ${ageBuyer}`)
} else {
  console.log(`Buyer can't buy!! age buyer: ${ageBuyer}`)
  if (withParents) {
	console.log(`With parents, the buyer can buy!! Parents: ${withParents}`)
  } else {
	console.log("Really, I can't sell.")
  }
}
console.log('++++++++++++++++++++++++++++++++++++++++++')

let hasTicket = false
if (ageBuyer >= 18 || withParents) {
  console.log('I can sell!!')
  de.splice(1, 1)
  hasTicket = true
} else {
  console.log("I can't sell!!")
}

if(ageBuyer >= 18 && hasTicket) {
    console.log("Bye bye! Good travel!!");
} else {
    console.log("You can't go!!");
} 

console.log('..........................................')
const ageLoop = 18;
const hasSomeone = false;
let alreadyHasTicket = false;
const destinyChoosen = 'São Paulo - SP';
let counter = 0;
const destinyAvailable = new Array(`Salvador - BA`, `São Paulo - SP`, `Rio de Janeiro - RJ`, `Curitiba - PR`)



console.log(destinyAvailable)
while(counter < 4) {
  console.log(destinyAvailable[counter])
  if (destinyAvailable[counter] == destinyChoosen) {
	console.log(`Destiny choosen!! ${destinyChoosen}`);
	break;
  } else {
	console.log(`Destiny NOT choosen!! ${destinyAvailable[counter]} != ${destinyChoosen}`);
  }
  counter += 1;
}

let destinyExist = false;
for (let count = 0; count < 3; count++) {
  if (destinyAvailable[count] == destinyChoosen) {
	destinyExist = true;
  }
}

console.log(`destinyExist: ${destinyExist} ${destinyChoosen} in ${destinyAvailable}`)
