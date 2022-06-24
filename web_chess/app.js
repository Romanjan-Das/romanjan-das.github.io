function main(){
    load_board();
    set_box_properties();
    set_chesspieces_in_initial_position();
}

function load_board(){
    var i=0; var j=0;
    for(i=0;i<8;i++){
        var row= document.getElementsByClassName("row")[i];
        for(j=0;j<8;j++){
            var box=document.createElement("div");
            box.setAttribute("class","box");
            var img=document.createElement("img");
            img.setAttribute("class","chess_piece_icon");
            img.setAttribute("src","/assets/blank.png");
            box.appendChild(img);
            row.appendChild(box);
        }
    }

    var l=0;m=0;n=0;var seashell="saddlebrown"; var saddlebrown="saddlebrown";
    for(l=0;l<8;l++){
        if(l%2==0){
            seashell="seashell"; saddlebrown="saddlebrown";
        }
        else{
            seashell="saddlebrown"; saddlebrown="seashell";
        }
        for(m=0;m<8;m++){
            if(m%2==0){
                document.getElementsByClassName("box")[n].style.backgroundColor=seashell;
            }
            else{
                document.getElementsByClassName("box")[n].style.backgroundColor=saddlebrown;
            }

            document.getElementsByClassName("chess_piece_icon")[n].setAttribute("id","piece_"+(n+1));
            document.getElementsByClassName("box")[n].setAttribute("onclick","select_box("+(n+1)+");");
            document.getElementsByClassName("box")[n].setAttribute("id","cell_number_"+(n+1));
            n++;
        }
    }

}

var box;
function set_box_properties(){
    box={
        cell_1:{
            cell_number:1,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"rook"
        },

        cell_2:{
            cell_number:2,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"knight"
        },

        cell_3:{
            cell_number:3,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"bishop"
        },
        cell_4:{
            cell_number:4,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"queen"
        },
        cell_5:{
            cell_number:5,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"king"
        },
        cell_6:{
            cell_number:6,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"bishop"
        },
        cell_7:{
            cell_number:7,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"knight"
        },
        cell_8:{
            cell_number:8,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"rook"
        },
        cell_9:{
            cell_number:9,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_10:{
            cell_number:10,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_11:{
            cell_number:11,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_12:{
            cell_number:12,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_13:{
            cell_number:13,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_14:{
            cell_number:14,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_15:{
            cell_number:15,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_16:{
            cell_number:16,
            item_exists:true,
            item_colour:"saddlebrown",
            item_type:"pawn"
        },
        cell_17:{
            cell_number:17,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_18:{
            cell_number:18,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_19:{
            cell_number:19,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_20:{
            cell_number:20,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_21:{
            cell_number:21,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_22:{
            cell_number:22,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_23:{
            cell_number:23,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_24:{
            cell_number:24,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_25:{
            cell_number:25,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_26:{
            cell_number:26,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_27:{
            cell_number:27,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_28:{
            cell_number:28,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_29:{
            cell_number:29,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_30:{
            cell_number:30,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_31:{
            cell_number:31,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_32:{
            cell_number:32,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_33:{
            cell_number:33,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_34:{
            cell_number:34,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_35:{
            cell_number:35,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_36:{
            cell_number:36,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_37:{
            cell_number:37,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_38:{
            cell_number:38,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_39:{
            cell_number:39,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_40:{
            cell_number:40,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_41:{
            cell_number:41,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_42:{
            cell_number:42,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_43:{
            cell_number:43,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_44:{
            cell_number:44,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_45:{
            cell_number:45,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_46:{
            cell_number:46,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_47:{
            cell_number:47,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_48:{
            cell_number:48,
            item_exists:false,
            item_colour:"",
            item_type:""
        },
        cell_49:{
            cell_number:49,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_50:{
            cell_number:50,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_51:{
            cell_number:51,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_52:{
            cell_number:52,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_53:{
            cell_number:53,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_54:{
            cell_number:54,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_55:{
            cell_number:55,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_56:{
            cell_number:56,
            item_exists:true,
            item_colour:"seashell",
            item_type:"pawn"
        },
        cell_57:{
            cell_number:57,
            item_exists:true,
            item_colour:"seashell",
            item_type:"rook"
        },
        cell_58:{
            cell_number:58,
            item_exists:true,
            item_colour:"seashell",
            item_type:"knight"
        },
        cell_59:{
            cell_number:59,
            item_exists:true,
            item_colour:"seashell",
            item_type:"bishop"
        },
        cell_60:{
            cell_number:60,
            item_exists:true,
            item_colour:"seashell",
            item_type:"queen"
        },
        cell_61:{
            cell_number:61,
            item_exists:true,
            item_colour:"seashell",
            item_type:"king"
        },
        cell_62:{
            cell_number:62,
            item_exists:true,
            item_colour:"seashell",
            item_type:"bishop"
        },
        cell_63:{
            cell_number:63,
            item_exists:true,
            item_colour:"seashell",
            item_type:"knight"
        },
        cell_64:{
            cell_number:64,
            item_exists:true,
            item_colour:"seashell",
            item_type:"rook"
        }
    };
}

function set_chesspieces_in_initial_position(){
    var i=0;
    for(i=0;i<64;i++){
        if(eval("box.cell_"+(i+1)+".item_exists")==true){
            document.getElementById("piece_"+(i+1)).setAttribute("src","assets/"+eval("box.cell_"+(i+1)+".item_colour")+"_"+eval("box.cell_"+(i+1)+".item_type")+".png");
        }
        else{
            document.getElementById("piece_"+(i+1)).setAttribute("src","assets/blank.png");
        }
    }
}
var p=0;/* <--previously selected cell number */ var is_an_item_selected=false;
var turn_of_colour="seashell";
function select_box(i){
    var temp_box_i; var temp_box_p; var box_colour;
    if(is_an_item_selected==true && (document.getElementById("cell_number_"+(i)).style.backgroundColor=="yellow")){
        reset_box_colours();
        is_an_item_selected=false;
        p=0;
    }
    else if(is_an_item_selected==true){
        if((document.getElementById("cell_number_"+(i)).style.backgroundColor=="cyan")||(document.getElementById("cell_number_"+(i)).style.backgroundColor=="magenta")){
            temp_box_i=eval("box.cell_"+i);
            temp_box_p=eval("box.cell_"+p);
            temp_box_i.item_exists=temp_box_p.item_exists;
            temp_box_i.item_type=temp_box_p.item_type;
            temp_box_i.item_colour=temp_box_p.item_colour;
            if(temp_box_i.item_colour=="saddlebrown" && temp_box_i.item_type=="pawn" && i>56){
                temp_box_i.item_type="queen";
            }
            if(temp_box_i.item_colour=="seashell" && temp_box_i.item_type=="pawn" && i<9){
                temp_box_i.item_type="queen";
            }
            document.getElementById("piece_"+i).setAttribute("src","assets/"+eval("box.cell_"+i+".item_colour")+"_"+eval("box.cell_"+i+".item_type")+".png");
            document.getElementById("piece_"+p).setAttribute("src","assets/blank.png");
            if(turn_of_colour=="seashell"){
                turn_of_colour="saddlebrown";
            }
            else if(turn_of_colour=="saddlebrown"){
                turn_of_colour="seashell";
            }
            temp_box_p.item_exists=false;
            temp_box_p.item_type="";
            temp_box_p.item_colour="";
            reset_box_colours();
            is_an_item_selected=false;
            p=0;
        }
    }
    else if(is_an_item_selected==false){
        if((eval("box.cell_"+(i)+".item_colour")==turn_of_colour)){        
            if(eval("box.cell_"+(i)+".item_exists")==true){
                box_colour=document.getElementById("cell_number_"+(i)).style.backgroundColor;
                document.getElementById("cell_number_"+(i)).style.backgroundColor="yellow";
                p=i;
                is_an_item_selected=true;
            }
            pawn_movement(i);
            rook_movement(i);
            bishop_movement(i,box_colour);
            knight_movement(i,box_colour);
            queen_movement(i,box_colour);
            king_movement(i);
        }
    }


}

function rook_movement(i){
    var left; var right; var top; var bottom; var left_limit; var right_limit; var top_limit; var bottom_limit;
        /* -- seashell rook -- */
        if(eval("box.cell_"+i+".item_type")=="rook"){

            /* ---- horizontal ---- */

            if(i>0 && i<9){
                left_limit=0; right_limit=9; 
            }
            else if(i>8 && i<17){
                left_limit=8; right_limit=17; 
            }
            else if(i>16 && i<25){
                left_limit=16; right_limit=25; 
            }
            else if(i>24 && i<33){
                left_limit=24; right_limit=33;
            }
            else if(i>32 && i<41){
                left_limit=32; right_limit=41;
            }
            else if(i>40 && i<49){
                left_limit=40; right_limit=49;
            }
            else if(i>48 && i<57){
                left_limit=48; right_limit=57;
            }
            else if(i>56 && i<65){
                left_limit=56; right_limit=65;
            }
            left=i; right=i; 
            
            while(left>left_limit){
                left=left-1;
                if(left>left_limit){
                    if(eval("box.cell_"+left+".item_exists")==true){
                        if(eval("box.cell_"+left+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                            document.getElementById("cell_number_"+left).style.backgroundColor="magenta";
                            break;
                        }
                        else if(eval("box.cell_"+left+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                            document.getElementById("cell_number_"+left).style.backgroundColor="magenta";
                            break;
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        document.getElementById("cell_number_"+left).style.backgroundColor="cyan";
                    }
                }
            }
            while(right<right_limit){
                right=right+1;
                if(right<right_limit){
                    if(eval("box.cell_"+right+".item_exists")==true){
                        if(eval("box.cell_"+right+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                            document.getElementById("cell_number_"+right).style.backgroundColor="magenta";
                            break;
                        }
                        else if(eval("box.cell_"+right+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                            document.getElementById("cell_number_"+right).style.backgroundColor="magenta";
                            break;
                        }
                        else{
                            break;
                        }
                    }
                    else{    
                        document.getElementById("cell_number_"+right).style.backgroundColor="cyan";
                    }
                }
            }
            

            /* ---- vertical ---- */
            top_limit=0; bottom_limit=65;
            top=i; bottom=i; 
            
            while(top>top_limit){
                top=top-8;
                if(top>top_limit){
                    if(eval("box.cell_"+top+".item_exists")==true){
                        if(eval("box.cell_"+top+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                            document.getElementById("cell_number_"+top).style.backgroundColor="magenta";
                            break;
                        }
                        else if(eval("box.cell_"+top+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                            document.getElementById("cell_number_"+top).style.backgroundColor="magenta";
                            break;
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        document.getElementById("cell_number_"+top).style.backgroundColor="cyan";
                    }
                }
            }
            while(bottom<bottom_limit){
                bottom=bottom+8;
                if(bottom<bottom_limit){
                    if(eval("box.cell_"+bottom+".item_exists")==true){
                        if(eval("box.cell_"+bottom+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                            document.getElementById("cell_number_"+bottom).style.backgroundColor="magenta";
                            break;
                        }
                        else if(eval("box.cell_"+bottom+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                            document.getElementById("cell_number_"+bottom).style.backgroundColor="magenta";
                            break;
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        document.getElementById("cell_number_"+bottom).style.backgroundColor="cyan";
                    }
                }
            }
        }
}

function pawn_movement(i){
        /* -- seashell pawn -- */
        if(eval("box.cell_"+(i)+".item_type")==="pawn" && eval("box.cell_"+(i)+".item_colour")==="seashell"){
            if(i>48 && i<57){
                if(eval("box.cell_"+(i-8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-8)).style.backgroundColor="cyan";
                }
                if(eval("box.cell_"+(i-8)+".item_exists")==false && eval("box.cell_"+(i-16)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-16)).style.backgroundColor="cyan";
                }
                if(i-9>0 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i-9)+".item_exists")==true && eval("box.cell_"+(i-9)+".item_colour")=="saddlebrown"){
                        document.getElementById("cell_number_"+(i-9)).style.backgroundColor="magenta";
                    }
                }
                if(i-7>0 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i-7)+".item_exists")==true && eval("box.cell_"+(i-7)+".item_colour")=="saddlebrown"){
                        document.getElementById("cell_number_"+(i-7)).style.backgroundColor="magenta";
                    }
                }
            }
            else if(i>8){
                if(eval("box.cell_"+(i-8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i-8)).style.backgroundColor="cyan";
                }
                if(i-9>0 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i-9)+".item_exists")==true && eval("box.cell_"+(i-9)+".item_colour")=="saddlebrown"){
                        document.getElementById("cell_number_"+(i-9)).style.backgroundColor="magenta";
                    }
                }
                if(i-7>0 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i-7)+".item_exists")==true && eval("box.cell_"+(i-7)+".item_colour")=="saddlebrown"){
                        document.getElementById("cell_number_"+(i-7)).style.backgroundColor="magenta";
                    }
                }
            }
        }
        /* -- saddlebrown pawn -- */
        if(eval("box.cell_"+(i)+".item_type")==="pawn" && eval("box.cell_"+(i)+".item_colour")==="saddlebrown"){
            if(i>8 && i<17){
                if(eval("box.cell_"+(i+8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+8)).style.backgroundColor="cyan";
                }
                if(eval("box.cell_"+(i+8)+".item_exists")==false && eval("box.cell_"+(i+16)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+16)).style.backgroundColor="cyan";
                }
                if(i+9<65 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i+9)+".item_exists")==true && eval("box.cell_"+(i+9)+".item_colour")=="seashell"){
                        document.getElementById("cell_number_"+(i+9)).style.backgroundColor="magenta";
                    }
                }
                if(i+7<65 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i+7)+".item_exists")==true && eval("box.cell_"+(i+7)+".item_colour")=="seashell"){
                        document.getElementById("cell_number_"+(i+7)).style.backgroundColor="magenta";
                    }
                }            
            }
            else if(i<57){
                if(eval("box.cell_"+(i+8)+".item_exists")==false){
                    document.getElementById("cell_number_"+(i+8)).style.backgroundColor="cyan";
                }
                if(i+9<65 && i!=8 && i!=16 && i!=24 && i!=32 && i!=40 && i!=48 && i!=56){
                    if(eval("box.cell_"+(i+9)+".item_exists")==true && eval("box.cell_"+(i+9)+".item_colour")=="seashell"){
                        document.getElementById("cell_number_"+(i+9)).style.backgroundColor="magenta";
                    }
                }
                if(i+7<65 && i!=1 && i!=9 && i!=17 && i!=25 && i!=33 && i!=41 && i!=49){
                    if(eval("box.cell_"+(i+7)+".item_exists")==true && eval("box.cell_"+(i+7)+".item_colour")=="seashell"){
                        document.getElementById("cell_number_"+(i+7)).style.backgroundColor="magenta";
                    }
                }
            }
        }
}

function bishop_movement(i,box_colour){
    var northeast; var southeast; var southwest; var northwest; var item_colour;
    item_colour=eval("box.cell_"+i+".item_colour");
    northeast=i-7; southeast=i+9; southwest=i+7; northwest=i-9;
    if(eval("box.cell_"+i+".item_exists")==true && eval("box.cell_"+i+".item_type")=="bishop"){
        while(northeast>0 && document.getElementById("cell_number_"+northeast).style.backgroundColor==box_colour){
            if(eval("box.cell_"+northeast+".item_exists")==true && eval("box.cell_"+northeast+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+northeast).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+northeast+".item_exists")==true && eval("box.cell_"+northeast+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+northeast).style.backgroundColor="cyan";
            }
            northeast=northeast-7;
        }
        while(southeast<65 && document.getElementById("cell_number_"+southeast).style.backgroundColor==box_colour){
            if(eval("box.cell_"+southeast+".item_exists")==true && eval("box.cell_"+southeast+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+southeast).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+southeast+".item_exists")==true && eval("box.cell_"+southeast+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+southeast).style.backgroundColor="cyan";
            }
            southeast=southeast+9;
        }
        while(southwest<65 && document.getElementById("cell_number_"+southwest).style.backgroundColor==box_colour){
            if(eval("box.cell_"+southwest+".item_exists")==true && eval("box.cell_"+southwest+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+southwest).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+southwest+".item_exists")==true && eval("box.cell_"+southwest+".item_colour")==item_colour){
                break;
            }
            else{            
                document.getElementById("cell_number_"+southwest).style.backgroundColor="cyan";
            }
            southwest=southwest+7;
        }
        while(northwest>0 && document.getElementById("cell_number_"+northwest).style.backgroundColor==box_colour){
            if(eval("box.cell_"+northwest+".item_exists")==true && eval("box.cell_"+northwest+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+northwest).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+northwest+".item_exists")==true && eval("box.cell_"+northwest+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+northwest).style.backgroundColor="cyan";
            }
            northwest=northwest-9;
        }
    }
    
}

function knight_movement(i,box_colour){
    var a; var b; var c; var d; var e; var f; var g; var h; var item_colour=eval("box.cell_"+i+".item_colour");
    a=i-6; b=i-15; c=i-17; d=i-10; e=i+6; f=i+15; g=i+17; h=i+10;
    if(eval("box.cell_"+i+".item_type")=="knight"){
        if(a>0){
            if(document.getElementById("cell_number_"+a).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+a+".item_exists")==true && eval("box.cell_"+a+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+a+".item_exists")==true && eval("box.cell_"+a+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+a).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+a).style.backgroundColor="cyan";
                }
            }
        }
        if(b>0){
            if(document.getElementById("cell_number_"+b).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+b+".item_exists")==true && eval("box.cell_"+b+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+b+".item_exists")==true && eval("box.cell_"+b+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+b).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+b).style.backgroundColor="cyan";
                }
            }
        }
        if(c>0){
            if(document.getElementById("cell_number_"+c).style.backgroundColor!=box_colour){ 
                if(eval("box.cell_"+c+".item_exists")==true && eval("box.cell_"+c+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+c+".item_exists")==true && eval("box.cell_"+c+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+c).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+c).style.backgroundColor="cyan";
                }
            }
        }
        if(d>0){
            if(document.getElementById("cell_number_"+d).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+d+".item_exists")==true && eval("box.cell_"+d+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+d+".item_exists")==true && eval("box.cell_"+d+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+d).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+d).style.backgroundColor="cyan";
                }
            }
        }
        if(e<65){
            if(document.getElementById("cell_number_"+e).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+e+".item_exists")==true && eval("box.cell_"+e+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+e+".item_exists")==true && eval("box.cell_"+e+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+e).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+e).style.backgroundColor="cyan";
                }
            }
        }
        if(f<65){
            if(document.getElementById("cell_number_"+f).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+f+".item_exists")==true && eval("box.cell_"+f+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+f+".item_exists")==true && eval("box.cell_"+f+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+f).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+f).style.backgroundColor="cyan";
                }
            }
        }
        if(g<65){
            if(document.getElementById("cell_number_"+g).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+g+".item_exists")==true && eval("box.cell_"+g+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+g+".item_exists")==true && eval("box.cell_"+g+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+g).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+g).style.backgroundColor="cyan";
                }
            }
        }
        if(h<65){
            if(document.getElementById("cell_number_"+h).style.backgroundColor!=box_colour){
                if(eval("box.cell_"+h+".item_exists")==true && eval("box.cell_"+h+".item_colour")==item_colour){
                    
                }
                else if(eval("box.cell_"+h+".item_exists")==true && eval("box.cell_"+h+".item_colour")!=item_colour){
                    document.getElementById("cell_number_"+h).style.backgroundColor="magenta";
                }
                else{
                    document.getElementById("cell_number_"+h).style.backgroundColor="cyan";
                }
            }
        }
    }
    
}

function queen_movement(i,box_colour){
        var left; var right; var top; var bottom; var left_limit; var right_limit; var top_limit; var bottom_limit;
            /* -- seashell rook -- */
            if(eval("box.cell_"+i+".item_type")=="queen"){
    
                /* ---- horizontal ---- */
    
                if(i>0 && i<9){
                    left_limit=0; right_limit=9; 
                }
                else if(i>8 && i<17){
                    left_limit=8; right_limit=17; 
                }
                else if(i>16 && i<25){
                    left_limit=16; right_limit=25; 
                }
                else if(i>24 && i<33){
                    left_limit=24; right_limit=33;
                }
                else if(i>32 && i<41){
                    left_limit=32; right_limit=41;
                }
                else if(i>40 && i<49){
                    left_limit=40; right_limit=49;
                }
                else if(i>48 && i<57){
                    left_limit=48; right_limit=57;
                }
                else if(i>56 && i<65){
                    left_limit=56; right_limit=65;
                }
                left=i; right=i; 
                
                while(left>left_limit){
                    left=left-1;
                    if(left>left_limit){
                        if(eval("box.cell_"+left+".item_exists")==true){
                            if(eval("box.cell_"+left+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                                document.getElementById("cell_number_"+left).style.backgroundColor="magenta";
                                break;
                            }
                            else if(eval("box.cell_"+left+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                                document.getElementById("cell_number_"+left).style.backgroundColor="magenta";
                                break;
                            }
                            else{
                                break;
                            }
                        }
                        else{
                            document.getElementById("cell_number_"+left).style.backgroundColor="cyan";
                        }
                    }
                }
                while(right<right_limit){
                    right=right+1;
                    if(right<right_limit){
                        if(eval("box.cell_"+right+".item_exists")==true){
                            if(eval("box.cell_"+right+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                                document.getElementById("cell_number_"+right).style.backgroundColor="magenta";
                                break;
                            }
                            else if(eval("box.cell_"+right+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                                document.getElementById("cell_number_"+right).style.backgroundColor="magenta";
                                break;
                            }
                            else{
                                break;
                            }
                        }
                        else{    
                            document.getElementById("cell_number_"+right).style.backgroundColor="cyan";
                        }
                    }
                }
                
    
                /* ---- vertical ---- */
                top_limit=0; bottom_limit=65;
                top=i; bottom=i; 
                
                while(top>top_limit){
                    top=top-8;
                    if(top>top_limit){
                        if(eval("box.cell_"+top+".item_exists")==true){
                            if(eval("box.cell_"+top+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                                document.getElementById("cell_number_"+top).style.backgroundColor="magenta";
                                break;
                            }
                            else if(eval("box.cell_"+top+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                                document.getElementById("cell_number_"+top).style.backgroundColor="magenta";
                                break;
                            }
                            else{
                                break;
                            }
                        }
                        else{
                            document.getElementById("cell_number_"+top).style.backgroundColor="cyan";
                        }
                    }
                }
                while(bottom<bottom_limit){
                    bottom=bottom+8;
                    if(bottom<bottom_limit){
                        if(eval("box.cell_"+bottom+".item_exists")==true){
                            if(eval("box.cell_"+bottom+".item_colour")=="saddlebrown" && eval("box.cell_"+i+".item_colour")=="seashell"){
                                document.getElementById("cell_number_"+bottom).style.backgroundColor="magenta";
                                break;
                            }
                            else if(eval("box.cell_"+bottom+".item_colour")=="seashell" && eval("box.cell_"+i+".item_colour")=="saddlebrown"){
                                document.getElementById("cell_number_"+bottom).style.backgroundColor="magenta";
                                break;
                            }
                            else{
                                break;
                            }
                        }
                        else{
                            document.getElementById("cell_number_"+bottom).style.backgroundColor="cyan";
                        }
                    }
                }
            }
    


/* -------------------------- Diagonal Movements ---------------------------------*/


    var northeast; var southeast; var southwest; var northwest; var item_colour;
    item_colour=eval("box.cell_"+i+".item_colour");
    northeast=i-7; southeast=i+9; southwest=i+7; northwest=i-9;
    if(eval("box.cell_"+i+".item_exists")==true && eval("box.cell_"+i+".item_type")=="queen"){
        while(northeast>0 && document.getElementById("cell_number_"+northeast).style.backgroundColor==box_colour){
            if(eval("box.cell_"+northeast+".item_exists")==true && eval("box.cell_"+northeast+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+northeast).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+northeast+".item_exists")==true && eval("box.cell_"+northeast+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+northeast).style.backgroundColor="cyan";
            }
            northeast=northeast-7;
        }
        while(southeast<65 && document.getElementById("cell_number_"+southeast).style.backgroundColor==box_colour){
            if(eval("box.cell_"+southeast+".item_exists")==true && eval("box.cell_"+southeast+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+southeast).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+southeast+".item_exists")==true && eval("box.cell_"+southeast+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+southeast).style.backgroundColor="cyan";
            }
            southeast=southeast+9;
        }
        while(southwest<65 && document.getElementById("cell_number_"+southwest).style.backgroundColor==box_colour){
            if(eval("box.cell_"+southwest+".item_exists")==true && eval("box.cell_"+southwest+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+southwest).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+southwest+".item_exists")==true && eval("box.cell_"+southwest+".item_colour")==item_colour){
                break;
            }
            else{            
                document.getElementById("cell_number_"+southwest).style.backgroundColor="cyan";
            }
            southwest=southwest+7;
        }
        while(northwest>0 && document.getElementById("cell_number_"+northwest).style.backgroundColor==box_colour){
            if(eval("box.cell_"+northwest+".item_exists")==true && eval("box.cell_"+northwest+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+northwest).style.backgroundColor="magenta";
                break;
            }
            else if(eval("box.cell_"+northwest+".item_exists")==true && eval("box.cell_"+northwest+".item_colour")==item_colour){
                break;
            }
            else{
                document.getElementById("cell_number_"+northwest).style.backgroundColor="cyan";
            }
            northwest=northwest-9;
        }
    }
    
}

function king_movement(i){
    if(eval("box.cell_"+i+".item_type")=="king"){
        item_colour=eval("box.cell_"+i+".item_colour");
        a=i+8;b=i-8;c=i+9;d=i-9;e=i+7;f=i-7;g=i+1;h=i-1;
        if(a<65){
            if(eval("box.cell_"+a+".item_exists")==true && eval("box.cell_"+a+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+a+".item_exists")==true && eval("box.cell_"+a+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+a).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+a).style.backgroundColor="cyan";
            }
        }
        if(c<65){
            if(eval("box.cell_"+c+".item_exists")==true && eval("box.cell_"+c+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+c+".item_exists")==true && eval("box.cell_"+c+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+c).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+c).style.backgroundColor="cyan";
            }
        }
        if(e<65){
            if(eval("box.cell_"+e+".item_exists")==true && eval("box.cell_"+e+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+e+".item_exists")==true && eval("box.cell_"+e+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+e).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+e).style.backgroundColor="cyan";
            }
        }
        if(g<65){
            if(eval("box.cell_"+g+".item_exists")==true && eval("box.cell_"+g+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+g+".item_exists")==true && eval("box.cell_"+g+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+g).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+g).style.backgroundColor="cyan";
            }
        }
        if(b>0){
            if(eval("box.cell_"+b+".item_exists")==true && eval("box.cell_"+b+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+b+".item_exists")==true && eval("box.cell_"+b+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+b).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+b).style.backgroundColor="cyan";
            }
        }
        if(d>0){
            if(eval("box.cell_"+d+".item_exists")==true && eval("box.cell_"+d+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+d+".item_exists")==true && eval("box.cell_"+d+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+d).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+d).style.backgroundColor="cyan";
            }
        }
        if(f>0){
            if(eval("box.cell_"+f+".item_exists")==true && eval("box.cell_"+f+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+f+".item_exists")==true && eval("box.cell_"+f+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+f).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+f).style.backgroundColor="cyan";
            }
        }
        if(h>0){
            if(eval("box.cell_"+h+".item_exists")==true && eval("box.cell_"+h+".item_colour")==item_colour){

            }
            else if(eval("box.cell_"+h+".item_exists")==true && eval("box.cell_"+h+".item_colour")!=item_colour){
                document.getElementById("cell_number_"+h).style.backgroundColor="magenta";
            }
            else{
                document.getElementById("cell_number_"+h).style.backgroundColor="cyan";
            }
        }
    }
}

function reset_box_colours(){
    var l=0;m=0;n=0;var seashell="saddlebrown"; var saddlebrown="saddlebrown";
    for(l=0;l<8;l++){
        if(l%2==0){
            seashell="seashell"; saddlebrown="saddlebrown";
        }
        else{
            seashell="saddlebrown"; saddlebrown="seashell";
        }
        for(m=0;m<8;m++){
            if(m%2==0){
                document.getElementsByClassName("box")[n].style.backgroundColor=seashell;
            }
            else{
                document.getElementsByClassName("box")[n].style.backgroundColor=saddlebrown;       
            }
            n++;
        }
    }
}