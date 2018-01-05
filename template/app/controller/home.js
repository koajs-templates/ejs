import { Controller } from "../framework";
class HomeController extends Controller {
  async index() {
    await this.ctx.render("/home", {
      title: "Home"
    });
  }
}

export default HomeController;
