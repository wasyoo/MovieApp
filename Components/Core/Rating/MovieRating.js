import React from "react";
import { View, Text } from 'react-native';

export default class MovieRating extends React.Component {
  getRatingArray = () => {
    const { rating } = this.props;
    return (
      Array.from(Array(Number(rating)),(_, i) => <Text key={i} style={{ color: "#ffd700" }}>★</Text>))
      .concat(Array.from(Array(5),(_, i) => <Text key={i+rating} style={{ color: "#ababab" }}>★</Text>))
      .slice(0, 5)
  }
  render() {
    const { rating } = this.props;
    return (
      <View style={{flexDirection:'row', justifyContent: 'center'}}>
        {this.getRatingArray()}
      </View>
    )
  }
}
