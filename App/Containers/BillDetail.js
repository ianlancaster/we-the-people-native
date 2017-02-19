import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/BillDetailStyle'
import moment from 'moment'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class BillDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      dateIntroduced: this.props.dateIntroduced,
      lastAction: this.props.lastAction,
      chamber: this.props.chamber,
      isThereATitleButton: false
    }
  }

  componentWillMount () {
    if (this.state.title.split(' ').length > 50) {
      this.setState({ title: `${this.state.title.split(' ').slice(0, 50).join(' ')}...` })
      this.setState({ isThereATitleButton: true })
    }
  }

  showFullTitle = () => {
    this.setState({ title: this.props.title })
  }

  render () {
    const { id, title, dateIntroduced, lastAction, chamber, isThereATitleButton } = this.state
    const prettifiedDateIntroduced = moment(dateIntroduced).format('MMM Do YYYY')
    const prettifiedLastAction = moment(lastAction).format('MMM Do YYYY')
    return (
      <View style={styles.container}>
        <Text style={styles.id}>
          {id.toUpperCase()}
        </Text>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        {isThereATitleButton ? <Button
          title='Show Full Title'
          onPress={this.showFullTitle}
          /> : <Text />}
        <Text style={styles.dateIntroduced}>
          Proposed {prettifiedDateIntroduced}
        </Text>
        <Text style={styles.lastAction}>
          Last Action {prettifiedLastAction}
        </Text>
        <Text style={styles.chamber}>
          Chamber {chamber}
        </Text>
      </View>
    )
  }
}

BillDetail.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  dateIntroduced: React.PropTypes.string,
  lastAction: React.PropTypes.string,
  chamber: React.PropTypes.string
}
