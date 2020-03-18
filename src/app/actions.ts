const UPDATE_CELL_VALUE = 'UPDATE_CELL_VALUE'

interface UpdateCellAction {
  type: string,
  cellIndex: number,
  cellValue: number
}

function updateCellValue(cellIndex: number, cellValue: number) : UpdateCellAction {
  return {
    type: UPDATE_CELL_VALUE,
    cellIndex,
    cellValue
  }
}

export {
  UPDATE_CELL_VALUE,
  updateCellValue
}
