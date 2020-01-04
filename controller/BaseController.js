class BaseController {
    /**
     * BaseController
     * @param {Object} view - instância de uma classe View 
     * @param {Object} service  - instância de uma classe Service
     */
    constructor(serviceInstance, viewInstance) {
        this._service = serviceInstance;
        this._view = viewInstance;
    }

    start() {

    }

    stop() {
        this._service.abortRequests();
    }
}