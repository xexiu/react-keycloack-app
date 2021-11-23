import keycloak from '../utils/keycloack';

const initKeycloak = (onAuthenticatedCallback: Function) => {
    keycloak.init({
        onLoad: 'login-required'
    })
    .then((authenticated: any) => {
        debugger;
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback: Function) =>
    keycloak.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) => roles.some((role: string) => keycloak.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole
};

export default UserService;