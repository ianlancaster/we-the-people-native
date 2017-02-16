import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/BillsStyle'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Bills extends React.Component {

  render() {
    return (
      <View>
        <Text
          style={styles.text}
        >
        I am the Bills component. I cannot be seen, apparently.
        </Text>
      </View>
    )
  }
}
