// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const apiUrl = 'https://dev-connect-rest-api.herokuapp.com';

export const environment = {
  production: false,

  signin: `${apiUrl}/auth/signIn`,
  signup: `${apiUrl}/user/register`,
  users: `${apiUrl}/user`,
  project: `${apiUrl}/project`,
  member: `${apiUrl}/project`,
  deleteMember: `${apiUrl}/project-detail/member`,
  status: `${apiUrl}/project`,
  tag: `${apiUrl}/project`,
  todo: `${apiUrl}/todo`,
  chat: `${apiUrl}/chat`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
