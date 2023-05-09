import { expect, test } from "@playwright/test"

test.describe("it should add Todo", () => {
  test("should add todo", async ({ page }) => {
    await page.goto("http://localhost:4200/")
    const inputField = page.locator(".add-todo-input")
    await inputField.fill("first Todo")
    const checkInputFieldValue = await inputField.inputValue() === "first Todo"
    expect(checkInputFieldValue).toBeTruthy()
    //await page.locator(".add-todo-btn").click()
    //const isEmpty = await page.locator(".add-todo-input").inputValue()
    //expect(isEmpty).toBeTruthy()
  })
})