import {AfterViewInit, Component, OnInit} from '@angular/core';
import {crmBidTemplateModel} from "../../../models/crm-bid-template.model";

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent implements OnInit, AfterViewInit {

  editorStatus = [
    {editorFocus: false, editorHover: false},  // headerEditorFirst
    {editorFocus: false, editorHover: false},  // entranceEditorFirst
    {editorFocus: false, editorHover: false},  // headerEditorSecond
    {editorFocus: false, editorHover: false},  // entranceEditorSecond
    {editorFocus: false, editorHover: false},  // exitEditorFirst
    {editorFocus: false, editorHover: false},  // exitEditorSecond
    {editorFocus: false, editorHover: false},  // headerEditorThird
    {editorFocus: false, editorHover: false},  // bottomEditorFirst
    {editorFocus: false, editorHover: false},  // coverEditor
    {editorFocus: false, editorHover: false},  // bottomEditorSecond
    {editorFocus: false, editorHover: false},  // bottomEditorThird
    {editorFocus: false, editorHover: false},  // coverBGEditor
  ];

  entrance = false;
  productsAndServices = false;
  exit = false;


  defaultSettings: crmBidTemplateModel = {
    templateName: 'Süper Şablon',
    fontFamilyId: 1,
    paddingX: 5,
    paddingY: 5,
    headerEditorValue: '',
    coverPage: false,
    entrancePageSplit: true,
    companyInfos: true,
    title: 'Selam Dünya',
    shorDate: true,
    date: true,
    endDate: true,
    reference: true,
    referenceText: 'myReferans',
    customer: true,
    customerCompany: true,
    customerContact: true,
    customerTax: true,
    customerRelatedPerson: true,
    subject: true,
    revisionInfo: true,
    entranceEditorValue: '',
    tableGrey: true,
    productColumnStyleId: 1,
    productCode: true,
    productImg: true,
    productDetail: true,
    productColumnHeadId: 1,
    productNo: true,
    amount: true,
    unitColumnHeadId: 1,
    unitPriceColumn: true,
    discountedPriceColumn: true,
    productTaxColumn: true,
    totalPriceColumn: true,
    productDiscount: true,
    totalDiscount: true,
    subTotal: true,
    totalTax: true,
    totalPrice: true,
    total: true,
    exitPageSplit: false,
    exitEditorValue: '',
    expiry: true,
    pageNo: true,
    bottomEditorValue: '',
    coverEditorValue: '',
    coverBackGroundEditorValue: '',
  };

  fontFamilyTypes = [
    {id: 1, name: 'Verdana'},
    {id: 2, name: 'Arial'},
    {id: 3, name: 'Tahoma'},
    {id: 4, name: 'Geneva'},
    {id: 5, name: 'Helvetica'},
    {id: 6, name: 'Georgia'},
  ];
  productColumnStyleTypes = [
    {id: 1, name: "Marka - Model - İsim"},
    {id: 2, name: "Marka - Model"},
    {id: 3, name: "Marka - İsim"},
    {id: 4, name: "Model - İsim"},
    {id: 5, name: "Marka"},
    {id: 6, name: "Model"},
    {id: 7, name: "İsim"},
  ]
  productColumnHeadTypes = [
    {id: 1, name: "Ürün"},
    {id: 2, name: "Hizmet"},
    {id: 3, name: "Ürün/Hizmet"},
  ]
  unitColumnHeadTypes = [
    {id: 1, name: "Birleştir"},
    {id: 2, name: "Ayır"},
    {id: 3, name: "Gizle"},
  ]

  date: Date = new Date()
  endDate: Date = new Date()

  constructor() {
    this.endDate.setDate(this.endDate.getDate() + 15);
  }

  ngOnInit(): void {
    setInterval(()=>{console.log(this.defaultSettings)},3000);
  }

  ngAfterViewInit() {
    let data = document.getElementsByClassName("dx-htmleditor-toolbar-wrapper") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < data.length; i++) {
      data[i].style.display = "none";
    }
    this.fullPlacement();
  }

  fullPlacement() {
    this.fontFamilyChange();
    this.paddingChange(0);
    this.paddingChange(1);
  }

  closeAllToggle() {
    this.entrance = false
    this.productsAndServices = false;
    this.exit = false;
  }

  entranceToggle() {
    if (this.entrance) {
      this.closeAllToggle();
    } else {
      this.closeAllToggle();
      this.entrance = true;
    }
  }

  productsAndServicesToggle() {
    if (this.productsAndServices) {
      this.closeAllToggle();
    } else {
      this.closeAllToggle();
      this.productsAndServices = true;
    }
  }

  exitToggle() {
    if (this.exit) {
      this.closeAllToggle();
    } else {
      this.closeAllToggle();
      this.exit = true;
    }

  }


  fontFamilyChange() {
    document.getElementById('pages')!.style.fontFamily = this.fontFamilyTypes.filter(x => x.id == this.defaultSettings.fontFamilyId)[0].name;
  }

  paddingChange(dimension: number) {
    let pages = document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>;
    if (dimension == 0) {
      for (let i = 0; i < pages.length; i++) {
        pages[i].style.paddingRight = this.defaultSettings.paddingX + '%';
        pages[i].style.paddingLeft = this.defaultSettings.paddingX + '%';
      }
    } else {
      for (let i = 0; i < pages.length; i++) {
        pages[i].style.paddingTop = this.defaultSettings.paddingY + '%';
      }
    }
  }

  editorStatusChange(id: string, editor: number, event: number) {
    // event = 1: hover, 2:exit, 3:focus, 4:blur
    let data = document.getElementById(id)!.getElementsByClassName("dx-htmleditor-toolbar-wrapper") as HTMLCollectionOf<HTMLElement>;
    if (event == 1) {
      this.editorStatus[editor].editorHover = true;
      data[0].style.display = "block";
    } else if (event == 2) {
      this.editorStatus[editor].editorHover = false;
      if (!this.editorStatus[editor].editorFocus) {
        data[0].style.display = "none";
      }
    } else if (event == 3) {
      this.editorStatus[editor].editorFocus = true;
      data[0].style.display = "block";
    } else if (event == 4 && !this.editorStatus[editor].editorHover) {
      this.editorStatus[editor].editorFocus = false;
      this.editorStatus[editor].editorHover = false;
      data[0].style.display = "none";
    }
  }

  demoData?: any;

  demo(x: any) {
    console.log(x)
  }
}
