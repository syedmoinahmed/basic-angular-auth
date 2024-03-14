// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth: Auth;

  constructor(private router: Router) {
    this.auth = getAuth(); 
  }


  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful:', userCredential);
      this.router.navigate(['/']);
      alert('Login successful'); 
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed'); 
    }
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User registered successfully', userCredential);
      this.router.navigate(['/']); 
      alert('Registration successful'); 
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed'); 
    }
  }
}
