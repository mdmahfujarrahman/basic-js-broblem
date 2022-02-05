// problem 1
function anaToVori(ana){
    if(typeof ana !== 'number'){
        return 'Invalid Input! Please Enter an Number Only.'; 
    }
    else
    return vori = (ana * 0.0625);
}

let ana = 5;
const voriCalculator = anaToVori(ana);

// problem 2

function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity){
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    if((singaraQuantity < 0) || (samuchaQuantity < 0) || (jilapiQuantity < 0)){
        return 'Invalid Input! Please Enter only positive quantity.';
    }
    else if((typeof singaraQuantity !== 'number') || (typeof samuchaQuantity !== 'number') || (typeof jilapiQuantity !== 'number')){
            return 'Invalid Input! Please Enter an Number Only.'; 
        }
    else 
        return totalCost = (singaraPrice * singaraQuantity ) + (samuchaPrice * samuchaQuantity) + (jilapiPrice * jilapiQuantity);

}

let singaraQuantity= 5;
let samuchaQuantity = 15;
let jilapiQuantity = 5;
const totalOrderOnPanda = pandaCost( singaraQuantity, samuchaQuantity, jilapiQuantity);


// problem 3

function picnicBudget(numberOfPerson){
    // cffoh = costForFirstOneHundred
    // cfsh = costForSecondHundred
    // cfrh  = costForRemaingingHundred
    const cffoh = 5000;
    const cfsh = 4000;
    const cfrh = 3000;
    // string error handle
    if(typeof numberOfPerson !== 'number'){
        return 'Invalid Input! Please Enter an only number'; 
    } 
    // postive error handle 
    else if(numberOfPerson < 0){
        return 'Invalid Input! Please Enter an only postive number';
    } 
    //first one hundred people cost
    else if (numberOfPerson <= 100){
        const firstOneHundredCost = numberOfPerson * cffoh;
        return firstOneHundredCost;
    }
    //second hurndred(101 -200) people cost
    else if (numberOfPerson <= 200){
        const firstOneHundred = 100 * cffoh;
        const restHundred = numberOfPerson - 100;
        const secondHundred = restHundred * cfsh;
        const secondHundredCost = secondHundred * firstOneHundred;
        return secondHundredCost;
    }
    // rest of people(201-) cost
    else{
        const firstOneHundred = 100 * cffoh;
        const secondHundred = 100 * cfsh;
        const restHundred = numberOfPerson - 200;
        const restOfHundred = restHundred * cfrh;
        const totalRestHundredCost = firstOneHundred + secondHundred + restOfHundred;
        return totalRestHundredCost;
    }

}

let numberOfPerson = 300;
const totalPicnicCost = picnicBudget(numberOfPerson);


// problem 4
function oddFriend(friendNames){
    for (let friendName of friendNames){
        if((typeof friendName) === 'number'){
            return 'Invalid Input! Please Enter an String Data Only.'; 
        } 
        else if(friendName.length % 2 == 1){
            return friendName;
        }
    }
}   

let names = [8, 'rashed','mamun','motin','mosiur','sohanur','moniruzzaman'];
const findOddFriendName= oddFriend(names);
