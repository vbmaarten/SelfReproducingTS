const conway = [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
] .map((row, rowI, array) => row.map((cell, colI) => {
    const neighbours = array.filter((_, rowIndex) => Math.abs(rowI-rowIndex)<=1)
                            .map(nRow => nRow.filter((_, colIndex) => Math.abs(colI-colIndex)<=1))
                            .flat()
                            .reduce((p,a)=>p+a,0)-cell
    
    return cell === 1 ? ((neighbours === 2 || neighbours === 3) ? 1 : 0): (neighbours === 3 ? 1 : 0)
})); ((s, l) => console.log("const conway =", conway, s,l,"))("+String.fromCharCode(96)+s+String.fromCharCode(96)))(`.map((row, rowI, array) => row.map((cell, colI) => {
    const neighbours = array.filter((_, rowIndex) => Math.abs(rowI-rowIndex)<=1)
                            .map(nRow => nRow.filter((_, colIndex) => Math.abs(colI-colIndex)<=1))
                            .flat()
                            .reduce((p,a)=>p+a,0)-cell
    
    return cell === 1 ? ((neighbours === 2 || neighbours === 3) ? 1 : 0): (neighbours === 3 ? 1 : 0)
}));`, '((s, l) => console.log("const conway =", conway, s,l,"))"');