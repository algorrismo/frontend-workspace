
let filtered = [24, 33, 16, 40] 
function canVote(age) {
    return age >= 18;
}

// filtered = filtered.filter(canVote);
console.log(filtered);
console.log(filtered.filter(canVote));