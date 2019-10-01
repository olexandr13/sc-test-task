import {ClientFunction} from 'testcafe';

class ClientFunctions {
  async getLocation() {
    return ClientFunction(() => document.location.href);
  }
}

export default new ClientFunctions();