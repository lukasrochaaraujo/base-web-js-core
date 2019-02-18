class BaseView {
    constructor() {
        this._appcontent = document.querySelector('.app-container');
        this._viewContent = '';
    }

    render() {
        this._appcontent.innerHTML = this.getContent();
    }

    appendContent(content) {
        this._viewContent += content;
    }

    getContent() {
        return this._viewContent;
    }

    clearContent() {
        this._viewContent = '';
    }
}