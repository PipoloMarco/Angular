import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-shared-title [title]="currentFramework()" />
    <pre>
      {{ frameworkAsSignal() | json }}
    </pre
    >
    <pre>
    {{ frameworkAsProperties | json }}
    </pre
    >
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'angular',
    releaseDate: 2016,
  });
  public frameworkAsProperties = {
    name: 'angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'react',
      }));
      // this.frameworkAsProperties.name = 'React';
      console.log('Hecho');
    }, 3000);
  }
}
