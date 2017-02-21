const centerLabels = {
  textAlign: 'center'
}

const colors = {
  backgroundWhite: '#FFF',
  darkGray: '#585858',
  lightGray: '#dddddd',
  shadow: 'rgb(83, 83, 83)'
}

const styles = {
  boldSpan: {
    fontWeight: '600'
  },
  container: {
    backgroundColor: colors.backgroundWhite,
    flex: 1,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 5
    },
    shadowOpacity: 0.5,
    width: 300
  },
  dateIntroduced: {
    textAlign: centerLabels.textAlign
  },
  icon: {
    marginRight: 15
  },
  id: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center'
  },
  lastAction: {
    marginTop: 5,
    textAlign: centerLabels.textAlign
  },
  lowerContainer: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  viewBillDetails: {
    color: colors.darkGray,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  }
}

export default styles
