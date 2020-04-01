const SUBMIT_SUDOKU = 'SUBMIT_SUDOKU'

interface SubmitSudokuAction {
  type: string
}

function submitSudoku(): SubmitSudokuAction {
  return {
    type: SUBMIT_SUDOKU
  }
}

export {
  SUBMIT_SUDOKU,
  submitSudoku
}
