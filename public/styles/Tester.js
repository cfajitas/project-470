
var solr = require('solr-client');
var client = solr.createClient({
	host  : '8983'
});

var query2 = client.createQuery()
	.q('2BFitnessCenter:1+%2Bsfbay')
	.start(0)
	.rows(200);
client.search(query2,function(err,obj){
   if(err){
   	console.log(err);
   }else{
   	console.log(JSON.stringify(obj));
   }
});
