
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-container">
      <h2>Login to Your Account</h2>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" [(ngModel)]="user.email" name="email" #email="ngModel" required email class="form-control" placeholder="Enter your email">
    <div *ngIf="email.invalid && email.touched" class="error">
            Please enter a valid email address.
    </div>
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input [type]="showPassword ? 'text' : 'password'" id="password" [(ngModel)]="user.password" name="password" required class="form-control" placeholder="Enter your password">
    <span (click)="toggleShowPassword()" class="toggle-password">{{ showPassword ? 'Hide' : 'Show' }}</span>
  </div>
  <button type="submit" [disabled]="!loginForm.valid" class="btn">Login</button>
</form>

    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: auto;
      background-color: whitesmoke;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    .form-control {
      width: 95%;
      padding: 0.375rem 0.75rem;
      margin: 0.5rem 0;
      display: block;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }
    .btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn:disabled {
      background-color: #cccccc;
    }
    .toggle-password {
      cursor: pointer;
      color: #007bff;
    }
  `]
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  showPassword: boolean = false;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit(): void {
    console.log(this.user);
    this.firebaseService.login(this.user.email, this.user.password);
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
