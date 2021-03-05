import React from 'react';
import { connect } from 'react-redux';
import { Comic, fetchComics } from '../actions';
import { StoreState } from '../reducers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ComicDetails from './ComicDetails';

interface LykonProps {
  comics: Comic[];
  fetchComics(): any;
}

class Lykon extends React.Component<LykonProps> {

  componentDidMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route exact path='/comics/:comicId' component={ComicDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ comics }: StoreState): { comics: Comic[] } => {
  return { comics };
};

export const App = connect(mapStateToProps, { fetchComics })(Lykon);
