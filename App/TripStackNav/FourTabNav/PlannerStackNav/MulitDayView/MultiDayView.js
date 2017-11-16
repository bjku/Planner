import React, {Component} from "react";
import {
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars'

export default class MultiDayView extends React.Component {
    static navigationOptions = {
        title: 'Planner'
    };
    constructor(props) {
    	super(props);
    	this.state = {};
    	this.onDayPress = this.onDayPress.bind(this);
    }
    render() {
        return (
			<ScrollView style={styles.container}>
		        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
		        <Calendar
		          onDayPress={() => this.props.navigation.navigate('SingleDayView')}
		          style={styles.calendar}
		          hideExtraDays
		          markedDates={{[this.state.selected]: {selected: true}}}
		        />
	      	</ScrollView>
        );
    }

        onDayPress(day) {
        	this.props.navigation.navigate('SingleDayView');
        }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});