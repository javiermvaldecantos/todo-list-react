var fs = require('fs');

fs.writeFile('./data/stock.json', JSON.stringify(stock), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('stock.json updated successfully');
});