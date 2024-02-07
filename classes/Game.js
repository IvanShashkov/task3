const Rules = require('./Rules')
const GenerateHMACKey  = require('./GenerateHMACKey')
const readline = require("readline-sync");
class Game {
    constructor(moves, randomCryptoKey) {
        this.moves = moves
        this.randomCryptoKey = randomCryptoKey
        this.computerMoveIndex = this.getComputerMoveIndex()
        this.userMove = null
    }
    getComputerMoveIndex(){
        return Math.floor(Math.random() * this.moves.length)
    }
    getUserInput() {
        const rules = new Rules(this.moves)
        const userInput = readline.prompt()

        if (!rules.validateUserInput(userInput)) {
            console.log('Its not available move - please try again')
            return this.getUserInput()
        }
        return this.userMove = userInput
    }
    getResult(userMoveIndex){
        const rules = new Rules(this.moves)
        console.log(`Your move: ${this.moves[userMoveIndex]}`)
        console.log(`Computer move: ${this.moves[this.computerMoveIndex]}`)
        console.log(`Result: ${rules.getWinner(userMoveIndex, this.computerMoveIndex)}`)
        console.log(`HMAC key: ${this.randomCryptoKey}`)
    }
    setUserMove() {
        const rules = new Rules(this.moves)
        if (this.userMove === '?') {
            return rules.printTable()
        }
        if (this.userMove === '0') {
            return this.gameExit()
        }
        this.getResult(this.userMove - 1)
    }
    play() {
        const hmac = new GenerateHMACKey(this.randomCryptoKey, this.computerMoveIndex)

        console.log(`HMAC: ${hmac.generateHMAC()}`)
        console.log('Available moves:')
        for (let i = 0; i < this.moves.length; i++) {
            console.log(`${i + 1} - ${this.moves[i]}`)
        }
        console.log('? - help')
        console.log('0 - exit')

        this.getUserInput()
        this.setUserMove()
    }
    gameExit() {
        console.log('Thanks for playing. Good luck!')
    }
}

module.exports = Game