var scores,activePlayer,roundScore,gamePlaying;

gameinit();
document.querySelector('.btn-roll').addEventListener('click',function()
  { 
    if(gamePlaying)
        
        {
   var dice =Math.floor(Math.random()*6 +1);
    
document.querySelector('.dice').style.display='block';
    
document.querySelector('.dice').src='dice-'+ dice +'.png';
    if(dice!==1)
        {
            roundScore += dice;
            
          document.getElementById('current-'+activePlayer).textContent=roundScore;
            
        }
    else
        {
            nextPlayer();
        }
    }
    
});
document.querySelector('.btn-hold').addEventListener('click',function()
                                                         
        {
       if(gamePlaying)
           
           {
        scores[activePlayer]=scores[activePlayer]  +  roundScore;
         document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
     
    if(scores[activePlayer]>=100)
        {
            document.getElementById('name-'+activePlayer).textContent='Winner!!!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        
            
            
        }
    else
    {nextPlayer();}
       }
       
        });




document.querySelector('.btn-new').addEventListener('click',gameinit);


function gameinit()
{
     scores=[0,0],activePlayer=0,roundScore=0;
    gamePlaying=true;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').innerHTML='0';
document.getElementById('score-1').innerHTML='0';
document.getElementById('current-0').innerHTML='0';
document.getElementById('current-1').innerHTML='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
    
document.querySelector('.player-0-panel').classList.remove('winner');
            
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
            
document.querySelector('.player-0-panel').classList.add('active');

        

}



function nextPlayer()
{
     roundScore=0;
            document.getElementById('current-'+activePlayer).textContent=0;
            activePlayer===0 ? activePlayer=1 :activePlayer=0;
            console.log(activePlayer);
           document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display='none';
  
    
     
    
    
    
}