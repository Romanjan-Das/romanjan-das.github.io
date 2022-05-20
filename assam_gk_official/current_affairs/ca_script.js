const ca_name=document.getElementsByTagName("ca_name");
const ca_text=document.getElementsByTagName("ca_text");
var i=-1;

function next(x) {
    const d=new Date();
    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    document.getElementById("timer").innerHTML="অসমীয়া সাধাৰণ জ্ঞান &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+d.getDate()+"-"+month[d.getMonth()]+"-"+d.getFullYear();

    if (x && i<ca_name.length) {
        if(i==ca_name.length-1){
            //do nothing
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