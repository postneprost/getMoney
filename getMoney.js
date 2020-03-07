function getMoney(sum) {
    let money = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0
    }

    money[5000] = Math.floor(sum / 5000);
    money[1000] = Math.floor((sum % 5000) / 1000);
    money[500] = Math.floor(((sum % 5000) % 1000) / 500);
    money[100] = Math.floor((((sum % 5000) % 1000) % 500) / 100);
    money[50] = Math.floor(((((sum % 5000) % 1000) % 500) % 100) /50);

    return money;
}


console.log(getMoney(99999));
