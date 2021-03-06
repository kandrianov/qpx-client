'use strict';

var QPXClient = require('../'),
    util = require('util'),

    options = {
        key: 'YOUR_APIKey',
        timeout: 15000
    },

    searchConfig = {
        body: {
            "request": {
                "passengers": {
                    "adultCount": 1
                },
                "slice": [
                    {
                        "origin": "SFO",
                        "destination": "LAX",
                        "date": "YYYY-MM-DD"
                    }
                ],
                "solutions": 50
            }
        }
    },

    qpxClient = new QPXClient(options);

qpxClient.search(searchConfig, function (err, data) {
    console.log('\n-------------search-------------');
    if (err) {
        console.log('ERROR: qpxClient.search: ' + err);
    } else {
        console.log(util.inspect(data, { depth : 8 }));
    }
});