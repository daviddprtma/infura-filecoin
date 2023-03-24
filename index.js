let request = require('request')

// Call the Infura API and check that the address is valid.
let options = {
 url: 'https://filecoin.infura.io',
 method: 'post',
 headers: {
	'content-type': 'application/json'
 },
 auth: {
	user: '2NRgGrBy5QTT9JAd2gbfnZcxzzL',
	pass: '14d1d83f931f65aba1b7b5edcf99f87c'
 },
 body: `{
   "jsonrpc": "2.0",
   "id": 0,
   "method": "Filecoin.ChainGetBlock",
   "params": [{"/":"bafy2bzacedyqu6bgjpgmmnzxmirbcyculwprut45agcl5msetp34q5uznz7wa"}]
 }`
}

request(options, (error, response, body) => {
 if (error) {
	console.error('Error: ', error)
 } else {
	console.log('Response: ', body)
 }
})