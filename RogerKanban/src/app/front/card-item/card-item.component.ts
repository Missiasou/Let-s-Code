import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  titulo!: string;
  conteudo!: string;
  
  @Output() emitTitulo: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitConteudo: EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  sendTitulo(){
    this.emitTitulo.emit(this.titulo);
  }

  sendConteudo() {
    this.emitConteudo.emit(this.conteudo);
  }

}
