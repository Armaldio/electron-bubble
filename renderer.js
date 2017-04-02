const BrowserWindow = require('electron').remote;
const $             = global.jQuery = require("jquery");

/**
 * Expend bubble to show full content
 * @param $bubble
 * @param $messageView
 */
function expandMessage ($bubble, $messageView) {
	if ($bubble.hasClass("expended")) {
		$bubble.removeClass("expended");
		$messageView.fadeOut(() => {
			BrowserWindow.getCurrentWindow().setSize(75, 75, true);
			console.log("Restoring");
		});
	} else {
		$bubble.addClass("expended");
		$messageView.fadeIn();
		BrowserWindow.getCurrentWindow().setSize(400, 600, true);
		console.log("Expending");
	}
}

$(document).ready(() => {
	let $bubble      = $("#bubble");
	let $messageView = $("#message");
	let $close       = $("#close");
	let $drag        = $("#drag");

	/**
	 * Expend message when bubble clicked
	 */
	$bubble.on("click", () => {
		expandMessage($bubble, $messageView);
	});

	/**
	 * Close window when close icon clicked
	 */
	$close.on("click", () => {
		BrowserWindow.getCurrentWindow().close();
	});

	/**
	 * Prevent image to be dragged
	 */
	$('img').on('dragstart', function(event) { event.preventDefault(); });
});

