const longestTextFromArray = (arr) => arr.reduce(
    (prev, next) => (next.length > prev.length ? next : prev),
    '',
);

console.log(`longest word in array: ${longestTextFromArray(['text1', 'test22', 'test333'])}`)
