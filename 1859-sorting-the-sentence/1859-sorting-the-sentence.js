/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return  s.split(" ").sort((n,t)=> n[n.length-1] - t[t.length-1]).map((n)=>n.slice(0,n.length-1)).join(' ')
    
    };