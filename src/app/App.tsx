import React from 'react'
import partial from 'lodash/partial'
import { connect } from 'react-redux'

import './App.css'
import { updateCellValue } from './actions'
import * as storeTypes from './storeTypes'
import SubmitButton from './components/submitButton/submitButton'

interface SudokuProps {
  current: Array<number>,
  onCellInputChange: (arg0: number, arg1:number) => void
}

interface SudokuState {}

// Presentational - just receives sudoku data in array from
class Sudoku extends React.Component<SudokuProps, SudokuState> {

  renderCell = (cellValue: number, cellIndex: number) => {
    const onCellInputChange = partial(this.props.onCellInputChange, cellIndex)

    return (
      <Cell value={cellValue} onCellInputChange={onCellInputChange} key={`cell-${cellIndex}`} />
    )
  }

  renderCells(startIndex: number, endIndex: number) {
    return this.props.current.slice(startIndex, endIndex).map((value, index) => this.renderCell(value, startIndex + index))
  }

  renderRow(rowIndex: number) {
    let startIndex = rowIndex*9
    let endIndex = rowIndex*9 + 9

    return (
      <div className="row" id={`row-${rowIndex}`} key={`row-${rowIndex}`}>
        {this.renderCells(startIndex, endIndex)}
      </div>
    )
  }

  render() {
    return (
      <div className="sudoku">
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
        {this.renderRow(5)}
        {this.renderRow(6)}
        {this.renderRow(7)}
        {this.renderRow(8)}
      </div>
    )
  }
}

const mapStateToProps = (state: storeTypes.SudokuState) => {
  return {
    current: state.current
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCellInputChange: (cellIndex: number, cellValue: number): void => {
      dispatch(updateCellValue(cellIndex, cellValue))
    }
  }
}

const VisibleSudoku = connect(mapStateToProps, mapDispatchToProps)(Sudoku)


interface CellProps {
  value: number
  onCellInputChange: Function
}

class Cell extends React.Component<CellProps> {

  onCellInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let valueString = event.target.value.replace(/[^1-9]/, '')
    let value: number | null = parseInt(valueString)
    if (isNaN(value)) {
      value = null
    }
    this.props.onCellInputChange(value)
  }

  transformCellValue(value: number): string {
    let transformedValue = ''
    if (value !== null) {
      transformedValue = value.toString()
    }
    return transformedValue
  }

  render(): JSX.Element {
    return (
      <input type="text" className="cell" value={this.transformCellValue(this.props.value)} onChange={this.onCellInputChange} pattern="[1-9]" maxLength={1}></input>
    )
  }
}

function App() {
  return (
    <div className="app">
      <div className="sudoku-container">
        <VisibleSudoku />
      </div>
      <div className="submit-button-container">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
