import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/BillDetailStyle'
import prettifyDate from '../Helpers/DatePrettifier'

export default class BillDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      dateIntroduced: this.props.dateIntroduced,
      lastAction: this.props.lastAction,
      chamber: this.props.chamber,
      sponsor: this.props.sponsor,
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
    const { id, title, dateIntroduced, lastAction, chamber, sponsor, isThereATitleButton } = this.state
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
        <View style={styles.labelWrapper}>
          <Text style={styles.dateIntroduced}>
            <Text style={styles.boldSpan}>Proposed:</Text> {prettifyDate(dateIntroduced)}
          </Text>
          <Text style={styles.sponsor}>
            <Text style={styles.boldSpan}>Sponsor:</Text> {sponsor}
          </Text>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.status}>
            <Text style={styles.boldSpan}>Status:</Text> (Status Goes Here)
            </Text>
          <Text style={styles.lastAction}>
            <Text style={styles.boldSpan}>Last Action:</Text> {prettifyDate(lastAction)}
          </Text>
        </View>
      </View>
    )
  }
}

BillDetail.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  dateIntroduced: React.PropTypes.string,
  lastAction: React.PropTypes.string,
  chamber: React.PropTypes.string,
  sponsor: React.PropTypes.string
}
