class HttpRouter {
    constructor(route) {
        this._route = this._cleanRoute(route);
        this._controller = undefined;
    }

    init() {
        window.addEventListener('hashchange', this._changeRoute.bind(this), false);
    }

    getControllerInstance() {
        return this._controller;
    }

    _changeRoute() {
        this._route = this._cleanRoute(route);
        switch(this._route) {
            
        }
    }

    _cleanRoute(route) {
        return hash.replace("#", "");
    }
}