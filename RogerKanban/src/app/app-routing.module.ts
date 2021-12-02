import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { FRONTComponent } from "./front/front.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'kanban-board', component: FRONTComponent, canActivate: [AuthGuardService]},
    {path: '**', redirectTo: '/login'}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}