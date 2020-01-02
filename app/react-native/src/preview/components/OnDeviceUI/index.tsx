import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SpringValue } from '@react-spring/native';
import addons from '@storybook/addons';
import Channel from '@storybook/channels';
import StoryListView from '../StoryListView';
import StoryView from '../StoryView';
import Addons from './addons';

interface OnDeviceUIProps {
  stories: any;
  url?: string;
  tabOpen?: number;
  isUIHidden?: boolean;
  shouldDisableKeyboardAvoidingView?: boolean;
  keyboardAvoidingViewVerticalOffset?: number;
}

export default class OnDeviceUI extends PureComponent<OnDeviceUIProps, OnDeviceUIState> {
  animatedValue: SpringValue;

  channel: Channel;

  constructor(props: OnDeviceUIProps) {
    super(props);
    this.channel = addons.getChannel();
  }

  render() {
    const { stories, url } = this.props;
    return (
      <View style={{ position: 'absolute', width: '100%', height: '100%', flexDirection: 'row' }}>
        <View style={{ width: '20%', height: '100%' }}>
          <StoryListView stories={stories} />
        </View>
        <StoryView url={url} onDevice stories={stories} />
        <View style={{ width: '20%', height: '100%' }}>
          <Addons />
        </View>
      </View>
    );
  }
}
