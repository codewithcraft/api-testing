export class Disguise {
  constructor(options = {}) {
    this.options = options;
    this.transport = new DisguiseSessionTransport(this);
    this.system = new DisguiseServiceSystem(this);
    this.sequencing = new DisguiseSessionSequencing(this);
  }

  async fetch(path, options = {}) {
    const url = new URL(path.join("/"), `http://${this.options.host}/api/`);

    const response = await fetch(url.toString(), options);
    const result = await response.json();
    return result.result;
  }
}

class DisguiseSessionTransport {
  constructor(client) {
    this.client = client;
  }

  tracks() {
    return this.client.fetch(["session", "transport", "tracks"]);
  }

  active() {
    return this.client.fetch(["session", "transport", "activetransport"]);
  }
}

class DisguiseSessionSequencing {
  constructor(client) {
    this.client = client;
  }

  indirections() {
    return this.client.fetch(["session", "sequencing", "indirections"]);
  }

  indirectionResources(uid) {
    return this.client.fetch(
      ["session", "sequencing", "indirectionresources"],
      { params: { uid } },
    );
  }
}
class DisguiseServiceSystem {
  constructor(client) {
    this.client = client;
  }

  detect() {
    return this.client.fetch(["service", "system", "detectsystems"]);
  }
}
