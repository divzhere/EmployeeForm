import "./App.css";
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmployee, delEmployee } from "./actions/employee";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      setEmployee: {
        name: "",
        id: "",
        department: "HR",
        email: "",
        doj: "",
        index: Math.floor(Math.random() * (1000 - 1)) + 1,
      },
    };
    this.onClickDelete.bind(this);
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    this.setState({
      setEmployee: { ...this.state.setEmployee, [e.target.id]: e.target.value },
    });
  };

  onClickDelete = (index) => {
    this.props.dispatch(delEmployee(index));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(addEmployee(this.state.setEmployee));

    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">XYZ Company</a>
          </nav>
          <div className="modal-button">
            <Button variant="primary" onClick={this.handleShow}>
              New Employee
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Employee Details Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="id">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      placeholder="Enter Employee ID"
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="sel1">Select Department</label>
                    <select
                      className="form-control"
                      id="department"
                      onChange={this.handleChange}
                      required
                    >
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
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="doj">Date of Joining</label>
                    <input
                      type="date"
                      className="form-control"
                      id="doj"
                      onChange={this.handleChange}
                      required
                    ></input>
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

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">ID</th>
                  <th scope="col">Department</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOJ</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees &&
                  this.props.employees.map((i) => (
                    <tr style={{ fontWeight: "normal" }} key={i.index}>
                      <td scope="row">{i.name}</td>
                      <td>{i.id}</td>
                      <td>{i.department}</td>
                      <td>{i.email}</td>
                      <td>{i.doj}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onClickDelete(i.index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { employees } = state.EmpReducer;
  return { employees };
}

export default connect(mapStateToProps)(App);
