import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }
  render() {
    const {onNewRecipe} = this.props;
    return (
      <header>
        <h2><a>Recipe App</a></h2>
        <nav>
          <li><a onClick= {onNewRecipe}>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;