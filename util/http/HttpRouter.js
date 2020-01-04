class HttpRouter {
    constructor(initialRoute, routerHandler) {
        this.init();
        this._routerHandler = routerHandler;
        location.hash = initialRoute;
    }

    init() {
        window.addEventListener('hashchange', this._changeRoute.bind(this), false);
    }

    _changeRoute() {
        this._routerHandler(location.hash.replace('#', ''));
    }
}