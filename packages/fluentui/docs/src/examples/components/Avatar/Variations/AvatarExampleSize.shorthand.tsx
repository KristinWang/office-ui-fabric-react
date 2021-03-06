import * as React from 'react';
import { Avatar, Grid, SizeValue } from '@fluentui/react-northstar';

const statusProps = {
  icon: 'icon-checkmark',
  color: 'green',
  title: 'Available'
};

const AvatarExampleSizeShorthand = () => (
  <Grid columns="80px 1fr">
    {(['smallest', 'smaller', 'small', 'medium', 'large', 'larger', 'largest'] as SizeValue[]).map(size => (
      <React.Fragment key={size}>
        <strong>{size}</strong>
        <div>
          <Avatar size={size} image="public/images/avatar/small/matt.jpg" status={statusProps} />
          &emsp;
          <Avatar size={size} name="John Doe" status={statusProps} />
          &emsp;
          <Avatar size={size} image="public/images/avatar/small/matt.jpg" />
          &emsp;
          <Avatar size={size} image="public/images/avatar/small/matt.jpg" square />
        </div>
      </React.Fragment>
    ))}
  </Grid>
);

export default AvatarExampleSizeShorthand;
