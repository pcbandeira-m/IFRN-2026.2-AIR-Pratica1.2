/*
6. ORIENTAÇÃO A OBJETOS E INTERFACES
   6.1. Crie duas classes que possuam uma interface em comum. (Evite nomes genéricos como ClassA ou ClassX; use nomes significativos).
   6.2. As classes devem possuir atributos diferentes.
   6.3. A interface deve possuir pelo menos um método.
   6.4. A implementação desse método nas classes deve utilizar seus atributos.
   6.5. Teste Unitário: Escreva um teste que instancie as classes criadas, altere os atributos e teste o método comum da interface.
*/

export interface Animal {
    // atributos
    pelos?: boolean;
    // métodos
    mover(): void;
    comer(): void;
}

export class Humano implements Animal {
    nome: string;
    altura: number;
    peso: number;

    constructor (nome: string, altura: number, peso: number){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    mover() {
        if(this.altura > 1.6 || this.peso < 70){
            console.log("Correndo muito rápido. Uau!")
        } else if (this.peso > 90) {
            console.log("Correndo lentamente... zZzZzZzZ")
        } else {
            console.log("Correndo em velocidade moderada, nada muito especial.")
        }
    }

    comer() {
        if(this.nome == "Magali") {
            console.log("Comendo quantidades cavalares de comida.")
        } else {
            console.log("Comendo normalmente.")
        }
    }
}

export class Gato implements Animal {
    cor: string;
    sexo: string;
    peso: number;
    domesticado: boolean;

    constructor (cor: string, sexo: string, peso: number, domesticado: boolean){
        this.cor = cor;
        this.sexo = sexo;
        this.peso = peso;
        this.domesticado = domesticado;
    }

    mover() {
        if(this.peso < 5){
            console.log("Correndo absurdamente rápido!")
        } else if (this.peso > 10) {
            console.log("Caminhando sem pressa.")
        } else {
            console.log("Caminhada rápida.")
        }
    }

    comer() {
        if(this.domesticado){
            console.log("Comendo ração na tigelinha, nhami nhami")
        } else {
            console.log("Comendo de sua própria caça, uau!")
        }
    }
}