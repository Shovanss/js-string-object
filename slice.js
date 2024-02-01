const address = 'chittaGong';
const part = address.slice(0,6);
console.log(part);

const sentence = 'i like it';
console.log(sentence.split('i'));

const friendsSTr = 'rahim, karim, salam';
const friends = friendsSTr.split(',');
console.log(friends);

const bestfriends = [ 'rahim', ' karim', ' salam' ];
console.log(bestfriends.join());
console.log(bestfriends.join('||'));
console.log(bestfriends.join(' - '));
