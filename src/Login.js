import {Button,Image} from 'react-bootstrap';
import logo2 from './Login.jpg';

function Login() {
    return (
 <div>
     <div className="text-center">
          <Image className="image" src={logo2} rounded />
          <br/><br/>
          </div>
    <div className="row">
            <div className="col-lg-4">
            </div>
        <div className="col-lg-4">

                <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Your 10 Digit Mobile Number" />

                </div>
                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" />

                </div>
                <div className="form-group">
                    <Button className="btn btn-primary mx-auto d-block">Login</Button>
                </div>
        </div>
        
    </div>
    <div className="col-lg-4">
    
    </div>
</div>

    );
}
export default Login