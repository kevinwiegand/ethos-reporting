console.log('About to import into elastic');


var csv = require("fast-csv");

csv
    .fromPath("C:\\EthosData\\BioAge_Results_Sample_Data.csv")
    .on("data", function (data) {
        console.log(data);
    })
    .on("end", function () {
        console.log("done");
    });

