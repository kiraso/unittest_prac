import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from 'enzyme';
import PersonList from './PersonList'
describe("App", () => {
  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<App/>)
  });

  

  test('renders a person list',() => {
    const personList = appWrapper.find(PersonList)
    
    expect(personList).toHaveLength(1);
  })
  test('has state',() => {
    const appState = appWrapper.state()

    expect(appState).not.toBeNull();
  })

  it('',()=> {
    const appState = appWrapper.state()

    expect(appState.people).toBeDefined();
  })
});
