import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  permitirAdicaoServidor = false;
  statusAdicaoServidor = 'Nenhum servidor foi criado';
  serverName = "Testserv"
  userName = "";
  serverCreated = false;
  servers = ['SERVIDOR LETS CODE', 'SERVIDOR TURMA #810'];

  servers2 = [{
    name: 'Larissa',
    idade: 23
  }, 
  {
    name: 'Eduarda',
    idade: 18
  }]

  constructor() {
    setTimeout(() =>{
      this.permitirAdicaoServidor = true;
    }, 3000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.statusAdicaoServidor = 'Servidor criado! Nome do servidor é ' + this.serverName;
  }

  onUpdateSeverName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }

  
}
