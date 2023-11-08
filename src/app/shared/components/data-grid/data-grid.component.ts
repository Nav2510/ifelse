import { Component, Input } from '@angular/core';

import { GridColumn } from './models/grid-column.model';
import { GridData } from './models/grid-data.model';
import { GridStatusEnum } from './enums/grid-status.enum';
import { GridDataTag } from './models/grid-tag.model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  @Input() title: string = '';
  @Input() columns: GridColumn[] = [];
  @Input() data: GridData[] = [];

  countTagColor: GridDataTag = {
    background_color: '#f8f5fe',
    text_color: '#856bcd',
    value: '',
  };
  statusTagColor: { [key in GridStatusEnum]: GridDataTag } = {
    Churned: {
      background_color: '#f9fafb',
      text_color: '#687083',
      value: 'Churned',
    },
    Customer: {
      background_color: '#effdf4',
      text_color: '#3c7a54',
      value: 'Customer',
    },
  };

  getTagColor(status: GridStatusEnum): GridDataTag {
    return this.statusTagColor[status];
  }
}
