import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-respons';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '@service/users.service';

@Component({
  selector: 'user-component',

  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-shared-title [title]="titleLabel()" />
    @if(user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()?.first_name" />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>
    }@else{
    <h3>Espere Por Favor</h3>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `${this.user()?.first_name} ${this.user()?.last_name} `;
    }
    return 'Informacion del usuario esperando';
  });

  // constructor() {
  //   console.log(
  //     this.route.params.subscribe((param) => {
  //       console.log(param);
  //     })
  //   );
  // }
}
