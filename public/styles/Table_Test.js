var url = 'http://localhost:8983/solr/gettingstarted/select?indent=on&q=%2BFitnessCenter:1+%2Bsfbay&wt=json';

(function() {
    
    
$.getJSON(url,
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].City + "</td>");
        tr.append("<td>" + data[i].NumBedRooms + "</td>");
        tr.append("<td>" + data[i].NumBathrooms + "</td>");
        tr.append("<td>" + data[i].Dog + "</td>");
        tr.append("<td>" + data[i].Pool + "</td>");
        tr.append("<td>" + data[i].FitnessCenter + "</td>");
        tr.append("<td>" + data[i].Price + "</td>");
        tr.append("<td>" + data[i].Deposit + "</td>");
        tr.append("<td>" + data[i].SqFt + "</td>");
        $('jsonDataTable2').append(tr);
    }
});
    
})();