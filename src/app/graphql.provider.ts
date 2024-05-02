import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import {ApplicationConfig, inject, PLATFORM_ID} from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import {isPlatformBrowser} from '@angular/common';

const uri = ''; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    connectToDevTools: isBrowser,
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
