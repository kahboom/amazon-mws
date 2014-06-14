// Amazon Marketplace Web Services (MWS) API Wrapper for Node.js

var CartInformation = require('./lib/CartInformation.js');
var CustomerInformation = require('./lib/CustomerInformation.js');
var Feeds = require('./lib/Feeds.js');
var FulfillmentInbound = require('./lib/FulfillmentInbound.js');
var FulfillmentInventory = require('./lib/FulfillmentInventory.js');
var FulfillmentOutbound = require('./lib/FulfillmentOutbound.js');
var OffAmazonPayments = require('./lib/OffAmazonPayments.js');
var Orders = require('./lib/Orders.js');
var Products = require('./lib/Products.js');
var Recommendations = require('./lib/Recommendations.js');
var Reports = require('./lib/Reports.js');
var Sellers = require('./lib/Sellers.js');
var Subscriptions = require('./lib/Subscriptions.js');


// Exports

exports.CartInformation = function(params) {
    return new CartInformation(params);
};

exports.CustomerInformation = function(params) {
    return new CustomerInformation(params);
};

exports.Feeds = function(params) {
    return new Feeds(params);
};

exports.FulfillmentInbound = function(params) {
    return new FulfillmentInbound(params);
};

exports.FulfillmentInventory = function(params) {
    return new FulfillmentInventory(params);
};

exports.FulfillmentOutbound = function(params) {
    return new FulfillmentOutbound(params);
};

exports.OffAmazonPayments = function(params) {
    return new OffAmazonPayments(params);
};

exports.Orders = function(params) {
    return new Orders(params);
};

exports.Products = function(params) {
    return new Products(params);
};

exports.Recommendations = function(params) {
    return new Recommendations(params);
};

exports.Reports = function(params) {
    return new Reports(params);
};

exports.Sellers = function(params) {
    return new Sellers(params);
};

exports.Subscriptions = function(params) {
    return new Subscriptions(params);
};