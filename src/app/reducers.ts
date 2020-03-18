import { UPDATE_CELL_VALUE } from './actions'
import { SudokuState } from './storeTypes'

const initialState: SudokuState = {
  past: [[]],
  current: new Array(81).fill(null),
  future: [[]]
}

export default function updateCellValue(state = initialState, action: any) {
  switch(action.type) {
    case UPDATE_CELL_VALUE:
      let current = state.current.slice()
      let stateCopy = Object.assign({}, state)
      current[action.cellIndex] = action.cellValue
      stateCopy.current = current
      return stateCopy
    default:
      return state
  }
}
