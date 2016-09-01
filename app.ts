console.log('About to import into elastic');

var elasticsearchCsv = require('elasticsearch-csv');

// create an instance of the importer with options 
var esCSV = new elasticsearchCsv({
    es: { index: 'ethos_index', type: 'ethos_health_data', host: 'localhost:9200' },
    csv: { filePath: 'C:\\EthosData\\BioAge_Results_Sample_Data.csv', headers: true }
});

esCSV.import()
    .then(function (response) {
        // Elasticsearch response for the bulk insert 
        console.log(response);
    }, function (err) {
        // throw error 
        throw err;
    });