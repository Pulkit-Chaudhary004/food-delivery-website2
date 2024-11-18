import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Dummy login validation
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      alert('Login successful!');
      this.router.navigate(['/']); // Redirect to home or any other page after successful login
    } else {
      alert('Invalid email or password');
    }
  }
}
