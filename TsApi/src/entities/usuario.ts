export class usuario {
    nome: string
    
    constructor(nome: string) {
        this.nome = nome;
    }
        


    meeting(): string {
        return `Hello, my name is ${this.nome}`
    }
}