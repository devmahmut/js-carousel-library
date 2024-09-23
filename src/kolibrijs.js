class KolibriJS {
    constructor(options) {
      this.container = document.querySelector(options.container);
      this.items = options.items || 1;
      this.loop = options.loop || false;
      this.autoplay = options.autoplay || false;
  
      this.init();
    }
  
    init() {
      // Initialization logic here
      console.log('KolibriJS initialized');
    }
  }
  