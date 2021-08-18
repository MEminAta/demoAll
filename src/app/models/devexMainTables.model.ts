export class DevxMainTablesModel {
  id?: number;
  name?: string;
  title?: string;
  subtitle?: string;
  editingMode?: string;
  remoteOperations?: boolean;
  headerFilter?: boolean;
  allowAdding?: boolean;
  allowDeleting?: boolean;
  allowUpdating?: boolean;
  selectTextOnEditStart?: boolean;
  startEditAction?: string;
  filterRow?: boolean;
  groupPanel?: boolean;
  pageSize?: number;
  allowedPageSizes!: string;
  showInfo?: boolean;
  showPageSizeSelector?: boolean;
  export?: boolean;
}
