import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaBoxOpen } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { Outlet } from "react-router-dom";
import Adminhome from "./Adminhome";

const AdminDashboard = () => {
    return (
        // <div className="container-fluid">
          
            <Col lg={3} md={12} sm={12} className="sidebar-col">
                    <div className="sidebar-inner">
                        <ul className=''>
                            <h4>ADMIN DASHBOARD</h4>
                            <li><Link to="/Adminhome"><button className="sidebar-btn"><IoHomeOutline /> Home</button></Link></li>
                            <li><Link to="/Products"><button className="sidebar-btn"><FaBoxOpen /> Products</button></Link></li>
                            <li><Link to="/Orders"><button className="sidebar-btn"><BsFillCartFill /> Orders</button></Link></li>
                            <li><Link to="/Customers"><button className="sidebar-btn">Customers</button></Link></li>
                            <li><Link to="/Reports"><button className="sidebar-btn">Reports</button></Link></li>
                            <li><Link to="/Messages"><button className="sidebar-btn">Messages</button></Link></li>
                            <li><Link to="/Settings"><button className="sidebar-btn">Settings</button></Link></li>
                            <li><button className="sidebar-btn">Change Password</button></li>
                            <li><button className="sidebar-btn">Logout</button></li>
                            <li><button className="sidebar-btn" style={{ backgroundColor: 'red', color: 'white' }}>Delete Account</button></li>
                        </ul>
                    </div>
                </Col>
           
        // </div>
    );
}

export default AdminDashboard;
