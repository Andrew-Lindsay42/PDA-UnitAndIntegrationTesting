import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add (1 + 4 = 5)', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract (7 - 4 = 3)', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })
    
  it('should be able to multiply (3 * 5 = 15)', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide (21 / 7 = 3)', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks (click One 3 times = 111)', () => {
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button1.simulate('click');
    button1.simulate('click');
    expect(runningTotal.text()).toEqual('111');
  })

  it('should be able to chain multiple operations (1 + 3 * 3 = 12)', () => {
    const button1 = container.find('#number1');
    const button3 = container.find('#number3');
    const buttonAdd = container.find('#operator_add');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button3.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('12');
  })

  it('should be able to clear running total without affecting the calculation', () => {
    const button1 = container.find('#number1');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    const buttonClear = container.find('#clear')
    button1.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('2');
    buttonClear.simulate('click')
    expect(runningTotal.text()).toEqual('0');
  })
  
})
