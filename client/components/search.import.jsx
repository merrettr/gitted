'use strict';

import Repo from 'client/components/repo';
import SearchResult from 'client/components/searchResult';

const {
  Input,
  ListGroup,
  ListGroupItem
} = ReactBootstrap;

export default React.createClass({
  getInitialState() {
    return {search: '', isLoading: false, results: []};
  },

  onKeyPress(ev) {
    if(ev.charCode === 13) {
      this.setState({isLoading: true});

      Meteor.call('search', this.state.search, (error, result) => {
        this.setState({isLoading: false, results: result.items});
      });
    }
  },

  onResultClicked(result) {
    console.log(result);
  },

  renderResult(result) {
    return (
      <ListGroupItem
        className="card"
        key={result.id}
        onClick={this.onResultClicked}>
        <SearchResult
          key={result.id}
          result={result}/>
      </ListGroupItem>
    )
  },

  render() {
    return (
      <div
        style={this.props.style}
        onBlur={() => {console.log('blur')}}>
        <Input
          type="text"
          placeholder="Search"
          style={{marginBottom: -15, width: '13em'}}
          onKeyPress={this.onKeyPress}
          onChange={ev => this.setState({search: ev.target.value})}
          value={this.state.search}
        />

        <div
          className="card"
          style={{position: 'absolute', zIndex: 1000, width: '13em'}}
          onBlur={() => {console.log('blurring'); this.setState({results: null});}}>
          {
            this.state.isLoading
              ? <div className="card"><span>Loading</span></div>
              : ''
          }

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