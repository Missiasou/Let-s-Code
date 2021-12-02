import { Component, Input, OnInit } from '@angular/core';
import { CardId } from 'src/app/Model/cardTwo.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() task!: CardId;
  isEditing: boolean = false;
  titleChange!: string;
  contentChange!: string;
  changeLista!: CardId;
  editTitleContent!: CardId;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  backwards() {
    if (this.task.lista === 'Done') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Doing'}
    } else if (this.task.lista === 'Doing') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'To-Do'}
    } else alert("This is the first task status!" )

    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  forwards() {
    if (this.task.lista === 'To-Do') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Doing'}
    } else if (this.task.lista === 'Doing') {
      this.changeLista = {id: this.task.id, titulo: this.task.titulo, conteudo: this.task.conteudo, lista: 'Done'}
    } else alert("This task is already finished!")

    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
  
  deleteTask() {
    this.apiService.deleteCard(this.task).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  cancelChanges() {
    this.isEditing = !this.isEditing;
  }

  confirmChanges() {
    this.changeLista = {id: this.task.id, titulo: this.titleChange, conteudo: this.contentChange, lista: this.task.lista}
    
    this.apiService.editCard(this.changeLista).subscribe({
      next: (p) => this.apiService.taskListChange.next(p),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
      this.isEditing = !this.isEditing;
  }

  toggle() {
    this.isEditing = !this.isEditing;
    this.titleChange = this.task.titulo;
    this.contentChange = this.task.conteudo;
  }





}
