import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FRONTComponent } from './front/front.component';
import { DoingComponent } from './front/doing/doing.component';
import { DoneComponent } from './front/done/done.component';
import { ToDoComponent } from './front/to-do/to-do.component';
import { CardComponent } from './front/card/card.component';
import { CardItemComponent } from './front/card-item/card-item.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './front/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FRONTComponent,
    DoingComponent,
    DoneComponent,
    ToDoComponent,
    CardComponent,
    CardItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
