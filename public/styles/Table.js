var url = 'http://localhost:8983/solr/gettingstarted/select?indent=on&q=%2BFitnessCenter:1+%2Bsfbay&wt=json';
//var myList = $.getJSON(url);


var myList=[{"name" : "abc", "age" : 50},
            {"age" : "25", "hobby" : "swimming"},
            {"name" : "xyz", "hobby" : "programming"}];


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
 
 
 $.getJSON(url,
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].User_Name + "</td>");
        tr.append("<td>" + data[i].score + "</td>");
        tr.append("<td>" + data[i].team + "</td>");
        $('jsonDataTable2').append(tr);
    }
});

$(document).ready(function () {
        var json = [{"User_Name":"John Doe","score":"10","team":"1"},{"User_Name":"Jane Smith","score":"15","team":"2"},{"User_Name":"Chuck Berry","score":"12","team":"2"}];
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].User_Name + "</td>");
            tr.append("<td>" + json[i].score + "</td>");
            tr.append("<td>" + json[i].team + "</td>");
            $('jsonDataTable2').append(tr);
        }
});