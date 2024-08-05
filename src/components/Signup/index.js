import './index.css'

import {Component} from 'react'
import {useNavigate} from 'react-router-dom'




class SignUp extends Component {
  state = {user_firstname:"",user_email: '', user_password: '',user_phone:"" ,showErrorMsg: false, errorMsg: '',issignup:true,user_lastname:"ni",user_city:"Hyderabad",user_zipcode:"500072"}

  onchangeEmail = event => {
    this.setState({user_email: event.target.value})
  }

  onchangePassword = event => {
    this.setState({user_password: event.target.value})
  }

  changeSignup=()=>{
    this.setState(prevState=>({
        issignup:!prevState.issignup
    }))
  }

  onchangeName=(event)=>{
    this.setState({user_firstname:event.target.value})
  }
  onchangePhone=(event)=>{
    this.setState({user_phone:event.target.value})
  }

  onSubmitSuccess = (data) => {
    const { issignup } = this.state;
    localStorage.setItem('user', JSON.stringify(data.user_data));
    this.setState({ user_firstname: "", user_email: "", user_password: "", user_phone: "" });
    if (!issignup) {
      this.props.navigate('/');
    }
    this.setState(prevState => ({
      issignup: !prevState.issignup
    }));
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg,user_firstname:"",user_email:"",user_password:"",user_phone:""})
  }

  submitForm = async event => {
    event.preventDefault()
    const {user_firstname,user_email, user_password,user_phone,issignup,user_lastname,user_city,user_zipcode} = this.state
    const userDetails = {user_firstname,user_email, user_password,user_phone,user_lastname,user_city,user_zipcode}
    const url = issignup ? 'https://syoft.dev/Api/user_registeration/api/user_registeration ' : 'https://syoft.dev/Api/userlogin/api/userlogin'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (response.ok) {
        this.onSubmitSuccess(data);
      } else {
        this.onSubmitFailure(data.message);
      }
    } catch (error) {
      this.onSubmitFailure('An error occurred. Please try again later.');
    }
    
    
  }

  renderNameField = () => {
    const {user_firstname} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="name" className="label-style">
          FULL NAME
        </label>
        <input
          type="text"
          className="input-style"
          id="name"
          placeholder="Your Name"
          value={user_firstname}
          onChange={this.onchangeName}
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {user_email} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="email" className="label-style">
          EMAIL
        </label>
        <input
          type="email"
          className="input-style"
          id="email"
          placeholder="Blogs@gmail.com"
          value={user_email}
          onChange={this.onchangeEmail}
        />
      </div>
    )
  }

  renderPhoneField = () => {
    const {user_phone} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="phonenumber" className="label-style">
          PHONE
        </label>
        <input
          type="tel"
          className="input-style"
          id="phonenumber"
          placeholder="Enter your Phone Number"
          value={user_phone}
          onChange={this.onchangePhone}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {user_password} = this.state
    return (
      <div className="input-cont">
        <label htmlFor="password" className="label-style">
          PASSWORD
        </label>
        <input
          type="password"
          className="input-style"
          id="password"
          placeholder="Password"
          value={user_password}
          onChange={this.onchangePassword}
        />
      </div>
    )
  }

  render() {
    const {showErrorMsg, errorMsg,issignup} = this.state
    const mainpText=!issignup?"Didn't have an Account? SignUp":"Login"
    const mainText=!issignup?"Login":"Signup"

    return (
      <div className="login-bg-cont">
        <div className='welcome-cont' >
        <h1 className='website-logo-2-style'>Syoft<span className='span-style'>.</span></h1>

        <h1 className='welcome-h-style'>Welcome to Syoft Family</h1>
        <p className='welcome-p-style'>Syoft is one of the coveted development partners as we have broad domain expertise. Apart from being thought leaders, our focus is to be backed by industry trends and development of futuristic software solutions.</p>
        <p className='welcome-p-style'>Sign up to apply for a position.</p>

        </div>
        <div className='form-button-cont'>
        
        <form className="login-form-cont" onSubmit={this.submitForm}>
          <h1 className='login-main-head'>{mainText}</h1>
          {issignup && this.renderNameField()}
          {this.renderEmailField()}
          {issignup && this.renderPhoneField()}
          {this.renderPasswordField()}
          <button type="submit" className="login-button">
            {mainText}
          </button>
          {showErrorMsg && <p className="error-style">*{errorMsg}</p>}
          
        </form>
        
        
        <button className='signup-bt-style' onClick={this.changeSignup}>
          <p className='signup-navigate-p-style'>{mainpText}</p>
          </button> 
          </div>
    
      </div>
    )
  }
}

const SignUpWithNavigate = (props) => {
  const navigate = useNavigate()
  return <SignUp {...props} navigate={navigate} />
}

export default SignUpWithNavigate