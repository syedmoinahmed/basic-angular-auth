import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="register-container">
      <h2>Register New Account</h2>
      <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" [(ngModel)]="user.email" name="email" required email class="form-control" placeholder="Enter your email" #emailField="ngModel">
          <div *ngIf="emailField.invalid && emailField.touched" class="error">
            Please enter a valid email address.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input [type]="showPassword ? 'text' : 'password'" id="password" [(ngModel)]="user.password" name="password" required minlength="6" class="form-control" placeholder="Enter your password">
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input [type]="showPassword ? 'text' : 'password'" id="confirmPassword" [(ngModel)]="user.confirmPassword" name="confirmPassword" required class="form-control" placeholder="Confirm your password" #confirmPasswordField="ngModel">
          <div *ngIf="confirmPasswordField.invalid && confirmPasswordField.touched" class="error">
            Passwords must match.
          </div>
        </div>
        <span (click)="toggleShowPassword()" class="toggle-password">{{ showPassword ? 'Hide' : 'Show' }} Password</span>
        <button type="submit" [disabled]="!registerForm.valid || user.password !== user.confirmPassword" class="btn">Register</button>
      </form>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    .form-control {
      width: 100%;
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
    .toggle-password {
      display: block;
      margin: 1rem 0;
      cursor: pointer;
      color: #007bff;
    }
    .error {
      color: red;
      font-size: 0.875em;
      margin-top: 0.25rem;
    }
  `]
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  showPassword: boolean = false;

  constructor(private firebaseService: FirebaseService) { }

  async onSubmit(): Promise<void> {
    if (this.user.email && this.user.password && this.user.password === this.user.confirmPassword) {
      await this.firebaseService.register(this.user.email, this.user.password);
    } else {
      console.log("Form is invalid");
    }
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
