var arr=['bhargavi','akhila','srimathi','rhea','harsh'];
var sc=0;
var s="";
var c=0;
var hitc=0;
var arrele=[];
var level=1;
var levelarray=["level0","level1","level2","level3"];
function start(){
    document.getElementById("div0").style.display='none';
    document.getElementById("div1").style.display='block';
    document.getElementById("text").innerHTML=arr[0];
    var interval=setInterval(function(){
            console.log(arr[c]);
            console.log(s);
            //ReactDOM.render(ele,document.getElementById('root'));
            if(level==4){
                document.getElementById("div1").style.display='none';
                document.getElementById("over").innerHTML=sc;
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
            }
            if(c==arr.length-1){
                if(level==1){
                    if(arr[c]==s){
                        sc=sc+1;
                    }
                if(sc>=4){
                    console.log("ji");
                    level=level+1;
                    console.log(level);
                    c=-1;
                    document.getElementById("score").innerHTML=sc;
                document.getElementById("level").innerHTML=levelarray[level];
                }
                else{
                    document.getElementById("over").innerHTML=sc;
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
                }
            else if(level==2){
                if(arr[c]==s){
                    sc=sc+2;
                }
                if(sc>=9){
                    console.log("level2");
                    level=level+1;
                    c=-1;
                    document.getElementById("score").innerHTML=sc;
                document.getElementById("level").innerHTML=levelarray[level];
                }
                else{
                    document.getElementById("over").innerHTML=sc;
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            else if(level==3){
                if(arr[c]==s){
                    sc=sc+3;
                }
                if(sc>=18){
                    level=level+1;
                    c=-1;
                    document.getElementById("score").innerHTML=sc;
                document.getElementById("level").innerHTML=levelarray[level];
                }
                else{
                    document.getElementById("over").innerHTML=sc;
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            }
            else if(arr[c]==s){
                if(level==1){
                sc=sc+1;
                }
                else if(level==2){
                sc=sc+2;
                }
                else if(level==3){
                sc=sc+3;
                }
                document.getElementById("score").innerHTML=sc;
                console.log(c);
            }
                console.log("bow");
                console.log(c);
        var audio = new Audio('assets/nextbutton.mp3');
        audio.play();
        s="";
        c=c+1;
        document.getElementById("text").innerHTML=arr[c];
        for(var i=0;i<arrele.length;i++){
            document.getElementById(arrele[i]).style.display='block';
        }
    }, 15000);
    }
function hide(id){
    var audio = new Audio('assets/bubblesound.mp3');
    audio.play();
    s=s+document.getElementById(id).value;
    document.getElementById(id).style.display = 'none';
    hitc=hitc+1;
    arrele.push(id);
}
