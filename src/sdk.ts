import Users from "./users";
import Domains from "./domains";
import Things from "./things";
// const Groups = require("./groups")
import Channels from "./channels";
// const Certs = require("./certs");
// const Bootstrap = require("./bootstrap");
// const Messages = require("./messages");

const defaultUrl = "http://localhost";

interface SDKConfig {
  usersUrl?: string;
  domainsUrl?: string;
  thingsUrl?: string;
  // groupsUrl?: string;
  channelsUrl?: string;
  // certsUrl?: string;
  // bootstrapsUrl?: string;
  // readersUrl?: string;
  // httpadapterUrl?: string;
}

class SDK {
  users: Users;
  domains: Domains;
  things: Things;
  // groups: Groups;
  channels: Channels;
  // certs: Certs;
  // bootstrap: Bootstrap;
  // messages: Messages;

  constructor({
    usersUrl = defaultUrl,
    domainsUrl = defaultUrl,
    thingsUrl = defaultUrl,
    // groupsUrl = defaultUrl,
    channelsUrl = defaultUrl,
    // certsUrl = defaultUrl,
    // bootstrapsUrl = defaultUrl,
    // readersUrl = defaultUrl,
    // httpadapterUrl = defaultUrl,
  }: SDKConfig = {}) {
    this.users = new Users(usersUrl);
    this.domains = new Domains(domainsUrl);
    this.things = new Things(thingsUrl);
    //this.groups = new Groups(groupsUrl);
    this.channels = new Channels(channelsUrl);
    // this.certs = new Certs(certsUrl);
    // this.bootstrap = new Bootstrap(bootstrapsUrl);
    // this.messages = new Messages(readersUrl, httpadapterUrl);
  }
}

export default SDK;

// module.exports = SDK;
// Export the SDK class for use in a web browser
// if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
//   module.exports = SDK; // For Node.js
// } else {
//   window.SDK = SDK; // For browsers
// }
