class BaseService {
    constructor() {
        this._http = new HttpRequest();
    }

    abortRequests() {
        this._http.abortRequests();
    }
}