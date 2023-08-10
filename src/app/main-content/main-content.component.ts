import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  title = ['Order XOOO1', 'Order XOOO2'];
  cards = ['one', 'two', 'three']
}
