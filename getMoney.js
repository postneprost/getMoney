function getMoney(sum, countMoney) {

    if (sum == 0) return 'Введите необходимую сумму';

    if (sum % 50 != 0) return 'Введите сумму кратную 50';

    let allMoney = 0;
    for (key in countMoney) {
        allMoney += key * countMoney[key];
    }
    if (allMoney < sum) return 'Недостаточно средств в банкомате';

    let restMoney = sum;

    let money = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0
    }

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
        return (countMoney[banknote]);
    }

    return money;
}

let testMoney = {
    5000: 10,
    1000: 10,
    500: 10,
    100: 10,
    50: 10,
}

console.log(getMoney(64250, testMoney));
