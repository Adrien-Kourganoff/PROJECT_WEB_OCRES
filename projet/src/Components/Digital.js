import React from 'react';
import { Box, Grommet, Clock, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import {Card} from 'react-bootstrap';

const override = {
  clock: {
    digital: {
      text: {
        customSize: {
          size: '30px',
          height: 1.234,
        },
      },
    },
  },
};

const theme = deepMerge(grommet, override);


class Digital extends React.Component {

  render(){

    return(
      <Card>
  <Grommet  theme={theme}>
    <Box  direction="row" gap="medium" pad="medium">
      <Box align="center">
        <Clock style={{ width : '30em' }} type="digital" size="customSize" color="blue"/>
      </Box>
    </Box>
  </Grommet>
  </Card>
);

Digital.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
  }
}

export default Digital;