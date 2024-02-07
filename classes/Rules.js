const { table } = require('table')

class Rules {
    constructor(moves) {
        this.moves = moves
        this.table = this.getTable()
    }
    validateMoves(){
        const hasError = this.moves?.length < 3 || (this.moves?.length % 2) === 0
        if (hasError) {
            console.log('Incorrect moves!')
            console.log('Please enter validate moves: non-repeating strings, moves length > 3')
            console.log('Example: rock Spock paper lizard scissors')
            return process.exit(-1)
        }
    }
    validateUserInput(userInput) {
        if (userInput === '?') {
            return true
        }
        if (!isNaN(userInput) && userInput <= this.moves.length && userInput >= 0) {
            return true
        }
        return false
    }
    getTable() {
        const tableData = [['Moves combinations', ...this.moves]]
        for (let i = 0; i < this.moves.length; i++) {
            const tableRow = [this.moves[i]]
            for (let j = 0; j < this.moves.length; j++) {
                tableRow.push(this.getWinner(i, j))
            }
            tableData.push(tableRow)
        }
        return table(tableData)
    }
    getWinner(firstMoveIndex, secondMoveIndex) {
        const movesLength = this.moves.length
        const halfMovesLength = Math.floor(movesLength / 2)
        const resultMap = new Map([
            [1, 'Win'],
            [0, 'Draw'],
            [-1, 'Defeat']
        ])

        const result = Math.sign((firstMoveIndex - secondMoveIndex + halfMovesLength + movesLength) % movesLength - halfMovesLength)
        return resultMap.get(result)
    }
    printTable(){
        return console.log(this.table)
    }
}

module.exports = Rules