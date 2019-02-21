class BasicStorage {
    constructor() {
        this._storageInstance = localStorage;
        this._storageData = []
    }

    add(key, value) {
        if (typeof value === 'object')
            value = JSON.stringify(value);

        this._storageInstance.setItem(key, value);
    }

    getByKey(key) {
        let data = this._storageInstance.getItem(key);

        if (data == undefined)
            return data;

        if (data.includes('{'))
            return JSON.parse(data);
        else
            return data;
    }

    getAll() {
        this._fillData();
        return this._storageData;
    }

    delete(key) {
        this._storageInstance.removeItem(key);
    }

    clear() {
        this._storageInstance.clear();
    }

    _fillData() {
        for (let i = 0; i < this._storageInstance.length; i++) {
            let key = this._storageInstance.key(i);
            this._storageData.push({ key: key, value: this.getByKey(key) });
        }
    }
}