import * as React from "react"

import Blogmail from ".."
import renderer from "react-test-renderer"

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<Blogmail newsletterId="test" />)
  const testInstance = component.root

  expect(testInstance.findByType(Blogmail).props.newsletterId).toBe("test")

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
