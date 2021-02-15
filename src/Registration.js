import {Form,Button,Image} from 'react-bootstrap';
import './Style.css';
import logo1 from './Register.png';

function Registration() {
    return (
      <div className="main">
          <div className="text-center">
          <Image className="image" src={logo1} rounded />
          <br/><br/>
          </div>
        <Form>
            <Form.Group>
                <Form.Label><b>Name<span className='text-danger'>*</span></b></Form.Label>
                <Form.Control required type="text" placeholder="Enter Your Full Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Email<span className='text-danger'>*</span></b></Form.Label>
                <Form.Control required type="email" placeholder="Enter Your Email Address" />
                    <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Password<span className='text-danger'>*</span></b></Form.Label>
                <Form.Control required type="password" placeholder="Enter Your Password" />
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Mobile Number<span className='text-danger'>*</span></b></Form.Label>
                <Form.Control required type="number" placeholder="Enter Your 10 DigitMobile Number" />
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Date of Birth<span className='text-danger'>*</span></b></Form.Label>
                <Form.Control required type="date" />
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Education<span className='text-danger'>*</span></b></Form.Label>
                <br/>
                    <input type="checkbox" value="10th" /> <b>10th</b>{' '}
                    <input type="checkbox" value="12th" /> <b>12th</b>{' '}
                    <input type="checkbox" value="Gradution" /> <b>Gradution</b>{' '}
                    <input type="checkbox" value="Post-Gradution" /> <b>Post-Gradution</b>
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Select City<span className='text-danger'>*</span></b></Form.Label>
                <br />
                <select>
                <option>Aurangabad</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
                <option>Pune</option>
             </select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br /> <br />
            <hr />
        </Form>
       
      </div>
    );
  }
  
  export default Registration;