// 基础类js 公共方法  


// 计算根字体
const fontSize = () => {
    var doc = document;
    var docEl = doc.documentElement;
    var clientWidth = docEl.clientWidth || doc.body.clientWidth;
    if (!clientWidth) return;
    var app = document.getElementById("app");
    if (clientWidth / 3.75 > 200) {
        docEl.style.fontSize = "200px";
        app.style.width = "3.75rem";
        app.style.margin = "auto";
    } else {
        docEl.style.fontSize = clientWidth / 3.75 + "px";
    }
    return clientWidth / 3.75;
}

// 检查值是否为特定类型。
const is = (type, val) => ![undefined, null].includes(val) && val.constructor === type;


// 判断操作系统
const os = () => {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        // isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet, //平板
        isPhone: isPhone, // 苹果系统
        isAndroid: isAndroid, // 安卓系统
        isPc: isPc // window系统
    };
}
//返回当前的滚动位置    
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 平滑回到顶部位置
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

// 平滑回到指定位置
const smoothScroll = (element) => {
    element && document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}

export {
    os,
    fontSize,
    getScrollPosition,
    scrollToTop,
    smoothScroll,
    is,
}