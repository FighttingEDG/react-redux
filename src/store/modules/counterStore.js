import { createSlice } from "@reduxjs/toolkit";
const counterStroe = createSlice({
    name: "counter",
    // 初始化状态
    initialState: {
        count: 0
    },
    // Redux Toolkit 允许在 reducers 写 "可变" 逻辑
    // action对象
    reducers: {
        // 定义改变状态的方法
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
})

// 解构出actionCreater函数
const { increment, decrement } = counterStroe.actions
// 获取reducer
const reducer = counterStroe.reducer

export { increment, decrement };
export default reducer;