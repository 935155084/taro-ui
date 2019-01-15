import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { renderIntoDocument, Simulate } from 'nerv-test-utils'

import { View } from '@tarojs/components'

import AtSwipeAction from '../../../.temp/components/swipe-action/index'

const startInfo = { clientX: 0, clientY: 0 }
const moveInfo = { clientX: -100, clientY: 0, pageX: 0, pageY: 0 }

const MAX_OFFSET_SIZE = 101

const OPTIONS = [
  {
    text: '取消',
    className: 'cancel',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    className: 'confirm',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]

describe('SwipeAction Snap', () => {
  it('render options', () => {
    const component = renderToString(
      <AtSwipeAction
        isTest
        disabled
        autoClose
        options={OPTIONS}
        className='swipe-action--test'
      >
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    expect(component).toMatchSnapshot()
  })

  it('render options -- isOpened', () => {
    const component = renderToString(
      <AtSwipeAction
        isTest
        isOpened
        disabled
        autoClose
        options={OPTIONS}
        className='swipe-action--test'
      >
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    expect(component).toMatchSnapshot()
  })
})

describe('SwipeAction Swipe Behavior', () => {
  // const onClick = jest.fn()
  // const onClosed = jest.fn()
  // const onOpened = jest.fn()
  // const component = renderIntoDocument(
  //   <AtSwipeAction
  //     options={OPTIONS}
  //     onClick={onClick}
  //     onClosed={onClosed}
  //     onOpened={onOpened}
  //   >
  //     <View className='normal'>AtSwipeAction 一般使用场景</View>
  //   </AtSwipeAction>
  // )
  // component.domInfo = {
  //   bottom: 43,
  //   dataset: {},
  //   height: 43,
  //   id: '',
  //   left: 0,
  //   right: 375,
  //   top: 0,
  //   width: 375
  // }
  // const componentDom = findDOMNode(component, 'at-swipe-action')
  // component.maxOffsetSize = MAX_OFFSET_SIZE
  // beforeEach(() => {
  //   onClick.mockReset()
  //   onClosed.mockReset()
  //   onOpened.mockReset()
  //   component._reset()
  // })
  // it('SwipeAction onClick', () => {
  //   const optionDom = componentDom.querySelector('.at-swipe-action__option')
  //   Simulate.click(optionDom)
  //   expect(onClick).toBeCalled()
  // })
  // it('SwipeAction Swipe Right', () => {
  //   // 一开始向右滑动是没有效果的
  //   expect(component.isTouching).toBeFalsy()
  //   Simulate.touchStart(componentDom, {
  //     touches: [{ clientX: 0 }]
  //   })
  //   expect(component.isTouching).toBeTruthy()
  //   Simulate.touchMove(componentDom, {
  //     touches: [{ clientX: 100 }]
  //   })
  //   component.forceUpdate()
  //   expect(component.state.offsetSize).toEqual(0)
  //   Simulate.touchEnd(componentDom)
  //   expect(onClosed).not.toBeCalled()
  //   expect(onOpened).not.toBeCalled()
  //   expect(component.state._isOpened).toBeFalsy()
  //   expect(component.state.offsetSize).toEqual(0)
  // })
  // it('SwipeAction Swipe Left', () => {
  //   // 一开始向左滑动 直到最大时将停止
  //   expect(component.isTouching).toBeFalsy()
  //   Simulate.touchStart(componentDom, {
  //     touches: [startInfo]
  //   })
  //   expect(component.isTouching).toBeTruthy()
  //   Simulate.touchMove(componentDom, {
  //     touches: [moveInfo]
  //   })
  //   component.forceUpdate()
  //   expect(component.state.offsetSize).toEqual(moveInfo.clientX)
  //   Simulate.touchEnd(componentDom)
  //   component.forceUpdate()
  //   expect(onOpened).toBeCalled()
  //   expect(onClosed).not.toBeCalled()
  //   expect(component.state._isOpened).toBeTruthy()
  //   expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)
  // })
  // it('SwipeAction Completed Swipe Action', () => {
  //   // 开始向左滑懂
  //   Simulate.touchStart(componentDom, {
  //     touches: [startInfo]
  //   })
  //   Simulate.touchMove(componentDom, {
  //     touches: [moveInfo]
  //   })
  //   component.forceUpdate()
  //   expect(component.state.offsetSize).toEqual(moveInfo.clientX)
  //   // 向左滑动结束
  //   Simulate.touchEnd(componentDom)
  //   component.forceUpdate()
  //   expect(onOpened).toBeCalled()
  //   expect(component.state._isOpened).toBeTruthy()
  //   expect(component.endValue).toEqual(-MAX_OFFSET_SIZE)
  //   expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)
  //   // 开始向右滑动
  //   Simulate.touchStart(componentDom, {
  //     touches: [startInfo]
  //   })
  //   Simulate.touchMove(componentDom, {
  //     touches: [{ ...moveInfo, clientX: 100 }]
  //   })
  //   component.forceUpdate()
  //   expect(component.state.offsetSize).toEqual(-1)
  //   // 向右滑动结束
  //   Simulate.touchEnd(componentDom)
  //   component.forceUpdate()
  //   expect(onClosed).toBeCalled()
  //   expect(component.endValue).toEqual(0)
  //   expect(component.state._isOpened).toBeFalsy()
  //   expect(component.state.offsetSize).toEqual(0)
  // })
})

describe('SwipeAction Props', () => {
  // it('SwipeAction Disabled', () => {
  //   const component = renderIntoDocument(
  //     <AtSwipeAction disabled options={OPTIONS}>
  //       <View className='normal'>AtSwipeAction 一般使用场景</View>
  //     </AtSwipeAction>
  //   )

  //   component.domInfo = {
  //     bottom: 43,
  //     dataset: {},
  //     height: 43,
  //     id: '',
  //     left: 0,
  //     right: 375,
  //     top: 0,
  //     width: 375
  //   }

  //   const componentDom = findDOMNode(component, 'at-swipe-action')
  //   component.maxOffsetSize = MAX_OFFSET_SIZE

  //   Simulate.touchStart(componentDom, {
  //     touches: [startInfo]
  //   })

  //   Simulate.touchMove(componentDom, {
  //     touches: [moveInfo]
  //   })
  //   component.forceUpdate()
  //   expect(component.state.offsetSize).toEqual(0)
  // })

  // it('SwipeAction AutoClose', () => {
  //   const component = renderIntoDocument(
  //     <AtSwipeAction autoClose options={OPTIONS}>
  //       <View className='normal'>AtSwipeAction 一般使用场景</View>
  //     </AtSwipeAction>
  //   )

  //   component.domInfo = {
  //     bottom: 43,
  //     dataset: {},
  //     height: 43,
  //     id: '',
  //     left: 0,
  //     right: 375,
  //     top: 0,
  //     width: 375
  //   }

  //   const componentDom = findDOMNode(component, 'at-swipe-action')
  //   const swipeActionButtonDom = componentDom.querySelector(
  //     '.at-swipe-action__option'
  //   )
  //   component.maxOffsetSize = MAX_OFFSET_SIZE

  //   Simulate.touchStart(componentDom, {
  //     touches: [startInfo]
  //   })
  //   component.forceUpdate()

  //   Simulate.touchMove(componentDom, {
  //     touches: [moveInfo]
  //   })
  //   component.forceUpdate()
  //   // console.log(component)

  //   Simulate.touchEnd(componentDom)
  //   component.forceUpdate()

  //   expect(component.state._isOpened).toBeTruthy()
  //   expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)

  //   Simulate.click(swipeActionButtonDom)
  //   component.forceUpdate()

  //   expect(component.endValue).toEqual(0)
  //   expect(component.isTouching).toBeFalsy()
  //   expect(component.state._isOpened).toBeFalsy()
  //   expect(component.state.offsetSize).toEqual(0)
  // })

  it('SwipeAction isOpened equals true', () => {
    const component = renderIntoDocument(
      <AtSwipeAction isTest isOpened autoClose options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    component.domInfo = {
      bottom: 43,
      dataset: {},
      height: 43,
      id: '',
      left: 0,
      right: 375,
      top: 0,
      width: 375
    }

    const spy = jest.spyOn(component, 'handleDomInfo').bind(component)
    spy({ width: MAX_OFFSET_SIZE })

    component.forceUpdate()

    expect(component.state._isOpened).toBeTruthy()
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)
  })

  it('SwipeAction isOpened equals false', () => {
    const component = renderIntoDocument(
      <AtSwipeAction isTest autoClose options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    component.domInfo = {
      bottom: 43,
      dataset: {},
      height: 43,
      id: '',
      left: 0,
      right: 375,
      top: 0,
      width: 375
    }

    const componentDom = findDOMNode(component, 'at-swipe-action')
    component.maxOffsetSize = MAX_OFFSET_SIZE

    Simulate.touchStart(componentDom, {
      touches: [startInfo]
    })
    component.forceUpdate()

    Simulate.touchMove(componentDom, {
      touches: [moveInfo]
    })
    component.forceUpdate()

    Simulate.touchEnd(componentDom)
    component.forceUpdate()

    expect(component.state._isOpened).toBeTruthy()
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)

    const spy = jest
      .spyOn(component, 'componentWillReceiveProps')
      .bind(component)

    spy({ isOpened: false })

    component.forceUpdate()

    expect(component.state._isOpened).toBeFalsy()
  })
})
