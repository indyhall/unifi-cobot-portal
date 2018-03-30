
exports.handler = function(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: "Why, hello."
	});
};

/*

{
  "path": "/.netlify/functions/hello-world",
  "httpMethod": "GET",
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* /*;q=0.8",
"accept-encoding": "br, gzip",
	"accept-language": "en-US,en;q=0.9,it;q=0.8",
	"connection": "keep-alive",
	"dnt": "1",
	"upgrade-insecure-requests": "1",
	"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
	"via": "https/2 Netlify[280fe446-951e-4738-8345-13971a51d0a7] (ApacheTrafficServer/7.1.2)",
	"x-bb-ab": "0.843794",
	"x-bb-client-request-uuid": "280fe446-951e-4738-8345-13971a51d0a7-3857043",
	"x-bb-ip": "73.81.113.12",
	"x-cdn-domain": "www.bitballoon.com",
	"x-country": "US",
	"x-forwarded-for": "73.81.113.12",
	"x-forwarded-proto": "https",
	"x-language": "en-US"
},
"queryStringParameters": {},
"body": "",
	"isBase64Encoded": true
}

{
	"callbackWaitsForEmptyEventLoop": true,
	"logGroupName": "/aws/lambda/438040455d89607130ee35167ba72274bdd4f4a8a65e2a7bca7f2cb71166d6a2",
	"logStreamName": "2018/03/30/[$LATEST]a80c0faae76e4252bdbfbdbff8d0f193",
	"functionName": "438040455d89607130ee35167ba72274bdd4f4a8a65e2a7bca7f2cb71166d6a2",
	"memoryLimitInMB": "128",
	"functionVersion": "$LATEST",
	"invokeid": "2df61052-3432-11e8-b72c-c72883d3a467",
	"awsRequestId": "2df61052-3432-11e8-b72c-c72883d3a467",
	"invokedFunctionArn": "arn:aws:lambda:us-east-1:812122390002:function:438040455d89607130ee35167ba72274bdd4f4a8a65e2a7bca7f2cb71166d6a2"
}

 */
