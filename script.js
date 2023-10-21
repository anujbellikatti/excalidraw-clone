document.addEventListener('DOMContentLoaded', function () {
     const canvas = document.getElementById("canvas");
     const c = canvas.getContext("2d");
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;






     let color = document.getElementById("color");
     let color1 = color.value;
     let range = document.getElementById("range");



     // let x = window.pageXOffset;
     // let y = window.pageYOffset;


     let pp = null;
     function onmouseDown(e) {
          pp = [e.offsetX + 0, e.offsetY + 45]
          // let { clientX, clientY } = event;
          color = document.getElementById("color");
          color1 = color.value;
          console.log(color1)
          c.lineWidth = range.value;
          c.strokeStyle = color1;

          canvas.addEventListener("mouseup", onmouseup);
          canvas.addEventListener("mousemove", moumov)
     }
     function onmouseup(e) {
          canvas.removeEventListener("mousemove", moumov);

     }
     function moumov(e) {
          let cp = [e.offsetX + 0, e.offsetY + 45]
          c.beginPath();
          c.strokeStyle = color1;
          c.moveTo(...pp);
          c.lineTo(...cp);
          c.stroke();
          c.closePath();
          pp = cp;
     }
     let cur = document.querySelector(".cur")
     cur.addEventListener("click", pencil);

     let ispen = false;

     function pencil() {
          ispen = !ispen;
          if (ispen) {
               cur.classList.add("cur1")
               canvas.addEventListener("mousedown", onmouseDown);
               c.lineWidth = range.value;

          } else {
               canvas.removeEventListener("mousedown", onmouseDown);
               cur.classList.remove("cur1");
          }
     }

});

