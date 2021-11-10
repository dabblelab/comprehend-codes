var AWS = require("aws-sdk");

var comprehend = new AWS.Comprehend({
  comprehend: '2018-10-30'
})

async function getDetails(text) {
  var params = {
    Text: text,
    LanguageCode: 'en'
  };
  var data = await comprehend.detectEntities(params).promise();
  console.log(data);
}
async function main(text) {
 await getDetails(text);
}

main('Thank you for this! You\'re teaching the basic fundamental concepts of Javascript in a context of a real project, and an Alexa skill at that, which is pretty rare but awesome. Keep going! Hope you can also do Google Assistant + Firebase as well in the future. :)');
