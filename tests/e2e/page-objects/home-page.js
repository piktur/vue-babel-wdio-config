export default class HomePage {
  get title() {
    return browser.$('h1').getText()
  }
}
