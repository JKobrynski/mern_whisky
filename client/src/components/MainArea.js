import React, { Component } from "react";
import { Collapse, Form, Input } from "reactstrap";
import WhiskyCard from "./WhiskyCard";
import WhiskyModal from "./WhiskyModal";
import { connect } from "react-redux";
import { getItems, deleteItem, addItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class MainArea extends Component {
  state = {
    collapse: false,
    search: ""
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  onSubmit = event => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  };

  render() {
    let filteredWhiskies = this.props.item.whiskies.filter(whisky => {
      return (
        whisky.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    let whiskyCards = filteredWhiskies.map(whisky => (
      <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
        <WhiskyCard whisky={whisky} onDeleteClick={this.onDeleteClick} />
      </div>
    ));

    return (
      <div className="main-area">
        <div className="ml-3 mt-3">
          <button type="button" onClick={this.toggle} className="btn btn-info">
            Search
          </button>
          <Collapse isOpen={this.state.collapse}>
            <Form onChange={this.onSubmit.bind(this)}>
              <Input
                type="text"
                style={{
                  marginTop: "1rem",
                  width: "18.2rem"
                }}
                name="search"
                id="item"
                placeholder="Name"
                onChange={this.onChange}
              />
            </Form>
          </Collapse>
        </div>
        <div className="">
          <div className="row">{whiskyCards}</div>
        </div>
        <div className="ml-3">
          <WhiskyModal />
        </div>
      </div>
    );
  }
}

MainArea.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, addItem }
)(MainArea);
