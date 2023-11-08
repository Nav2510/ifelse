import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataGridService } from '../../shared/components/data-grid/services/data-grid.service';
import { GridResponse } from '../../shared/components/data-grid/models/grid-response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  gridTitle = 'Team members';
  gridData$: Observable<GridResponse> | undefined;

  constructor(private readonly gridService: DataGridService) {}

  ngOnInit(): void {
    this.gridData$ = this.gridService.fetchData();
  }
}
