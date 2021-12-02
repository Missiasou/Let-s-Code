import { Component, Input, OnInit } from '@angular/core';
import { CardId } from 'src/app/Model/cardTwo.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Input() doneTaskList!: CardId[];
  task!: CardId;

  constructor() { }

  ngOnInit(): void {
  }

}
