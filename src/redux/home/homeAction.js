import actionType from "./homeType"

export function increment() {
  return {
    type: actionType.PLUS,
  }
}

export function decrement() {
  return {
    type: actionType.MINUS,
  }
}
