let balance = 1000;
let withdrawAmount = 0;
let depositAmount = 0;
let flag = true;

function bankingPrompt() {

    while (flag == true) {
        let intro = prompt("How would you like to proceed: \n Q: quit the application \n W: withdraw from your account \n D: make a deposit \n B: view your account balance");  
      
        switch (intro) {
        case 'q':
        case 'Q':
            alert("You are quiting the application");
            flag = false;
            break;
        case 'w':  
        case 'W':
            alert("You are making a withdraw from your account");
            withdrawAmount = prompt("Please enter an amount to withdraw");
    
            if ((balance - Number(withdrawAmount)) < 0) {
                alert("You are trying to take more money than your balance allows");
                console.log(balance);
            } else {
                if ((balance - Number(withdrawAmount)) < 300) {
                    let answer = prompt("You will have a balance of less than $300, do you want to continue? \n Yes or No?")
                    switch (answer) {
                        case 'Yes':
                        case 'yes':
                        case 'y':
                        case 'Y':
                            balance = balance - Number(withdrawAmount);
                            console.log(balance);
                            break;
                        case 'No':
                        case 'no':
                        case 'n':
                        case 'Y':
                            alert("No withdraw has been made");
                            console.log(balance);
                            break;
                    }
                }
            }
            flag = true;
            break;
        case 'd':
        case 'D':
            console.log("You are making a deptosit to your account");
            depositAmount = prompt("Please enter amount you would like to deposit?");
            if (depositAmount <= 50000) {
                balance = balance + Number(depositAmount);
                console.log(balance);
              } else {
                alert("Cannot deposit more than $50,000.00 \n Please start over.");
                depositAmount = 0;
              }
            flag = true;
            break;
        case 'b':
        case 'B':
            alert("Your current blance is: \n $" + balance);
            flag = true;
            break;
        default:
            alert("You have entered an invalid option");
            flag = true;
            break;
        }
    }
}