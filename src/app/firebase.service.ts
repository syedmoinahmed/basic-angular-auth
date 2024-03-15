// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth: Auth;
  private authState = new BehaviorSubject<boolean>(false); 

  constructor(private router: Router) {
    this.auth = getAuth(); 
    this.monitorAuthState();
  }

  private monitorAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authState.next(true);
      } else {
        // User is signed out.
      }
    });
  }

  isLoggedIn(): boolean {
    let loggedIn = false;
    this.authState.subscribe((state) => {
      loggedIn = state;
    });
    return loggedIn;
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful:', userCredential);
      this.router.navigate(['/landing']);
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
      this.router.navigate(['/login']); 
      alert('Registration successful'); 
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed'); 
    }
  }
}
