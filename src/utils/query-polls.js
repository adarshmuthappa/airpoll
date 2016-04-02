let Parse = require('parse/react-native');
export default function getPollsForGroup(parent) {
  return new Promise(function(resolve, reject) {
    var query = new Parse.Query('NewPoll');
    //query.equalTo('partOf', 'IY5XzkBiKs');
    query.find().then(function(results) {
      resolve(results);
    }, function(error) {
      reject(error);
    });
  });
}
