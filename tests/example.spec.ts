import { expect, test } from "@playwright/test"

test.describe("add a new Todo", () => {
  test("should add todo", async ({ page }) => {
    await page.goto("http://localhost:4200/")
    const todos: string[] = [
      "first todo", "make homework", "buy a new sneakers"
    ]
    // create the todo by clicking
    const inputField = page.locator(".add-todo-input")
    await inputField.fill(todos[0])
    const didFirstTodoExist = await inputField.inputValue() === todos[0]
    expect(didFirstTodoExist).toBeTruthy()
    const submitBtn = page.locator(".add-todo-btn")
    await submitBtn.click()
    // create the todo by pressing enter on submit Btn
    await inputField.fill(todos[1])
    const didSecondTodoExist = await inputField.inputValue() === todos[1]
    expect(didSecondTodoExist).toBeTruthy()
    await submitBtn.press("Enter")
    // create the todo by pressing enter on submit Btn
    await inputField.fill(todos[2])
    const didLastTodoExist = await inputField.inputValue() === todos[2]
    expect(didLastTodoExist).toBeTruthy()
    await inputField.press("Enter")
    // check if the todos exists
    const isEmpty = await inputField.inputValue() === ""
    expect(isEmpty).toBeTruthy()
    const todoText = page.locator(".todo-text")
    await expect(todoText).toHaveText([
      todos[0],
      todos[1],
      todos[2]
    ])
  })
})
