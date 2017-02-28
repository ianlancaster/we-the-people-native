import { Metrics } from '../../Themes'

export default {
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'flex-start',
    height: 30,
    marginBottom: 10,
    marginRight: 30,
    marginTop: 10,
    width: 30
  },
  text: {
    // alignSelf: 'flex-end',
    marginVertical: Metrics.baseMargin,
    paddingLeft: 20,
    fontSize: 16
  }
}
