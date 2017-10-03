/**
 * Created by Paul on 29.09.2017.
 */
var myNodelist = document.getElementsByTagName("li");
var i;
for (i=0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}