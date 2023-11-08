import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataGridComponent } from './data-grid.component';
import { DataGridService } from './services/data-grid.service';
import { TagModule } from '../tag/tag.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [DataGridComponent],
  imports: [CommonModule, HttpClientModule, TagModule, ProgressBarModule],
  exports: [DataGridComponent],
  providers: [DataGridService],
})
export class DataGridModule {}
