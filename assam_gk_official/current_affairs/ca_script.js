const ca_name=document.getElementsByTagName("ca_name");
const ca_text=document.getElementsByTagName("ca_text");
var i=-1;

function next(x) {
    document.getElementById("timer").innerHTML="অসমীয়া সাধাৰণ জ্ঞান &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.getElementById("ca_date").innerText;

    if (x && i<ca_name.length) {
        if(i==ca_name.length-1){
            //do nothing
            alert("You have reached the end");
        }
        else{
            i++;
        }
        document.getElementById("ca_title").innerHTML=(i+1)+". "+ca_name[i].innerHTML;
        document.getElementById("ca_content").innerHTML=ca_text[i].innerHTML;
    }
    else if(x==false){
        if(i>0){
            i=i-1;
            document.getElementById("ca_title").innerHTML=(i+1)+". "+ca_name[i].innerHTML;
            document.getElementById("ca_content").innerHTML=ca_text[i].innerHTML;
        }
    }
}