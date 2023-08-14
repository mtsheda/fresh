import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  chart: any;
	
  chartOptions = {
    title:{
      text: ""
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "%"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "R#",
      dataPoints: [
        { label: "Spinach", y: 15 },
        { label: "Manderine", y: 20 },
        { label: "Pineapples", y: 24 },
        { label: "Potatoes", y: 29 },
        { label: "Other", y: 73 }
      ]
    }]
  }	
}



