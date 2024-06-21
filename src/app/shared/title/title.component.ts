import { Component, Input, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'app-shared-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input({ required: true })
  public title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
