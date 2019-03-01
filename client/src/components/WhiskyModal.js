import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class WhiskyModal extends Component {
  state = {
    modal: false,
    name: "",
    date: null,
    age: null,
    country: "",
    description: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newWhisky = {
      name: this.state.name,
      date: Date.now,
      age: this.state.age,
      country: this.state.country,
      description: this.state.description
    };

    this.props.addItem(newWhisky);

    this.toggle();
  };

  render(props) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Whisky
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Whisky List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Name"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="age"
                  id="item"
                  placeholder="Age"
                  onChange={this.onChange}
                  style={{ marginTop: "1rem" }}
                />
                <Input
                  type="text"
                  name="country"
                  id="item"
                  placeholder="Country"
                  onChange={this.onChange}
                  style={{ marginTop: "1rem" }}
                />
                <Input
                  type="textarea"
                  name="description"
                  id="item"
                  placeholder="Description"
                  onChange={this.onChange}
                  style={{ marginTop: "1rem" }}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(WhiskyModal);
