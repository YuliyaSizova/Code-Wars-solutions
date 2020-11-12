const s = "The greatest victory is that which requires no battle"

const reverseWords = (sentence) => {
    let sp = sentence.length
    let i = sentence.length
    let result = ''
    while (i >= 0) {
        if (sentence[i] === ' ') {
            result = result.concat(sentence.slice(i + 1, sp)).concat(' ')
            sp = i
        }
        i--
    }
    return result.concat(sentence.slice(i + 1, sp))
}
console.log(reverseWords(s))
