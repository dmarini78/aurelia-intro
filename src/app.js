import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'What\'s the Deal.io?';
    config.map([
      { route: ['','deals'], name: 'deals', moduleId: 'deals', title: 'Deals', nav: true },
      { route: 'deal', name: 'create', moduleId: 'deal-editor', title: 'New Deal', nav: true },
      { route: 'deal/:id', name: 'edit', moduleId: 'deal-editor', title: 'Edit Deal' }
    ]);

    this.router = router;
  }
}
