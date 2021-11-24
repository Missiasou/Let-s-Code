import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { TodoComponent } from './cards/todo/todo.component';
import { DoingComponent } from './cards/doing/doing.component';
import { DoneComponent } from './cards/done/done.component';
import { NovoComponent } from './cards/novo/novo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    TodoComponent,
    DoingComponent,
    DoneComponent,
    NovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
