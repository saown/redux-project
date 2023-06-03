const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');

const cakeReduser = require("../features/cake/cakeSlice");
const icecreamReduser =  require('../features/icecream/icecreamSlice');
const userReduser = require('../features/user/userSlice');

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer:{
        cake: cakeReduser,
        icecream: icecreamReduser,
        user: userReduser,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;