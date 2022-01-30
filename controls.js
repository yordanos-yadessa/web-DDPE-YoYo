function playdetector()
{
   if( document.getElementsByTagName("audio").src == '' || document.getElementsByTagName("video").src == ''  )
   {

   } 
    console.log("Media playing");
    alert("playing");
}

function pausedetector()
{
    console.log("Media paused");
    alert("paused");
}

 function changeImage() {
    let src = document.getElementById("image").src;

   console.log(src)
 
   
}

var divvid = document.getElementById("divvid")
var divimg = document.getElementById("divimg")

var im =document.getElementById("image")
var vid =document.getElementById("vid")

var temp = im
var temp2 = vid
console.log(vid)
console.log(temp)
console.log(im)

console.log(divvid.lastChild)

document.getElementById("swap2").addEventListener("click", function(){
   
    // im.replaceWith(vid)
    // divvid.appendChild(temp)
    //  vid.replaceWith(temp)
    console.log("true")
    if(divimg.lastChild == im)
  {    
       divimg.lastChild.remove()
       divvid.lastChild.remove()
       divimg.appendChild(vid)
       divvid.appendChild(im)
    }
    else{
        divimg.lastChild.remove()
        divvid.lastChild.remove()
        divimg.appendChild(im)
        divvid.appendChild(vid)
    }
})

document.getElementById("swap3").addEventListener("click", function()
{

    if(divvid.lastChild ==vid)
    {    
         divvid.lastChild.remove()
         divimg.lastChild.remove()
         divvid.appendChild(im)
         divimg.appendChild(vid)
      }
      else{
          divvid.lastChild.remove()
          divimg.lastChild.remove()
          divvid.appendChild(vid)
          divimg.appendChild(im)
      }

})
