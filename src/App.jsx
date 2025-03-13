import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "./store/modules/counterStore";
function App() {
  // 钩子函数useSelector
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      {count}
      {/* 必须通过useDispatch来提交修改 */}
      <button onClick={()=>dispatch(increment())}>加</button>
      <button onClick={()=>dispatch(decrement())}>加</button>
    </>
  )
}

export default App
