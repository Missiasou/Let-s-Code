import { Component, Input, OnInit } from '@angular/core';
import { CardId } from 'src/app/Model/cardTwo.model';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  @Input() doingTaskList!: CardId[];
  task!: CardId;

  
  constructor() { }

  ngOnInit(): void {
  }

}
