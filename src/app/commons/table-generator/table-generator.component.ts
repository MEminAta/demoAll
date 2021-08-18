import {Component, Input, OnInit} from '@angular/core';
import {DevxTablesModel} from '../../models/devxTables.model';
import {DevxMainTablesModel} from '../../models/devexMainTables.model';
import {SearchNameDtoModel} from '../../models/searchNameDto.model';
import {DevexService} from "../../services/devex.service";

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent implements OnInit {

  dataSource: any;
  devxTable: DevxTablesModel[] = [];
  devxMainTable = new DevxMainTablesModel();
  dt = new SearchNameDtoModel();
  allowedPageSizes?: number[];
  lookupSource: any[] = [];
  @Input() st?: string;
  @Input() unique?: string;
  @Input() showHeader = true;


  constructor(
    private devApi: DevexService
  ) { }

  getMainTable(): void {
    this.devApi.getAllForModelWithPost("endpoints.settings.searchDevxMainTables.path", this.dt).subscribe((a: any) => {
      this.devxMainTable = a;
      this.getTable();
      this.allowedPageSizes = this.devxMainTable.allowedPageSizes.split(',').map((x: any) => parseInt(x));
    });
  }

  getTable(): void {
    this.devApi.getAllForModels("endpoints.settings.searchDevxTables.path" + this.devxMainTable.id).subscribe((a: any) => {
      this.devxTable = a;
      this.getLookups();
    });
  }

  getLookups(): void {
    this.devxTable.filter(a => a.isLookup).forEach(a => {
      this.lookupSource ? [a.id] = this.devApi.getAllDevx('id', localStorage.getItem('api') + '/' + a.lookupSource) : null;
    });
  }


  ngOnInit(): void {
    this.dt.search = this.st;
    let ext;
    if (this.unique === undefined) {
      ext = '';
    } else {
      ext = this.unique;
    }
    this.dataSource = this.devApi.getAllDevx('id', localStorage.getItem('api') + '/' + this.dt.search + '/' + ext);
    this.getMainTable();
  }

  returnSource() {
    return this.devApi.getAllDevx('id', "endpoints.settings.getColumnVisibility.path");
  }

}
