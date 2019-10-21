// 业务类js公共方法

// 身份证号码验证
const isCardNo = (card) => {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(card);
}

// 验证电话号码
let isTel = (tel) => {
    let mobile = /^1(2|3|4|5|6|7|8|9)\d{9}$/,
        phone = /^0\d{2,3}-?\d{7,8}$/;
    return mobile.test(tel) || phone.test(tel);
}

// 银行卡效验
const luhnCheck = num => {
    let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};

// 简单货币转化
let toCurrency = (n, curr = "JPY", LanguageFormat = undefined) => {
    let s = Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr
    }).format(n);
    return s.substring(s.indexOf('¥'))
}

export {
    isCardNo,
    isTel,
    luhnCheck,
    toCurrency
}