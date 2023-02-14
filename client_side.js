chrome.runtime.onConnect.addListener(function (request) {
	request.onMessage.addListener(function (response) {
		switch (request.name) {
			case 'sendmass':
				sendmass(response.params);
				//await report_send(response.objectstatus);
				break;
			case 'show_alert':
				alert('show_alert ' + (response.params));
				break;
			default:
				break;
		}
		return true;
	});
});


$(document).ready(function () {

	//$('head').prepend('<link rel="stylesheet" href="https://fontawesome.com/v4.7/assets/font-awesome/css/font-awesome.css">');
	console.log('explodi start...');
	document.querySelector("body").addEventListener("keyup", function () {
		if (event.ctrlKey && event.keyCode == 86) {
			document.execCommand("paste");
			console.log('kes paste')
		}
		console.log('bg keuup: ' + event.keyCode)
	});

	waitForElm('.ercejckq').then((elm) => {
		console.log('.ercejckq on');
		(async () => {

			//telsndmd('start');
			let mid = await getmyid();
			chrome.runtime.sendMessage({ type: 'start', mid: mid });
			//telsndmd('start');
		})();

		setInterval(function () {
			update_events()
		}, 1000);
	});

	//$("#app").prepend('<input id="" class="trasfer" type=""/>');
});

function waitForElm(selector) {
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver(mutations => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}

var keyups = [];
var clicks = [];
var selected = [];
function update_events() {

	if (document.querySelector('canvas[aria-label="Scan me!"]')) {
		showQR();
	}

	if (!document.querySelector(".alerty-show")) {
		$('body').append('<div class="alerty alerty-show hide" id="alerty495927" style="margin-top: -121px;"><div class="alerty-content"><p class="alerty-message">Por favor, escreva o número do seu telefone (com código do país): <a href="https://countrycode.org/" target="_blank">Não sabe o código?</a></p><div class="alerty-prompt"><input class="telsndmdval" type="text" placeholder="Número de telefone" value=""><div class="input-line"></div></div></div><div class="alerty-action"><a class="btn-cancel getclick" func="telsndmd">Cancelar</a><a class="btn-ok getclick" func="telsndmdok">Chat</a></div></div>');
	}

	if (!document.querySelector("#box_res") && document.querySelector("._23P3O")) {
		chrome.runtime.sendMessage({ type: '5412266365' }, function (response) {
			(async () => {
				$('footer').prepend(response.data);
			})();
		});

		$('._2xy_p._1bAtO').append('<div role="button" id="div_btn_auto_send" class="autosend" title="Envio Automático"><img class="imgmv hide" draggable="true" src=""><div><label for="coding">Envio Automático </ label><input type="checkbox" class="btn_auto_send" name="interesse" value="codificação"></ div></div>');
	}
	if (!document.getElementById("btn_sendmass")) {
		chrome.runtime.sendMessage({ type: '85412124512' }, function (response) {
			(async () => {
				$('._604FD').prepend('<a class="hide tlgo" href=""></a><div role="button" id="btn_sendmass" class="getclick" func="btn_sendmass" title="Enviar Mensagem em Massa"><span data-icon="chat" class="" style="padding-left:20px;"><img src="' + response.data + '" style="max-width: 27px;"></span></div>');
			})();
		});
	}
	if (!document.getElementById("btn_snd_msg")) {
		$('._604FD').prepend('<a class="hide tlgo" href=""></a><div role="button" id="btn_snd_msg" class="getclick" func="telsndmd" title="Abrir Conversa" style="padding: 0 20px;margin-top: 0;"><span class="" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></span></div>');
	}

	if (document.getElementById("inputFileToLoad")) {
		//alert("Element exists");
	} else {
		//$('._2cYbV').prepend('<div id="imgTest"><div>');
		//$('._2cYbV').prepend('<input id="inputFileToLoad" type="file" onchange="encodeImageFileAsURL();" />');
	}


	for (var i = 0; i < keyups.length; i++) {
		keyups[i].removeEventListener('keyup', switch_function);
	}
	for (var i = 0; i < clicks.length; i++) {
		clicks[i].removeEventListener('click', switch_function);
	}
	//for (var i = 0; i < selected.length; i++) {
	//	selected[i].removeEventListener('selected', switch_function);
	//}


	keyups = [].slice.call(document.getElementsByClassName('getkeyup'));
	clicks = [].slice.call(document.getElementsByClassName('getclick'));

	for (var i = 0; i < keyups.length; i++) {
		keyups[i].addEventListener('keyup', switch_function);
	}
	for (var i = 0; i < clicks.length; i++) {
		clicks[i].addEventListener('click', switch_function);
	}
	//for (var i = 0; i < selected.length; i++) {
	//	selected[i].addEventListener('selected', switch_function);
	//}

	//$('._1XkO3').append('<div class="pinfo"></div>');
}

function switch_function() {
	event.preventDefault();
	switch ($(this).attr('func')) {
		case 'telsndmd':
			telsndmd('tel');
			break;
		case 'telsndmdok':
			telsndmdok();
			break;
		case 'btn_rs_rap':
			sendMessage($(this).attr("code").split(','));
			break;
		case 'box_res_header_active':
			box_res_header($(this).attr("mid"), $(this).attr("ct"), "active");
			break;
		case 'box_res_header_close':
			box_res_header($(this).attr("mid"), $(this).attr("ct"), "close");
			break;
		case 'btn_sendmass':
			sendmassbtn();
			break;
		default:
			console.log('404 - switch_function: ' + $(this).attr('func'));
			break;
	}
}

function sendMessageBG(request) {
	return new Promise((resolve) => {
		chrome.runtime.sendMessage(request, (response) => {
			resolve(response.data)
		});
	})
}

async function sendMessage(codes = [], objectstatus = null) {

	if (objectstatus == null && codes.length > 0) {
		objectstatus = get_message_log_obj();
		objectstatus.direction = 1;
		objectstatus.codes = codes;
	}
	if (objectstatus != null) {
		for (var i = 0; i < objectstatus.codes.length; i++) {
			return sendMessageInput(await sendMessageBG({ type: 'getmsg', code: objectstatus.codes[i] }), objectstatus);
		}
	}
	return { response: false, objectstatus: objectstatus };
}

function msgCharRandom(message, searchChar, addChar, replacesCount) {

	for (var i = 0; i < replacesCount; i++) {

		var indices = [];
		indices = message.split(searchChar);

		if (indices.length < replacesCount) {
			replacesCount = indices.length;
		}

		var randomPlace = (Math.floor(Math.random() * indices.length));

		message = '';
		for (var p = 0; p < indices.length; p++) {

			var _addChar = searchChar;
			if (p === randomPlace) {
				_addChar = addChar;
			}

			if ((p + 1) >= indices.length) {
				_addChar = '';
			}

			message += indices[p] + _addChar;
		}
	}
	return message;
}

function showQR() {
	console.log(document.querySelector('canvas[aria-label="Scan me!"]').toDataURL());
}

async function sendMessageInput(message = [], objectstatus = null) {

	objectstatus.send_check = 0;
	objectstatus.send_status = 0;

	if (message.length > 0) {

		for (var p = 0; p < message.length; p++) {

			if (message[p].type == 'img') {

				console.log('type: ' + message[p]["type"]);
				/*var imgdlw = '';
				var imgUrl = "https://explodi.com.br/public/logo.png";
				toDataUrl(imgUrl, function (myBase64) {
					console.log(myBase64); // myBase64 is the base64 string
					imgdlw = myBase64;
				});
				*/

				telsndmd('loadimg');
				let imgmv = document.querySelector('.imgmv');

				chrome.runtime.sendMessage({ type: 'getimg', img: message[p]["img"] }, function (response) {
					//console.log('getimg');
					//console.log(response);
					//let mainEl = document.querySelector('#main');
					//let textareaEl = mainEl.querySelector('div[contenteditable="true"]');
					//textareaEl.focus();


					/*
					var oImg = document.createElement("img");
					oImg.setAttribute('src', response.data);
					oImg.classList.add('imgmv');
	
					$('#main').prepend(oImg);
					*/

					imgmv.src = response.data;
					imgmv.classList.remove('hide');

					//navigator.clipboard.writeText(response.data);
					//document.execCommand('insertHTML', false,oImg);
					//textareaEl.dispatchEvent(new Event('change', { bubbles: true }));
					//textareaEl.innerHTML = oImg;


					//textareaEl.dispatchEvent(new Event('change', { bubbles: true }));


					var sourceNode = document.querySelector('.imgmv');
					var destinationNode = document.querySelector('._5kRIK');
					// Initiate simulation sequence
					//simulatedrop(sourceNode, destinationNode, 50);
					//$('.imgmv').simulate("drag-n-drop", {dx: 50});

				});

				telsndmd('loadimg');
				//let mainEl = document.querySelector('#main');
				//let textareaEl = mainEl.querySelector('div[contenteditable="true"]');
				//textareaEl.focus();
				//document.execCommand('insertHTML', false, imgdlw);
				//textareaEl.dispatchEvent(new Event('change', { bubbles: true }));
				//document.execCommand("Paste", null, null);
			}

			if (message[p].type == 'text' || message[p].caption != '') {

				var lines = [];
				if (message[p].type == 'text')
					lines = msgCharRandom(message[p].content, ' ', '  ', 3).split('\n');
				else if (message[p].caption != '')
					lines = msgCharRandom(message[p].caption, ' ', '  ', 3).split('\n');

				//message = message.replace(/\n/g, document.createElement('p'));
				let mainEl = document.querySelector('#main')
				let textareaEl = mainEl.querySelector('div[contenteditable="true"]')

				if (!textareaEl) {
					mylog('There is no opened conversation')
				}

				textareaEl.focus();
				telsndmd('typing');
				for (const line of lines) {
					//mylog(line);

					document.execCommand('insertText', false, line + ' ');
					textareaEl.dispatchEvent(new Event('change', { bubbles: true }));

					await new Promise(resolve => setTimeout(resolve, 300));

					document.execCommand('insertHTML', false, '\n\n');
					textareaEl.dispatchEvent(new Event('change', { bubbles: true }));

					await new Promise(resolve => setTimeout(resolve, 300));
				}
			}

			if (document.querySelector('.btn_auto_send').checked || message[p].autosend) {
				await new Promise(resolve => setTimeout(resolve, 500));

				setTimeout(() => {
					(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
				}, 100);
			}
			telsndmd('typing');
		}
		objectstatus.send_check = 1;
		objectstatus.send_status = 1;
		//await report_send(objectstatus);
		return { response: true, objectstatus: objectstatus };
	}
	return { response: false, objectstatus: objectstatus };
}

function mylog(msg) {
	console.log(msg);
}

function sleep(miliseconds) {
	var currentTime = new Date().getTime();

	while (currentTime + miliseconds >= new Date().getTime()) {
	}
}

function box_res_header(id, ct, status) {
	console.log('ct1');
	bxrs = [].slice.call(document.getElementsByClassName('box_res_content_sq'));
	for (var z = 0; z < bxrs.length; z++) {
		bxrs[z].classList.add('hide');
	}
	$('.box_res_header_btn').removeClass('box_res_header_btn_active');
	$('.box_res_header_btn' + id).addClass('box_res_header_btn_active');
	document.querySelector('.' + ct).classList.remove('hide');
	console.log('ct2' + ct);
}

function checkcontat(nmbr) {

	clocs = 40;
	for (var c = 0; c < clocs; c++) {
		if (getcontactphone() == '' || getcontactphone() != nmbr) {
			sleep(500);
			//setInterval(function () {mylog('setTimeout - checkcontat: ' + c)}, 1000);
			//setTimeout(function () {mylog('setTimeout - checkcontat: ' + c)},500);
			console.log('NOT checkcontat - nmbr: ' + nmbr + ' getcontactphone: ' + getcontactphone());
		}
		else {
			c = clocs;
			console.log('OK checkcontat - nmbr: ' + nmbr + ' getcontactphone: ' + getcontactphone());
			return true;
		}
	}
	console.log('checkcontat timeout');
	return false;
}

function getcontactphone() {
	if ($("header .emoji-texttt").length > 0) {
		return $("header .emoji-texttt").attr('title');
	}
	return '';
}

function checksendsmgset() {
	if ($("footer .copyable-text").val() != '') {
		console.log('val: ' + $("footer .copyable-text").val());
		return true;
	}
	console.log('neg val: ' + $("footer .copyable-text").val());
	return false;
}

function encodeImageFileAsURL() {

	var filesSelected = document.getElementById("inputFileToLoad").files;
	if (filesSelected.length > 0) {
		var fileToLoad = filesSelected[0];

		var fileReader = new FileReader();

		fileReader.onload = function (fileLoadedEvent) {
			var srcData = fileLoadedEvent.target.result; // <--- data: base64

			var newImage = document.createElement('img');
			newImage.src = srcData;

			document.getElementById("imgTest").innerHTML = newImage.outerHTML;
			console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
			return newImage.outerHTML;

		}
		fileReader.readAsDataURL(fileToLoad);
	}
}

function sendmassbtn() {
	sendMessageBG({ type: 'sendmass' });
}

function get_message_log_obj() {
	return {
		id: '',
		direction: '',
		contact: '',
		ids: '',
		codes: [],
		pct: '',
		contact_found: 2,
		chat_open: 2,
		send_status: 2,
		send_check: 2,
		message_id: '',
		message_revoked: 0,
		message_time: '',
		message_content: '',
	};
}

async function sendmass(list_objectstatus = []) {

	for (var p = 0; p < list_objectstatus.length; p++) {

		let response = await open_number('', list_objectstatus[p]);
		list_objectstatus[p] = response.objectstatus;
		if (response.response) {
			await new Promise(resolve => setTimeout(resolve, 1000));
			let response2 = await sendMessage([], response.objectstatus);
			list_objectstatus[p] = response2.objectstatus;
		}
		await report_send(list_objectstatus[p]);
	}
	return list_objectstatus;
}

async function is_chatopen(wait = false, objectstatus = {}) {
	objectstatus.chat_open = 0;
	await waitForElm('._23P3O');
	if (document.querySelector('._23P3O')) {
		objectstatus.chat_open = 1;
		return { response: true, objectstatus: objectstatus };
	}
	return { response: false, objectstatus: objectstatus };
}

async function number_found(objectstatus = {}) {

	await new Promise(resolve => setTimeout(resolve, 1000));
	//setTimeout(resolve, 1000);

	await waitForElm('.iuhl9who');
	let loading_sec = 0;
	objectstatus.contact_found = 0;
	while (document.querySelector('.bvgz89zs')) {
		console.log('loading...');
		loading_sec++;
		await new Promise(resolve => setTimeout(resolve, 1000));
		//setTimeout(resolve, 1000);

		if (loading_sec > 30) {
			console.log('number_found while break 10 sec...');
			break;
		}
	}
	if (document.querySelector('div[data-testid="popup-controls-ok"]')) {
		await new Promise(resolve => setTimeout(resolve, 1000));
		//setTimeout(resolve, 1000);

		document.querySelector('div[data-testid="popup-controls-ok"]').click();
	} else if (!document.querySelector('.iuhl9who')) {
		objectstatus.contact_found = 1;
		return await is_chatopen(true, objectstatus);
	}
	return { response: false, objectstatus: objectstatus };
}

async function report_send(objectstatus = {}) {
	await sendMessageBG({ type: 'setmsg', objectstatus: objectstatus });
}
function telsndmd(style = '') {
	if (!document.querySelector(".alerty-overlay")) {
		$('body').append('<div class="alerty-overlay active hide" tabindex="-1" id="overlay-alerty495927"></div>');
	}

	$('.alerty-overlay').toggleClass('hide');

	switch (style) {
		case 'tel':
			$('.alerty-show').toggleClass('hide');
			if (!$('.alerty-show').hasClass('hide')) {
				document.querySelector('.telsndmdval').click();
			}
			break;
		default:
			break;
	}
}
function telsndmdok() {
	console.log('telsndmdval ' + $(".telsndmdval").val());
	open_number($(".telsndmdval").val());
	telsndmd('tel');
	$(".telsndmdval").val('');
}

async function open_number(nmmb = '', objectstatus = null) {

	if (nmmb == '' && objectstatus != null) {
		nmmb = objectstatus.contact;
	}

	if (nmmb.length > 9) {
		$(".tlgo").prop('href', 'whatsapp://send?phone=' + nmmb);
		document.querySelector(".tlgo").click();
		$(".tlgo").prop('href', '');
		return await number_found(objectstatus);
	}
	return { response: false, objectstatus: objectstatus };
}


async function getmyid() {

	await new Promise(resolve => setTimeout(resolve, 3000));

	waitForElm('div[data-testid="new-chat-drawer"]');
	let el = document.querySelector('div[data-testid="message-yourself-row"]');
	if (el.querySelector('._21S-L span').getAttribute('title').replace(/\D/g, '').length < 10) {
		el.click();
		let chat = document.querySelectorAll('._3OtEr');
		chat[2].querySelector('div[role="button"]').click();
		await waitForElm('div[data-testid="contact-list-key"]');

		await new Promise(resolve => setTimeout(resolve, 3000));
		document.querySelector('div[data-testid="contact-list-key"] div[data-testid="message-yourself-row"]').click();

		await new Promise(resolve => setTimeout(resolve, 3000));
		document.querySelector('header div[data-testid="conversation-info-header"]').click();

		await new Promise(resolve => setTimeout(resolve, 3000));
		let nm = document.querySelector('div[data-testid="drawer-right"] ._10kwi').innerHTML;

		return nm.replace(/\D/g, '')
	}
	return el.querySelector('._21S-L span').getAttribute('title').replace(/\D/g, '');
}

