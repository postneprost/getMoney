function getMoney(sum, countMoney) {

    let money = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0
    }

    if (isBanknotesExist(countMoney, '5000')) {
        if (Math.floor(sum / 5000) <= countMoney[5000]) money[5000] = Math.floor(sum / 5000);
            else money[5000] = countMoney[5000];
    }

    if (isBanknotesExist(countMoney, '1000')) {
        if (Math.floor((sum % 5000) / 1000) <= countMoney[1000]) money[1000] = Math.floor((sum % 5000) / 1000);
            else money[1000] = countMoney[1000];
    }

    if (isBanknotesExist(countMoney, '500')) {
        if (Math.floor(((sum % 5000) % 1000) / 500) <= countMoney[500]) money[500] = Math.floor(((sum % 5000) % 1000) / 500);
            else money[500] = countMoney[500];
    }

    if (isBanknotesExist(countMoney, '100')) {
        if (Math.floor((((sum % 5000) % 1000) % 500) / 100) <= countMoney[100]) money[100] = Math.floor((((sum % 5000) % 1000) % 500) / 100);
            else money[100] = countMoney[100];
    }

    if (isBanknotesExist(countMoney, '50')) {
        if (Math.floor(((((sum % 5000) % 1000) % 500) % 100) /50) <= countMoney[500]) money[50] = Math.floor(((((sum % 5000) % 1000) % 500) % 100) /50);
            else money[50] = countMoney[50];
    }

    return money;
}

function isBanknotesExist(countMoney, banknote) {
    return ((banknote in countMoney) && (countMoney[banknote] != 0));
}

let countBanknotes = {
    5000: 1,
    1000: 9,
    500: 9,
    100: 9,
    50: 9
}


console.log(getMoney(18999, countBanknotes));
