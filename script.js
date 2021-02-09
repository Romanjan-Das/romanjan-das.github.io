{

    var xbody = document.body;

    var xspan = "span";

    var xp = "p";

    var xdiv = "div";

    var ximg = "img";

    var xclass = undefined;

    var xid = undefined;

    var xonclick = undefined;

    function el(xtype, xnode, xclass, xid, xonclick) {

        var xxxx = document.createElement(xtype);

        xnode.appendChild(xxxx);



        if (xclass != undefined) {

            xxxx.setAttribute("class", xclass);

        }

        if (xid != undefined) {

            xxxx.setAttribute("id", xid);

        }

        if (xonclick != undefined) {

            xxxx.setAttribute("onclick", xonclick);

        }

        xclass = undefined;

        xid = undefined;

        xonclick = undefined;

        return xxxx;

    }

}



/*

var top_banner = el(xdiv,xbody,"top_banner");

*/

var backgroundImage = el(ximg, xbody, "backgroundImage");

console.log(screen.width,screen.height);

if(screen.height>screen.width){

    backgroundImage.src = "images/backgroundImage_mobile.jpg";

}

else{

    backgroundImage.src = "images/backgroundImage.jpg";

}

backgroundImage.setAttribute("onload", "backgroundImageOnload();");

var myGreetings; var myResume; var myProjects; var str = "Hello,I'm Romanjan"; var i = 0;

function backgroundImageOnload() {

    document.getElementsByClassName("loader")[0].remove();

    backgroundImage.style.display = "block";

    myGreetings = el(xdiv, xbody, "myGreetings");

    myGreetings.innerHTML = "|";

    //myProjects = el(xdiv, xbody, "myProjects");

    //myProjects.innerHTML = "<a href=\"#my_projects\">View my Projects ></a>";

    myResume = el(xdiv, xbody, "myResume");

    myResume.innerHTML = "<a href=\"mailto:romanjandas.mail@gmail.com\"> Send me a mail ></a>";

    manipulateInnerHTML();

    //myProjectsSection();

    //myCardSection();

}



function manipulateInnerHTML() {

    var i = 0;

    var ObjsetInterval = setInterval(() => {    

        i++;

        if(i<19){

            myGreetings.innerHTML = "Hello,I'm Romanjan".substr(0, i);

            myGreetings.innerHTML += "|";

        }

        if (i > 28 && i<49) {

           // clearInterval(ObjsetInterval);

           myGreetings.innerHTML = "Hello,I'm Romanjan".substr(0, 48-i);

           myGreetings.innerHTML += "|";

        }

        if (i > 48 && i<75) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "I am a web developer".substr(0, i-47);

            myGreetings.innerHTML += "|";

         }

         if (i > 74 && i<96) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "I am a web developer".substr(0, 95-i);

            myGreetings.innerHTML += "|";

         }

         if (i > 95 && i<120) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "HTML,CSS, Javascript".substr(0, i-95);

            myGreetings.innerHTML += "|";

         }

         if (i > 119 && i<145) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "HTML,CSS, Javascript".substr(0, 144-i);

            myGreetings.innerHTML += "|";

         }

         if (i > 144 && i<170) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "PHP,MySQL, Wordpress".substr(0, i-144);

            myGreetings.innerHTML += "|";

         }

         if (i > 169 && i<198) {

            // clearInterval(ObjsetInterval);

            myGreetings.innerHTML = "PHP,MySQL, Wordpress".substr(0, 197-i);

            myGreetings.innerHTML += "|";

         }

        if(i>200){

            clearInterval(ObjsetInterval);

            i=0;

            manipulateInnerHTML();

        }

    }, 150);

}



var ProjectSectiondiv; var Project_1; var Project_name; var Project_details;

function myProjectsSection(){

    ProjectSectiondiv = el(xdiv,xbody,"ProjectSectiondiv","my_projects");

    Project_1 = el(xdiv,ProjectSectiondiv,"Project_1");

    Project_name = el(xspan,Project_1,"Project_name");

    Project_name.innerHTML = "Guwahati Events and Offers";

    Project_details = el(xp,Project_1,"Project_details");

    Project_details.innerHTML = "It is an app based on web technologies, for finding latest events and offers in Guwahati City.";



    var Project_2 = Project_1.cloneNode(true);

    ProjectSectiondiv.appendChild(Project_2);



    var Project_3 = Project_1.cloneNode(true);

    ProjectSectiondiv.appendChild(Project_3);



    var Project_4 = Project_1.cloneNode(true);

    ProjectSectiondiv.appendChild(Project_4);



    var Project_5 = Project_1.cloneNode(true);

    ProjectSectiondiv.appendChild(Project_5);



    var Project_6 = Project_1.cloneNode(true);

    Project_6.style.marginBottom="5vw";

    ProjectSectiondiv.appendChild(Project_6);

}



var myCardDiv;

function myCardSection(){

    myCardDiv = el(xdiv,ProjectSectiondiv,"myCardDiv","mycard_id");

    myEmail = el(xdiv,myCardDiv,"myEmail");

    myEmail.innerHTML="<a class=\"email_class\" href=\"mailto:romanjandas@outlook.com\">romanjandas@outlook.com</a>";

}