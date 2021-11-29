import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  titleNew: string = "";
  verificarOBotaoPlus: string = "ppp";
  statusBotaoPlus = false;

  testeArray= [{name: "nome", age: "idade", sex: "genero"}];
  
  

  constructor() { }

  ngOnInit(): void {
  }

  

  AdicionarEmToDo(){
    this.verificarOBotaoPlus="clicou";
    this.statusBotaoPlus= true;
  }

}
