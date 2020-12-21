const checkForSpam = function(message) {
    let strForCheck = message.toLowerCase(); 
    
    if (strForCheck.includes(`spam`) || strForCheck.includes(`sale`)) {
        return true;
    } else {
        return false;
    }
};
console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?')); 