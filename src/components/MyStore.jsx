import { Fragment, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buy_apple, buy_orange ,reset } from "../redux/fruit/HyperMarketActions";
import { buy_pasta, buy_pizza, buy_sandwitch } from "../redux/food/FoodActions";
import { reset_food } from "../redux/food/FoodActions";
// import { RESET_FOOD } from "../redux/food/FoodActionsTypes";
// import { RESET } from "../redux/fruit/HyperMarketActionTypes";




const MyStore = () => {

  const [itemCount ,setItemCount]=useState({
    apple :1,
    orange :1
  })
  // console.log(props);
  const dispatch=useDispatch();
  const {apple ,orange } =useSelector(state =>state.fruit);
  const {pasta ,sandwitch , pizza } =useSelector(state =>state.food);
  return (
    <Fragment>
      <div className="container">
       <div className="row text-center ">
       <h1> فروشگاه میوه</h1>
 <div className=" row text-center">
<div className="input-group">
        <button className="btn btn-info " onClick={()=>dispatch(buy_apple(itemCount.apple))}>فروش سیب</button>
        <input type="number" value={itemCount.apple} onChange={(e)=>setItemCount({
...itemCount ,apple :e.target.value
        })} />
        </div>
        <span  >تعداد سیب:{apple}</span>
        <div className="input-group">
        <button className="btn btn-success " onClick={()=>dispatch(buy_orange(itemCount.orange))}>فروش پرتقال</button>
        <input type="number" value={itemCount.orange} onChange={(e)=>setItemCount({
...itemCount ,orange :e.target.value
        })} />
        </div>
        <span >تعداد پرتقال:{orange}</span>
        
        </div>
        {/* <span >تعداد موزها:{banana}</span> */}
        <h1> فروشگاه غذایی</h1>
        <button className="btn btn-info " onClick={()=>dispatch(buy_pasta())}>فروش پاستا</button>
        <span  >تعداد پاستا:{pasta}</span>
        <button className="btn btn-success " onClick={()=>dispatch(buy_sandwitch())}>فروش ساندویچ</button>
        <span >تعداد ساندویچ:{sandwitch}</span>
        <button className="btn btn-success " onClick={()=>dispatch(buy_pizza())}>فروش پیتزا</button>
        <span >تعداد پیتزا:{pizza}</span>
        <button className="btn btn-success " onClick={()=>dispatch(reset())}>پرکردن انبار  میوه </button>
        <button className="btn btn-success " onClick={()=>dispatch(reset_food())}>پر کردن انبار غذایی </button>
       </div>
      </div>
    </Fragment>
  );
};

// const stateToProps = (state) => {
//   return {
//     apple: state.apple,
//     orange: state.orange,
//     banana: state.banana,
//     // reset:state.reset
//   };
// };


// const dispatchToProps =(dispatch)=>{
//   return {
//     buy_apple :()=>dispatch(buy_apple()),
//     buy_orange :()=>dispatch(buy_orange()),
//     reset :()=>dispatch(reset())
//   }
// }
// export default connect(stateToProps,dispatchToProps) (MyStore);
export default MyStore ;