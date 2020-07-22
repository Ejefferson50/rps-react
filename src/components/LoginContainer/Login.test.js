import React, {Component} from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe("Login text fields", () => {
    it("tests if the username and password field has text", () => {
        const wrapper = shallow(<Login />);
        const userField = wrapper.find('input.username');
        expect(userField).toHaveLength(1);
    })
})
describe("Login text fields", () => {
    it("tests if the password field is there", () => {
        const wrapper = shallow(<Login />);
        const passField = wrapper.find('input.password');
        expect(passField).toHaveLength(1);
    })
})
describe("Login button check", () => {
   it('Checks if the login page Has enter button', () => {
        const wrapper = shallow(<Login />);
        const enterButton = wrapper.find('EnterButton');
        expect(enterButton).toHaveLength(1);
    })
})
describe("Login button check", () => {
   it('Checks if the login page Has cancel button', () => {
        const wrapper = shallow(<Login />);
        const cancelButton = wrapper.find('CancelButton');
        expect(cancelButton).toHaveLength(1);
    })
})
describe("Enter button word thing check", () => {
    it('Checks if the button has text', () => {
        const wrapper = shallow(<Login />);
        const enterButton = wrapper.find('EnterButton');
        expect(enterButton.exists()).toBe(true);
    })
})
describe("Cancel button word thing check", () => {
    it('Checks if the button has text', () => {
        const wrapper = shallow(<Login />);
        const cancelButton = wrapper.find('CancelButton');
        expect(cancelButton.exists()).toBe(true);
    })
})