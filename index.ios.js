import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

class weekdays extends Component {
  renderList() {
    const daysItems = [];

    for (var i = 0; i < 7; i++) {
      const day = Moment().add(i, 'days').format('dddd');

      daysItems.push(
        <DayItem key={i} day={day} daysUntil={i} />
      );
    }

    return daysItems;
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderList() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('weekdays', () => weekdays);
