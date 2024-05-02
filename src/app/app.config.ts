import {APP_INITIALIZER, ApplicationConfig, inject} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {graphqlProvider} from './graphql.provider';
import {Apollo} from 'apollo-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    graphqlProvider,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const apollo = inject(Apollo);
        return () => {
          console.log('Using Apollo in App Initializer', apollo);
        }
      }
    }
  ]
};
