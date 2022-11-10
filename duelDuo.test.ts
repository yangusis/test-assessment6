
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div "choices"', async () => {
    await driver.findElement(By.id('draw')).click()
    const divId = await driver.findElement(By.id('choices'))
    const displayed = await divId.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to duo button displays div "player-duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const divId = await driver.findElement(By.id('player-duo'))
    const displayed = await divId.isDisplayed()
    expect(displayed).toBe(true)
})