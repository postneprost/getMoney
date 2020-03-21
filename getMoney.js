<<<<<<< Updated upstream
function getMoney(sum) {
=======
function getMoney(sum, countMoney) {

    if (sum == 0) return 'Введите необходимую сумму';

    if (sum % 50 != 0) return 'Введите сумму кратную 50';

    for (key in countMoney) {
        allMoney += key * countMoney[key];
    }
    if (allMoney < sum) return 'Недостаточно средств в банкомате';

    let restMoney = sum;

>>>>>>> Stashed changes
    let money = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0
    }

<<<<<<< Updated upstream
    money[5000] = Math.floor(sum / 5000);
    money[1000] = Math.floor((sum % 5000) / 1000);
    money[500] = Math.floor(((sum % 5000) % 1000) / 500);
    money[100] = Math.floor((((sum % 5000) % 1000) % 500) / 100);
    money[50] = Math.floor(((((sum % 5000) % 1000) % 500) % 100) /50);

    return money;
}


console.log(getMoney(99999));
=======
    getCountBanknotes(5000);
    getCountBanknotes(1000);
    getCountBanknotes(500);
    getCountBanknotes(100);
    getCountBanknotes(50);

    if (restMoney != 0) return 'Недостаточно средств в банкомате';
    function getCountBanknotes(banknote) {
        if (isBanknotesExist(countMoney, `${banknote}`)) {
            if (Math.floor(restMoney / banknote) <= countMoney[banknote]) {
                money[banknote] = Math.floor(restMoney / banknote);
                restMoney = restMoney - money[banknote] * banknote;
            } else
            {
                money[banknote] = countMoney[banknote];
                restMoney = restMoney - countMoney[banknote] * banknote;
            }
        } else {
            restMoney = restMoney;
        }
    }

    function isBanknotesExist(countMoney, banknote) {
        return ((banknote in countMoney) && (countMoney[banknote] != 0));
    }

    return money;
}
>>>>>>> Stashed changes
