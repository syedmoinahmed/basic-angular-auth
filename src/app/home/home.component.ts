import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="home-container">
  <h1>Welcome to Our Application</h1>
  <p>Get started by accessing your account or creating a new one.</p>
  <div class="button-container">
    <button routerLink="/login">Login</button>
    <button routerLink="/register">Register</button>
  </div>
</div>
`,
  styles: [`
  .home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.home-container h1 {
  font-size: 2.5rem;
  color: #333;
}

.home-container p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.button-container button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.button-container button:hover {
  background-color: #0056b3;
}

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}