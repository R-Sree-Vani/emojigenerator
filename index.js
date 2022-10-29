
var emoji=['&#128512','&#128513','&#128514','&#128515','&#128516','&#128517','&#128518','&#128519',

'&#128520','&#128521','&#128522','&#128523','&#128523','&#128524','&#128525','&#128526','&#128527',
'&#128528','&#128529','&#128530','&#128531','&#128532','&#128533','&#128534','&#128535','&#128536',
'&#128537','&#128538','&#128539','&#128540','&#128541','&#128542','&#128543','&#128544','&#128545',
'&#128546','&#128547','&#128548','&#128549','&#128550'];
const btn=document.getElementById('btn');
const space = document.querySelector('div');


btn.addEventListener("click",()=>{

	

	 const ranemoji=Math.floor(Math.random()*emoji.length);
     document.getElementById('space').innerHTML=`${emoji[ranemoji]}`;
     
});


var bele=document.querySelector('body');
	var isblue=false;

	setInterval(function(){
		if(isblue){
			bele.style.background="#b3e6e3";
			
		}
		else{
			bele.style.background="#bb93cc";
		}
		isblue=!isblue;
	},2000);