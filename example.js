var uinames = require('uinames');

uinames({
  country: 'Colombia',
  amount: 10
}, function (err, data) {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});