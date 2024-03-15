import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="home-container">
  <h1>Logged in Sucessfully</h1>
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

  `]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}