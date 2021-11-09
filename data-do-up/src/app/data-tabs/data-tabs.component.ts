import { Component, OnInit } from '@angular/core';
import weeklyData from "./data10421.json";
import { one } from './insightdata';
import { two } from './insightdata';
import { three } from './insightdata';
import { four } from './insightdata';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-data-tabs',
  templateUrl: './data-tabs.component.html',
  styleUrls: ['./data-tabs.component.css']
})
export class DataTabsComponent implements OnInit {
  data = weeklyData.employees;
  one: any[] = [];
  two: any[] = [];
  three: any[] = [];
  four: any[] = [];
  view: any = [700, 150];
  
  constructor() {
    Object.assign(this, { one }),
    Object.assign(this, { two }),
    Object.assign(this, { three }),
    Object.assign(this, { four })
  }

  toPDF() {
    let data = document.getElementById('contentToConvert');
    html2canvas(data as any).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm',);
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });
}

  ngOnInit(): void{
    
  }


}