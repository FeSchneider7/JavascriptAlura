//const cliente1Nome = "Wesley";
//const cliente1CPF = 38688877747;
//const cliente1Agencia = 1001;
//const cliente1Saldo = 0;
//
//const cliente2Nome = "Schina";
//const cliente2CPF = 11122233347;
//const cliente2Agencia = 1001;
//const cliente2Saldo = 0;

// Para nao precisar criar diversas vezes a mesma estrutura, podemos criar uma classe como abaixo

//early return - colocar um "return" antes das verificações para que caso algo nao seja verdadeiro, ja é cancelado antes de continuar

import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente( );
cliente1.nome = "Ricardo";
cliente1.cpf = 38688877747;


const cliente2 = new Cliente( );
cliente2.nome = "Alice";
cliente2.cpf = 11122233344;


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo._saldo = 0;
ContaCorrenteRicardo.agencia = 1001;
//console.log(ContaCorrenteRicardo.saldo);


ContaCorrenteRicardo.depositar(200);
//ContaCorrenteRicardo.depositar(-1110);
//ContaCorrenteRicardo.depositar(-1);
//console.log(ContaCorrenteRicardo.saldo);

const valorSacado = ContaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(ContaCorrenteRicardo);





//console.log(cliente1);
//console.log(cliente2);


