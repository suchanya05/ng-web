import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnGradientComponent } from '../tools/btn-gradient/btn-gradient.component';

const stockList = [
  { id: 1, name: 'IPhone 14', matCode: "MATIP14NN", price: 22500, stockType: 'serial', qty: 15 },
  { id: 2, name: 'IPhone 14 pro max', matCode: "MATIP14PM", price: 28500, stockType: 'serial', qty: 8 },
  { id: 3, name: 'IPhone 14 pro', matCode: "MATIP14PN", price: 24500, stockType: 'serial', qty: 4 },
  { id: 4, name: 'IPhone 15', matCode: "MATIP15NN", price: 34400, stockType: 'serial', qty: 15 },
  { id: 5, name: 'IPhone 15 pro', matCode: "MATIP15PN", price: 34900, stockType: 'serial', qty: 15 },
  { id: 6, name: 'IPhone 15 pro max', matCode: "MATIP15PM", price: 38800, stockType: 'serial', qty: 15 },
  { id: 7, name: 'Airpods 1', matCode: "MATAP01S", price: 4390, stockType: 'serial', qty: 5 },
  { id: 8, name: 'Airpods 2', matCode: "MATAP02S", price: 7250, stockType: 'serial', qty: 11 },
]

@Component({
  selector: 'app-stock-manager',
  standalone: true,
  imports: [CommonModule, BtnGradientComponent],
  templateUrl: './stock-manager.component.html',
  styleUrl: './stock-manager.component.css'
})
export class StockManagerComponent {

  dataStockTable : any =  []

  onSearch() {
    console.log("onSearch work!");

  }

  async ngOnInit(){
    this.dataStockTable = await this.callAPIStock()
    
  }

  async callAPIStock(){
    return stockList;
  }

}
