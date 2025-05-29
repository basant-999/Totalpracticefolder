import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Login = () => {
      const [email, Setemail] = useState("")
      const [password, Setpassword] = useState("")

        const navigate = useNavigate()

       const finalSubmit=(e)=>{
       e.preventDefault()
        console.log(email,password,"basant")
        try {
            if(email != "basant@123gmail.com"){
                return alert("invali email");
            }
            if(password != 1234){
                return alert("invalid password")
            }

            alert ("your are successfully login")

             navigate("/dashboard")

        } catch (error) {
            console.log(error)
        }
       }
  return (
     <div style={{width:"300px", margin:"auto"}}>

   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>{Setemail(e.target.value)}}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>{Setpassword(e.target.value)}} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={finalSubmit}>
        Submit
      </Button>
    </Form>
         </div>
  )
}

export default Login