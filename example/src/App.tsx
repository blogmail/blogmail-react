import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Blogmail from "blogmail-react"

const Toggle = () => {
  const [show, setShow] = React.useState(true)
  const onClick = () => setShow(!show)
  return (
    <div>
      <input
        type="submit"
        value={show ? "Hide element" : "Show element"}
        onClick={onClick}
        className="button rounded"
      />
      <br />
      {show ? (
        <div className="border border-solid rounded p-2">
          <Blogmail
            newsletterId="my-newsletter-id"
            classes={{
              formDiv: "container flex-wrap",
              label: "w-full p-2",
              subscribedDiv: "p-2 m-1",
              textInput: "flex-grow rounded p-2 m-1",
              bottomDiv: "text-sm px-2 p-1",
              submitInput: "m-1 p-2",
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle />
      </header>
    </div>
  )
}

export default App
