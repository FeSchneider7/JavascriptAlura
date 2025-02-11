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


const Conta1 = new ContaCorrente();
Conta1.agencia = 1001;
Conta1.cliente = cliente1;


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
//conta2.cliente = new Cliente();
//conta2.cliente.nome = "Alice";
//conta2.cliente.cpf = 11122233344;


Conta1.depositar(500);
//ContaCorrenteRicardo.depositar(-1110);
//ContaCorrenteRicardo.depositar(-1);
//console.log(ContaCorrenteRicardo.saldo);

const valorSacado = Conta1.sacar(50);

//console.log(valorSacado);


Conta1.transferir(50, conta2);
conta2.transferir(10, Conta1);

console.log(conta2);
console.log(Conta1);

console.log(conta2.saldo);
console.log(Conta1.saldo);


//console.log(cliente1);
//console.log(cliente2);


