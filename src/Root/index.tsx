import { Amplify, Hub } from 'aws-amplify';

import { AuthProvider } from 'domains/auth';
import { MockProvider } from 'domains/mock';

import { Layout } from './Layout';
import { useEffect } from 'react';

Amplify.configure({
  Auth: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_mj4RNpIqX',
    userPoolWebClientId: '7bnggmb4lm7trppikpnnndvipn',
    mandatorySignIn: true,
    oauth: {
      domain: 'raidmate-dev.auth.eu-west-1.amazoncognito.com',
      scope: ['openid'],
      redirectSignIn: 'http://localhost:8080/blizzard-login',
      redirectSignOut: 'http"//localhost:8080',
      responseType: 'code',
    },
  },
});

export function Root() {
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          console.log('Authenticated', data);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Error', data);
          break;
      }
    });
  }, []);

  return (
    <AuthProvider>
      <MockProvider>
        <Layout />
      </MockProvider>
    </AuthProvider>
  );
}
