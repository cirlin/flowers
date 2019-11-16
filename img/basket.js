function setvalue(name,value)
{
document.cookie=escape(name)+'='+value;
}
var bname=new Array;
var nick=new Array;
var pick=new Array;
var price=new Array;
var size=new Array;
var sum=0;
var index=0;
function readbasket()
{
sum=0;
index=0;
var allcookies=document.cookie;
if(!allcookies) return;
var cookies=allcookies.split(';');
var values=new Array;
for(var i in cookies)
    {
bname[i]=unescape(cookies[i].split('=')[0]);
values[i]=parseInt(cookies[i].split('=')[1]);
if((/Öåíà/.test(bname[i]))&&(values[i]>0))
        {
price[index]=bname[i].split(':')[1].split('-')[0];
nick[index]=bname[i].split(':')[1].split('-')[1].split('&')[0];
size[index]=values[i];
pick[index]=bname[i].split('&')[1]; 
sum=sum+values[i];
index++;
        } 
    }
}
function delspace(s)
{
return (s.charAt(0)==' ')?s.substr(1):s;
}
function getvalue(name)
{
var allcookies=document.cookie;
if(!allcookies)return 0;
var cookies=allcookies.split(';');
for(var i in cookies)
  {
var enam=delspace(unescape(cookies[i].split('=')[0]));
if(name==enam)
return parseInt(cookies[i].split('=')[1]);
  }
return 0; 
}
function incvalue()
{
var name=document.images['light'].title+'&'+document.images['light'].src;
var value=getvalue(name)+1;
setvalue(name,value);
testcookie();
}
function decvalue(name)
{
var name=document.images['light'].title+'&'+document.images['light'].src;
var value=getvalue(name);
value=(value)?value-1:0;
setvalue(name,value);
testcookie();
}
function rsbskt()
{
readbasket();
for(var i in bname)setvalue(delspace(bname[i]),0)
location.href='shop.html';
}
function testcookie()
{
readbasket();
var sm=sum%100;
var str=((sm==1)||((sm>20)&&(sm%10==1)))?' ïğåäìåò':
(((sm>1)&&(sm<5))||((sm>20)&&(sm%10>1)&&(sm%10<5)))?' ïğåäìåòà':' ïğåäìåòîâ';
if(document.getElementById('sum'))
document.getElementById('sum').value='â êîğçèíå\n'+sum+str;
}
testcookie();