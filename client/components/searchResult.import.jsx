'use strict';

const {
  Grid,
  Row
} = ReactBootstrap;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Grid style={{borderRadius: 4, width: '100%', paddingTop: '.3em', paddingBottom: '.3em'}}>
          <Row>
            <div>
              <span className="octicon octicon-repo"/>
              <span style={{opacity: 0.4, marginLeft: '0.5em'}}>{this.props.result.owner.login}</span>
            </div>
          </Row>

          <Row>
            <span style={{fontSize: '1.2em'}}>{this.props.result.name}</span>
          </Row>
      </Grid>
    );
  }
}