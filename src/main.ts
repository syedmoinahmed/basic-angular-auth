import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { firebaseConfig } from '../src/app/environment'
import { initializeApp } from "firebase/app";



const app = initializeApp(firebaseConfig);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
