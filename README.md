These are my notes and code examples from a Udemy course on testing [React with Jest and Enzyme](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/learn/lecture/10533054#content)

## Types of Tests
#### Unit Tests
Tests one piece of code (usually one function)

#### Integration Tests
How multiple units work together

In this course, we do integration tests with action creators and reducers.

#### Acceptance/End-to-end (E2E) Tests
How a user would interact with app. This course doesn't go over these types of tests.

## Test Behavior
When writing tests, you should be testing behavior not implementation.

## Jest
- Javascript testing framework
- Has its own assertions built in

## Enzyme
- Creates a virtual DOM for testing
- Allows testing without a browser
- Shallow rendering: render components only one level deep
- Created by Airbnb

## TDD and Red/Green Tests

- ALWAYS ensure you see a test fail first (aka see red). This means it's working. Then make it green.

With TDD, you are defining the behavior you want to see in tests. Then you implement that behavior piecemeal and turn tests green.

## Removing data-test attributes

What was done to remove the data-test attribute from elements in production environments
```
npm install --save-dev babel-plugin-react-remove-properties
npm run eject
```
Update bable config in `package.json`

Create production build

NOTE: Not crazy about ejecting and I'm surprised to see it recommended here. As I understand, this excludes you from updates to create-react-app in the future.

## toBe vs toEqual

toEqual is a deep equal while toBe is shallow

## Unit Testing action creators/reducers

- Some devs think you should only do integration tests on API and that action creators/reducers are an implementation detail

- There are fewer tests to maintain and therefore less test refactoring when refactoring card

- However, it's harder to diagnose when other tests fail


## Redux testing

Used the actual store and not a mockStore. Testing the actual store is closer to the app and using a mock store can't test changes to the store.

`redux-mock-store`

Used storeFactory and passed the store directly to the component being tested. Redux testing docs recommends exporting component without connect so it can be tested separately. Enzyme does not recommend this.

Connected components is closer to the app and can work with the store. Non-connected components are further from the app and can pass mock action creators as props.

Examples of both in this course.

## Why moxios

Do not want to test server when testing app. That's because we want to isolate the tests. When an app fails we know the app is failing, not the server or the connection to the server.

### How does moxios work?

Test intalls moxios
    * axios will now send requests to moxios instead of http
    * Test specifies moxios response
    * Test calls action creators
    * Action creator calls axios
        * axios uses moxios instead of http for request
    * Action creator receives moxios response from axios

## To use this app

Install packages via npm start in each directory
then:
`cd random-word-server && start`
then:
`cd jotto && npm start`
