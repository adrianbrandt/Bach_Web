function remover(){
    const btn = document.getElementById("scrollbar");

    btn.remove();
};

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  };
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };

  function timestamp() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('counter-display').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    document.getElementById("sin").style.display = "none";
    document.getElementById("sout").style.display = "block";

  };

  function stampout(){

    let content = document.getElementById('counter-display').innerHTML;
    let clock = document.getElementById('clock').innerHTML;


    var a = content.split(":");
    var b = clock.split(":");

    let h = b[0] - a[0];
    let m = b[1] - a[1];
    let s = b[2] - a[2];

    console.log(h + ":" + m + ":" + s)


    document.getElementById('counter-display').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById("scim").style.display = "block";
    document.getElementById("sout").style.display = "none";
  }

  function stamped() {
    let content = document.getElementById('counter-display').innerHTML;

    if (confirm("successfully submitted time - " +content)) {
      location.reload();
    }
  }

