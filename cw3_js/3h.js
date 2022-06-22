function getSecondLowestAndHighestNum(array) {
    const distinctNumbers = new Set(array)
    if (distinctNumbers.length < 3) {
        return null
    }
    const sortedNumbers = Array.from(distinctNumbers).sort(function(a, b){return a-b})
    return {secondLowest: sortedNumbers[1], secondHighest: sortedNumbers[sortedNumbers.length-2]}
}

const arr = [1,2,3,4,99,5,6,7,88,0,0]
const result = getSecondLowestAndHighestNum(arr);
getSecondLowestAndHighestNum(arr) === null
    ? console.log('Insufficient number of arguments... you need at least 3 different args')
    : console.log(`second lowest: ${result['secondLowest']}\nsecond highest: ${result['secondHighest']}`)
