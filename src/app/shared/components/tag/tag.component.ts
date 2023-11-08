import { Component, Input } from '@angular/core';

const TEXT_COLOR = '#787878';
const BORDER_COLOR = '#78787844';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  private _textColor: string = TEXT_COLOR;

  @Input() content: string = '';
  @Input() bgColor: string = '#ededed';
  @Input()
  public get textColor(): string {
    return this._textColor;
  }
  public set textColor(value: string) {
    this._textColor = value;
    this.borderColor = `${value}44`;
  }
  borderColor: string = BORDER_COLOR;
}
