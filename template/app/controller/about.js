import { Controller } from "../framework";

export default class extends Controller {
  async index() {
    await this.ctx.render("/about", {
      title: "About"
    });
  }
}
