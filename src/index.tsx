/**
 * @class Blogmail
 */

import * as React from "react"

import Script from "react-load-script"

declare global {
  interface Window {
    Blogmail: any
  }
}

export type BlogmailClasses = {
  a?: string
  formDiv?: string
  bottomDiv?: string
  subscribedDiv?: string
  label?: string
  textInput?: string
  submitInput?: string
}

export type BlogmailStyles = {
  a?: string
  formDiv?: string
  bottomDiv?: string
  subscribedDiv?: string
  label?: string
  textInput?: string
  submitInput?: string
}

export type Props = {
  newsletterId: string
  inputPlaceholder?: string
  labelText?: string
  buttonText?: string
  subscribedText?: string
  classes?: BlogmailClasses
  styles?: BlogmailStyles
}

let idCounter = 0

// borrowed from lodash
function uniqueId(prefix: string) {
  const id = ++idCounter
  return prefix + id
}

export default class Blogmail extends React.Component<Props> {
  id: string

  constructor(props: Props) {
    super(props)
    this.id = uniqueId("blogmail")
  }

  render(): JSX.Element {
    return (
      <div>
        <Script
          url="https://blogmail.co/v1/bm.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div id={this.id}>
          <script
            type="application/json"
            dangerouslySetInnerHTML={this.getInnerHtml()}
          ></script>
        </div>
      </div>
    )
  }

  getInnerHtml(): {
    __html: string
  } {
    return {
      __html: JSON.stringify({
        newsletterId: this.props.newsletterId,
        inputPlaceholder: this.props.inputPlaceholder,
        labelText: this.props.labelText,
        buttonText: this.props.buttonText,
        subscribedText: this.props.subscribedText,
        classes: this.props.classes,
        styles: this.props.styles,
      }),
    }
  }

  handleScriptCreate(): void {
    // console.log("handleScriptCreate")
  }
  handleScriptError(): void {
    // console.log("handleScriptError")
  }
  handleScriptLoad(): void {
    // console.log("handleScriptLoad")

    window.Blogmail(`div#${this.id}`)
  }
}
