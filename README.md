[![Node.js CI](https://github.com/blogmail/blogmail-react/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/blogmail/blogmail-react/actions?query=workflow%3A%22Node.js+CI%22) [![Node.js Package](https://github.com/blogmail/blogmail-react/workflows/Node.js%20Package/badge.svg)](https://github.com/blogmail/blogmail-react/actions?query=workflow%3A%22Node.js+Package%22) [![npm version](https://img.shields.io/npm/v/@blogmail/react.svg?style=flat-square)](https://www.npmjs.com/package/@blogmail/react)

# @blogmail/react

This project provides a React component for integrating [blogmail](https://blogmail.co/).

## Usage

```sh
npm install @blogmail/react
```

or

```sh
yarn add @blogmail/react
```

## Minimal example

```jsx
import React from "react"
import ReactDOM from "react-dom"
import Blogmail from "@blogmail/react"

const newsletterId = "newsletterId"

const App = () => <Blogmail newsletterId={newsletterId} />

ReactDOM.render(<App />, document.body)
```

See the [example](example/) dir for a complete example based on react-create-app.
