import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // ✅ nouveau

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ au lieu de importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));