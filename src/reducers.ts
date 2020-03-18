import types from './types'

interface IdentityAction {
  type: typeof types.IDENTITY
}

export default function rootReducer(state = [], action: IdentityAction) {
  return state
}