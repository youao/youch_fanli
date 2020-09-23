import data from './assets/data.json';
import { $, isWeixin } from './utils/utils.js';

const total = data.length;
const limit = 10;
let page = 1;
let loading = !1;
let loaded = !1;

getList();

function findParentNodeByClass(el, class_name) {
    const findNode = (el, class_name) => {
        return 'classList' in el && Array.from(el.classList).indexOf(class_name) > -1;
    }
    if (findNode(el, class_name)) return el;
    const traversal = (el, class_name) => {
        let is_find = findNode(el.parentNode, class_name);
        let dom = is_find ? el.parentNode : false;
        while (!dom) {
            el = el.parentNode;
            if (el != null && el.nodeType == el.DOCUMENT_NODE) {
                return false;
            }
            traversal(el, class_name);
        }
        return dom;
    }
    return traversal(el, class_name);
}

$('.loadmore').onclick = function() {
    getList();
};

function getList() {
    if (loading || loaded) return;
    loading = !0;
    loadStatus('loading');
    getData();
}

function getData() {
    let d = data.slice(page*limit-limit, page*limit);
    setTimeout(()=>{
        loading = !1;
        if (d.length == 0) {
            loaded = !0;
            loadStatus('loaded');
            return;
        }
        $('#list').insertAdjacentHTML('beforeend', listTpl(d));
        page++;
        loadStatus();

        let el = $('.goods', 1);
        el.forEach(item => {
            item.onclick = function() {
                const datas = this.dataset;
                if (!isWeixin()) {
                    window.location.href = datas.quanUrl;
                    return;
                }
                let msg = '由于微信平台规则，不支持跳转淘系链接。点击确认，帮帮您复制淘口令，打开淘宝领券购买。';
                let isok = confirm(msg);
                if (isok) {
                    console.log(datas.kouling);
                }
            }
        });
    }, 300);
}

function listTpl(data) {
    let html = '';
    data.forEach(item => {
        let sell = item.sell ? `<span class="font-gray font-small">${item.sell}人付款</span>` : ``;
        let quan_val = item.quan_val > 0 ? `<span class="goods-quan font-theme font-small">${item.quan_val}元券</span>` : ``;
        html += `
            <div class="flex-wrap goods" data-quan-url="${item.quan_url_short}" data-kouling="${item.kouling}">
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
            </div>
        `;
    });
    return html;
}

function loadStatus(status) {
    switch (status) {
        case 'loading':
            $('.loadmore').style.display = 'none';
            $('.loading').style.display = 'block';
            $('.nomore').style.display = 'none';
            break;
        case 'loaded':
            $('.loadmore').style.display = 'none';
            $('.loading').style.display = 'none';
            $('.nomore').style.display = 'block';
            break;
        default:
            $('.loadmore').style.display = 'block';
            $('.loading').style.display = 'none';
            $('.nomore').style.display = 'none'; 
            break;          
    }
}
