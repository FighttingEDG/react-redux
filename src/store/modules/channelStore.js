import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const channelStore = createSlice({
    name: "channel",
    // 初始化状态
    initialState: {
        channelList: []
    },
    // Redux Toolkit 允许在 reducers 写 "可变" 逻辑
    // action对象
    reducers: {
        // 定义改变状态的方法
        setChannels(state, action) {
            state.channelList = action.payload
        }
    }
})
// 解构出actionCreater函数
const { setChannels } = channelStore.actions
// 异步请求
const feachChannels = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannels(res.data.data.channels))
    }
}
// 获取reducer
const reducer = channelStore.reducer
export { feachChannels };
export default reducer;