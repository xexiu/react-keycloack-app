import Keycloak from 'keycloak-js';
import { KeyCloackConf } from '../interfaces/keycloack';
import keycloackConf from '../keycloack.json'

// @ts-ignore: Unreachable code error
const keycloak = new Keycloak(keycloackConf as KeyCloackConf);

export default keycloak