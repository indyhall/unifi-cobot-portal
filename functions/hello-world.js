
exports.handler = function(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(event, null, 2) + "\n\n" + JSON.stringify(context, null, 2)
	});
};
