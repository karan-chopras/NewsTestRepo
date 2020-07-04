import { Component , OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';
  public StaffData: any[] = [{
  
    type: 'line',
    yAxesID: "y-axis-1",
    data: [1000,2400,2500,2800,3000,3600,4100,4350,5100,5600,6000,6700,7000]	    
    },
   {
     
      type: 'line',
      yAxesID: "y-axis-2",
      data: [200,400,500,600,650,700,800,950,1100,1200,1300,1470,1570,1800]
    }];
  
    public StaffDatas: any[] = [{
  
      type: 'line',
      yAxesID: "y-axis-1",
      data: [1300,2600,2900,2950,3100,3700,4100,4350,5100,5600,6000,6700,7000]	    
      },
     {
       
        type: 'line',
        yAxesID: "y-axis-2",
        data: [300,500,600,700,850,900,1000,1100,1200,1300,1470,1570,1800]
      }];

  // x-Achse (Monate)
  public StaffLabels: string[] = ['26 March', '27 March', '28 March', '29 March', '30 March', 
  '31 March', '1 April', '2 April', '3 April', '4 April', '5 April', '6 April'];
  public StaffLabelss: string[] = ['19 June', '20 June', '21 June', '22 June', '23 June', 
  '24 June', '25 June', '26 June', '27 June', '28 June', '29 June', '30 June'];

  // Gestaltung des Diagramms
  public StaffColours: Array<any> = [
    {
      backgroundColor: "rgba(256,257,255,0.5)",
      borderColor: 'rgba(255, 93, 0, 0.6)',
      borderWidth: 2
    },
 
    {
      backgroundColor: "rgba(255,255,255,0.5)",
      borderColor: 'rgba(255, 93, 0, 0.6)',
      borderWidth: 2
    }
  ];

  // Anzeige der Legende
  public StaffLegend = true;

  // Anzeige des Diagramms
  public barChartType = 'bar';
  
  // Optionen
  public StaffOptions: any = {
    scales: {
      yAxes: [{
        id: 'y-axis-1',
        position: 'left',
        type: 'linear',
        ticks: {
          beginAtZero:true,stepValue: 100,
        
        },
        scaleLabel: {
          display: true,
          labelString: 'Throughput'    ,
          max: 9000,
          min: 0,
         
          stepValue: 100,
        }
      },
      {
        id: 'y-axis-2',
        position: 'right',
        type: 'linear',
        ticks: {
          beginAtZero:true,
          labelString: 'Attendace',  
                max: 900,
                min: 0,
               
                stepValue: 100,
        }
      }]
    }
  };
  ngOnInit() {

  }
  Flag:boolean=true;
  checkState(value){
    if(value=="Del"){
this.Flag = true;
    }else{
      this.Flag = false;
    }
  }
}
