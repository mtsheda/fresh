import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {

  sendMessage() {
    const input1Value = (<HTMLInputElement>document.querySelector('.input1')).value;
    const input2Value = (<HTMLInputElement>document.querySelector('.input2')).value;

    if (input1Value.trim() === '' || input2Value.trim() === '') {
      alert('Fields cannot empty');
      return;
    }

    
    (<HTMLInputElement>document.querySelector('.input1')).value = '';
    (<HTMLInputElement>document.querySelector('.input2')).value = '';
  }
}
  
  

  


