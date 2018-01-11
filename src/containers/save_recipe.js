import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipe } from '../actions/index';
import { ROOT_URL } from '../actions';

import RecipeSvg from '../images/cookie_recipe.jpg';

import database, {User} from '../components/fsociety';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import { orange50 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';

import axios from 'axios';

class SaveRecipe extends  Component {
  constructor(props) {
    super(props);

    this.rid = encodeURIComponent('http://www.edamam.com/ontologies/edamam.owl#' + props.match.params.id);

    this.state = {
      open: false,
    };

    this.state = {img: null};
    this.get_recipe();
  }

  get_recipe() {
    const url = `${ROOT_URL}&r=${this.rid}`;
    axios.get(url)
      .then((response) => {
        this.setState({img: response.data[0].image, ingredients: response.data[0].ingredients,
        url: response.data[0].url});
      });
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

save () {
  database().ref('recipes/' + User.user.uid).push(
    {url: 'dhsfjsdhfj', notes: []}
  );

  // database().ref('/recipes/' + User.user.uid).once('value')
  //   .then(function(result) {
  //     var recipes = result.val();
  //      send redux action
  //   });
}

renderField(field) {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
    </div>
  );
}


recipe_list () {
  const initialRecipe = this.state.ingredients;

  // if (this.props.recipe_list.length === 0) {
  //     this.props.fetchRecipe(initialRecipe);
  // }



if (this.state.ingredients) {
    return this.state.ingredients.map((r) => {
      return (
        <ListItem primaryText={r.text}  leftIcon={<ContentInbox />} />
      )
    });
  }
}


    //   <ListItem primaryText={i.recipe.ingredients.text}  leftIcon={<ContentInbox />} />
    // )


  render() {
    return(
      <div>
        <Paper
          zDepth={5}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
        >
          <img
            src={this.state.img}
            alt="Breakfast Pizza"
            height="350"
            width="625"
            onClick={this.state.url}
          />
        </Paper>
        <Paper
          zDepth={5}
          style={{display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 110,
          maxWidth: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 175,
          backgroundColor: '#EF6C00',
          }}
        >
          <Divider />
          <Subheader
            style={{color: orange50,
              fontSize: 20,
            }}
          >
            Save your Recipe
          </Subheader>
           <Divider />
          <Subheader
            style={{color: orange50,
              fontSize: 20,
            }}
          >
            Recipe Name
          </Subheader>
          <RaisedButton
            onClick={this.handleClick}
            label="Ingredients List"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical:  'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <List>
              {this.recipe_list()}
            </List>
        </Popover>

        </Paper>
      </div>
    );

  }
}

function mapStateToProps({recipe_list}) {
  return {recipe_list};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveRecipe);

// export default reduxForm({
//   form: 'PostNewForm'
// })(SaveRecipe);
