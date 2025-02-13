export class Cliente{
    nome;
    _cpf;
    _rg;

    get cpf(){
        return this._cpf;
    }
    get rg(){
        return this._rg;
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }

   
   } 

//get cpf() {  // Define um getter chamado "cpf"
//return this._cpf;  // Retorna o valor da propriedade privada "_cpf"
