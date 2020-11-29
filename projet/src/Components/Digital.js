import React from 'react';

import { Box, Grommet, Clock, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

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
  <Grommet theme={theme}>

    <Box direction="row" gap="medium" pad="medium">
      <Box align="center">
        <Clock type="digital" size="customSize" color="blue"/>
      </Box>
    </Box>
  </Grommet>
);

Digital.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
  }
}

export default Digital;