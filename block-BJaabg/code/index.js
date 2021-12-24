/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here
   
// ⛑ Answer of the above will `$334.76`.
 /*for(let i=1; i<= 1 ; i++){
    amount = bank_balance-PHONE_PRICE;
  //  amount1 = amount- (bank_balance-PHONE_PRICE);
    if(bank_balance > PHONE_PRICE){
       console.log(`you buy one phone and remaining balance is ${amount}`);
    }if(amount > PHONE_PRICE) {
        console.log(`you buy second phone and remaining balance is ${amount-PHONE_PRICE}`)   
    }if(amount-PHONE_PRICE > PHONE_PRICE){
        console.log(`you buy thired phone and remaining balance is ${amount- 2*PHONE_PRICE}`) 
    }if(amount- 2*PHONE_PRICE < PHONE_PRICE){
        console.log(`run out the balace`) 
    }
   

} */
 let mobile = PHONE_PRICE + TAX_RATE;
 let accessories = ACCESSORY_PRICE;
 let both = mobile + accessories;

for(let i =1; i<=5; i++){
    let quantity = i;
    if(bank_balance- quantity* mobile > 0){
        console.log(` Mobile-Quantity ${i} and Remaining balance$ ${bank_balance- quantity* mobile}`)
    }if(bank_balance- quantity* mobile < 0){
        console.log(`you run out of bank balance`);
    }
}
for(let i =1; i<=5; i++){
    let quantity = i;
    if(bank_balance- quantity* accessories > 0){
        console.log(` Accessories-Quantity ${i} and Remaining balance$ ${bank_balance- quantity* accessories}`)
    }if(bank_balance- quantity* accessories < 0){
        console.log(`you run out of bank balance`);
    }
}

for(let i =1; i<=5; i++){
    let quantity = i;
    if(bank_balance- quantity* both > 0){
        console.log(` Both ${i} and Remaining balance$ ${bank_balance- quantity* both}`)
    }if(bank_balance- quantity* both < 0){
        console.log(`you run out of bank balance`);
    }
}
