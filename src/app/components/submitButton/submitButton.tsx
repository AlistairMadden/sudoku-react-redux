import React from 'react'
import { connect } from 'react-redux'

import { submitSudoku } from './actions'

interface ButtonProps {
  submitSudoku: () => void
}

class SudokuButton extends React.Component<ButtonProps> {
  render() {
    return(
      <button onClick={this.props.submitSudoku}>Submit</button>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitSudoku: () => {
      dispatch(submitSudoku())
    }
  }
}

export default connect(null, mapDispatchToProps)(SudokuButton)
