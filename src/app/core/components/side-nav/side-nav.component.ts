import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  basicActions = [
    'home_app_logo',
    'insert_chart',
    'layers',
    'library_add',
    'pie_chart',
    'group',
  ];
  settingActions = ['account_circle', 'settings'];
}
