// let BACKDROP_THEME;
// let DASHBOARD_THEME;
// let HOME_BUTTON_DOT_THEME;
// let APPLICATION_BUTTON_DOT_THEME;
// let MENU_BUTTON_DOT_THEME;
// // const testOfGlobalVariable = ['one', 'two', '3']
// // BACKDROP_THEME = dataOfMySettings.findMySettings.userHome[0].homeBackdropTheme
// // DASHBOARD_THEME = dataOfMySettings.findMySettings.userHome[0].homeDashboardTheme
// HOME_BUTTON_DOT_THEME = 'tan'
// APPLICATION_BUTTON_DOT_THEME = 'tan'
// MENU_BUTTON_DOT_THEME = 'tan'

// const openOrcloseApplicationModal = () => {
//   console.log('openOrcloseApplicationModal')
//   const applicationElementRotate = document.getElementById(`application-element`)
//   const applicationElementDotOne = document.getElementById(`application-element-dot-one`)
//   const applicationElementDotTwo = document.getElementById(`application-element-dot-two`)
//   const applicationElementDotThree = document.getElementById(`application-element-dot-three`)
//   const menuElementRotate = document.getElementById(`menu-element`)
//   const menuElementDotOne = document.getElementById(`menu-element-dot-one`)
//   const menuElementDotTwo = document.getElementById(`menu-element-dot-two`)
//   const applicationModalAnimation = document.getElementById(`Application-Modal-Section`)
//   const navigationBarApplicationModalButton = document.getElementById(`NavigationBar-ApplicationModal-Button`)
//   const menuModalAnimation = document.getElementById(`Menu-Modal-Section`)
//   const navigationBarMenuModalButton = document.getElementById(`NavigationBar-MenuModal-Button`)
//   const modalUnderLayerAnimation = document.getElementById(`Modal-Underlayer`)

//   if ('functionRunningState' === true || waitWhileClosingModelUnderlayerProp === true) {

//     return

//   } else if (navigationBarApplicationModalButton.textContent === `Open Apps` && navigationBarMenuModalButton.textContent === `Open Menu`) {
//     applicationElementRotate.className = `application-element-rotated`
//     applicationElementDotOne.className = `application-element-dot-one-rotated application-element-dot-one-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotTwo.className = `application-element-dot-two-rotated application-element-dot-two-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotThree.className = `application-element-dot-three-rotated application-element-dot-three-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     navigationBarApplicationModalButton.textContent = `Close Apps`
//     navigationBarApplicationModalButton.className = `NavigationBar-ModalButton-Color-Opened NavigationBar-Buttons-Dimensions`

//     applicationModalOpenedProps(true)
//     modalUnderlayerOpenedProps(true)

//   } else if (navigationBarApplicationModalButton.textContent === `Open Apps` && navigationBarMenuModalButton.textContent === `Close Menu`) {
//     applicationElementRotate.className = `application-element-rotated`
//     applicationElementDotOne.className = `application-element-dot-one-rotated application-element-dot-one-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotTwo.className = `application-element-dot-two-rotated application-element-dot-two-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotThree.className = `application-element-dot-three-rotated application-element-dot-three-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     menuElementRotate.className = `menu-element-initial`
//     menuElementDotOne.className = `menu-element-dot-one menu-element-dot-one-${MENU_BUTTON_DOT_THEME}-theme`
//     menuElementDotTwo.className = `menu-element-dot-two menu-element-dot-two-${MENU_BUTTON_DOT_THEME}-theme`
//     navigationBarApplicationModalButton.textContent = `Close Apps`
//     navigationBarApplicationModalButton.className = `NavigationBar-ModalButton-Color-Closed NavigationBar-Buttons-Dimensions`
//     navigationBarMenuModalButton.textContent = `Open Menu`

//     applicationModalOpenedProps(true)

//     menuModalAnimation.className = `Menu-Modal-Section Menu-Modal-Section-Closed BackDrop-${BACKDROP_THEME}-theme`
//     navigationBarMenuModalButton.className = `NavigationBar-ModalButton-Color-Closed NavigationBar-Buttons-Dimensions`
//     navigationBarMenuModalButton.textContent = `Open Menu`

//     functionIsRunningState(true)

//     setTimeout(() => {
//       menuModalOpenedProps(false)
//       functionIsRunningState(false)
//     }, 500)

//   } else if (navigationBarApplicationModalButton.textContent === `Close Apps` && navigationBarMenuModalButton.textContent === `Open Menu`) {
//     applicationElementRotate.className = `application-element-initial`
//     applicationElementDotOne.className = `application-element-dot-one application-element-dot-one-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotTwo.className = `application-element-dot-two application-element-dot-two-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotThree.className = `application-element-dot-three application-element-dot-three-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     modalUnderLayerAnimation.className = `ModalUnderlayer-Colors-Closed ModalUnderlayer-Position ModalUnderlayer-Dimensions`
//     applicationModalAnimation.className = `Application-Modal-Section Application-Modal-Section-Closed`
//     navigationBarApplicationModalButton.className = `NavigationBar-ModalButton-Color-Closed NavigationBar-Buttons-Dimensions`
//     navigationBarApplicationModalButton.textContent = `Open Apps`

//     functionIsRunningState(true)

//     setTimeout(() => {
//       applicationModalOpenedProps(false)
//       modalUnderlayerOpenedProps(false)
//       functionIsRunningState(false)
//     }, 500);
//   }
// };

// const openOrCloseMenuModal = () => {
//   console.log('at ActionBar Functions ', testOfGlobalVariable)
//   const applicationElementRotate = document.getElementById(`application-element`)
//   const applicationElementDotOne = document.getElementById(`application-element-dot-one`)
//   const applicationElementDotTwo = document.getElementById(`application-element-dot-two`)
//   const applicationElementDotThree = document.getElementById(`application-element-dot-three`)
//   const menuElementRotate = document.getElementById(`menu-element`)
//   const menuElementDotOne = document.getElementById(`menu-element-dot-one`)
//   const menuElementDotTwo = document.getElementById(`menu-element-dot-two`)
//   const applicationModalAnimation = document.getElementById(`Application-Modal-Section`)
//   const navigationBarApplicationModalButton = document.getElementById(`NavigationBar-ApplicationModal-Button`)
//   const menuModalAnimation = document.getElementById(`Menu-Modal-Section`)
//   const navigationBarMenuModalButton = document.getElementById(`NavigationBar-MenuModal-Button`)
//   const modalUnderLayerAnimation = document.getElementById(`Modal-Underlayer`)

//   if ('functionRunningState' === true || 'waitWhileClosingModelUnderlayerProp' === true) {

//     return
//   } else if (navigationBarApplicationModalButton.textContent === `Open Apps` && navigationBarMenuModalButton.textContent === `Open Menu`) {
//     menuElementRotate.className = `menu-element-rotated`
//     menuElementDotOne.className = `menu-element-dot-one-rotated menu-element-dot-one-${MENU_BUTTON_DOT_THEME}-theme`
//     menuElementDotTwo.className = `menu-element-dot-two-rotated menu-element-dot-two-${MENU_BUTTON_DOT_THEME}-theme`
//     navigationBarMenuModalButton.textContent = `Close Menu`
//     navigationBarMenuModalButton.className = `NavigationBar-ModalButton-Color-Opened NavigationBar-Buttons-Dimensions`

//     menuModalOpenedProps(true)
//     modalUnderlayerOpenedProps(true)

//   } else if (navigationBarApplicationModalButton.textContent === `Open Apps` && navigationBarMenuModalButton.textContent === `Close Menu`) {
//     menuElementRotate.className = `menu-element-initial`
//     menuElementDotOne.className = `menu-element-dot-one menu-element-dot-one-${MENU_BUTTON_DOT_THEME}-theme`
//     menuElementDotTwo.className = `menu-element-dot-two menu-element-dot-two-${MENU_BUTTON_DOT_THEME}-theme`
//     modalUnderLayerAnimation.className = `ModalUnderlayer-Colors-Closed ModalUnderlayer-Position ModalUnderlayer-Dimensions`
//     menuModalAnimation.className = `Menu-Modal-Section Menu-Modal-Section-Closed BackDrop-${BACKDROP_THEME}-theme`
//     navigationBarMenuModalButton.className = `NavigationBar-ModalButton-Color-Closed NavigationBar-Buttons-Dimensions`
//     navigationBarMenuModalButton.textContent = `Open Menu`

//     functionIsRunningState(true)

//     setTimeout(() => {
//       menuModalOpenedProps(false)
//       modalUnderlayerOpenedProps(false)
//       functionIsRunningState(false)
//     }, 500)

//   } else if (navigationBarApplicationModalButton.textContent === `Close Apps` && navigationBarMenuModalButton.textContent === `Open Menu`) {
//     applicationElementRotate.className = `application-element-initial`
//     applicationElementDotOne.className = `application-element-dot-one application-element-dot-one-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotTwo.className = `application-element-dot-two application-element-dot-two-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     applicationElementDotThree.className = `application-element-dot-three application-element-dot-three-${APPLICATION_BUTTON_DOT_THEME}-theme`
//     menuElementRotate.className = `menu-element-rotated`
//     menuElementDotOne.className = `menu-element-dot-one-rotated menu-element-dot-one-${MENU_BUTTON_DOT_THEME}-theme`
//     menuElementDotTwo.className = `menu-element-dot-two-rotated menu-element-dot-two-${MENU_BUTTON_DOT_THEME}-theme`
//     navigationBarMenuModalButton.textContent = `Close Menu`
//     navigationBarMenuModalButton.className = `NavigationBar-ModalButton-Color-Opened NavigationBar-Buttons-Dimensions`
//     navigationBarApplicationModalButton.textContent = `Open Apps`

//     applicationModalAnimation.className = `Application-Modal-Section Application-Modal-Section-Closed`
//     navigationBarApplicationModalButton.className = `NavigationBar-ModalButton-Color-Closed NavigationBar-Buttons-Dimensions`
//     navigationBarApplicationModalButton.textContent = `Open Apps`

//     menuModalOpenedProps(true)
//     functionIsRunningState(true)

//     setTimeout(() => {
//       applicationModalOpenedProps(false)
//       functionIsRunningState(false)
//     }, 500)
//   }
// };

// const closeAllModals = () => {
//   resetEdgeNavigationArrayToHome()
//   const homeElementRotate = document.getElementById(`home-element`)
//   homeElementRotate.className = `home-element-rotated`
//   const homeElementDotOne = document.getElementById(`home-element-dot-one`)
//   homeElementDotOne.className = `home-element-dot-one-rotated home-element-dot-one-${HOME_BUTTON_DOT_THEME}-theme`
//   const homeElementDotTwo = document.getElementById(`home-element-dot-two`)
//   homeElementDotTwo.className = `home-element-dot-two-rotated home-element-dot-two-${HOME_BUTTON_DOT_THEME}-theme`
//   const homeElementDotThree = document.getElementById(`home-element-dot-three`)
//   homeElementDotThree.className = `home-element-dot-three-rotated home-element-dot-three-${HOME_BUTTON_DOT_THEME}-theme`
//   const homeElementDotFour = document.getElementById(`home-element-dot-four`)
//   homeElementDotFour.className = `home-element-dot-four-rotated home-element-dot-four-${HOME_BUTTON_DOT_THEME}-theme`

//   setTimeout(() => {
//     homeElementRotate.className = `home-element-initial`
//     homeElementDotOne.className = `home-element-dot-one home-element-dot-one-${HOME_BUTTON_DOT_THEME}-theme`
//     homeElementDotTwo.className = `home-element-dot-two home-element-dot-two-${HOME_BUTTON_DOT_THEME}-theme`
//     homeElementDotThree.className = `home-element-dot-three home-element-dot-three-${HOME_BUTTON_DOT_THEME}-theme`
//     homeElementDotFour.className = `home-element-dot-four home-element-dot-four-${HOME_BUTTON_DOT_THEME}-theme`
//   }, 500)
//   const navigationBarApplicationModalButton = document.getElementById(`NavigationBar-ApplicationModal-Button`)
//   const navigationBarMenuModalButton = document.getElementById(`NavigationBar-MenuModal-Button`)

//   if (navigationBarApplicationModalButton.textContent === `Close Apps`) {
//     openOrcloseApplicationModal()
//   }

//   if (navigationBarMenuModalButton.textContent === `Close Menu`) {
//     openOrCloseMenuModal()
//   }
// }

// let four

// const navigateHome = (message) => {
//   console.log(message, 'at ActionBar Functions ', testOfGlobalVariable)
//   testOfGlobalVariable = { ...testOfGlobalVariable, openOrcloseApplicationModal: openOrcloseApplicationModal }
//   console.log(testOfGlobalVariable)
//   const topDashBoardSection = document.getElementById(`TopDashboard-Section`)
//   const TopDashboardContectSection = document.getElementById(`TopDashboard-Contect-Section`)
//   const middleDashboardSection = document.getElementById(`MiddleDashboard-Section`)
//   const middleDashboardSectionContentSection = document.getElementById(`MiddleDashboard-Content-Section`)
//   const bottomDashboardSection = document.getElementById(`BottomDashboard-Section`)
//   const buttomDashboardContentSection = document.getElementById(`BottomDashboard-Content-Section`)
//   if ('/' !== `/`) {
//     if (topDashBoardSection === null || middleDashboardSection === null || bottomDashboardSection === null) {
//       if (topDashBoardSection !== null) {
//         topDashBoardSection.className = `TopDashboard-Section-Shrink-From-Expanded`
//         TopDashboardContectSection.className = `CommonDashboard-Content-Section-Minimized Dashboard-${DASHBOARD_THEME}-theme`
//         setTimeout(() => {
//           navigateToHome(`/`)
//         }, 500)
//       }
//       if (middleDashboardSection !== null) {
//         middleDashboardSection.className = `MiddleDashboard-Section-Shrink-From-Expanded`
//         middleDashboardSectionContentSection.className = `CommonDashboard-Content-Section-Minimized Dashboard-${DASHBOARD_THEME}-theme`
//         setTimeout(() => {
//           navigateToHome(`/`)
//         }, 500)
//       }
//       if (bottomDashboardSection !== null) {
//         bottomDashboardSection.className = `BottomDashboard-Section-Shrink-From-Expanded`
//         buttomDashboardContentSection.className = `CommonDashboard-Content-Section-Minimized Dashboard-${DASHBOARD_THEME}-theme`
//         setTimeout(() => {
//           navigateToHome(`/`)
//         }, 500)
//       }
//     } else {
//       topDashBoardSection.className = `TopDashboard-Section-Shrink`
//       middleDashboardSection.className = `MiddleDashboard-Section-Shrink`
//       bottomDashboardSection.className = `BottomDashboard-Section-Shrink`
//       setTimeout(() => {
//         navigateToHome(`/`)
//         topDashBoardSection.className = `TopDashboard-Section-Initial`
//         middleDashboardSection.className = `MiddleDashboard-Section-Initial`
//         bottomDashboardSection.className = `BottomDashboard-Section-initial`
//       }, 500)
//     }
//   }
// }

