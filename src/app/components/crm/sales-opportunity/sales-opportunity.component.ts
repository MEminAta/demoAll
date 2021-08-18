import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular/ui/data-grid";

@Component({
  selector: 'app-sales-opportunity',
  templateUrl: './sales-opportunity.component.html',
  styleUrls: ['./sales-opportunity.component.scss']
})
export class SalesOpportunityComponent implements OnInit {
  // @ViewChild('groupDataGrid', {static: false}) groupDataGrid!: DxDataGridComponent;
  // @ViewChild('productsDataGrid', {static: false}) productsDataGrid!: DxDataGridComponent;

  @ViewChild('dataGrid', {static: false}) dataGrid!: DxDataGridComponent;
  winRate: number = 1;
  currencyFormat = "$ #.##";
  currencyButton = {
    text: "€",
    stylingMode: "text",
    onClick: (e: any) => {
      if (e.component.option("text") === "$") {
        e.component.option("text", "€");
        this.currencyFormat = "$ #.##";
      } else {
        e.component.option("text", "$");
        this.currencyFormat = "€ #.##";
      }
    }
  };
  addGroupButton = {text: "+",
    stylingMode: "text",
    onClick: (e: any) => {

    }
  };
  now = new Date();

  productTypes = [
    {id: 1, name: 'elma', unit: 'Kg', unitPrice: 10, kdv: 18},
    {id: 2, name: 'armut', unit: 'Kg', unitPrice: 10, kdv: 18},
    {id: 3, name: 'kestane', unit: 'Kg', unitPrice: 10, kdv: 18}
  ];
  products = [
    {id: 1, productId: 1, unit: 'Kg', amount: 3, desc: 'çok üstüne gitmeyin vaz geçer', groupId: 1},
    {id: 2, productId: 2, unit: 'Kg', amount: 4, desc: 'kitleyin', groupId: 3},
    {id: 3, productId: 3, unit: 'Kg', amount: 5, desc: 'almak zorunda', groupId: 2}
  ];
  groups = [
    {id: 1, name: 'sebze'},
    {id: 2, name: 'meyve'},
    {id: 3, name: 'alabama'},
  ]

  constructor() {
    // document.designMode = "on"
  }

  ngOnInit(): void {
    this.onReorder = this.onReorder.bind(this);
    this.setStateProductValue = this.setStateProductValue.bind(this);
    // this.productGroupOnReorder = this.productGroupOnReorder.bind(this);
    // this.productsOnReorder = this.productsOnReorder.bind(this);
  }

  setStateProductValue(rowData: any, value: any) {
    if (!rowData.productId) {
      let y = this.productTypes.filter(x => x.id == value)[0];
      y.unit ? rowData.unit = y.unit : '';
      rowData.productId = y.id;
    }
  }

  onReorder(e: any) {
    let visibleRows = e.component.getVisibleRows(),
      toIndex = this.products.indexOf(visibleRows[e.toIndex].data),
      fromIndex = this.products.indexOf(e.itemData);
    this.products[fromIndex].groupId = this.products[toIndex].groupId;
    this.dataGrid.instance.refresh();
  }

  onRowValidating(e: any) {
    if (e.newData.productId && e.newData.groupId) {

      e.isValid = this.products.filter(x=>x.productId == e.newData.productId && x.groupId == e.newData.groupId).length < 1
      if (e.isValid == false) {
        e.errorText = 'Girdiğiniz grupta bu ürün zaten var';
      }
    }
  }

  // productGroupOnReorder(e: any) {
  //   let visibleRows = e.component.getVisibleRows(),
  //     toIndex = this.productGroups[this.productGroups.indexOf(visibleRows[e.toIndex].data)].sortIndex,
  //     fromIndex = this.productGroups[this.productGroups.indexOf(e.itemData)].sortIndex;
  //
  //   this.productGroups.filter(x => x.sortIndex > fromIndex && x.sortIndex <= toIndex).forEach(element => {
  //     element.sortIndex -= 1;
  //   });
  //   this.productGroups.filter(x => x.sortIndex == fromIndex)[0].sortIndex = toIndex;
  //   this.groupDataGrid.instance.refresh().then();
  // }

  // productsOnReorder(e: any) {
  //   let visibleRows = e.component.getVisibleRows(),
  //     toIndex = this.products[this.products.indexOf(visibleRows[e.toIndex].data)].sortIndex,
  //     fromIndex = this.products[this.products.indexOf(e.itemData)].sortIndex;
  //
  //   this.products.filter(x => x.sortIndex > fromIndex && x.sortIndex <= toIndex).forEach(element => {
  //     element.sortIndex -= 1;
  //   });
  //   this.products.filter(x => x.sortIndex == fromIndex)[0].sortIndex = toIndex;
  //   this.productsDataGrid.instance.refresh().then();
  // }

  onAdd(e: any) {
    let key = e.itemData.orderId, values = e.toData, index = e.toIndex;
    console.log(key + " id'li product " + values + " grubuna " + index + " sırasında taşındı")
  }

  demo(x: any) {
    console.log(x);
  }
}
