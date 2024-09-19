import React, { useState } from 'react';
import { Col, Row, Container, Card, Button,ProgressBar,Table, Modal, Form ,Alert } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { RxCrossCircled } from 'react-icons/rx';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AdminDashboard from './AdminDashboard';
import Header from '../Header';

const Adminhome = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'images/department/berrie/berrie01.jpg',
      name: 'Product 1',
      price: '$100',
      warehouseLocation: 'Warehouse Location 1',
      availableStock: 'Available Stock 1'
    },
    {
      id: 2,
      image: 'images/department/fruitandnut/nut01.jpg',
      name: 'Product 2',
      price: '$150',
      warehouseLocation: 'Warehouse Location 2',
      availableStock: 'Available Stock 2'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: null,
    image: '',
    name: '',
    price: '',
    warehouseLocation: '',
    availableStock: ''
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [errors, setErrors] = useState({}); // For form validation errors

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct(product);
    setShowModal(true);
  };

  const handleSaveProduct = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Display errors if validation fails
    } else {
      if (editProduct) {
        setProducts(products.map((p) => (p.id === editProduct.id ? newProduct : p)));
      } else {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      }
      setShowModal(false);
      setEditProduct(null);
      setNewProduct({ id: null, image: '', name: '', price: '', warehouseLocation: '', availableStock: '' });
      setErrors({});
    }
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!newProduct.image) errors.image = 'Product image is required';
    if (!newProduct.name) errors.name = 'Product name is required';
    if (!newProduct.price) errors.price = 'Product price is required';
    if (!newProduct.warehouseLocation) errors.warehouseLocation = 'Warehouse location is required';
    if (!newProduct.availableStock) errors.availableStock = 'Available stock is required';
    return errors;
  };
    return (
      <>
      <Header/>
        <Container fluid className='main_color'>
            <Row>
              <h1></h1><br/>
                {/* Sidebar */}
              <AdminDashboard/>
                
                {/* Main Content */}
                <Col lg={9} className='maincontant' >
                    <Container>
                        <Row>
                            {/* Statistics Cards */}
                            <Row>
                <Col xl={3} lg={6} md={6}>
                    <Card className="l-bg-cherry">
                        <Card.Body className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">New Orders</h5>
                            </div>
                            <Row className="align-items-center mb-2 d-flex">
                                <Col xs={8}>
                                    <h2 className="d-flex align-items-center mb-0">3,243</h2>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span>12.5% <i className="fa fa-arrow-up"></i></span>
                                </Col>
                            </Row>
                            <ProgressBar now={25} className="l-bg-cyan mt-1" style={{ height: '8px' }} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6} md={6}>
                    <Card className="l-bg-blue-dark">
                        <Card.Body className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Customers</h5>
                            </div>
                            <Row className="align-items-center mb-2 d-flex">
                                <Col xs={8}>
                                    <h2 className="d-flex align-items-center mb-0">15.07k</h2>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span>9.23% <i className="fa fa-arrow-up"></i></span>
                                </Col>
                            </Row>
                            <ProgressBar now={25} className="l-bg-green mt-1" style={{ height: '8px' }} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6} md={6}>
                    <Card className="l-bg-green-dark">
                        <Card.Body className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large">
                                <i className="fas fa-ticket-alt"></i>
                            </div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Ticket Resolved</h5>
                            </div>
                            <Row className="align-items-center mb-2 d-flex">
                                <Col xs={8}>
                                    <h2 className="d-flex align-items-center mb-0">578</h2>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span>10% <i className="fa fa-arrow-up"></i></span>
                                </Col>
                            </Row>
                            <ProgressBar now={25} className="l-bg-orange mt-1" style={{ height: '8px' }} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6}md={6}>
                    <Card className="l-bg-orange-dark">
                        <Card.Body className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <div className="mb-4">
                                <h5 className="card-title mb-0">Revenue Today</h5>
                            </div>
                            <Row className="align-items-center mb-2 d-flex">
                                <Col xs={8}>
                                    <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span>2.5% <i className="fa fa-arrow-up"></i></span>
                                </Col>
                            </Row>
                            <ProgressBar now={25} className="l-bg-cyan mt-1" style={{ height: '8px' }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                            
                            {/* Sales Performance Chart */}
                            <Row>
    <Col lg={6} xs={12}>
      <Card className="home-chart">
        <Card.Body>
          <h5 className="chart-text">Sales Performance</h5>
          <select className="form-select-sm mb-3" aria-label="Select Time Period">
            <option value="">All Time</option>
            <option value="1">This Month</option>
            <option value="2">This Week</option>
          </select>
          <Table striped bordered hover responsive="sm" className="gradient-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Metric</th>
                <th>Value</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Total Sales</td>
                <td>500</td>
                <td>+12%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>New Orders</td>
                <td>200</td>
                <td>+8%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Products in Stock</td>
                <td>1500</td>
                <td>+5%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Pending Orders</td>
                <td>50</td>
                <td>-3%</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>

    <Col lg={6} xs={12} className="mt-4 mt-lg-0">
      <Card className="home-chart">
        <Card.Body>
          <h5 className="chart-text">Recent Activities</h5>
          <Table striped bordered hover responsive="sm" className="gradient-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {['Order #1234', 'Customer #5678', 'Product #91011', 'Order #1213', 'Product #1415'].map((activity, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{activity}</td>
                  <td>Updated</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  </Row>
                            
                            {/* Product Listings */}
                            <Row>
      <Col lg={12} md={12} sm={12}>
        <Card className="img-card">
          <Card.Body>
            <p className="chart-text">Product Listings</p>
            <Table striped bordered hover responsive="sm" className="table-custom">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        className="example-card-img-responsive"
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', maxWidth: '80px' }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td><span style={{ color: 'blue' }}>{product.price}</span></td>
                    <td>
                      <div>
                        <span className='loc-icon'>{product.warehouseLocation}</span>
                        <br />
                        <span className='mon-icon'>{product.availableStock}</span>
                      </div>
                    </td>
                    <td>
                      <Button
                        className="tip-btn btn-view"
                        variant="outline-primary"
                        title="View"
                        onClick={() => handleViewDetails(product)}
                      >
                        <MdOutlineRemoveRedEye className="tip-logo1" />
                      </Button>
                      <Button className="tip-btn btn-approve" variant="outline-success" title="Approve">
                        <TiTick className="tip-logo2" />
                      </Button>
                      <Button className="tip-btn btn-edit" variant="outline-warning" title="Edit" onClick={() => handleEdit(product)}>
                        <GrEdit className="tip-logo3" />
                      </Button>
                      <Button className="tip-btn btn-delete" variant="outline-danger" title="Delete" onClick={() => handleDelete(product.id)}>
                        <RiDeleteBin5Line className="tip-logo4" />
                      </Button>
                  
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Add Product
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal for Adding/Editing Products */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                isInvalid={!!errors.image}
              />
              {newProduct.image && (
                <img
                  src={newProduct.image}
                  alt="Preview"
                  style={{ width: '100%', maxWidth: '80px', marginTop: '10px' }}
                />
              )}
              {errors.image && <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                isInvalid={!!errors.name}
              />
              {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                isInvalid={!!errors.price}
              />
              {errors.price && <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Warehouse Location</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.warehouseLocation}
                onChange={(e) => setNewProduct({ ...newProduct, warehouseLocation: e.target.value })}
                isInvalid={!!errors.warehouseLocation}
              />
              {errors.warehouseLocation && <Form.Control.Feedback type="invalid">{errors.warehouseLocation}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Available Stock</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.availableStock}
                onChange={(e) => setNewProduct({ ...newProduct, availableStock: e.target.value })}
                isInvalid={!!errors.availableStock}
              />
              {errors.availableStock && <Form.Control.Feedback type="invalid">{errors.availableStock}</Form.Control.Feedback>}
            </Form.Group>
          </Form>
          {Object.keys(errors).length > 0 && (
            <Alert variant="danger" className="mt-3">
              Please fill in all required fields before saving.
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveProduct}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Viewing Product Details */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>Image</td>
                  <td>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      style={{ width: '100%', maxWidth: '80px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Product Name</td>
                  <td>{selectedProduct.name}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{selectedProduct.price}</td>
                </tr>
                <tr>
                  <td>Warehouse Location</td>
                  <td>{selectedProduct.warehouseLocation}</td>
                </tr>
                <tr>
                  <td>Available Stock</td>
                  <td>{selectedProduct.availableStock}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
                        </Row>
                        
                        {/* Outlet for nested routes */}
                        <Row>
                            <Col>
                                <Outlet />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Adminhome;
