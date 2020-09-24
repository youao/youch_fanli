import { json2Str, time } from './utils.js';

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
		'z-index': 100
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
		'top': '50%',
		'left': '50%',
		'background': '#fff',
		'z-index': 2,
		'transform': 'translate(-50%,-50%)'
	};

	var id = `dialog_${time()}`;

	return {
		id: id,
		tpl: `<div id="${id}" style="${getCssCode(sty_dialogbox)}">
			<div style="${getCssCode(sty_mask)}"></div>
			<div style="${getCssCode(sty_content)}">${ops.content}</div>
		</div>`;
	};

}

export function alert() {
	var obj = dialogModule({
		content: 'adadsadasd'
	});
	document.body.insertAdjacentHTML('beforeend', obj.tpl);
}