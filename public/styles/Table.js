var url='http://localhost:8983/solr/gettingstarted/select?indent=on&q=akron&wt=json';
var myList = $.getJSON(url);


//var myList=[{"name" : "abc", "age" : 50},
//            {"age" : "25", "hobby" : "swimming"},
//            {"name" : "xyz", "hobby" : "programming"}];


 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
         $("#jsonDataTable").append(row$);
     }
 }
 
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#jsonDataTable").append(headerTr$);
 
     return columnSet;
 }