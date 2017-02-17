import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './Styles/BillsStyle'
import API from '../Services/Api'
import FJSON from 'format-json'
import FullButton from '../Components/FullButton'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

const endpoints = [
  { label: 'Get City (Boise)', endpoint: 'getCity', args: ['Boise'] },
  { label: 'pageOne', endpoint: 'getBills', args: [1] },
  { label: 'pageTwo', endpoint: 'getBills', args: [2] }
]

export default class Bills extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    this.api = API.create()
  }

  renderButton (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    return (
      <FullButton text={label || `${endpoint}(${args.join(', ')})`} onPress={this.tryEndpoint.bind(this, apiEndpoint)} styles={{marginTop: 10}} key={`${endpoint}-${args.join('-')}`} />
    )
  }

  renderButtons () {
    return endpoints.map((endpoint) => this.renderButton(endpoint))
  }

  showResult (response, title = 'Response') {
    this.refs.container.scrollTo({x: 0, y: 0, animated: true})
    if (response.ok) {
      this.refs.result.setState({message: FJSON.plain(response.data), title})
      // this.refs.result.setState({message: FJSON.plain(response.data), title: title})
    } else {
      this.refs.result.setState({message: `${response.problem} - ${response.status}`, title})
    }
  }

  tryEndpoint (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then((result) => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} ref={() => 'container' }>
          <Text
            style={styles.text}
          >
            Bills:
          </Text>
          {this.renderButtons()}
          <APIResult ref={() => 'result'} />
        </ScrollView>
      </View>
    )
  }
}

class APIResult extends React.Component {

  state: {
    message: boolean,
    title: boolean
  }

  constructor (props) {
    super(props)
    this.state = {
      message: false,
      title: false
    }
  }

  onApiPress = () => {
    this.setState({message: false})
  }

  renderView () {
    console.log(this.state.message)
    return (
      <ScrollView style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
        <TouchableOpacity
          style={{backgroundColor: 'white', padding: 20}}
          onPress={this.onApiPress}
        >
          <Text>{this.state.title} Response:</Text>
          <Text allowFontScaling={false} style={{fontFamily: 'CourierNewPS-BoldMT', fontSize: 10}}>
            {this.state.message}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render () {
    let messageView = null
    if (this.state.message) {
      return this.renderView()
    }

    return messageView
  }
}
