import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const SearchCard = (response) => {
  console.log(response.response.length);
  return (
    <div className="card-group">
      {response.hidden === true && response.response.length > 0 &&
        response.response.map((item) => {
          return (
            <div className="card">
              <div className="textbox p-3 bg-secondary text-black">
              <h4 className="card-title text-center">{item.name}</h4>
              <div className="parentbox">
              <div className="card-title"><p>Battle Region : <br/>{item.region}</p></div>
              <div className="card-title"><p>Battle Type:<br/>{item.battle_type ? item.battle_type : "NA" }</p></div>
              </div>
              </div>
              <div className="card-body parentbox  p-3 bg-dark text-white">
                <div className="leftbox">
                  <p>Attack Side:<br/>
                  {item.attacker_king} <br/>
                  {item.attacker_1} <br/>
                  {item.attacker_commander}
                  </p>
                </div>
                <div className="rightBox">
                  <p>
                    Defense Side: <br/>
                  {item.defender_king} <br/>
                  {item.defender_1} <br />
                  {item.defender_commander}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      response: [],
      hidden: false,
    };
  }

  searchStates = (e) => {
    this.setState({ hidden: false });
    let search = e.target.value;

    const prediction = [
      "Castle Black",
      "Crag",
      "Darry",
      "Deepwood Motte",
      "Dragonstone",
      "Duskendale",
      "Golden Tooth",
      "Green Fork",
      "Harrenhal",
      "King's Landing",
      "Moat Cailin",
      "Mummer's Ford",
      "Oxcross",
      "Raventree",
      "Red Fork",
      "Riverrun",
      "Ruby Ford",
      "Ryamsport, Vinetown, Starfish Harbor",
      "Saltpans",
      "Seagard",
      "Shield Islands",
      "Stony Shore",
      "Storm's End",
      "The Twins",
      "Torrhen's Square",
      "Whispering Wood",
      "Winterfell",
    ];

    let matches = prediction.filter((state) => {
      const regex = new RegExp(`^${search}`, "gi");

      return state.match(regex);
    });

    if (search.length === 0) {
      matches = [];
    }

    this.setState({ data: matches });
    console.log(matches);
  };

  changeVal(item) {
    this.setState({ hidden: true });
    var s = document.getElementById("search");
    s.value = item;

    // CALL API
    fetch(`/api/search?location=${item}`)
      .then((res) => res.json())
      .then((items) => this.setState({ response: items }));
  }

  componentDidMount() {
    const { location } = this.props;
    let item = location.search.replace("?location=", "");
    var s = document.getElementById("search");
    s.value = decodeURI(item);

    fetch(`/api/search?location=${item}`)
      .then((res) => res.json())
      .then((items) => this.setState({ response: items }));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h3 className="text-center mb-3">
              <i className="fas-fa-flag-usa"></i>
              Search For Location
            </h3>
            <div className="form-group">
              <input
                type="text"
                name=""
                id="search"
                className="form-control form-control-lg"
                placeholder="Enter Location"
                aria-describedby="helpId"
                onChange={(e) => this.searchStates(e)}
              />
            </div>
            <div>
              <div>
                {!this.state.hidden &&
                  this.state.data.map((item) => {
                    return (
                      <div
                        key={Math.floor(Math.random() * 100)}
                        className="card card-body mb-1"
                      >
                        <Link
                          onClick={() => this.changeVal(item)}
                          to={`/search?location=${item}`}
                        >
                          {" "}
                          <h4>{item}</h4>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <SearchCard
          key={Math.floor(Math.random() * 100)}
          response={this.state.response}
          hidden={this.state.hidden}
        />
      </div>
    );
  }
}

export default SearchComponent;
