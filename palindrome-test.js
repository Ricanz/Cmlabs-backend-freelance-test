const express=require('express')
const router=express.Router()
function isPalindrome(str) {
    // delete space and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();
  
    // palindrome checking
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }

router.get("/",(req,res)=>{
    let singleWord = ['SAIPPUAKIVIKAUPPIAS', 'Aibohphobia', 'Anna', 'Civic', 'Riyanti'];
    let multipleWord = ['My gym', 'No lemon, no melon', 'Riyanti Maulya']

    let singleResult = []
    let multipleResult = []

    singleWord.forEach(word => {
        singleResult.push({
            word,
            isPalindrome: isPalindrome(word)
        })
    });

    multipleWord.forEach(word => {
        multipleResult.push({
            word,
            isPalindrome: isPalindrome(word)
        })
    });

    res.status(200).send({
        code: 200,
        status: true,
        singleResult,
        multipleResult
    })
})
module.exports= router, isPalindrome;