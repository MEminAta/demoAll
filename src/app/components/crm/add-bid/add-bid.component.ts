import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from "devextreme-angular/ui/data-grid";
import {DxTreeViewComponent} from "devextreme-angular";

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.scss']
})
export class AddBidComponent implements OnInit {
  @ViewChild('dataGrid', {static: false}) dataGrid!: DxDataGridComponent;
  @ViewChild('owner', { static: false }) ownerEmployees!: DxTreeViewComponent;
  @ViewChild('readable', { static: false }) readableEmployees!: DxTreeViewComponent;
  @ViewChild('changable', { static: false }) changableEmployees!: DxTreeViewComponent;

  firstCome = true;

  editorIndex = 0;
  pageIndex = 0;

  addGroupButton = {
    text: "+",
    stylingMode: "text",
    onClick: (e: any) => {
    }
  };

  productTypes = [
    {id: 1, name: 'elma', unit: 'Kg', unitPrice: 20, unitCost: 10, currencyTypeId: 1, kdv: 18},
    {id: 2, name: 'armut', unit: 'Kg', unitPrice: 20, unitCost: 10, currencyTypeId: 1, kdv: 18},
    {id: 3, name: 'kestane', unit: 'Kg', unitPrice: 20, unitCost: 10, currencyTypeId: 2, kdv: 18}
  ];
  products = [
    {
      id: 1,
      productId: 1,
      unit: 'Kg',
      unitPrice: 10,
      unitCost: 4,
      currencyTypeId: 1,
      discount: 10,
      discountType: '%',
      tax: 18,
      amount: 3,
      desc: 'çok üstüne gitmeyin vaz geçer',
      groupId: 1
    },
    {
      id: 2,
      productId: 2,
      unit: 'Kg',
      unitPrice: 10,
      unitCost: 8,
      currencyTypeId: 1,
      discount: 10,
      discountType: '%',
      tax: 18,
      amount: 4,
      desc: 'kitleyin',
      groupId: 3
    },
    {
      id: 3,
      productId: 3,
      unit: 'Kg',
      unitPrice: 10,
      unitCost: 8,
      currencyTypeId: 2,
      discount: 10,
      discountType: 'Birim',
      tax: 18,
      amount: 5,
      desc: 'almak zorunda',
      groupId: 2
    }
  ];
  groups = [
    {id: 1, name: 'sebze'},
    {id: 2, name: 'meyve'},
    {id: 3, name: 'alabama'},
  ];
  currencyTypes = [
    {id: 1, name: '₺'},
    {id: 2, name: '$'},
    {id: 3, name: '€'},
  ];
  discountTypes = ['%', 'Birim']

  now: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    this.onReorder = this.onReorder.bind(this);
    this.setStateProductValue = this.setStateProductValue.bind(this);
  }

  editorToggle(index: number) {
    this.editorIndex = index;
  }

  pageToggle(index: number) {
    this.pageIndex = index;
    if (index == 1) {
      this.firstCome = false;
    }
  }

  onReorder(e: any) {
    let visibleRows = e.component.getVisibleRows(),
      toIndex = this.products.indexOf(visibleRows[e.toIndex].data),
      fromIndex = this.products.indexOf(e.itemData);
    this.products[fromIndex].groupId = this.products[toIndex].groupId;
    this.dataGrid.instance.refresh();
  }

  setStateProductValue(rowData: any, value: any) {
    if (!rowData.productId) {
      let y = this.productTypes.filter(x => x.id == value)[0];
      y.unit ? rowData.unit = y.unit : '';
      y.unitPrice ? rowData.unitPrice = y.unitPrice : '';
      y.unitCost ? rowData.unitCost = y.unitCost : '';
      y.kdv ? rowData.kdv = y.kdv : '';
      y.currencyTypeId ? rowData.currencyTypeId = y.currencyTypeId : '';
      rowData.productId = y.id;
    }
  }

  onRowValidating(e: any) {
    if (e.newData.productId && e.newData.groupId) {
      e.isValid = this.products.filter(x => x.productId == e.newData.productId && x.groupId == e.newData.groupId).length < 1
      if (e.isValid == false) {
        e.errorText = 'Girdiğiniz grupta bu ürün zaten var';
      }
    }
  }

  currency(id: number) {
    return this.currencyTypes.filter(x => x.id == id)[0].name;
  }
}
