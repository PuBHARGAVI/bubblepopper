var words=['bhargavi','akhila','srimathi','rhea','harsh'];
var score=0;
var s="";
var c=0;
var hitc=0;
var arrele=[];
var level=1;
var leveltimer=3;
var levelarray=["level0","level1","level2","level3"];
function start(){
    var timeremaining=15000;
    document.getElementById("div0").style.display='none';
    document.getElementById("div1").style.display='block';
    document.getElementById("text").innerHTML=words[0];
    var interval=setInterval(function(){
        if(level==4){
            clearInterval(interval);
        }    
        console.log(words[c]);
            console.log(s);
            //ReactDOM.render(ele,document.getElementById('root'));
            if(level==4){
                    clearInterval(interval);
            }
            if(c==words.length-1){
                if(level==1){
                    if(words[c]==s){
                        score=score+1;
                    }
                if(score>=4){
                    level=level+1;
                    console.log(level);
                    c=-1;
                    words=['veda','preethi','manju','venkatesh','vyshnavi'];
                    document.getElementById("score").innerHTML=score;
                    document.getElementById("level").innerHTML=levelarray[level];
                }
                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("div1").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
                }
            else if(level==2){
                if(words[c]==s){
                    score=score+2;
                }
                if(score>=9){
                    console.log("level2");
                    level=level+1;
                    c=-1;
                    words=['gayathri','manju','atchaya','veda','rani'];
                    document.getElementById("score").innerHTML=score;
                document.getElementById("level").innerHTML=levelarray[level];
            }

                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("div1").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            else if(level==3){
                if(words[c]==s){
                    score=score+3;
                }
                if(score>=18){
                    level=level+1;
                    c=-1;
                    document.getElementById("score").innerHTML=score;              
                document.getElementById("level").innerHTML=levelarray[level];
            }
                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("div1").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            }
            else if(words[c]==s){
                scoreincrement();
                document.getElementById("score").innerHTML=score;
                console.log(c);
            }
            console.log(c);
            nextbuttonaudio();
        s="";
        if(c==-1){
            wait();
            console.log("level");
            console.log(level);
            timeremaining=timeremaining+5000
        }
        c=c+1;
        console.log("after");
        console.log(c);
        console.log
        console.log(words);
        document.getElementById("text").innerHTML=words[c];
        showbubble();
        
    }, timeremaining);
    }
function scoreincrement(){
    if(level==1){
        score=score+1;
        }
        else if(level==2){
        score=score+2;
        }
        else if(level==3){
        score=score+3;
        }
}
function nextbuttonaudio(){
    var audio = new Audio('assets/nextbutton.mp3');
    audio.play();
}    
function playbubbleaudio(){
    var audio = new Audio('assets/bubblesound.mp3');
    audio.play();
}    
function hidebubble(id){
    console.log(document.getElementById(id).value);
    playbubbleaudio();
    s=s+document.getElementById(id).value;
    document.getElementById(id).style.display = 'none';
    hitc=hitc+1;
    arrele.push(id);
}
function showbubble(){
    for(var i=0;i<arrele.length;i++){
        document.getElementById(arrele[i]).style.display='block';
    }
}
function editcharacter(){
    var popele=arrele.pop();
    s = s.substring(0, s.length-1);
    document.getElementById(popele).style.display='block';
}
function wait(){
    document.getElementById("div1").style.display='none';
    if(level==4){
        document.getElementById("div1").style.display='none';
        document.getElementById("over").innerHTML=score;
        document.getElementById("gameover").style.display='block';
    }
if(level!=4){
    var levelinterval=setInterval(function(){
        document.getElementById("levelinterval").style.display='block';   
        document.getElementById("timer").innerHTML=leveltimer;
           leveltimer=leveltimer-1;
           if(leveltimer==0){
               leveltimer=5;
               document.getElementById("div1").style.display='block';
               document.getElementById("levelinterval").style.display='none';
               clearInterval(levelinterval);
           } 
    },1000);
}
}