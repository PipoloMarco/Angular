import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-shared-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        srcset="http://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero-1"
      />

      <div
        class="bg-blue-800 w-32 rounded "
        style="view-transition-name: hero-2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
