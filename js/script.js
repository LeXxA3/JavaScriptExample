
/* alert("Здраствуйте");      */
var arr = [ 10, "mama", , true, [123,456] ];
var a, b, c, d, e, f, g, h, z, k, l, h1, h2, h3, h4, z1, y
a=3+2-10;
b=100/10;
c=b*3;
d=12 % 4;
e=1 && 1;
f=false || true;
g=!true;
h="мама мыла раму";
z = 0;
r = 1;
h1=h.length;
h2=h.slice(0,10);
h3=h.search("раму");
h4=h.toUpperCase();

if (z>0) z1='положительное число';
if (z<0)  z1='отрицательное число';
if (z==0)  z1='число равно нулю';

for (var i = 1; i < 100; i++) 
	{
    if (i % 7 == 0)
		{ 
		r=r*i
		}
	};
var y
 function sred()
{
	var arr1 = [1, 1, 1, 1];
    var sum=0;
	var y=0;
    for(var i=0; i<=arr1.length; i++) 
	{   
        sum=sum+arr[i];
		n++;
	}
	y=sum/n;
	alert(y);
	return y;
}; 
 
document.write('a = '+a+'<br />'+'b = '+b+'<br />'+'c = '+c+'<br />'+'d = '+d+ 
'<br />'+'arr = '+arr+'<br />'+'e = '+e+'<br />'+'f = '+f+'<br />'+'g = '+g+'<br />'+'длина строки h = '+h1+'<br />'+
'Конец строки h = '+h2+'<br />'+'Поиск по строке h = '+h3+'<br />'+'Изменение регистра строки: '+h4+
'<br />'+'Описание числа z: '+z1+'<br />'+'Произведение двузначных чисел кратных 7: '+r+'<br />'+'Среднее арифметическое массива = '+y)

var j=prompt('ведите номер месяца', "номер"); 
switch (j) 
{
   case "1":
    alert('Январь')
    break
  case "2":
    alert('Февраль')
    break
  case "3":
    alert('март')
  break
  case "4":
    alert('апрель')
    break
  case "5":
    alert('Май')
    break
  case "6":
    alert('Июнь')
  break
  case "7":
    alert('Июль')
    break
  case "8":
    alert('Август')
    break
  case "9":
    alert('Сентябрь')
  break
  case "10":
    alert('Октябрь')
    break
  case "11":
    alert('Ноябрь')
    break
   case "12":
    alert('Декабрь')
    break 
  default:
    alert('Я таких значений не знаю')
}
var o=prompt('Ведите математическое выражение', "выражение")
alert(o + '=' + eval(o)); 




		
