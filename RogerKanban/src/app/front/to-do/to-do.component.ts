import { Component, Input, OnInit } from '@angular/core';
import { CardId } from 'src/app/Model/cardTwo.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() todoTaskList!: CardId[];
  task!: CardId;

  constructor() { }

  ngOnInit(): void {
  }

}
