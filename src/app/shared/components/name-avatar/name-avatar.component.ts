import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-avatar',
  templateUrl: './name-avatar.component.html',
  styleUrls: ['./name-avatar.component.scss'],
})
export class NameAvatarComponent {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() username: string = '';
  @Input() src: string = '';

  getInitials(firstName: string, lastName: string) {
    return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
  }
}
