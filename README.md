# namaste react

# parcel

.. Creates dev build
.. Local server
.. HMR - hot module replacement - refresh page instantly
.. File watching algorithm - written in c++, helps in speed file watch
.. Faster builds because of caching
.. Image optimization
.. Minimization
.. Bundeling
.. Compress
.. Content hashing
.. Code spliting
.. Differential bundeling - to run smoothly in different browsers
.. Diagnostic
.. Error handling
.. Tree shaking - remove unused code

# Namastefood

/\*

- Header
  --- Logo
  --- Nav items
- Body
  --- Serach
  --- Restorent card
- Footer
  --- Copyright
  --- Contanct
  --- Links
  \*/

# Export/Import

- Two types of export import

1- Default Export/Import

export default component
import component from "path"

2- Named Export/Import

export const component
import {component} from "path"

# React Hooks

(Normal js utility functions )

useState() - superPowerful state variables in react
useEffects()
note : whenever a state variable changes the react will rerender the component.

# Redux Toolkit

- install @reduxjs/toolkit and react-redux
- build our store
- connect store to our app
- slice(cartSlice)
- dispatch(action)
- function call(reducer)
- selector

# Type of Testing

- Unit Testing
- Integration Testing
- End to End Testing (e2e Testing)

# Setting up testing in our app

- Install react Testing library
- Install jest
- Install babel dependencies
- configure babel
- configure parcel config file to disable the default babel
- npx create-jest
- Install jsdom library
