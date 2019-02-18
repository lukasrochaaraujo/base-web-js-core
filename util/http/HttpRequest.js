class HttpRequest {
    constructor() {
        this._abortController = new AbortController();
        this._headers = new Headers();
    }

    appendHeader(prop, value) {
        this._headers.append(prop, value);
    }

    abortRequests() {
        this._abortController.abort();
    }

    _getSinalAbort() {
        return this._abortController.signal;
    }

    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: this._headers,
            signal: this._getSinalAbort()
        })
        .then(response => response.json())
        .catch(error => error);
    }

    post(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
            signal: this._getSinalAbort()
        })
        .then(response => response.json())
        .catch(error => error);
    }

    put(url, body) {
        return fetch(url, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify(body),
            signal: this._getSinalAbort()
        })
        .then(response => response.json())
        .catch(error => error);
    }

    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: this._headers,
            signal: this._getSinalAbort()
        })
        .then(response => response.json())
        .catch(error => error);
    }
}