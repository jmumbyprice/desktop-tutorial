filterObjects("all");


function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName(card);
    if (c == "all") c == "";
    for (i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")


    }
}


function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}


function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split("");
    for (i = 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
             arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}








/* function on(filename, className) {
    // create semi-transparent background
    const backgroundElement = document.createElement('div');
    backgroundElement.className = 'overlay-background';
    document.body.appendChild(backgroundElement);
  ​
    fetch(filename)
      .then(response => response.text())
      .then(html => {
        const overlayElement = document.createElement('div');
        overlayElement.innerHTML = html;
        overlayElement.className = className; // use a class instead of an ID
        document.body.appendChild(overlayElement);
  ​
        const styleElement = document.createElement('link');
        styleElement.rel = 'stylesheet';
        styleElement.href = './overlay-style.css';
        document.head.appendChild(styleElement);
  ​
        // show overlay
        document.getElementsByClassName(className)[0].style.display = "block";
      });
  ​
    // show semi-transparent background
    document.getElementsByClassName('overlay-background')[0].style.display = "block";
  }
  ​
  function off(className) {
    // hide overlay
    var overlay = document.getElementsByClassName(className)[0]; // select the overlay element by class
    overlay.parentNode.removeChild(overlay);
  ​
    // hide semi-transparent background
    var background = document.getElementsByClassName('overlay-background')[0];
    background.parentNode.removeChild(background);
  }
  ​
  Collapse */