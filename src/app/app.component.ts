import {Component} from '@angular/core';
import {locale} from "devextreme/localization";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    locale(navigator.language);
  }
}
