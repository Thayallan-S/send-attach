'use-strict';

InboxSDK.load(2, 'sdk_SendAttach_0c35484612').then(sdk => {
	sdk.Conversations.registerThreadViewHandler(threadView => {
		onClick = function() {
			console.log('button'
		}

		threadView.registerThreadButton({
			title: "SendAttach",
			onclick: 
		});
	});
});