import "./App.css";
import React, { Component } from "react";

const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      csv: "",
      arr: [],
      json: {},
      currentPage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = () =>
      this.setState({ csv: reader.result, arr: CSVToArray(reader.result) });
    reader.readAsText(e.target.files[0]);
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const indexOfLastPost = this.state.currentPage * 5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.state.arr.map((row) =>
      row.slice(indexOfFirstPost, indexOfLastPost)
    );
    const pageNumbers = [];
    if (this.state.arr.length !== 0) {
      for (let i = 1; i <= Math.ceil(this.state.arr[0].length / 5); i++) {
        pageNumbers.push(i);
      }
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          className="waves-effect waves-light btn red accent-1"
          style={{ marginRight: "10px" }}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div class="brand-logo center">CSViewer</div>
          </div>
        </nav>
        <br></br>
        <label style={{ marginLeft: "20px" }}>Choose a CSV file:</label>&nbsp;
        <input
          type="file"
          accept=".csv"
          id="file-selector"
          onChange={this.handleChange}
        ></input>
        {this.state.arr.length !== 0 && (
          <>
            <ul style={{ marginLeft: "10px" }}>{renderPageNumbers}</ul>
            <table>
              {currentPosts.map((row) => {
                return (
                  <tr>
                    {row.map((value) => (
                      <td>{value}</td>
                    ))}
                  </tr>
                );
              })}
            </table>
          </>
        )}
      </div>
    );
  }
}
