'use strict';

import Navbar from 'client/components/navbar';

const {
  Grid,
  Row,
  Col
} = ReactBootstrap;

export default props => {
    return (
      <div>
        <Navbar />

        <Grid>
          {props.children}
        </Grid>
      </div>
    );
}