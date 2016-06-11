export class App {
  constructor() {}

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'comedians' },
      { route: 'comedians',            name: 'comedians',      moduleId: 'comedians',   nav: true },
      { route: 'comedians/:id/detail', name: 'comedianDetail', moduleId: 'comedianDetail' }
    ]);
  }
}
