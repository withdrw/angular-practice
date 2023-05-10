import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false; 
serverCreationStatus = 'no server was created'
serverName = 'FORM'
username = ''
constructor () {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}
ngOnInit () {
  // this.allowNewServer = true;
}
onCreateServer () 
{
  this.serverCreationStatus= 'server was created loser'

}

onUpdateServerName (event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}


resetUser() {
   this.username = ''
}

}
