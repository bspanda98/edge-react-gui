// @flow
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import firebase from 'react-native-firebase'

import type { Dispatch, GetState } from '../../types/reduxTypes'
import { getActiveWalletCurrencyCodes } from '../UI/selectors'

const { notif1 } = require('../notifServer')

const deviceId = DeviceInfo.getUniqueID()
const deviceIdEncoded = encodeURIComponent(deviceId)

export const registerDevice = () => async (dispatch: Dispatch, getState: GetState) => {
  try {
    const device = await notif1.get(`device?deviceId=${deviceIdEncoded}`)
    if (device) return
  } catch (err) {
    return console.error(err)
  }

  const state = getState()
  const { context } = state.core
  const { appId } = context

  const tokenId = await firebase.iid().getToken()
  const deviceDescription = await DeviceInfo.getUserAgent()
  const osType = Platform.OS
  const edgeVersion = DeviceInfo.getVersion()
  const edgeBuildNumber = DeviceInfo.getBuildNumber()

  await notif1.post(`device?deviceId=${deviceIdEncoded}`, {
    appId,
    tokenId,
    deviceDescription,
    osType,
    edgeVersion,
    edgeBuildNumber
  })
}

export const attachToUser = () => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const { account } = state.core

  const currencyCodes = getActiveWalletCurrencyCodes(state)

  const encodedUserId = encodeURIComponent(account.id)
  await notif1.post(`user/device/attach?userId=${encodedUserId}&deviceId=${deviceIdEncoded}`, { currencyCodes })
}
