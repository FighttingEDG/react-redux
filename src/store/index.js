import { configureStore } from "@reduxjs/toolkit";
// 导入子模块reducer
import counterReducer from "./modules/counterStore.js"
import channalReducer from "./modules/channelStore.js"
const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channalReducer
    }
})
export default store;