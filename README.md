# Getting Started with React App + Keyclock + docker

** REQUISITS BEFORE STARTING **

- Have NodeJS installed [NodeJS](https://nodejs.org/en/download/)
- Install KeyCloack (you must have docker installed first [Getting started with KeyClock Docker](https://www.keycloak.org/getting-started/getting-started-docker))
- Setup Realm, Client Id in Keycloak
- Create React App
- Install keycloak-js & @react-keycloak/web
- Setup Keycloak instance as needed
- Wrap Basic app with KeycloakProvider
- Routes restrict based on Keycloak Authentication & Authorization,
- Component/Function level restriction based on Keycloak Authentication & Authorization

** Start the app **

- Execute: `npm run docker-run`
- Execute: `npm run start`


Optional: You can create Realm Roles to check if user has role. Suggested roles to create: 'user', 'admin'

