import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { dec, inc } from "../redux/cartSlice";
const Home=()=>{
    const value = useSelector(state=>state.basant.value);
    const dispatch = useDispatch();
    return(
        <>
            <div id="mainDiv">
                <button id="Btn" onClick={()=>{dispatch(inc())}}>Increment</button> <span id="showNum"> {value} </span>  <button id="Btn" onClick={()=>{dispatch(dec())}}>decrement </button>              
            </div>
        </>
    )
}

export default Home