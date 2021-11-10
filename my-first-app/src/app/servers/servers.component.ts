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

  constructor() {
    setTimeout(() =>{
      this.permitirAdicaoServidor = true;
    }, 3000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.statusAdicaoServidor = 'Servidor criado! Nome do servidor é ' + this.serverName;
  }

  onUpdateSeverName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }

  
}
