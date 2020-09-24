export function $(selector, isAll) {
    let d = document;
    if (['html', 'root'].indexOf(selector) > -1) return d.documentElement;
    else if ('body' == selector) return d.body;
    else if ('head' == selector) return d.head;
    return isAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}

export function toFixed(num, len) {
    let pow = Math.pow(10, len || 2);
    return Math.floor(num * pow) / pow;
}

// 继承合并
export function extend(to, from, isDeep) {
    for (let i in from) {
        if (from.hasOwnProperty(i)) {
            if (isDeep && typeof from[i] == 'object') {
                to[i] = fnExtend(from[i], to[i] || {}, isDeep);
            } else {
                to[i] = from[i] ? from[i] : (to[i] ? to[i] : '');
            }
        }
    }
    return to;
}

/**
 * @hyphen 键值连字符
 * @hyphenRow 数据连字符
 */
export function json2Str(obj, hyphen, hyphenRow) {
    hyphen = hyphen || '=';
    hyphenRow = hyphenRow || ',';
    let str = '';
    for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
            str += k + hyphen + obj[k] + hyphenRow;
        }
    }
    return str.substr(0, str.length - hyphenRow.length);
}

export function json2CssCode(selector, obj) {   
    return selector + ' {' + json2Str(obj, ':', '; ') + '}';
}

export function json2CssCodes() {
    if (arguments.length == 2 && typeof arguments[0] == 'string' && typeof arguments[1] == 'object') return json2CssCode(arguments[0], arguments[1]); 
    else if (arguments.length == 1 && typeof arguments[0] == 'object') {
        let str = '';
        for (const k in arguments[0]) {
            if (arguments[0].hasOwnProperty(k)) {
                str += json2CssCode(k, arguments[0][k]);
            }
        }
        return str;
    }
}

export function isWeixin() {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger";
}


export function time() {
    return new Date().getTime();
}