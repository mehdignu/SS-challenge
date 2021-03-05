import React from 'react';
import { connect } from 'react-redux';
import { Comic, fetchComics } from '../actions';
import { StoreState } from '../reducers';
import { RouteComponentProps } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

interface LykonProps {
  comics: Comic[];
  fetchComics(): any;
}

interface appState {
  comicId: string;
}

class ComicDetails extends React.Component<
  LykonProps & RouteComponentProps,
  any
> {
  constructor(props: any) {
    super(props);
    const { comicId } = this.props.match.params as appState;

    const post = this.props.comics
      .filter((x) => {
        return x.id === comicId;
      })
      .map((comic: Comic) => {
        return comic;
      });   
    this.state = {
      post: post[0]
    };
  }

  render() {
    return (
      <div>
        <div>Title: {this.state.post.title}</div>
        <div>Image:  {this.state.post.url}</div>
        <div>publish Date:  {this.state.post.publishDate}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ comics }: StoreState): { comics: Comic[] } => {
  return { comics };
};

export default connect(mapStateToProps, { fetchComics })(ComicDetails);
