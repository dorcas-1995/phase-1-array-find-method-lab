// code your solution here
const superbowlWin = (record) => {
  for (let game of record) {
    if (game.result === 'W') {
      return game.year
    }
  }

}

// const superbowlWin = (record) => {
//   return record.year
// }

// let yearWon = record.find(superbowlWin)
// console.log(yearWon)
// record.result === 'W'