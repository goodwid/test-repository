const fizz = ['fizz'], buzz = ['buzz'];
module.exports = function fizzbuzz(n){
    const series = [];
    for(var i = 1; i <= n; i++) {
        const word = (fizz[i % 3] || '') + (buzz[i % 5] || '');
        series.push(word||i);
    }
    return series; 
}