class TicTacToe {
    constructor() {
        this.steep = 0;
        this.currentPlayer = 'x';
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.playField[rowIndex][columnIndex]) {
            this.playField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
            this.steep++;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();

    }

    getWinner() {
        for (let i = 0; i < this.playField.length; i++) {
            let horSymbol = this.playField[i][0];
            if (this.playField[i].every(elem => elem === horSymbol)) return horSymbol;

            for (let j = 0; j < this.playField.length; j++) {
                let verSymbol = this.playField[0][j];
                if (this.playField[1][j] === verSymbol && this.playField[2][j] === verSymbol) {
                    return verSymbol;
                }
            }
        }
        let rightDiagSymbol = this.playField[0][0];
        if (this.playField[1][1] === rightDiagSymbol && this.playField[2][2] === rightDiagSymbol) {
            return rightDiagSymbol;
        }

        let leftDiagSymbol = this.playField[0][2];
        if (this.playField[1][1] === leftDiagSymbol && this.playField[2][0] === leftDiagSymbol) {
            return leftDiagSymbol;
        }
        return null;
    }


    noMoreTurns() {
        if (this.steep === 9) {
            return true;
        } else {
            return false;

        }
    }


    isDraw() {
        return !this.getWinner() && this.noMoreTurns() ? true : false;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
