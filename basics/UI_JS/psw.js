// 2️⃣ Password Strength Checker
// Problem Statement:
// •	Ask the user to enter a password using prompt().
// •	Validate the password based on:
// o	Minimum 8 characters
// o	At least one number
// o	At least one uppercase letter
// •	Show password strength: Weak / Medium / Strong.
// Focus: string methods, conditions


function checkStrength(psw)
{
    // while(false)
        let hasNum=false;
        let hasChar=false;

        if(psw.length< 8) 
        {
            return "Password too short ☹️";
        }

        for(char of psw)
        {
            if(char >= 'A' && char <='Z' || char >= 'a' && char <='z'){
                hasChar=true;
            }
            else{
                
            }

            if(char >= '0' && char <='9'){
                hasNum=true;
            }
        }

        if(!hasNum)
        {
            return ("Password should contain at least 1 number! 🔢");
        }
        if(!hasChar)
        {
            return ("Password should contain at least 1 letter! 🔠🔡");
        }
        
        return "Strong💪";
}
let result;
do{
    let psw=prompt("Enter password 🔑::");
    result=checkStrength(psw);
    alert(result);

}while(result!=="Strong💪");

