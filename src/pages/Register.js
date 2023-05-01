import React from 'react';
import {Row,Col , Form , Input} from 'antd'
 import {Link} from 'react-router-dom';
 import {useDispatch} from 'react-redux';
 import {userRegister} from '../redux/actions/userActions'
function Register() {
  const dispatch=useDispatch()
  function onFinish(values){
    dispatch(userRegister(values))
    console.log(values)
  }
    return(
      <div className='login'>
        <Row gutter={16} className='d-flex align-items-center'>
          <Col lg={16}  style={{position:'relative'}}>
            <img src="https://i.pinimg.com/474x/9e/e6/50/9ee650f45077dc17e7db0ae59f052cc8.jpg"/>
          </Col>
          <Col lg={8} className='text-left p-5'  >
            <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
              <h1> Register</h1>
              <hr/>
              <Form.Item name='username' label='username' rules={[{required:true}]}>
                <Input/>

              </Form.Item>
              <Form.Item name='password' label='password' rules={[{required:true}]}>
                <Input/>

              </Form.Item>
              <Form.Item name='password' label='confirm password' rules={[{required:true}]}>
                <Input/>

              </Form.Item>
              <button className='btn1 mt-2 mb-2'>Register</button>
              <br/>

              <Link to='/login'> Click Here to Login</Link>

            </Form>
          </Col>
        </Row>
 
      </div>
    )
    
  
}
  

export default Register;