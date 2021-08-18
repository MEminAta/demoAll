export class DevxTablesModel {
  id?: number;
  tableName?: string;
  dataField?: string;
  dataType?: string;
  caption?: string;
  allowEditing?: boolean;
  allowDeleting?: boolean;
  isRequired?: boolean;
  canSee?: boolean;
  width?: number;
  order?: number;
  isLookup?: boolean;
  lookupValue?: string;
  lookupDisplay?: string;
  lookupSource?: string;
}
