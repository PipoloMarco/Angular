import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  public fb = inject(FormBuilder);
  public authService = inject(AuthService);
  public router = inject(Router);

  public formRegister = this.fb.group({
    user: ['marco95', [Validators.minLength(6), Validators.required]],
    email: ['marco95@hotmail.com', [Validators.required]],
    password: ['1234567', [Validators.minLength(6), Validators.required]],
  });

  onSubmit() {
    const { user, email, password } = this.formRegister.value;

    this.authService.register(email!, password!, user!).subscribe({
      next: () => this.router.navigateByUrl('auth/login'),
    });
  }
}
