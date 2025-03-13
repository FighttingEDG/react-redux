import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { feachChannels } from "./store/modules/channelStore";
function App() {
  // 钩子函数useSelector
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feachChannels())
  }, [dispatch])
  return (
    <>
      {count}
      {/* 必须通过useDispatch来提交修改 */}
      <button onClick={() => dispatch(increment())}>加</button>
      <button onClick={() => dispatch(decrement())}>加</button>
      <button onClick={() => dispatch(addToNum(10))}>变10</button>
      <button onClick={() => dispatch(addToNum(20))}>变20</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default App
