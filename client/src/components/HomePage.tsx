import React from 'react';
import { connect } from 'react-redux';
import { Comic, fetchComics } from '../actions';
import { StoreState } from '../reducers';
import { Link } from 'react-router-dom';
import moment from 'moment';

interface LykonProps {
  comics: Comic[];
  fetchComics(): any;
}

class HomePage extends React.Component<LykonProps> {
  renderComics(): JSX.Element[] {
    return this.props.comics
      .sort((d1, d2) => {
        const a = new Date(
          moment(d1.publishDate, 'DD.MM.YYYY').format('YYYY-MM-DD')
        );
        const b = new Date(
          moment(d2.publishDate, 'DD.MM.YYYY').format('YYYY-MM-DD')
        );
        return a < b ? 1 : -1;
      })
      .map((comic: Comic) => {
        return (
          <div key={comic.id}>
            {comic.title}
            <br />
            <Link to={`comics/${comic.id}`}>Show Post</Link>
            <br />
            {comic.publishDate}
          </div>
        );
      });
  }

  render() {
    return <div>{this.renderComics()}</div>;
  }
}

const mapStateToProps = ({ comics }: StoreState): { comics: Comic[] } => {
  return { comics };
};

export default connect(mapStateToProps, { fetchComics })(HomePage);
