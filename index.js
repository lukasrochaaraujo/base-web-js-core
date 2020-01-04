var router = undefined;
var controller = undefined;
var app = {

    init:() => {
        router = new HttpRouter("home", app.onRouteChange);
    },

    bindEvents:() => {
        console.info("bindEvents is done.");
    },

    onRouteChange:(hash) => {
        hash = hash.charAt(0).toUpperCase() + hash.slice(1);
        controller = eval(`new ${hash}Controller()`);
        controller.start();
    }
};

app.init();