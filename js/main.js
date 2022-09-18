function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
currentTime();



function vaporcode(string)
{
  let arr = [];
  var splitstr =  string.split("", );

  for (let i = 0; i < splitstr.length; i++) {
    arr.
     arr.push(splitstr[i].toUpperCase())
     
  
  }
  console.log(arr)
  
}



vaporcode("salam olsun her kese");