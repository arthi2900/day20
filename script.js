var dataelement=document.createElement('input');
dataelement.setAttribute('type','date');
dataelement.setAttribute('id','date');
document.body.append(dataelement);
var button=document.createElement('button');
button.innerText="display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);

//function

function displaydata(){
    let input=document.getElementById('date').value;
    if(Date.parse(input)){
var inputdate=new Date(input);
var currentdate=new Date();
//console.log(inputdate,currentdate);
//millsecon
var millsecond=currentdate.getTime()-inputdate.getTime();  
console.log(millsecond);
//second
var seconddiff=Math.floor(millsecond/1000);
console.log(seconddiff);
//min
var mindiff=Math.floor(seconddiff/60);
console.log(mindiff);
//hours
var hoursdiff=Math.floor(mindiff/60);
console.log(hoursdiff);
//day
var daydiff=Math.floor(hoursdiff/60);
console.log(daydiff);
//year
var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
console.log(yeardiff);
//month
console.log(currentdate.getMonth());
var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
console.log(monthdiff);
var p=document.createElement('div');

//p.append(millsecond,seconddiff,mindiff,hoursdiff,daydiff,yeardiff,monthdiff);
p.innerText=` 
millsecond ${millsecond}
second ${seconddiff}
min ${mindiff}
hours ${hoursdiff}
day ${daydiff}
month ${monthdiff}
year ${yeardiff}
`;

document.body.append(p);
//datatype 
//console.log(typeof(millsecond));
}
else{
    console.log("give a proper valid date");
}
}