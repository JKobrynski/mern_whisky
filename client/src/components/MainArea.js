import React, { Component } from "react";
import { Container, Row, Col, Collapse, Form, Button, Input } from "reactstrap";
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

    let whiskyCards = filteredWhiskies.map(whisky => {
      return (
        <Col sm="3" key={whisky._id}>
          <WhiskyCard whisky={whisky} onDeleteClick={this.onDeleteClick} />
        </Col>
      );
    });
    return (
      <Container fluid>
        <Button
          className="search-button"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            backgroundColor: "black"
          }}
          onClick={this.toggle}
        >
          Search
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Form onChange={this.onSubmit.bind(this)}>
            <Input
              type="text"
              style={{
                width: "18.2rem"
              }}
              name="search"
              id="item"
              placeholder="Name"
              onChange={this.onChange}
            />
          </Form>
        </Collapse>
        <Row>{whiskyCards}</Row>
        <WhiskyModal />
      </Container>
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
