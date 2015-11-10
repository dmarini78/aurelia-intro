import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'What\'s the Deal.io?';
    config.map([
      { route: ['','deals'], name: 'deals', moduleId: 'deals', title: 'Deals', nav: true },
      { route: 'deal', name: 'create', moduleId: 'deal', title: 'New Deal', nav: true }
    ]);

    this.router = router;
  }
}
