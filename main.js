import CookieMessage from './src/js/cookie-message';

function constructAll () {
	CookieMessage.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
}

document.addEventListener('o.DOMContentLoaded', constructAll);

export default CookieMessage;
