## Types of Tests
#### Unit Tests
Tests one piece of code (usually one function)

#### Integration Tests
How multiple units work together

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

## Removing data-test attributes

What was done to remove the data-test attribute from elements in production environments
```
npm install --save-dev babel-plugin-react-remove-properties
npm run eject
```
Update bable config in `package.json`

Create production build

NOTE: Not crazy about ejecting and I'm surprised to see it recommended here. As I understand, this excludes you from updates to create-react-app in the future.

## Process

1. Stubbing - writing a shell function in this case