import {ClientFunction, t} from 'testcafe';

class ClientFunctions {
  async getLocation() {
    return ClientFunction(() => document.location.href);
  }

  async acceptNativeConfirm() {
    await t
      .setNativeDialogHandler( () => true );
  }
}

export default new ClientFunctions();