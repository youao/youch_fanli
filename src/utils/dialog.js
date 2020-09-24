import { $, json2Str, time, extend } from './utils.js';
import anime from '../assets/js/anime.min.js';

function getCssCode(obj) {
	return json2Str(obj, ':', '; ');
}

function dialogModule(ops) {
	var sty_dialogbox = {
		'width': '100%',
		'height': '100%',
		'position': 'fixed',
		'top': 0,
		'left': 0,
		'z-index': 100,
		'opacity': 0
	};

	var sty_mask = {
		'width': '100%',
		'height': '100%',
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'background': 'rgba(0,0,0,0.5)',
		'z-index': 1
	};

	var sty_content = {
		'width': '80%',
		'height': 'auto',
		'position': 'absolute',
		'top': '100%',
		'left': '50%',
		'background': '#fff',
		'z-index': 2,
		'transform': 'translate(-50%,-50%)'
	};

	ops.styles = ops.styles || {};
	sty_dialogbox = extend(sty_dialogbox, ops.styles.view);
	sty_mask = extend(sty_mask, ops.styles.mask);
	sty_content = extend(sty_content, ops.styles.content);

	var id = `dialog_${time()}`;

	return {
		id: id,
		tpl: `<div id="${id}" style="${getCssCode(sty_dialogbox)}">
			<div class="mask" style="${getCssCode(sty_mask)}"></div>
			<div class="content" style="${getCssCode(sty_content)}">${ops.content}</div>
		</div>`
	};

}

export function close(id) {
	const dialogClose = anime({
		targets: '#' + id,
		opacity: 0,
		duration: 300
	});
	dialogClose.play();
	setTimeout(() => {
		$('#' + id).remove();
	}, 300);
}


export function alert(ops, callback) {
	ops = ops || {};
	var sty_title = {
		'font-size': '1rem',
		'font-weight': 'bold',
		'letter-spacing': '0.1rem',
		'color': '#511D00',
		'line-height': '1.4',
		'text-align': 'center',
		'margin-bottom': '1rem',
	};

	var sty_subtitle = {
		'font-size': '0.8rem',
		'color': '#9a9a9a',
		'line-height': '1.4',
		'text-align': 'center',
	};

	var sty_btn = {
		'font-size': '1.2rem',
		'color': '#fff',
		'line-height': '1.6',
		'text-align': 'center',
		'margin-top': '2rem',
		'padding': '0.4rem',
		'background': '-webkit-linear-gradient(top, #F6A248, #FF7646, #FF5249)',
		'border': '1px solid #C94436',
		'border-radius': '3rem'
	};

	ops.btn = ops.btn || '确认';

	var subtitle = ops.subtitle ? `<div style="${getCssCode(sty_subtitle)}">${ops.subtitle}</div>` : '';
	let content = `<div style="${getCssCode(sty_title)}">${ops.title}</div>${subtitle}
	<div class="alert-btn" style="${getCssCode(sty_btn)}">${ops.btn}</div>`;

	const obj = dialogModule({
		content: content,
		styles: {
			content: {
				'border-radius': '1rem',
				'box-sizing': 'border-box',
				'padding': '1.5rem',
				'overflow': 'hidden'
			}
		}
	});
	document.body.insertAdjacentHTML('beforeend', obj.tpl);

	const alertViewShow = anime({
		targets: '#' + obj.id,
		opacity: 1,
		duration: 500
	});
	alertViewShow.play();
	const alertContentShow = anime({
		targets: '#' + obj.id+' .content',
		top: '50%',
		duration: 500
	});
	alertContentShow.play();

	typeof callback == 'function' && callback({
		event: 'show'
	});

	$('#' + obj.id + ' .mask').onclick = function() {
		close(obj.id);
	};
	$('#' + obj.id + ' .alert-btn').onclick = function() {
		typeof callback == 'function' && callback({
			event: 'btnClick'
		});
		close(obj.id);
	};

}