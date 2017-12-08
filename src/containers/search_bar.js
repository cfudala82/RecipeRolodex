import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/index';
import TextField from 'material-ui/TextField';
import { orange500 } from 'material-ui/styles/colors';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const styles = {
  underlineStyle: {
    borderColor: orange500
  }
};


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  submitForm(event){
    console.log(this.state);
    event.preventDefault();

    // fetch api info
    this.props.fetchRecipe(this.state.term);
    //clear out search input
    this.setState({term: ''});
  }

  render() {
    return (
      <Paper
        style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20}}
        zDepth={2}
        rounded={false}
      >
        <form onSubmit={(e) => this.submitForm(e)} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <ActionSearch
            style={{alignSelf: 'center', margin: 6}}
          />
          <TextField
            style={{alignSelf: 'center'}}
            hintText="Search for a Recipe"
            underlineStyle={styles.underlineStyle}
            fullWidth={false}
            value={this.state.term}
            onChange={(e) => this.onInputChange(e)}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            style={{alignSelf: 'center', margin: 10}}
            value={this.state.term}
            type="submit"
          />
        </form>
      </Paper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
