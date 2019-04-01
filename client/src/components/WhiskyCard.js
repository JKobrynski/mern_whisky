import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody
} from "reactstrap";
import "../App.css";
import { connect } from "react-redux";
import { deleteItem } from "../actions/itemActions";

class WhiskyCard extends Component {
  render(props) {
    return (
      <div className="whisky">
        <Card
          className="whisky-card"
          style={{
            padding: "1rem",
            height: "20rem"
          }}
        >
          <CardBody className="whisky-card-body">
            <CardTitle className="whisky-card-title">
              {this.props.whisky.name}
            </CardTitle>
            <CardSubtitle
              className="whisky-card-age"
              style={{ marginBottom: "0.7rem", marginTop: "1rem" }}
            >
              Aged {this.props.whisky.age} years
            </CardSubtitle>
            <p className="whisky-card-country">{this.props.whisky.country}</p>
            <CardText className="whisky-card-description">
              {this.props.whisky.description}
            </CardText>
            <Button
              className="whisky-card-delete"
              onClick={this.props.onDeleteClick.bind(
                this,
                this.props.whisky._id
              )}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(WhiskyCard);
