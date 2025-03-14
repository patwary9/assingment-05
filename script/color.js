const themeColor = [
    "#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4ff33", "#33fff2",
    "#8A2BE2", "#FFD700", "#00FA9A", "#DC143C", "#20B2AA", "#FF4500"
  ];
  let index = 0;
  
  document.getElementById("bg-color-change").addEventListener("click", function () {
    document.body.style.backgroundColor = themeColor[index];
    index = (index + 1) % themeColor.length; 
  });