// code your solution here

function superbowlWin(record) {
    let winYear = record.find((record) => record.result === "W")
    // if (winYear) {
    //     return winYear.year
    // }
    // else {
    //     return undefined;
    // }

    return  winYear ? winYear.year : undefined
}




// function superbowlWin(element, index, array) {
//     return Object.keys(record).find(key => record[key] === value);
// }

// console.log(superbowlWin())





