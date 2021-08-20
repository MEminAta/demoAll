import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus= [
    {
      title: 'Talepler',
      icon: 'fa fa-edit',
      type: 'dropdown',
      active: false,
      submenus:[
        {
          title: 'Talep Aç',
          routerLink: 'talep-aç',
        },
        {
          title: 'Talep Listele',
          routerLink: 'talep-listele',
        }
      ]
    },
    {
      title: 'Satış Fırsatı',
      icon: 'fa fa-plus',
      type: 'single-row',
      active: false,
      routerLink: 'sales-opportunity'
    },
    {
      title: 'Teklif Ekle',
      icon: 'fa fa-plus',
      type: 'single-row',
      active: false,
      routerLink: 'add-bid'
    },
    {
      title: 'Şablon Ekle',
      icon: 'fa fa-plus',
      type: 'single-row',
      active: false,
      routerLink: 'add-template'
    },
    {
      title: 'Sürükle Bırak',
      icon: 'fa fa-plus',
      type: 'single-row',
      active: false,
      routerLink: 'demo'
    }
  ]
}
