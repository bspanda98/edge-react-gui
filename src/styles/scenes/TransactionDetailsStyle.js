// @flow

import { Platform, StyleSheet } from 'react-native'

import { MaterialInputOnWhite } from '../../styles/components/FormFieldStyles'
import THEME from '../../theme/variables/airbitz'
import { PLATFORM } from '../../theme/variables/platform.js'
import { scale } from '../../util/scaling.js'

const { rem } = THEME

export const activeOpacity = THEME.OPACITY.ACTIVE

export const styles = {
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: THEME.COLORS.GRAY_4
  },
  tilesContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column'
  },
  tileContainerBig: {
    width: '100%',
    height: rem(4.5),
    backgroundColor: THEME.COLORS.WHITE,
    padding: rem(0.8),
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_3,
    justifyContent: 'center'
  },
  tileContainerNotes: {
    width: '100%',
    minHeight: rem(4.5),
    backgroundColor: THEME.COLORS.WHITE,
    padding: rem(0.8),
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_3
  },
  tileContainer: {
    width: '100%',
    height: rem(4),
    backgroundColor: THEME.COLORS.WHITE,
    padding: rem(0.8),
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_3,
    justifyContent: 'center'
  },
  tileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: rem(0.25)
  },
  textTransactionData: {
    color: THEME.COLORS.SECONDARY,
    marginVertical: rem(1.3),
    fontSize: rem(0.9),
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  tileTextTop: {
    color: THEME.COLORS.SECONDARY,
    fontSize: rem(0.7),
    marginBottom: rem(0.1)
  },
  tileTextTopNotes: {
    color: THEME.COLORS.SECONDARY,
    fontSize: rem(0.7),
    marginBottom: rem(0.5)
  },
  tileTextBottom: {
    color: THEME.COLORS.GRAY_5,
    fontSize: rem(1)
  },
  tileTextPrice: {
    flex: 1,
    color: THEME.COLORS.GRAY_5,
    fontSize: rem(1)
  },
  tileTextPriceChangeUp: {
    color: THEME.COLORS.ACCENT_MINT,
    fontSize: rem(1)
  },
  tileTextPriceChangeDown: {
    color: THEME.COLORS.ACCENT_RED,
    fontSize: rem(1)
  },
  tileTextNotes: {
    color: THEME.COLORS.GRAY_5,
    fontSize: rem(0.9)
  },
  tileIcon: {
    position: 'absolute',
    width: rem(0.7),
    height: rem(0.7),
    top: 10,
    right: 10
  },
  tileAvatarIcon: {
    color: THEME.COLORS.GRAY_2,
    marginRight: rem(0.4)
  },
  tileThumbnail: {
    width: rem(1.8),
    height: rem(1.8),
    borderRadius: rem(0.9),
    marginRight: rem(0.4)
  },
  tileCategory: {
    paddingHorizontal: rem(0.5),
    paddingVertical: rem(0.3),
    marginVertical: rem(0.3),
    backgroundColor: THEME.COLORS.TRANSACTION_DETAILS_SECONDARY,
    borderRadius: 3
  },
  tileCategoryText: {
    color: THEME.COLORS.SECONDARY,
    fontSize: rem(0.9)
  },
  tileSubCategoryText: {
    marginVertical: rem(0.3),
    marginHorizontal: rem(0.7),
    color: THEME.COLORS.GRAY_5
  },
  airshipContainer: {
    flex: 1,
    padding: rem(0.8)
  },
  airshipHeader: {
    fontSize: rem(1.2),
    marginBottom: rem(1),
    alignSelf: 'center'
  },
  fiatInput: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.TRANSACTION_DETAILS_GREY_1
  },
  spacer: {
    flex: 1
  },
  saveButtonContainer: {
    paddingHorizontal: rem(0.5),
    paddingBottom: rem(0.8)
  },
  saveButton: {
    height: rem(3)
  },
  inputCategoryListHeader: {
    fontSize: rem(0.7),
    marginBottom: rem(0.3),
    color: THEME.COLORS.SECONDARY
  },
  InputCategoryRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputCategoryContainter: {
    paddingHorizontal: rem(0.5),
    paddingVertical: rem(0.2),
    marginRight: rem(0.6),
    borderWidth: 1,
    borderColor: THEME.COLORS.TRANSACTION_DETAILS_SECONDARY,
    borderRadius: 3
  },
  inputCategoryContainterSelected: {
    paddingHorizontal: rem(0.5),
    paddingVertical: rem(0.2),
    marginRight: rem(0.6),
    borderWidth: 1,
    borderRadius: 3,
    borderColor: THEME.COLORS.TRANSACTION_DETAILS_SECONDARY,
    backgroundColor: THEME.COLORS.TRANSACTION_DETAILS_SECONDARY
  },
  inputCategoryText: {
    color: THEME.COLORS.SECONDARY,
    fontSize: rem(0.9)
  },
  inputCategoryMainContainter: {
    marginBottom: rem(0.8)
  },
  inputSubCategoryContainter: {
    marginTop: rem(0.8)
  },

  subCategoryContainer: {
    paddingLeft: scale(15),
    paddingRight: scale(15),
    marginTop: scale(15),
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_3
  },
  resultList: {
    backgroundColor: THEME.COLORS.WHITE,
    borderTopColor: THEME.COLORS.GRAY_3,
    borderTopWidth: 1,
    flex: 1
  },
  rowContainer: {
    flex: 1,
    height: rem(3.1),
    paddingLeft: rem(0.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.WHITE,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.TRANSACTION_DETAILS_GREY_4
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: scale(20)
  },
  rowCategoryTextWrap: {
    flex: 1,
    justifyContent: 'center',
    marginRight: scale(5)
  },
  rowCategoryText: {
    fontSize: rem(0.95)
  },
  rowPlusWrap: {
    justifyContent: 'center'
  },
  rowPlus: {
    fontSize: rem(0.95)
  },
  inputNotesWrap: {
    borderWidth: 1,
    borderColor: THEME.COLORS.TRANSACTION_DETAILS_GREY_1,
    borderRadius: 3,
    height: PLATFORM.deviceHeight * (Platform.OS === 'android' ? 0.3 : 0.35),
    padding: rem(0.8)
  },
  inputNotes: {
    color: THEME.COLORS.GRAY_2,
    fontSize: scale(15),
    fontFamily: THEME.FONTS.DEFAULT,
    paddingVertical: 0
  },
  inputNotesButton: {
    color: THEME.COLORS.GRAY_2,
    fontSize: scale(15),
    fontFamily: THEME.FONTS.DEFAULT,
    paddingVertical: 0
  },
  txIDIcon: {
    color: THEME.COLORS.SECONDARY
  },
  underlayColor: {
    color: THEME.COLORS.GRAY_4
  },
  singleContact: {
    height: scale(60),
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.TRANSACTION_DETAILS_GREY_2,
    padding: scale(10),
    paddingRight: scale(15),
    paddingLeft: scale(15)
  },
  singleContactWrap: {
    flexDirection: 'column',
    flex: 1
  },
  contactInfoWrap: {
    flexDirection: 'row',
    height: scale(40),
    flex: 1,
    justifyContent: 'space-between'
  },
  contactLeft: {
    flexDirection: 'row'
  },
  contactLogo: {
    width: scale(40),
    height: scale(40),
    marginRight: scale(10)
  },
  contactLeftTextWrap: {
    justifyContent: 'center'
  },
  contactName: {
    fontSize: scale(16),
    color: THEME.COLORS.TRANSACTION_DETAILS_GREY_3,
    textAlignVertical: 'center'
  },
  contactThumbnail: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20)
  }
}

export const iconSize = {
  avatar: rem(2)
}

export const materialFiatInput = {
  ...MaterialInputOnWhite,
  fontSize: rem(3),
  container: {
    ...MaterialInputOnWhite.container,
    width: '100%'
  }
}
export const materialInput = {
  ...MaterialInputOnWhite,
  fontSize: rem(0.9),
  labelFontSize: rem(0.65),
  container: {
    ...MaterialInputOnWhite.container,
    height: rem(3.44),
    width: '100%'
  }
}

export default StyleSheet.create(styles)
