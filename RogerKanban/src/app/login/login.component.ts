import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  form: FormGroup = new FormGroup({
    username: new FormControl,
    password: new FormControl
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  

  ngOnInit(): void {
  }

  getAuth(): Observable<any> {
    const isAuth = this.http.post('http://localhost:5000/login/', {'login':`${this.form.value.username}`, 'senha':`${this.form.value.password}`}, this.httpOptions)
    return isAuth
  }

  login() {
    this.getAuth().subscribe({
      next: (token) => {
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigateByUrl('kanban-board')
        } else {
          alert('Wrong username or password!')
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

}
