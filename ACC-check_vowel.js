function checkVowel (ch){
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

    if(ch >= 'A' && ch <= 'Z'){
        if(vowels.includes(ch)){
            console.log("Capital Vowel")
        }
        else{
            console.log("Capital Consonant")
        }

    }
    else if (ch >= 'a' && ch <= 'z'){
        if(vowels.includes(ch)){
            console.log("Small Vowel")
        }
        else{
            console.log("Small Consonant")
        }

    }
    else{
        console.log("Invalid input")
    }
}

checkVowel('e');
checkVowel('E');
checkVowel('b');
checkVowel('B');