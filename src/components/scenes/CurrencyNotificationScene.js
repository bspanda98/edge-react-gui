// @flow

import { type EdgeCurrencyInfo } from 'edge-core-js'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { enableNotifications, fetchSettings } from '../../modules/Notifications/action'
import { type Dispatch, type State as ReduxState } from '../../types/reduxTypes.js'
import { SceneWrapper } from '../common/SceneWrapper.js'
import { SettingsSwitchRow } from '../common/SettingsSwitchRow.js'

type NavigationProps = {
  currencyInfo: EdgeCurrencyInfo
}
type StateProps = {
  userId: string,
  currencyInfo: EdgeCurrencyInfo
}
type DispatchProps = {
  enableNotifications(currencyCode: string, hours: string, enabled: boolean): Promise<void>
}
type Props = NavigationProps & StateProps & DispatchProps

type State = {
  hours: { [hours: string]: boolean }
}

export class CurrencyNotificationComponent extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      hours: {}
    }
  }

  async componentDidMount () {
    const { userId, currencyInfo } = this.props
    const settings = await fetchSettings(userId, currencyInfo.currencyCode)
    this.setState({ hours: settings })
  }

  render () {
    return (
      <SceneWrapper background="body" hasTabs={false}>
        <ScrollView>
          {Object.entries(this.state.hours).map(([hours, enabled]) => (
            <SettingsSwitchRow
              key={hours}
              text={`${hours} hour${Number(hours) > 1 ? 's' : ''}`}
              value={enabled}
              onPress={() => {
                this.setState(state => ({ hours: { ...state.hours, [hours]: !enabled } }))
                this.props.enableNotifications(this.props.currencyInfo.currencyCode, hours, !enabled)
              }}
            />
          ))}
        </ScrollView>
      </SceneWrapper>
    )
  }
}

export const CurrencyNotificationScene = connect(
  (state: ReduxState, ownProps: NavigationProps): StateProps => {
    const { currencyInfo } = ownProps
    const { account } = state.core

    return {
      userId: account.id,
      currencyInfo
    }
  },
  (dispatch: Dispatch, ownProps: NavigationProps): DispatchProps => ({
    enableNotifications: (currencyCode, hours, enabled) => dispatch(enableNotifications(currencyCode, hours, enabled))
  })
)(CurrencyNotificationComponent)
