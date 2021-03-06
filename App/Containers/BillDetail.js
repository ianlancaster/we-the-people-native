import React from 'react'
import { Text, View, Button, ScrollView, AsyncStorage, Alert, TouchableOpacity } from 'react-native'
import styles from './Styles/BillDetailStyle'
import Separator from '../Components/Separator'
import prettifyDate from '../Helpers/DatePrettifier'
import { shortenSummary, summaryIsTooLong } from '../Helpers/ShortenSummary'
import sliceTitle from '../Helpers/TitleSlicer'
import BillStatusSvg from '../Components/BillStatus'

export default class BillDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.billTitle,
      dateIntroduced: this.props.dateIntroduced,
      lastAction: this.props.lastAction,
      chamber: this.props.chamber,
      sponsor: this.props.sponsor,
      status: this.props.status,
      progress: this.props.progress,
      detailedStatus: this.props.detailedStatus,
      isThereATitleButton: false,
      isThereASummaryButton: false,
      urls: this.props.urls,
      summary: 'loading',
      storedBills: [],
      fullSummary: '',
      showFullSummary: false
    }
  }

  componentWillMount () {
    const titleIsTooLong = (title) => {
      if (title.split(' ').length > 50) {
        return true
      } else {
        return false
      }
    }

    AsyncStorage.getItem('bills')
      .then((bills) => {
        const parsedBills = JSON.parse(bills)
        if (!Array.isArray(parsedBills)) {
          AsyncStorage.setItem('bills', JSON.stringify([]))
          return
        }
        this.setState({ storedBills: parsedBills })
      })
      .catch((err) => { throw new Error(err) })

    if (titleIsTooLong(this.state.title)) {
      this.setState({ title: sliceTitle(this.state.title) })
      this.setState({ isThereATitleButton: true })
    }

    fetch('http://localhost:3000/api/bill', {
      headers: { url: this.state.urls.congress }
    }).then(res => res.json())
      .then(summary => this.setState({ summary }))
      .then(() => this.setState({ fullSummary: this.state.summary }))
  }

  addToMyBills = (id, title, dateIntroduced, lastAction, chamber, sponsor, status, progress, detailedStatus, urls) => {
    const newBillToStore = {
      id,
      title,
      dateIntroduced,
      lastAction,
      chamber,
      sponsor,
      status,
      progress,
      detailedStatus,
      urls
    }

    this.state.storedBills.filter((bill) => {
      return bill.id !== newBillToStore.id
    })

    AsyncStorage.setItem('bills', JSON.stringify([
      ...this.state.storedBills,
      newBillToStore
    ]))

    Alert.alert('You have successfully saved your bill to storage.')
  }

  showFullTitle = () => {
    this.setState({ title: this.props.billTitle })
  }

  showFullSummary = () => {
    this.setState({ summary: this.state.fullSummary })
    this.setState({ showFullSummary: true })
  }

  render () {
    const { id, title, dateIntroduced, lastAction, chamber, sponsor, status, progress, detailedStatus, isThereATitleButton, isThereASummaryButton, summary, urls, showFullSummary, fullSummary } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
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
              <Text style={styles.boldSpan}>Status:</Text> {status}
            </Text>
            <Text style={styles.status}>
              <Text style={styles.boldSpan}>Progress:</Text> {progress.text}
            </Text>
            <Text style={styles.status}>
              <Text style={styles.boldSpan}>Next Action:</Text> {detailedStatus}
            </Text>
            <Text style={styles.lastAction}>
              <Text style={styles.boldSpan}>Last Action On:</Text> {prettifyDate(lastAction)}
            </Text>
            <View style={styles.addBillContainer}>
              <Button
                title='Add to My Bills'
                onPress={() => {
                  this.addToMyBills(
                    id,
                    title,
                    dateIntroduced,
                    lastAction,
                    chamber,
                    sponsor,
                    status,
                    progress,
                    detailedStatus,
                    urls
                  )
                }}
              />
            </View>
            <Separator backgroundColor={'#dddddd'} />
          </View>
          <Text style={styles.billSummaryHeadline}>
            Brief Bill Summary
          </Text>
          <Text style={styles.billSummaryDetailed}>
            {summaryIsTooLong(summary) && !showFullSummary ? <Text>{shortenSummary(summary)}</Text> : <Text>{summary}</Text>}
          </Text>
          {summaryIsTooLong(summary) && !showFullSummary
            ? <TouchableOpacity
              onPress={this.showFullSummary}
              >
              <Text style={styles.readFullBillSummary}
                >
                Read Full Bill Summary &raquo;
              </Text>
            </TouchableOpacity>
          : <Text />}
          <Separator backgroundColor={'#dddddd'} />
          <Text style={styles.billProgressHeadline}>
            Bill Progress
          </Text>
          <BillStatusSvg
            status={this.state.status}
            progress={this.state.progress}
            chamber={this.state.chamber}
          />
        </ScrollView>
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
  sponsor: React.PropTypes.string,
  billTitle: React.PropTypes.string,
  status: React.PropTypes.string,
  progress: React.PropTypes.object,
  detailedStatus: React.PropTypes.string,
  urls: React.PropTypes.object
}
