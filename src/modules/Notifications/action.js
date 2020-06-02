// @flow
import DeviceInfo from 'react-native-device-info'

import type { Dispatch, GetState } from '../../types/reduxTypes'
import { getActiveWalletCurrencyCodes } from '../UI/selectors'

const { notif1 } = require('../notifServer')

const deviceId = DeviceInfo.getUniqueID()
const deviceIdEncoded = encodeURIComponent(deviceId)

export const fetchSettings = async (userId: string, currencyCode: string) => {
  const encodedUserId = encodeURIComponent(userId)
  return notif1.get(`user/notifications/${currencyCode}?userId=${encodedUserId}&deviceId=${deviceIdEncoded}`)
}

export const registerNotifications = () => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const { account } = state.core
  const encodedUserId = encodeURIComponent(account.id)
  const currencyCodes = getActiveWalletCurrencyCodes(state)
  await notif1.post(`user/notifications?userId=${encodedUserId}`, { currencyCodes })
}

export const enableNotifications = (currencyCode: string, hours: string, enabled: boolean) => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const { account } = state.core
  const encodedUserId = encodeURIComponent(account.id)
  await notif1.put(`user/notifications/${currencyCode}?userId=${encodedUserId}&deviceId=${deviceIdEncoded}`, { hours, enabled })
}
