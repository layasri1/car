
//import React from 'react'
import React, {useEffect } from 'react';     //useState
import {useSelector,useDispatch} from 'react-redux'
 import Defaultlayout from '../components/DefaultLayout'
 import {getAllCars} from '../redux/actions/carsActions'
// import './App.css';
 import {Button,Row,Col} from 'antd';
  

function Home() {
 //const {cars}=useSelector(state=>state.carsReducer)
 const {cars}= useSelector(state=>state.carsReducer)     //loading
 const dispatch=useDispatch()
// function Mycomponent({dispatch}){
 useEffect(()=>{
   dispatch(getAllCars())
 },[])
//}

 return (
   <Defaultlayout>
     
     
     <h1>  share cars</h1>
    <h1> length of cars is {cars.length}</h1>
   <Row justify='center' gutter={16} className='mt-5'>     
    {/* gutter-col space */}
     {cars.map(car=>{
       return <Col lg={5} sm={24} xs={24}>
         <div classname="car p-2 bs1 mt-3">
          <img src={car.image} className="carimg" />

          <div className="car-content d-flex align-items-center justify-content-left">
          <div>
           <p> {car.name}</p>
           <p> {car.rentPerHour} Rent per hour</p>

          </div>
          <div>
           <button className='btn1 mr-2'> Book Now</button>
          </div>
          </div>
          </div>

       </Col>
     })}
   </Row>
   </Defaultlayout>
 )
}
 
export default Home;
