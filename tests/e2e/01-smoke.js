import assert from 'assert'
import HomePage from './page-objects/home-page'

const homePage = new HomePage()

it('should work', () => {
  browser.url('/')

  assert.equal(homePage.title, 'Welcome to Your Vue.js App')
})
