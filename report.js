
// -------------------------WEIGHT DATA ENTRY----------------------
document.getElementById('weight-data-entry').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close-modal').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

// -------------------------second weight data ENTRY----------------------
document.getElementById('parking-data-entry').addEventListener("click", function() {
	document.querySelector('.parking').style.display = "flex";
});

document.querySelector('.close-parking').addEventListener("click", function() {
	document.querySelector('.parking').style.display = "none";
});

// ----------------button tabs --------------------
var tabButtons=document.querySelectorAll(".modal-content .tabs button");
var tabPanels=document.querySelectorAll(".modal-content  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor= colorCode;
    tabButtons[panelIndex].style.color= "#1f90ed";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#fff');

//-----------------------------------------WEIGHT DATA ENTRY-------------------------------------
function updateWT() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 - num2;
	
	if (result < 0) {
	  result = Math.abs(result);}
	
	document.getElementById("result").value = result;
  }
  
  //------------------------------------------time function
  function updateTime()
  {
	  var currentTime = new Date();
	  var hours = currentTime.getHours();
	  var minutes = currentTime.getMinutes();
	  var seconds = currentTime.getSeconds();
	 
	  if (hours < 10) {
		  hours = "0" + hours;
	  } 
  
	  if (minutes < 10) {
		minutes = "0" + minutes;
	  } 
	  
	   if (seconds < 10) {
		seconds = "0" + seconds;
	  }
	  
	  var timeString = hours + ":" + minutes +":" + seconds ;
	  
	  document.getElementById("time").value = timeString;
	  document.getElementById("time2").value = timeString;
	  document.getElementById("time3").value = timeString;
  }
	
	setInterval(updateTime, 1000);
	
  
  
	//---------------------------------date function
  
  function getDate()
  {
	  const today= new Date();
  
	  const newdate = today.toISOString().substring(0,10);
  
	  document.getElementById("date").value = newdate;
	  document.getElementById("date2").value = newdate;
  }
  setInterval(getDate, 1000);

// ----------------button section -------------------  

// ------ print ------
function printInvoice(){
	window.print();
}

//----------------------------------------right click diabled
//   document.addEventListener("contextmenu", (event) => {
// 	event.preventDefault();
//   });


  
  