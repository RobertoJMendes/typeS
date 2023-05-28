
let x: number = 20 //annotation

console.log(x)

let y = 10 // inferência, apesar de ñ estar escrito q é um number, o y está tipado por referência.

// object
const numbers: number[] = [2,3,4,5]

// tuplas - tuple
let myTuple: [number, string, string[]]

myTuple = [5,"letras",["a","mais letras"]]

// ou seja, myTuple, neste caso serve como um "molde" de como queremos o array.

// object literals - {props: value}

const user: { name:string, age:Number } = {
    name: "Roberto",
    age: 41
}
console.log(user)
console.log(user.name)
// user.job = "programador" - caso queira inserir uma nova propriedade, não será possivel!

// union type

let id: string | number = "20" // ideal para fugir do - any

//type alias

type meuId = number | string 

const userId: meuId = 10
const produtos: meuId = "café"
const agora: meuId = x // x - é um number, no começo da página

// enum
// tamanhos
enum size {
    p = "pequeno",
    m = "médio",
    g = "grande"
}
const camisa = {
    name: "camisa azul",
    size: size.p
} 
console.log(camisa)

// types literal 
let teste: "autenticado" | null // apartir destes momento vira uma "chave"

// teste = outros -> teste não pode ser modificado!

// funções
function vamosSomar (a:number, b:number){
    return a + b   
}
// Ou
function sayHello(name: string):string{
    return `hello${name}`
}
console.log(sayHello("Junio"))

// Void é um tipo de função que não retorna nada!
function logger(msg: string): void{
    console.log(msg)
}
logger("testando!")

// argumentos opcionais o - ? - identifica ou habilita um elemento como opcional
function greeting(name: string, greet?: string){
    console.log(`Ola ${greet} ${name}`)
}
console.log(greeting("junio"))// no console mostra - greet - undefined
// para "solucionar"
function novoGreenting(name: string, greet?: string):void{
    if(greet){
        
        return console.log(`Ola ${greet} ${name}`)
    }
    else 
    {
        
    }
    return console.log(`ola ${name}`)
}
    novoGreenting("mendes")
    novoGreenting("Roberto","Junio")

// interfaces, utilizado para patronizar estruturas
interface MathFunctionParams {
    n1: number;
    n2: number;
}
function sumNumbers ( nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1:1,n2:2}))

function multiplyNumbers(nums:MathFunctionParams){
    return nums.n1 * nums.n2
}
const algunsNumbers: MathFunctionParams = {
    n1:5,
    n2:10
}
console.log(multiplyNumbers(algunsNumbers))

// Narrowing -> checagem de tipos
function doSomething(info: number | boolean){ //função faça alguma coisa!
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return;
    }
    console.log("não foi passado um Number!")
}
doSomething(5)
doSomething(true)

// generics -> é uma forma de evitar o uso do - any
function showArraysItems <T> (arr: T[]){
    arr.forEach((item) => {
        console.log(`Item ${item}`)
    })
}
const a1=[1,2,3]
const a2=['Roberto','Junio', true]
showArraysItems([a1,a2])
showArraysItems(a1)
showArraysItems(a2)

// classes 
class User {
    name
    role //papel
    isApproved
    // a função - constructor - que vai tipar os dados
    constructor( name:string, role:string, isApproved:boolean ){
            this.name=name
            this.role=role
            this.isApproved=isApproved
    }
    showUserName(){
        console.log(`O nome de usuário é ${this.name}`)
    }
    showUserRole(canShow:boolean){
        if(canShow){
            console.log(`O usuário é ${this.role}`)
            return
        }
            console.log("informação restrita!")
    }
}
const zeca = new User ('Zeca',"admin",true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)

// interfaces em classes -> identificada pelo I (i) maiusculo

interface Ivehicle{
    brand: string
    showBrand():void // este o padrão do método
}
class Car implements Ivehicle {
    brand
    wheels

    constructor(brand:string, wheels: number){
        this.brand=brand
        this.wheels=wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}
const fusca = new Car ("Vw",4)
fusca.showBrand()

// herança -> a interface é aplcada apenas na classe pai
class SuperCar extends Car{
    engine

    constructor(brand:string, wheels:number, engine:number){
        super(brand,wheels)
        this.engine=engine
    }
}
const A4 = new SuperCar ("Audi", 4, 2.0)
console.log(A4)
A4.showBrand()

// Decorators -> é muito utilizado para validação de dados

function BaseParameters(){ //constructor decorators
    return function <T extends {new ( ...args: any[]): {} } >(constructor:T){
        return class extends constructor {
            id = Math.random
            createDate = new Date()
        }
    }
}
// @ -> simboliza os decoretors em typescript

@BaseParameters()

 class PessoaPerson {
    name
    constructor(name:string){
        this.name=name
    }
 }
 const SamEleMesmo = new PessoaPerson("Sam")
 console.log(SamEleMesmo)