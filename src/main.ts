import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {setupWorker} from 'msw/browser';
import { mockHandlers } from './mocks';
import { appConfig } from './app/app.config';

setupWorker(...mockHandlers).start()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));

