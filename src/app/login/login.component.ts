import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // This new property controls the visibility of the pop-up
  showWelcomePopup = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      // When login is successful, we set this to true to show the pop-up
      this.showWelcomePopup = true;
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // This function is called by the button in the pop-up
  closePopup(): void {
  this.showWelcomePopup = false;
  this.router.navigate(['/']); 
}
}

