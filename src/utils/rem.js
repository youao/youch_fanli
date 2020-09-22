import { $, toFixed, json2Str } from './utils';

(function (designW, baseFontSize) {
    let wdpr = window.devicePixelRatio,
        dpr = wdpr ? toFixed(1 / wdpr) : 1,
        content = json2Str({
            'maximum-scale': dpr,
            'minimum-scale': dpr,
            'initial-scale': dpr,
            'user-scalable': 0,
            'width': 'device-width'
        }),
        ww = (window.screen.width || designW) * wdpr,
        fz = Math.ceil(ww * baseFontSize / designW);
    $('meta[name=viewport]').setAttribute('content', content);
    $('html').style.fontSize = fz + 'px';
})(375, 14);