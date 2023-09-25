let result;
function scuberGreetingForFeet(ride){
 

if (ride<=400)
{
  result='This one is on me!';
} 
else if (ride>400 && ride <=2000){
result='That will be twenty bucks.';
}
else if(ride>2000 && ride<=2500)
{
  result='I will gladly take your thirty bucks.';
}
else if(ride>2500)
{
  result='No can do.';
}
return result;
  // Write your code here!
}

function ternaryCheckCity(city){
  if (city==='NYC')
  {
result='Ok, sounds good.';
  }
  else if(city==='Pittsburgh')
  {
    result='No go.';
  }
  return result;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip)
  {
    case 'generous':
       result='Thank you so much.';
       break;
    case 'not as generous' : 
    result='Thank you.';
    break;
    default :
    result='Bye.';
    break;
  }
return result;
  // Write your code here!
}