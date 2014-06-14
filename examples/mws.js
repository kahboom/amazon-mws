// Example #1: Fulfillment Inventory

var MWS = require('../index.js');

var config = require('./config.json');

var params = {
    accessKeyID: config['accessKeyId'],
    secretKey: config['secretKey'],
    sellerId: config['sellerId']
};

var FulfillmentInventory = MWS.FulfillmentInventory(params);

FulfillmentInventory.getServiceStatus(function(results) {
    console.log('Service Status: ' + JSON.stringify(results));
});