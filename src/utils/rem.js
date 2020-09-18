import { $, toFixed, json2Str, json2CssCode } from './utils';

(function (designW, baseFontSize) {
    let w = window,
        d = document,
        wdpr = w.devicePixelRatio,
        dpr = wdpr ? toFixed(1 / wdpr) : 1,
        content = json2Str({
            'maximum-scale': dpr,
            'minimum-scale': dpr,
            'initial-scale': dpr,
            'user-scalable': 0,
            'width': 'device-width'
        }),
        ww = d.documentElement.clientWidth || (w.screen.width || designW) * dpr,
        fz = Math.ceil(ww * 10 / designW),
        sty = '<style>' + json2CssCode('body', { 'font-size': baseFontSize / 10 + 'rem' }) + '</style>';
    $('meta[name=viewport]').setAttribute('content', content);
    $('html').style.fontSize = fz + 'px';
    $('head').insertAdjacentHTML('beforeend', sty);
})(375, 14);