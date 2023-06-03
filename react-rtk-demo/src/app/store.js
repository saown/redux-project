import { configureStore } from '@reduxjs/toolkit';
import cakeReduser from '../features/cake/cakeSlice';
import icecreamReduser from '../features/icecream/icecreamSlice';
import userReduser from '../features/user/userSlice';

const store = configureStore({
    reducer:{
        cake: cakeReduser,
        icecream: icecreamReduser,
        user: userReduser,
    },
});

export default store;