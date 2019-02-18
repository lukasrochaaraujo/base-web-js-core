class BaseModel {
    constructor(model) {
        this._model = {};
        if (model)
            this._model = model._model ? model._model : model;
    }

    getCd() {
        return this._model.cd;
    }

    setCd(value) {
        this._model.cd = value;
    }

    getJson() {
        if (this._model) {
            for (let prop in this._model) {
                if (typeof this._model[prop] === 'object' && this._model[prop] != null && this._model[prop] instanceof BaseModel) {
                    this._model[prop] = this._model[prop].getJson();
                }
            }
        }
        return this._model;
    }
}