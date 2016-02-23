'use strict';

const {
  Grid,
  Row,
  Col,
  Glyphicon
} = ReactBootstrap;

export default props => {
  return(
    <Grid style={{borderRadius: 4, width: '100%', paddingTop: '.3em', paddingBottom: '.3em'}}>
      <Row style={{display: 'flex', flexDirection: 'row'}}>
        <Col xs={2} md={1} style={styles.centerColumn}>
          <a href={props.repo.url} target="_blank">
            <img src={`/images/${props.repo.vendor}.png`}/>
          </a>
        </Col>

        <Col xs={2} md={1} style={styles.centerColumn}>
          <span style={{opacity: 0.4, paddingBottom: '.3em'}}>{props.repo.owner}</span>
        </Col>

        <Col xs={6} md={9} style={styles.centerColumn}>
          <span style={{fontSize: '1.3em'}}>{props.repo.name}</span>
        </Col>

        <Col xs={2} md={1} style={styles.centerColumn}>
          <Glyphicon
            style={{fontSize: '1.5em'}}
            glyph="menu-right"
          />
        </Col>
      </Row>
    </Grid>
  );
}

const styles = {
  centerColumn: {
    display: 'flex',
    alignItems: 'center'
  }
};