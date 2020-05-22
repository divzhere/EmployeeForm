import "./App.css";
import { Modal, Button, Form, Col } from "react-bootstrap";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand">XYZ Company</a>
      </nav>
      <div className="modal-button">
        <Button variant="primary" onClick={handleShow}>
          New Employee
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Employee Details Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                ></input>
              </div>
              <div className="form-group">
                <label for="id">Employee ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="Enter Employee ID"
                ></input>
              </div>
              <div class="form-group">
                <label for="sel1">Select Department</label>
                <select class="form-control" id="sel1">
                  <option>HR</option>
                  <option>Operations</option>
                  <option>Sales</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email ID"
                ></input>
              </div>
              <div className="form-group">
                <label for="doj">Date of Joining</label>
                <input type="date" className="form-control" id="doj"></input>
              </div>
              <hr></hr>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
        <br></br>
        <h5 style={{ marginTop: "20px", marginBottom: "20px" }}>
          Employee Data
        </h5>
        <div className="table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
