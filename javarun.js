//Register at https://freebitco.in/?r=5001442 test the bot //
// version 4.22
// If you want to futher support it, feel free to test it on new created accounts via my ref https://freebitco.in/?r=5001442 so i can get couple of satoshi and futher test/edit/update it :)
// If you want to donate some BTC for coffee used to code feel free to send it to my BTC adress: 168zV9wNoC4cNbUQmPnKHUkzKCDK43htYG
console.clear();
console.log('%cIn order to start bot please ' +'%c'+'Click START BOT from top menu on the website'+'', 'color: #00000;', 'color: #00000; font-weight: bold;');
var bversion = 4.22;
var begingbal = $('#balance').text();
var startbalance = 0;
var autorounds = 30; // play 500 rounds only
var handbrake = 0.00000024; // pause when stake reaches 1024 Satoshis
var maxroundsz = 600;
var resetroundsz = 300;
//var stopAt= '?';
var round = 0;
var gameLost=0;
var gameWin=0;
var higherbet=0;
startbalance = $('#balance').text();
var startValue = '0.00000001', // Don't lower the decimal point more than 4x of current balance
stopPercentage = 0.004, // In %. I wouldn't recommend going past 0.08 maxWait = 1000, // In milliseconds
stopped = false,
stopBefore = 1; // In minutes default 3
var oldbet= 0.00000001;
var rewardpoints = document.getElementsByClassName("reward_table_box br_0_0_5_5 user_reward_points font_bold")[0].innerHTML;
s = document.getElementById("user_lottery_tickets").innerHTML; s = s.replace(/(^\s*)|(\s*$)/gi,"");
s = s.replace(/[ ]{2,}/gi," ");
s = s.replace(/\n /,"\n"); document.getElementById("user_lottery_tickets").innerHTML = s;
document.getElementById("free_play_link_li").innerHTML = '<a href="#" onclick="startGame()" class="free_play_link">START BOT</a>';
var $loButton = $('#double_your_btc_bet_lo_button'),
$hiButton = $('#double_your_btc_bet_hi_button'); var $loBetbutton = $('#double_your_btc_min');
function higherBet(){
console.log('Highest bet: '+higherbet);
}
function beginingBal(){
console.log('BTC Starting Balance: '+begingbal);
}
function rewardsBal(){
console.log('%cReward Points Balance: ' +'%c'+rewardpoints+' points', 'color: #00000;', 'color: #ff9a36; font-weight: bold;');
}
function lotteryBal(){

console.log('%cLottery Tickets Balance: ' +'%c'+ s+' tickets', 'color: #00000;', 'color: #005bb6; font-weight: bold;');
}
function donationBTC(){
console.log('%cDonate BTC for coffee: ' +'%c'+'14Ac7UpQu6gZii4qYSyMCRuziFtGkd277X', 'color: #000000;', 'color: #000000; font-weight: bold;');
}
function botNAME(){
console.log('%cFreebitcoin.in Multiply BOT version: ' +'%c'+bversion, 'color: #000000;', 'color: #ff9a36; font-weight: bold;');
}
function changeBet(bet){
startValue=bet;
}
function forceStop(){
var resetroundsyz = resetroundsz * 40700;
stopGame();
  setTimeout(startGame2, resetroundsyz);
}
function timeRemaining(){
timeR = $('title').text();
replText = timeR.replace("- FreeBitco.in - Win free bitcoins every hour!", ""); console.log('%cTime until free roll: ' +'%c'+replText, 'color: #00000; font- weight:bold;', 'color: #007a5c;font-weight:bold;');
}
function realtime(time) {
var sec_num
var hours
var minutes
var seconds
=parseInt(time, 10) ; // don't forget the second param = Math.floor(sec_num / 3600);
= Math.floor((sec_num - (hours * 3600)) / 60);
= sec_num - (hours * 3600) - (minutes * 60);
    if (hours!=0) {hours   = hours+' Hours ';}      else{hours   = '';}
    if (minutes!=0) {minutes = minutes+' Minutes ';}
else{minutes   = '';}
    if (seconds < 10) {seconds = seconds;}
    var time     = 'Time played = '+hours+minutes+seconds+' Seconds';
    return time;
}
function roundnumb(){
console.clear();
var called = false;
var maxroundx = maxroundsz * 40;
var resetroundsx = resetroundsz * 40;
var resetroundsy = resetroundsz * 40700;
var newbalance= $('#balance').text()
round = round + 1;
var roundf = (maxroundx - round);
var profit = (Number(newbalance) - Number(startbalance)).toFixed(8) ;
if (roundf > 0) {

      botNAME();
      donationBTC();
      timeRemaining();
      beginingBal();
      rewardsBal();
      lotteryBal();
console.log('Round #' + round + ' / ' +(maxroundsz * 40)+ ' which is near to '+maxroundsz+' minutes');
}
if (roundf == 0)
    {
    var counter = (resetroundsx);
                  var resBOTCountdown = setInterval(function(){
console.clear();
      botNAME();
      donationBTC();
      timeRemaining();
      beginingBal();
      rewardsBal();
      lotteryBal();
console.log('Played #' + round + ' / ' +(maxroundsz * 40)+ ' which is near to '+maxroundsz+' minutes');
console.log('Total Profit: ' + profit + ' BTC'); console.log(' ');
console.log(counter+' seconds until restart of BOT'); counter--
if (counter === -1) { clearInterval(resBOTCountdown);
console.log("Restarting BOT - Please Wait couple of more seconds so it wont double start");
                    donationBTC();
                    }
                    }, 1000);
             forceStop();
            return true;
}
console.log('Profit:' + profit + ' Bitcoin'); return false;
}
function multiply(){
var current = $('#double_your_btc_stake').val();
var multiply = (current * 2).toFixed(8); $('#double_your_btc_stake').val(multiply); console.log('Bet = ' + multiply);
                     if( higherbet < multiply ){ higherbet=multiply; }
}
function getRandomWait(){
var wait = Math.floor(Math.random() * maxWait ) + 300; //

(Math.floor(Math.random() * 800) + 300) ; // avant 100 console.log('Waiting for ' + wait + 'ms before next bet.'); return wait ;
}
function startGame(limit){ document.getElementById("free_play_link_li").innerHTML = '<a href="#" onclick="stopGame()" class="free_play_link">STOP BOT</a>';
starttime=(new Date()).getTime();
startValue = prompt("Number of satoshi you want to bet?", '0.00000001'); MaximumValue = prompt("Set Max Stake Handbrake so bot wont loose more BTC? ", '0.00000008')
MaximumTimer = prompt("Maximum number of minutes to use the Bot? ", '5'); ResetTimer = prompt("Auto Restart BOT after it stoped in minutes? ", '5'); oldbet=startValue;
handbrake=(MaximumValue / 2);
maxroundsz=MaximumTimer;
resetroundsz=ResetTimer;
    round = 0;
    gameLost=0;
    gameWin=0;
console.log('Game started!'); reset(); $loButton.trigger('click'); if(limit !== null) { autorounds=limit;
}
else
{ autorounds=-1; }
}
function startGame2(limit){ document.getElementById("free_play_link_li").innerHTML = '<a href="#" onclick="stopGame()" class="free_play_link">STOP BOT</a>'; starttime=(new Date()).getTime();
stopped = false;
oldbet=startValue;
handbrake=(MaximumValue / 2);
maxroundsz=MaximumTimer;
resetroundsz=ResetTimer;
    round = 0;
    gameLost=0;
    gameWin=0;
}
console.log('Game started!'); reset(); $loButton.trigger('click'); if(limit !== null) { autorounds=limit;
}
else
{ autorounds=-1; }
function stopGame(){ document.getElementById("free_play_link_li").innerHTML = '<a href="#" onclick="startGame()" class="free_play_link">START BOT</a>';
botNAME();

donationBTC();
console.log('Game will stop soon! Let me finish.'); stopped = true;
startValue=oldbet;
handbrake=(MaximumValue / 2);
maxroundsz=MaximumTimer;
resetroundsz=ResetTimer;
}
function reset(){
if( round % 100 === 0 && round !=0)
{
startValue=(startValue * 1.000).toFixed(8); //New bet after 100 round console.log('Round ' + round + ': bet change for ' + startValue);
}
$('#double_your_btc_stake').val(startValue);
}
// quick and dirty hack if you have very little bitcoins like 0.0000001 function deexponentize(number){
        return number * 1000000;
}
function iHaveEnoughMoni(){
var balance = deexponentize(parseFloat($('#balance').text())); var current = deexponentize($('#double_your_btc_stake').val()); return ((balance *2)/ 100) * (current*2) > stopPercentage/100;
}
function stopBeforeRedirect(){
var minutes = parseInt($('title').text()); if( minutes < stopBefore )
{
console.log('Approaching redirect! Stop the game so we don\'t get redirected while loosing.');
}
        stopGame();
        return true;
}
return false;
function stopMaxStake(){
var calleds = false;
var maxstake1 = $('#double_your_btc_stake').val(); if( maxstake1 == handbrake )
{
               if(!calleds){
console.log('Handbrake reached! Seting Minimum ammount of bet so we wont loose any more BTC');
setTimeout(function(){ $loBetbutton.trigger('click');
}, 1000);
                      calleds = true;
                  }
      else calleds = false;
}
}
// Unbind old shit $('#double_your_btc_bet_lose').unbind(); $('#double_your_btc_bet_win').unbind();

// Loser $('#double_your_btc_bet_lose').bind("DOMSubtreeModified",function(event){
if( $(event.currentTarget).is(':contains("lose")') ) {
gameLost = gameLost + 1;
roundnumb();
console.log('%cWin: ' + gameWin + ' %cLost: ' + gameLost,
'color: #007a5c', 'color: #FF0000');
endtime=(new Date()).getTime();
var time=Math.floor((endtime-starttime )/1000); if( stopBeforeRedirect() )
{
return;
                }
                if( stopMaxStake() )
                {
}
return; }
else
higherBet(); console.log(realtime(time)); console.log('You LOST!'); multiply(); setTimeout(function(){
$loButton.trigger('click'); }, getRandomWait());
//$loButton.trigger('click');
}
);
// Winner $('#double_your_btc_bet_win').bind("DOMSubtreeModified",function(event){
if( $(event.currentTarget).is(':contains("win")') ) {
gameWin = gameWin + 1;
roundnumb();
console.log('%cWin: ' + gameWin + ' %cLost: ' + gameLost, 'color: #007a5c',
'color: #FF0000');
endtime=(new Date()).getTime();
var time=Math.floor((endtime-starttime )/1000); console.log(realtime(time));
                higherBet();
            if( iHaveEnoughMoni() )
            {
console.log('You WON!');
                        reset();
            if( stopped )

} }
} }
else {
        stopped = false;
        return false;
console.log('You WON! ');
);// JavaScript Document
{
}
setTimeout(function(){
$loButton.trigger('click'); }, getRandomWait());
