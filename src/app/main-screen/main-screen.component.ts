import { Component } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {
  selectedCategory: string = '';
  chartOptions = {
	  animationEnabled: true,
    backgroundColor: "#E6E6E6",
	  title: {
		text: "Sales History"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Beverages" },
		  { y: 28.2, name: "Containers" },
		  { y: 14.4, name: "Dried Fruit" },
		  { y: 43.3, name: "Fresh Vegetables" },
      { y: 28.2, name: "Dried Vegetables" },
		  { y: 14.4, name: "Nuts And Seeds" },
		  { y: 43.3, name: "Prepared & Preserved Foods" },
      { y: 43.3, name: "Fresh Fruits" }
		]
	  }]
   
  

  }

  startDate: Date = new Date();
  endDate: Date = new Date();

}


