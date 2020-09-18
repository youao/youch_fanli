import data from './assets/data.json';
import { $ } from './utils/utils.js';

function listTpl(data) {
    let html = '';
    data.forEach(item => {
        let sell = item.sell ? `<span class="font-gray font-small">${item.sell}人付款</span>` : ``;
        let quan_val = item.quan_val > 0 ? `<span class="goods-quan font-theme font-small">${item.quan_val}元券</span>` : ``;
        html += `
            <a class="flex-wrap goods" href="${item.quan_url_short}">
                <div class="goods-img">
                    <img src="${item.img}" />
                </div>
                <div class="flex-con goods-info fmix-vertical-sb">
                    <p class="text-wrap line2"><i class="iconfont font-tmall" style="margin-right: 0.1em">&#xe799;</i>${item.title}</p>
                    <p>
                        <span class="font-theme"><span class="font-small">￥</span><span class="font-bigger">${item.price}</span></span>
                        ${sell}
                    </p>
                    <p>${quan_val}</p>
                    <p class="font-gray font-small">${item.shop_name}</p>
                </div>
            </a>
        `;
    });
    return html;
}

$('#list').innerHTML = listTpl(data);