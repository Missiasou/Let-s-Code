import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FRONTComponent } from './front/front.component';
import { DoingComponent } from './front/doing/doing.component';
import { DoneComponent } from './front/done/done.component';
import { ToDoComponent } from './front/to-do/to-do.component';
import { CardComponent } from './front/card/card.component';
import { CardItemComponent } from './front/card-item/card-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './front/header/header.component';
import { HttpClientModule} from '@angular/common/http'
import { ApiService } from './service/api.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FRONTComponent,
    DoingComponent,
    DoneComponent,
    ToDoComponent,
    CardComponent,
    CardItemComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ApiService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
