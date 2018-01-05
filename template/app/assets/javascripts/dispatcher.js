import Home from "./feature/home";
import About from "./feature/about";

(function() {
  let Dispatcher;

  $(function() {
    return new Dispatcher();
  });

  Dispatcher = (function() {
    function Dispatcher() {
      this.initPageScripts();
    }

    Dispatcher.prototype.initPageScripts = function() {
      const page = $("body").attr("data-page");
      if (!page) return false;

      switch (page) {
        case "home:index":
          new Home();
          break;
        case "about:index":
          new About();
          break;
        default:
      }
    };
    return Dispatcher;
  })();
}.call(window));
