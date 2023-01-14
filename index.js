const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},];


function superbowlWin(record) {
    const winningRecord = record.find(champs => champs.result === "W");
    //return winningRecord.year}
    if (winningRecord) {
        return winningRecord.year} else {
        return undefined}
}