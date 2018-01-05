const { EggCore, BaseContextClass } = require("travisxu-egg-core");
const path = require("path");

const EGG_PATH = Symbol.for("egg#eggPath");

class Application extends EggCore {
  constructor() {
    super();
    this.loader.loadConfig();
    this.loader.loadController();
    this.loader.loadRouter();
  }

  get [EGG_PATH]() {
    return path.join(__dirname, "..");
  }
}

module.exports = {
  Application,
  Controller: BaseContextClass
};
