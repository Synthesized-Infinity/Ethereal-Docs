Prism.languages.etrl = Prism.languages.extend('clike', {
    keyword: /\b(?:if|else|include|set|anew|fun|return|typeof|loop|break|continue)\b/,
    operator: /\+|-|\*|\/|%|=|!|<|>|&|\||\^|~|\?|:|;/,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    string: {
        pattern: /(["])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    }
})

module.exports = Prism.languages.etrl