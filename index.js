// Amazon Marketplace Web Services (MWS) API Wrapper for Node.js

var CartInformation = require('./CartInformation.js');
var CustomerInformation = require('./CustomerInformation.js');
var Feeds = require('./Feeds.js');
var FulfillmentInbound = require('./FulfillmentInbound.js');
var FulfillmentInventory = require('./FulfillmentInventory.js');
var FulfillmentOutbound = require('./FulfillmentOutbound.js');
var OffAmazonPayments = require('./OffAmazonPayments.js');
var Orders = require('./Orders.js');
var Products = require('./Products.js');
var Recommendations = require('./Recommendations.js');
var Reports = require('./Reports.js');
var Sellers = require('./Sellers.js');
var Subscriptions = require('./Subscriptions.js');


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