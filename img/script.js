var s=location.href;
var adr=s.split('/')
adr=(adr[adr.length-1])?adr[adr.length-1].split('.')[0]:'index';
s=unescape(location.search);
s=s.split('=');
var num,nam,pat;
if(s[1])num=s[1].split('&')[0];
if(s[2])
        {
        nam=s[2].split('&')[0];
        nam=nam.toUpperCase(); 
        }
if(s[3])
       {
pat=s[3].split('&')[0];
pat=pat.toUpperCase(); 
var sex=pat.split('');
sex=sex[sex.length-1];
if(sex=='Ч')sex='ЫЙ';else if(sex=='A')sex='АЯ';else sex='ЫЙ(АЯ)';
       }
var ie=(navigator.appName=="Microsoft Internet Explorer");
s='СТРАНИЦА ОФОРМЛЯЕТСЯ';
var names=['fleshl','fleshr','shop','salon','news','paint','contact','index','season','flowers',
'holiday','composition','basket','wedding','mens','child','triumph','interer','present',
'paints','delivery'];
var bg=new Array(3);
for(var i=0;i<bg.length;i++)bg[i]=new Image;
bg[0].src='img/bgtop.jpg';
bg[1].src='img/bgm'+adr+'.jpg';
bg[2].src='img/bgbot.jpg'; 
var main=new Array(names.length);
for(var i in names)
     {
      main[i]=new Image;
      main[i].src='img/'+names[i]+'.jpg'
     }
var amain=new Array(names.length);
for(var i in names)
     {
      amain[i]=new Image;
      amain[i].src='img/a'+names[i]+'.jpg'
     }
var album=new Array(48);
var lefts=[350,775,1,242,359,507,671,342,298,298,298,298,298,298,298,298,298,298,298,298,298];
var tops=[327,327,203,203,203,203,203,17,580,595,610,625,640,655,670,685,700,715,729,745,759];
function setall()
{
with(document)
              {
var lft=Math.round(0.5*body.clientWidth)-400;
lft=(lft>0)?lft:0;
getElementById('ref').style.left=lft+71;
getElementById('fig').style.left=lft;
getElementById('book').style.left=lft+234;
switch(adr)
           {
case 'order':reserv.style.left=lft+50;
             for(var i=0;i<inputs.length;i++)
             {
             getElementById(inputs[i]).style.top=((i<inputs.length-2)?40:80)+i*38;
             if(getElementById(labs[i]))
             getElementById(labs[i]).style.top=44+i*38;
             } 
             break;
case 'shop':               
case 'ansver':
case 'contact':
             getElementById('reply').style.left=lft+50;
             break;
case 'paint':
             getElementById('m').style.left=lft+380;
	     getElementById('p').style.left=lft+380;
             getElementById('q').style.left=lft+530;	
             break;
case 'basket':
             if(getElementById('order'))
                 {
                getElementById('rsbskt').style.left=lft+240;
                getElementById('order').style.left=lft+420;
                 }
case 'wedding':
case 'mens':
case 'child':
case 'composition':
case 'baskets':
case 'season':
case 'flowers':
case 'present':
             getElementById('basket').style.left=lft+50; 
             break;    
default:
             getElementById('esse').style.left=lft;
             break; 
           } 
var o=images;
for(var i in names)
     {
o[i].src=main[i].src;
o[i].style.left=lft+lefts[i];
o[i].onmouseover=function(){activate(this,true)};
o[i].onmouseout=function(){activate(this)};
o[i].onclick=function()
            {
switch(this.id)
         {
case '0': getElementById('m').direction='left';
          break;
case '1': getElementById('m').direction='right';
          break;
case '2':
case '3':
case '5':
case '6':
case '7': trans(this.id);
          break;
case '9':
case'10':
case'12': 
case'13':
case'14':
case'19': 
case'20': getElementById('esse').src=names[this.id]+'.htm';
          getElementById('esse').style.visibility='visible';
          break; 
default:  alert(s);
         }
           }        
if((adr!=names[i])&&((adr=='index')||(adr=='salon')||
(i<8))&&((adr=='paint')||(i>1))) 
o[i].style.visibility='visible'
     }
if((adr=='paint')||(adr=='mens')||(adr=='child')||(adr=='composition')||
(adr=='baskets')||(adr=='wedding')||(adr=='season')||
(adr=='flowers')||(adr=='present'))for(var i in eval(adr))
     {
o['m'+i].src=eval(adr)[i].src;
o['m'+i].onclick=function(){vision(this.id)}
     } 
o=images['filtr'].style;
o.width=body.clientWidth;
if(adr=='salon')
  {    
getElementById('fog').style.left=lft;
for(i=0;i<6;i++)
    {
o=getElementById('t'+i);
o.onclick=function(){vision(this.id)};
     }
  }  
body.style.visibility='visible';
      } 
}
function trans(iname)
{
location.href=names[iname]+'.html';
}
function activate(o,f)
{
o.src=(f)?amain[o.id].src:main[o.id].src
}
function krash()
{
with(document)
{
var o=images;
o['light'].style.visibility='hidden';
o['filtr'].style.visibility='hidden';
if(o['ebasket'])
     {
o['ebasket'].style.visibility='hidden';
getElementById('plus').style.visibility='hidden';
getElementById('minus').style.visibility='hidden';
getElementById('sum').style.visibility='hidden';
     }
}
}
function vision(n)
{
var o=document.images['filtr'];
o.style.visibility='visible';
o=document.images['light'];
var num=n.substring(1);
o.src=(n.split('')[0]=='p')?album[num].src:eval(adr)[num].src;
o.title=((adr!='salon')&&(n.split('')[0]!='p'))?title[num]:'';
var H=document.body.clientHeight;
var h=o.height
var W=document.body.clientWidth;
var w=o.width
o.style.left=Math.round((W-parseInt(w))*0.5);
o.style.top=document.body.scrollTop+Math.round((H-parseInt(h))*0.5);
o.style.visibility='visible';
o=document.images['ebasket'];
if((o)&&(n.split('')[0]!='p'))
     {
o.style.left=document.body.clientWidth-96;
o.style.visibility='visible';
o.style.top=document.body.scrollTop;
o=document.getElementById('plus');
o.style.left=document.body.clientWidth-96;
o.style.top=document.body.scrollTop+162;
o.style.visibility='visible';
o=document.getElementById('minus');
o.style.top=document.body.scrollTop+190;
o.style.left=document.body.clientWidth-96;
o.style.visibility='visible';
o=document.getElementById('sum');
o.style.top=document.body.scrollTop+118;
o.style.left=document.body.clientWidth-96;
o.style.visibility='visible';
     } 
}
var badr="basket.html";
var oadr="order.shtml";
with(document)
{
write("<TABLE id='fig' BORDER=0>",
"<TBODY><TR HEIGHT=234><TD BACKGROUND="+bg[0].src+" WIDTH=800></TD></TR>",
"<TR HEIGHT=535><TD BACKGROUND="+bg[1].src+" WIDTH=800></TD></TR>",
"<TR HEIGHT=309><TD BACKGROUND="+bg[2].src+" WIDTH=800></TD></TR></TBODY></TABLE>");
for(var i in names)write('<IMG class="r" id='+i+' style="top:'+tops[i]+'">');
write("<IFRAME id='book' frameborder='no' scrolling='auto' src='album.html'></IFRAME>",
"<img id='filtr' class='r' src='img/filtr.png' height=1079>",
"<img id='light' class='r' onclick='krash()'>",
"<DIV id='ref'>сайт создан Rada design &#38; <A href='http://www.citronmp.ru/'>Citronmp</A></DIV>");
switch(adr)
           {
case 'ansver':
             write('<DIV id=reply><H4 align=center><I>УВАЖАЕМ'+sex+' '+nam+' '+pat+'!</I>',
             '</H4><P>Ваша заявка зарегистрирована под номером '+num+'.</P>',
             '<P>На Вашу электронную почту будет послано подтверждение заказа и ',  
             'порядок его выполнения.</P><P>Надеемся, что наши товары и наш сервис ',
             'доставят Вам удовольствие.</P></DIV>');
             break;    
case 'order':
             write('<FORM name=reserv method=post action=/cgi-bin/order.cgi',
             ' onsubmit="return formtest()" onreset="return formcleen()"><H4 align=center>', 
             '<I>Для оформления покупки заполните пожалуйста следующую анкету:</I></H4>');
             for(var i=0;i<inputs.length-2;i++)write('<DIV id='+labs[i],                         
             ' class="lab">'+labels[i]+'</DIV><INPUT name='+inputs[i],
             ' id='+inputs[i]+' onfocus="fy(this)" onblur="fw(this)">');
             write('<DIV id='+labs[7]+' class="lab">'+labels[7]+'</DIV>',
             '<SELECT name="payment" id="payment" size=1><OPTION value=0>',
             'Наличными деньгами в салоне<OPTION value=1>',
             'Наличными деньгами курьеру<OPTION value=2>Наличными деньгами',
             ' через сберкассу<OPTION value=3>Банковским переводом</SELECT>');
             for(var i=inputs.length-2;i<inputs.length;i++)write('<INPUT name='+inputs[i],
             ' id='+inputs[i]+' type='+inputs[i]+'>');
             write('<DIV id=note>Первые четыре позиции необходимо заполнить русскими ',
             'буквами.В адресе укажите индекс.Время доставки укажите в формате: ',
             'ЧЧ.ММ-ДД.ММ.ГГ</DIV></FORM>');
             break;
case 'paint': 
             write("<MARQUEE id='m' SCROLLAMOUNT='1'");
             if(ie)write("BEHAVIOR='alternate'>");else write(">");
             for(var i=0;i<paint.length;i++)write("<IMG id='m"+i+"' class='p' height=150>");
             write("</MARQUEE><img id='ebasket' class='r' src='img/ebasket.jpg' ",
             "onclick='location.href=badr'><INPUT id='sum' onclick='location.href=badr'",
             " type='button' class='b'/><INPUT id='plus' onclick='incvalue()' value=",
             "'в корзину' type='button' class='b'/><INPUT id='minus' onclick='decvalue()'",
             " value='из корзины' type='button' class='b'/><DIV id='p'>Все представленные",
             " в нашем салоне картины являются авторскими работами. Нашим заказчикам мы",
             " предлагаем разнообразные техники исполнения: традиционные  «масло»,",
             " «акварель» и «мозаика», флористические коллажи, техники «наслоения акриловых",                    
             " красок», «абориген» и т.д.</DIV><DIV id='q'>Наши картины станут отличным", 
             " подарком к любому праздничному событию.<BR>Приглашаем Вас в наш  Салон цветов",
             " и подарков «На Кузнечном».</DIV>");  
             break;
case 'contact':
             write("<DIV id=reply><H3 align=center>Салон цветов и подарков «На Кузнечном»",
             "</H3><H4 align=center><FONT color=#000000>Санкт-Петербург, Кузнечный переулок,",
             " дом 3.</FONT></H4><H4 align=center><FONT color=#000000>тел.8(812) 930-11-",
             "15; 8(921) 924-40-86. E-mail: info@na-kuznechnom.ru</FONT></H4>",
             "<MAP NAME='house'><AREA SHAPE='rect' COORDS='215,136,221,142' href=''", 
             "title='Кузнечный пер.3' onmouseover='document.map.src=house.src'",
             "onmouseout='document.map.src=mapcn.src'></MAP>",
             "<IMG src='img/adres.jpg' hspace=121 border=0 USEMAP='#house' name='map'></DIV>");
             break;
case 'basket':
             write("<DIV id='basket'><TABLE  border=1 width=680>",
             "<CAPTION><B>Содержимое корзины</B></CAPTION><TBODY>");
             if(!index)write("<TR><TD align=center><B>Корзина пуста</B></TD></TR>");
             else for(var i=0; i<index;i++)write("<TR><TD width=120>",
             "<img height=120 width=120 src="+pick[i]+"></TD><TD width=400>"+nick[i]+"</TD>",
             "<TD>"+price[i]+"</TD><TD>"+size[i]+" шт.</TD></TR>");
             write("</TBODY></TABLE></DIV>");
             if(index)write("<INPUT id='order' onclick='location.href=oadr'",
             "value='оформить заявку' type='button' class='a'/><INPUT id='rsbskt'",
             "value='очистить корзину' type='button' class='a' onclick='rsbskt()'/>");
             break;
case 'shop': 
             write("<DIV id=reply>");
             for(var i in shopname)write("<H4 onclick='passage("+i+")' onmouseover=",
             "'this.style.color=cola' onmouseout='this.style.color=colp'>"+shopname[i]+"</H4>");
             write("<DIV  class='shop'><H5 align=center>Заказ</H5>Ознакомьтесь с ",                   
             "образцами цветов и изделий, представленными в разделах «Цветы», «Подарочные",
             " Букеты», «Сезонные Букеты», «Свадебные Букеты», «Детские Букеты», «Мужские ",
             "Букеты», «Композиции», «Корзины» и «Картины».<BR>",
             "Кликнув по выбранному образцу, получите увеличенное фото товара и поясняющую",
             " надпись, включающую цену товара. Нажав кнопку «в корзину» добавьте товар",
             " в свою корзину. Чтобы вернуться в раздел надо кликнуть по увеличенному фото ",
             "товара. Кликнув по иконке «КОРЗИНА» перейдете на страничку, представляющую ",
             "всё содержимое последней. На этой странице нажав кнопку «оформить заявку» ",
             "перейдете на станичку регистрации, где следует заполнить все поля анкеты, ",
             "после чего нажать кнопку  «Подача запроса». Предоставленная в анкете информация",                  
             " конфиденциальна и не передается третьим лицам.<BR> Если же содержимое корзины",
             " почему-либо не устраивает, её можно очистить, нажав соответсвующую кнопку. ",
             "При этом вновь откроется станичка «интернет магазин».",
             "<H5 align=center>Оплата</H5>Для удобства ",
             "заказчиков предлагаются несколько способов оплаты покупок:<OL>", 
             "<LI>наличными деньгами в салоне;<LI>наличными деньгами курьеру;<LI>наличными",
             " деньгами через сберкассу;<LI>банковским переводом.</OL> Первый способ не ",
             "требует пояснений. Во втором случае курьер доставит Вам в офис или домой ",
             "заказ и проведет расчет прямо на месте, оформив платежный документ. ", 
             "В двух последних случаях, на указанный Вами адрес электронной почты будут", 
             "высланы квитанция для оплаты через сберкассу или счет, которые следует ",
             "распечатать и оплатить. Далее созвонитесь с дежурными администраторами для ", 
             "получения накладной и счета-фактуры. Эти формы оплаты подходит для оформления",                    
             " покупок юридическими лицами.<BR>В дальнейшем планируется использовать оплату ",
             "«электронными деньгами» - «yandex – деньги»  и  «web-money».", 
             "<H5 align=center>Доставка</H5>",
             "Мы можем доставить цветы по указанному Вами адресу и в указанное время.", 
             "<BR>Доставка заказов осуществляется ежедневно (без выходных) с 9.00 до 21.00.",
             " Просим Вас заранее (не менее чем за 12 часов) размещать заказы с доставкой",
             " цветов, а с доставкой на субботу и воскресенье – за 1 сутки.<BR>",
             "Мы доставляем заказы по домашним и рабочим адресам, а также в рестораны, ",
             "гостиницы, больницы, аэропорты и т.д.<BR>Мы несём ответственность за ",
             "доставку заказа, если адрес указан верно и в полном объёме. В другом случае ",
             "Ваш заказ возвращается в Салон цветов и подарков «На Кузнечном».", 
             " Вы можете получить его здесь в течение суток после даты доставки.<BR>",
             "Для получения дополнительной информации свяжитесь с нашим администратором ",
             "по телефону:<BR>8(921)924-40-86.</DIV>"); 
             write("</DIV>");
             break;
case 'wedding':
case 'baskets':
case 'composition':
case 'child':
case 'mens': 
case 'season':
case 'flowers':
case 'present':
             write("<DIV id='basket'><TABLE  width=678 border=4 bordercolor="+bdc+">",
             "<CAPTION><B>"+caption+"</B></CAPTION><TBODY bgcolor="+bgc+">");
             for(var i=0;i<ir;i++)write("<TR height=150><TD width=222 align='center'>",
             "<img id='m"+i*3+"' height=136></TD><TD width=222 align='center'>",
             "<img id='m"+(i*3+1)+"' height=136></TD><TD width=222 align='center'>",
             "<img id='m"+(i*3+2)+"' height=136></TD></TR>");
             write("</TBODY></TABLE></DIV>"); 
             write("<img id='ebasket' class='r' src='img/ebasket.jpg'",
             "onclick='location.href=badr'><INPUT id='sum' onclick='location.href=badr'",
             " type='button' class='b'/><INPUT id='plus' onclick='incvalue()' value=",
             "'в корзину' type='button' class='b'/><INPUT id='minus' onclick='decvalue()'",
             " value='из корзины' type='button' class='b'/>");
             break;
case 'salon':
             write("<TABLE id='fog'><TBODY>");
             for(var i=0;i<3;i++)write("<TR height=135><TD width=135 id=t"+2*i+">",
             "</TD><TD width=135 id=t"+(2*i+1)+"></TD></TR>");    
             write("</TBODY></TABLE>");
default:
             write("<IFRAME id='esse' frameborder='no' scrolling='auto'></IFRAME>");
             break;  
            }
}