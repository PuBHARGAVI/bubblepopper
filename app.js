var words=['bhargavi','akhila','srimathi','rhea','harsh'];
var score=0;
var currentword="";
var currentwordindex=0;
var poppedbubbles=[];
var level=1;
var leveltimer=3;
var levelarray=["level0","level1","level2","level3"];

function startgame(){
    var timeremaining=1000;
    document.getElementById("Logo").style.display='none';
    document.getElementById("Game").style.display='block';
    document.getElementById("text").innerHTML=words[0];
    var interval=setInterval(function(){
        if(level==4){
            clearInterval(interval);
        }    
        console.log(words[currentwordindex]);
            console.log(currentword);
            //ReactDOM.render(ele,document.getElementById('root'));
            if(level==4){
                    clearInterval(interval);
            }
            if(currentwordindex==words.length-1){
                if(level==1){
                    if(words[currentwordindex]==currentword){
                        score=score+1;
                    }
                wordstatus();
                if(score>=4){
                    level=level+1;
                    console.log(level);
                    currentwordindex=-1;
                    words=['veda','preethi','manju','venkatesh','vyshnavi'];
                    document.getElementById("score").innerHTML=score;
                    document.getElementById("level").innerHTML=levelarray[level];
                }
                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("Game").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
                }
            else if(level==2){
                if(words[currentwordindex]==currentword){
                    score=score+2;
                }
                wordstatus();
                if(score>=9){
                    console.log("level2");
                    level=level+1;
                    currentwordindex=-1;
                    words=['gayathri','manju','deeksha','veda','rani'];
                    document.getElementById("score").innerHTML=score;
                document.getElementById("level").innerHTML=levelarray[level];
            }

                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("Game").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            else if(level==3){
                if(words[currentwordindex]==currentword){
                    score=score+3;
                }
                wordstatus();
                if(score>=18){
                    level=level+1;
                    currentwordindex=-1;
                    document.getElementById("score").innerHTML=score;              
                document.getElementById("level").innerHTML=levelarray[level];
            }
                else{
                    document.getElementById("over").innerHTML=score;
                    document.getElementById("Game").style.display='none';
                document.getElementById("lost").style.display='block';
                document.getElementById("gameover").style.display='block';
                clearInterval(interval);
                }
            }
            }
            else if(words[currentwordindex]==currentword){
                scoreincrement();
                document.getElementById("score").innerHTML=score;
                console.log(currentwordindex);
            }
            wordstatus();
            console.log(currentwordindex);
            nextbuttonaudio();
        currentword="";
        if(currentwordindex==-1){
            wait();
            console.log("level");
            console.log(level);
            timeremaining=timeremaining+5000
        }
        currentwordindex=currentwordindex+1;
        console.log(words);
        document.getElementById("text").innerHTML=words[currentwordindex];
        showbubble();
        
    }, timeremaining);
    }

//used to increment the score
function scoreincrement(){
    document.getElementById("status").innerHTML="Correct";
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
    currentword=currentword+document.getElementById(id).value;
    document.getElementById(id).style.display = 'none';
    poppedbubbles.push(id);
}

//to display the bubble
function showbubble(){
    for(var i=0;i<poppedbubbles.length;i++){
        document.getElementById(poppedbubbles[i]).style.display='block';
    }
}

//to delete the last popped character
function undocharacter(){
    var popele=poppedbubbles.pop();
    currentword = currentword.substring(0, currentword.length-1);
    document.getElementById(popele).style.display='block';
}

//to wait between the levels
function wait(){
    document.getElementById("Game").style.display='none';
    if(level==4){
        document.getElementById("Game").style.display='none';
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
               document.getElementById("Game").style.display='block';
               document.getElementById("levelinterval").style.display='none';
               clearInterval(levelinterval);
           } 
    },1000);
}
}

function wordstatus(){
    var status="wrong";
    if(currentword==words[currentwordindex]){
        status="correct";
    }
    var wordstatus="the correct word is: "+words[currentwordindex]+"<br>the word entered by you is: "+currentword+"<br>status is: "+status;
    document.getElementById("status").innerHTML=wordstatus;   
}