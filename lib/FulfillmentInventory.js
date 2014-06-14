// Fulfillment Inventory API
'use strict';

var _ = require('lodash');
var Hawk = require('hawk');
var request = require('request');
var xml2js = require('xml2js');


// ---------------------- Class/Constructor ---->>

function FulfillmentInventory(params) { // used to be requestOptions
    this.layerName = 'FulfillmentInventory';
    //this.requestOptions = requestOptions;

    this.params = params;
    this.params.endpoint = 'mws.amazonservices.com';

    this.MWS = {
        AWSAccessKeyID: params.accessKeyID,
        SellerId: params.sellerId
    };

    this.signature = {
        key: params.secretKey, // Amazon MWS Secret Key
        algorithm: 'sha256'
    };

    // Hawk Header
    this.header = Hawk.client.header({ signature: this.signature });
}


// ---------------------- Prototypes ---->>


FulfillmentInventory.prototype.getServiceStatus = function makeRequest(done) {
    var self = this;

    var requestOptions = {};

    // Build the Request URI
    requestOptions.uri = 'https://' + this.params.endpoint + '/FulfillmentInventory/2010-10-01?AWSAccessKeyID='
        + this.MWS.AWSAccessKeyID
        + '&Action=GetServiceStatus'
        + '&SellerId='
        + this.MWS.SellerId
        + '&SignatureMethod=HmacSHA256 HTTP/1.1'
        + '&SignatureVersion=2'
        + '&Version=2011-10-01';

    requestOptions.method = 'GET';

    if(this.params.headers) {
        requestOptions.headers = {
            ext: this.params.headers
        };
        // Example: 'Application/0.0.1 (Language=JavaScript/Node.js)'
    } else {
        requestOptions.headers = {
            ext: 'Application/0.0.1 (Language=JavaScript/Node.js)'
        };
    }

    requestOptions.headers.Authorization = this.header.field;

    request(requestOptions, function (error, response, body) {
        var isValid = Hawk.client.authenticate(response, self.signature, self.header.artifacts, { payload: body });

        console.log('Response: ' + response.statusCode + ': ' + (isValid ? ' (valid)' : ' (invalid)'));

        var parser = new xml2js.Parser();

        var result = {
            response: response
        };

        parser.parseString(body, function (err, parsedBody) {
            if(err) {
                console.log('Error: ' + err);
                if (done && typeof(done) === "function") {
                    done(err);
                }
            }

            result.body = JSON.stringify(parsedBody);

            if (done && typeof(done) === "function") {
                done(result);
            }
        });
    });
};

/*
FulfillmentInventory.prototype.listInventorySupply = function makeRequest(done) {
    var self = this;

    // Build the URI Here
    this.requestOptions = {
        uri: 'https://' + this.params.endpoint
            + '/FulfillmentInventory'
            + '/2010-10-01'
            + '?AWSAccessKeyID=' + this.accessKeyID
            + '&Action=' + this.action
            + '&Merchant=' + this.params.SellerId
            + '&SignatureMethod=HmacSHA256 HTTP/1.1'
            + '&SignatureVersion=2'
            + '&ResponseGroup=Detailed' // Options: Basic, Detailed
            + '&QueryStartDateTime=' + this.params.queryStartDateTime // Example: 2014-01-01T05%3A00%3A00Z
        ,
        method: 'GET',
        headers: {
            ext: 'Monday/0.9.0 (Language=JavaScript/Node.js)'
        }
    };

    this.requestOptions.headers.Authorization = this.header.field;

    // Make the Request
    request(this.requestOptions, function (error, response, body) {
        var isValid = Hawk.client.authenticate(response, self.signature, self.header.artifacts, { payload: body });
        console.log('Response: ' + response.statusCode + ': ' + (isValid ? ' (valid)' : ' (invalid)'));
        var parser = new xml2js.Parser();
        var result = {
            response: response
        };
        parser.parseString(body, function (err, parsedBody) {
            if(err) {
                console.log('Error: ' + err);
                if (done && typeof(done) === "function") {
                    done(err);
                }
            }
            result.body = JSON.stringify(parsedBody);
            if (done && typeof(done) === "function") {
                done(result);
            }
        });
    });
};
*/

module.exports = FulfillmentInventory;