'use strict';

import Repo from 'client/components/repo';
import SearchResult from 'client/components/searchResult';

const {
  Input,
  ListGroup,
  ListGroupItem,
  ProgressBar
} = ReactBootstrap;

const {
  LinkContainer
} = ReactRouterBootstrap;

export default React.createClass({
  getInitialState() {
    return {search: '', isLoading: false, results: []};
  },

  onKeyPress(ev) {
    if(ev.charCode === 13) {
      this.setState({isLoading: true});

      if(!!this.state.handle) {
        this.state.handle.stop();
      }

      const handle = Meteor.subscribe('Search', this.state.search.trim(), {
        onReady: (results) => {
          console.log('done');
          this.setState({
            isLoading: false,
            results: results
          });
        },
        onError: () => {
          this.setState({
            isLoading: false,
            results: []
          });
          console.log('error');
      }});
      /*const handle = Meteor.subscribe('Search', this.state.search.trim(), (error, results) => {
        console.log(error, results);
        this.setState({
          isLoading: false,
          results: []
        });
      });*/

      this.setState({handle: handle});
    }
  },

  renderResult(result) {
    console.log('rendering', result);
    return (
      <LinkContainer to={{pathname: `/repos/${result._id}`}}>
        <ListGroupItem
          className="card"
          key={result._id}>
          <SearchResult
            key={result._id}
            result={result}/>
        </ListGroupItem>
      </LinkContainer>
    )
  },

  render() {
    return (
      <div
        style={this.props.style}>
        <Input
          type="text"
          placeholder="Search"
          style={{marginBottom: -15, width: '13em'}}
          onKeyPress={this.onKeyPress}
          onChange={ev => this.setState({search: ev.target.value})}
          value={this.state.search}
        />

        {
          this.state.isLoading
            ? <ProgressBar active now={100}
                 style={{position: 'absolute', zIndex: 1000, width: '13em', backgroundColor: '#fff'}}/>
            : ''
        }

        <div
          className="card"
          style={{position: 'absolute', zIndex: 1000, width: '13em', backgroundColor: '#fff'}}>
          {
            !this.state.isLoading && this.state.results.length > 0
            ? <ListGroup
                style={{height: '15em', overflow: 'hidden', overflowY: 'scroll', marginBottom: 0}}>
                {this.state.results.map(this.renderResult)}
              </ListGroup>
            : ''
          }
        </div>
      </div>
    )
  }
});