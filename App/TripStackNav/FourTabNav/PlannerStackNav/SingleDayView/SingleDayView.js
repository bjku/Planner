import React, {Componenent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonRectangle from '../../../TripListView/ButtonRectangle'

export default class SingleDayView extends React.Component {
	render() {
		return (
			<View>
				<Text> Single Day View </Text>
				<Text> Example Event </Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('EditEventView')}>
	                <Image
	                    style={{height:100, width: 100}}
	                    source={require('../../DiscoverStackNav/DiscoverTileView/ignite_logo.png')}
	                />
	            </TouchableOpacity>
				<Text> Add An Event </Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('AddEventView')}>
	                <Image
	                    style={{height:100, width: 100}}
	                    source={require('../../DiscoverStackNav/DiscoverTileView/ignite_logo.png')}
	                />
	            </TouchableOpacity>
           	</View>
		);
	}
}