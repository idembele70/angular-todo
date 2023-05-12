import { expect, test } from "@playwright/test"

test.beforeEach(
  async ({ page }) => {
    await page.goto("http://localhost:4200/")
  }
)
const todos: string[] = [
  "first todo", "make homework", "buy a new sneakers"
]

test.describe("new Todo", () => {
  test("should add todo", async ({ page }) => {
    // first todo
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    const todoText = page.locator(".todo-text")
    await inputField.fill(todos[0])
    await submitBtn.click()
    await expect(todoText).toHaveText(todos[0])
    // second todo
    await inputField.fill(todos[1])
    await inputField.press("Enter")
    // check if the todos exists
    await expect(todoText).toHaveText([
      todos[0],
      todos[1],
    ])
  })
  test("should clear input after a todo is added", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    await inputField.fill(todos[2])
    await inputField.press("Enter")
    await expect(inputField).toBeEmpty()
  })
  test("should not able to add existing todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    await inputField.fill(todos[0])
    await submitBtn.press("Enter")
    // trying to add the same todo again
    await inputField.fill(todos[0])
    await submitBtn.press("Enter")
    const inputValue = await inputField.inputValue()
    expect(inputValue).toEqual(
      todos[0]
    )
  })
})

test.describe("delete a todo", () => {

})
