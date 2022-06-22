function isPalindrome(text) {
    const regExp = /[\W_]/g;

    const cleanedInput = text.toLowerCase().replace(regExp, '');
    const reversedText = cleanedInput.split('').reverse().join('');
    return reversedText === cleanedInput;
}
const text = 'Kamil Slimak';
const text2 = 'Labradorek nasłodszy piesek na świecie'

const arr = [text, text2]
arr.forEach(text => console.log(`Is "${text}" a palindrome? -> ${isPalindrome(text)}`))

