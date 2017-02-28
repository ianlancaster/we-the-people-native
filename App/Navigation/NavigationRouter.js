import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

import Bills from '../Containers/Bills'
import Landing from '../Containers/Landing'
import Footer from '../Containers/Footer'
import BillCardInList from '../Containers/BillCardInList'
import BillDetail from '../Containers/BillDetail'
import MyBills from '../Containers/MyBills'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='landing' component={Landing} title='We The People' renderBackButton={() => false} />
            <Scene key='bills' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByClosestToBecomingLaw />
            <Scene key='billsActive' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='billsEnacted' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='billsFailed' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='billsTabled' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='billsSortByDateIntroduced' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByDateIntroduced />
            <Scene key='billsSortByClosestToBecomingLaw' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByClosestToBecomingLaw />
            <Scene key='billsEducation' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['education', 'school', 'vouchers', 'student loan', 'university', 'universities', 'college', 'high school', 'apprentice']} />
            <Scene key='billsHealthCare' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['health care', 'health', 'doctor', 'medicine', 'medical', 'hospital', 'prescription', 'medicare', 'medicaid', 'obamacare']} />
            <Scene key='billsEnergy' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['energy', 'oil', 'natural gas', 'petroleum', 'coal']} />
            <Scene key='billsEnvironment' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['environment', 'drilling', 'fracking']} />
            <Scene key='billsMilitary' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['military', 'army', 'navy', 'marines', 'air force', 'pentagon', 'soldier', 'afghanistan', 'iraq', 'syria', 'armed forces']} />
            <Scene key='billsEastAsia' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['japan', 'china', 'korea', 'taiwan', 'vietnam', 'yuan']} />
            <Scene key='billsCentralAsia' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['russia', 'ukraine', 'putin', 'pakistan']} />
            <Scene key='billsMiddleEast' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['israel', 'palestine', 'afghanistan', 'iraq', 'syria', 'iran', 'qaeda', 'libya', 'netanyahu', 'gaza']} />
            <Scene key='billsEconomy' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['tax', 'economy', 'economic', 'deficit', 'unemployment', 'underemployment', 'recession', 'income']} />
            <Scene key='billsAgriculture' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['agriculture', 'farm', 'corn', 'wheat', 'ranch']} />
            <Scene key='billsCrime' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByTopic topics={['crime', 'criminal', 'prison', 'incarceration', 'police']} />
            <Scene key='myBills' component={MyBills} title='My Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />

            <Scene key='bill-card-in-list' component={BillCardInList} title='BillCardInList' />
            <Scene key='billDetail' component={BillDetail} title='Bill Detail' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
          </Scene>
        </Scene>
        <Scene key='footer' component={Footer} title='Footer' />
      </Router>
    )
  }
}

export default NavigationRouter
