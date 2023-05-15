import { Locator, Page, expect, test } from "@playwright/test"

test.beforeEach(
  async ({ page }) => {
    await page.goto("http://localhost:4200/")
  }
)
const todos: string[] = [
  "first todo", "make homework", "buy a new sneakers"
]

test.describe("new Todo", () => {
  test("should add one todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    const todoText = page.locator(".todo-text")
    await inputField.fill(todos[0])
    await submitBtn.click()
    await expect(todoText).toHaveText(todos[0])
  })
  test("should add mutiple todos", async ({ page }) => {
    await addTodos(page)
    const todoText = page.locator(".todo-text")
    await expect(todoText).toHaveText(
      todos
    )
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

test.describe("check todo", () => {
  test("check one todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    const checkboxBtn = page.locator(".checkbox-container")
    await inputField.fill(todos[0])
    submitBtn.click()
    await checkboxBtn.click()
    const todoTextCompleted = page.locator(".todo-text.completed")
    const isTodoChecked = await todoTextCompleted.isVisible()
    expect(isTodoChecked).toBeTruthy()
  })
  test("check mutiple todos", async ({ page }) => {
    const checkboxBtn = page.locator(".checkbox-container")
    await addTodos(page)
    await toggleCheckTodos(checkboxBtn)
    const completedtodos = page.locator(".todo-text.completed")
    const completedTodosCount = await completedtodos.count()
    expect(completedTodosCount).toEqual(todos.length)
  })
  test("uncheck a todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    const checkboxBtn = page.locator(".checkbox-container")
    await inputField.fill(todos[0])
    submitBtn.click()
    // check the todo
    await checkboxBtn.click()
    const todoTextCompleted = page.locator(".todo-text.completed")
    const isTodoChecked = await todoTextCompleted.isVisible()
    expect(isTodoChecked).toBeTruthy()
    // uncheck the todo
    await checkboxBtn.click()
    const isTodoUnchecked = await todoTextCompleted.isHidden()
    expect(isTodoUnchecked).toBeTruthy()
  })
  test("uncheck mutiple todos", async ({ page }) => {
    const checkboxBtn = page.locator(".checkbox-container")
    await addTodos(page)
    // uncheck the todos
    await toggleCheckTodos(checkboxBtn)
    const completedtodos = page.locator(".todo-text.completed")
    const completedTodosCount = await completedtodos.count()
    expect(completedTodosCount).toEqual(todos.length)
    // check the todos
    await toggleCheckTodos(checkboxBtn)
    const unCompletedTodosCount = await completedtodos.count()
    expect(unCompletedTodosCount).toEqual(0)
  })
  test("clear one completed todo", async ({ page }) => {
    await addTodos(page)
    const checkboxBtn = page.locator(".checkbox-container")
    await checkboxBtn.nth(1).click()
    const todosCompleted = page.locator(".todo-text.completed")
    const todosCompletedCountBeforeClear = await todosCompleted.count()
    expect(todosCompletedCountBeforeClear).toEqual(1)
    const clearCompletedBtn = page.locator(".todo-footer .btn")
    await clearCompletedBtn.click()
    const todoTextCompletedCountAfterClear = await todosCompleted.count()
    expect(todoTextCompletedCountAfterClear).toEqual(0)
  })
  test("clear multiple completed todo", async ({ page }) => {
    await addTodos(page)
    const checkboxBtn = page.locator(".checkbox-container")
    await toggleCheckTodos(checkboxBtn)
    const todosCompleted = page.locator(".todo-text.completed")
    const completedCountBeforeClear = await todosCompleted.count()
    expect(completedCountBeforeClear).toEqual(3)
    const clearCompletedBtn = page.locator(".todo-footer .btn")
    await clearCompletedBtn.click()
    const completedCountAfterClear = await todosCompleted.count()
    expect(completedCountAfterClear).toEqual(0)
  })
})
test.describe("delete todo", () => {
  test("should delete one todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    const submitBtn = page.locator(".add-todo-btn")
    const todoText = page.locator(".todo-text")
    await inputField.fill(todos[0])
    await submitBtn.click()
    await expect(todoText).toHaveText(todos[0])
    const deleteBtn = page.locator(".delete-btn")
    await deleteBtn.click()
    expect(await todoText.count()).toEqual(0)
  })
  test("should delete mutiple todo", async ({ page }) => {
    await addTodos(page)
    const todoItems = page.locator(".todo-item")
    const todosCountBeforeDelete = await todoItems.count()
    expect(todosCountBeforeDelete).toEqual(todos.length)
    const deleteBtn = page.locator(".delete-btn")
    await deleteTodos(deleteBtn)
    const todosCountAfterDelete = await todoItems.count()
    expect(todosCountAfterDelete).toEqual(0)
  })
})
test.describe("counter", () => {
  test("should count the number of todo", async ({ page }) => {
    const inputField = page.locator(".add-todo-input")
    await inputField.fill(todos[0])
    await inputField.press("Enter")
    const todoText = page.locator(".todo-text")
    await expect(todoText).toHaveText(todos[0])
    const todoCount = page.locator(".todo-footer h6").first()
    await expect(todoCount).toHaveText(`1 Items`)
  })
  test("should count the number of todos", async ({ page }) => {
    await addTodos(page)
    const todoText = page.locator(".todo-text")
    await expect(todoText).toHaveText(todos)
    const todoCount = page.locator(".todo-footer h6").first()
    await expect(todoCount).toHaveText(`${todos.length} Items`)
  })
  test("should decrease the count after one todo deleted", async ({ page }) => {
    await addTodos(page)
    const todoText = page.locator(".todo-text")
    await expect(todoText).toHaveText(todos)
    const todoCount = page.locator(".todo-footer h6").first()
    await expect(todoCount).toHaveText(`${todos.length} Items`)
    const deleteBtn = page.locator(".delete-btn")
    await deleteBtn.nth(0).click()
    await expect(todoCount).toHaveText(`${todos.length - 1} Items`)
  })
  test("should decrease the count after delete completed todos", async ({ page }) => {
    await addTodos(page)
    const checkBoxLocator = page.locator(".checkbox-container")
    await toggleCheckTodos(checkBoxLocator)
    const todoCount = page.locator(".todo-footer h6").first()
    await expect(todoCount).toHaveText(`${todos.length} Items`)
    const clearCompletedBtn = page.locator(".todo-footer .btn")
    await clearCompletedBtn.click()
    await expect(todoCount).toHaveText(`0 Items`)
  })
})

// functions

async function addTodos(page: Page) {
  for (let index = 0; index < todos.length; index++) {
    const todo = todos[index];
    const inputField = page.locator(".add-todo-input")
    await inputField.fill(todo)
    await inputField.press("Enter")
  }
}
async function toggleCheckTodos(checkboxLocator: Locator) {
  const checkboxBtnCount = await checkboxLocator.count()
  for (let index = 0; index < checkboxBtnCount; index++) {
    const currentCheckboxBtn = checkboxLocator.nth(index);
    await currentCheckboxBtn.click()
  }
}
async function deleteTodos(deleteLocator: Locator) {
  const deleteBtnCount = await deleteLocator.count()
  for (let index = deleteBtnCount; index > 0; index--) {
    const currentdeleteBtn = deleteLocator.nth(0);
    await currentdeleteBtn.click()
  }
}