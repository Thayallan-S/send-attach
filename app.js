'use-strict';

var attachments = [];

InboxSDK.load('2', 'sdk_SendAttach_0c35484612').then(function(sdk) {
	sdk.Toolbars.registerThreadButton({
		title: 'Compose with Attachments',
		iconUrl: 'https://image.flaticon.com/icons/svg/1932/1932975.svg',
		onClick: function(event) {
			
			sdk.Compose.openNewComposeView();

		}

	});

	sdk.Compose.registerComposeViewHandler(function(composeView){
		composeView.addButton({
			title: 'Attachd',
			iconUrl: 'https://image.flaticon.com/icons/svg/1932/1932975.svg',
			onClick: function(event) {
				
			},
		});
			console.log("compose view exists!");
	});
});
