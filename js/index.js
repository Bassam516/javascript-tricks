/*capitalize first char*/
var textbox = document.getElementById("normalp"),
    str;

textbox.oninput = function () {
    'use strict';
    str = textbox.value;
};  

var button = document.getElementById("capitalize"),
    c = document.getElementById("capitalp");

function capitalize(str) {
    'use strict';
    var oldArray = str.split(' '),
        newArray = [];

    for (var i = 0; i < oldArray.length; i++) {

        newArray.push( oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1) );

    }

    return newArray.join(' ');
    
    
}

button.addEventListener("click", function () {
    c.value = capitalize(str);
});

/*calculat text char*/
var textarea = document.getElementById("text-area"),
    count = document.getElementById("count");
    maxlength = textarea.getAttribute("maxlength");


textarea.oninput = function () {
    'use strict';
    count.innerHTML = maxlength - this.value.length;

    if (count.innerHTML == 0) {
        count.classList.add("color");
    } else {
        count.classList.remove("color");
    }
};
/*remove placeholder onfocus*/

var placeholderText = document.getElementById("placeholder-text");

placeholderText.onfocus = function (){

    this.setAttribute("data-value", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", '');

};
placeholderText.onblur = function () {

    this.setAttribute("placeholder", this.getAttribute("data-value"));
    this.setAttribute("data-value", '');

};
/*type writer effect*/
var btn = document.getElementById("writer-button"),
    p = document.getElementById("para"),
    myText = 'this is type writer effect';
    i = 0;

btn.onclick = function () {
    'use strict';
    var typeWriter = setInterval(function () {
        p.textContent += myText[i];
        i++
        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        }
    }, 200);

};

/*show password*/
var icon1 = document.getElementById("icon1"),
    icon2 = document.getElementById("icon2"),
    passInput = document.getElementById("pass"),
    type = passInput.getAttribute("type");

passInput.oninput = function () {
    'use strict';
    icon2.onclick = function () {
        'use strict';
        passInput.setAttribute('type', 'text');
        icon2.setAttribute("style", "display:none");
        icon1.setAttribute("style", "display:block");
    };
    icon1.onclick = function () {
        'use strict';
        passInput.setAttribute('type', 'password');
        icon1.setAttribute("style", "display:none");
        icon2.setAttribute("style", "display:block");
    };
};
/*random body background*/ 

var classList = ["background1", "background2", "background3", "background4"],
    randomClass = Math.floor(Math.random() * classList.length);

document.body.setAttribute("class", classList[randomClass]);

/*text-live*/

var myPara = document.getElementById("text"),
    myParaLive = document.getElementById("text-live");

myPara.oninput = function () {
    'use strict';
    myParaLive.textContent = myPara.value;
};
/*disable right-click*/

document.getElementById("disable-rClick").addEventListener("contextmenu", function (e) {

    'use strict';
    e.preventDefault();

});
/*dynamic clock*/
function clock() {
    'use strict';
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        second = now.getSeconds();

  

  
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    else if (second < 10) {
        second = '0' + second;
    }


    if (hours > 12) {
        hours -= 12;
    }
   

    document.getElementById("clock").textContent = hours + ':' + minutes + ':' + second;
};

window.onload = function () {
    'use strict';
    setInterval(clock, 500);
};
/*random img*/
var imgList = ["photos/img1.jpg", "photos/img2.jpg", "photos/img3.jpg", "photos/img4.jpg", "photos/img5.jpg"],
    img = document.getElementById("rImg");
    

function changImg(imgList,img) {
    'use strict';
    setInterval(function () {
        var randomImg = Math.floor(Math.random() * imgList.length);
        img.setAttribute("src", imgList[randomImg]) ;
    },5000);
    
};
changImg(imgList, img);

/*creat serial number*/
document.getElementById("getSerial").onclick = function () {
    'use strict';

    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        serialLength = 10,
        charsArray = chars.split(''),
        serialArray = [],
        randonChar;

    for (var i = 0; i < serialLength; i++) {
        randonChar = Math.floor(Math.random() * chars.length);
        serialArray.push( charsArray[randonChar]);  
    }

    document.getElementById("serial").innerHTML = serialArray.join('');
};
/*timer count down*/

document.getElementById("btn-start").onclick = function () {
    'use strict';

    var myHours = document.getElementById("hours").value,
        myMinutes = document.getElementById("minutes").value,
        mySeconds = document.getElementById("seconds").value,
        secondsCount = (myHours * 60 * 60) + (myMinutes * 60) + (mySeconds * 1),
        timer = document.getElementById("timer-display");

     var  countDown = setInterval(function () {
            'use strict';
            var minutes = Math.floor(secondsCount / 60),
                remSeconds = secondsCount % 60,
                hours = Math.floor(minutes / 60),
                remMinutes = minutes % 60;

            if (remSeconds < 10) {
                remSeconds = '0' + remSeconds;
            }
            if (remMinutes < 10) {
                remMinutes = '0' + remMinutes;
            }

         timer.innerHTML = hours + ':' + remMinutes + ':' + remSeconds;

            if (hours === 0) {
                timer.innerHTML = remMinutes + ':' + remSeconds ;
            }

         document.getElementById("btn-start").style.display = 'none';
         document.getElementById("btn-stop").style.display = 'inline-block';
         timer.style.display = 'block';

         document.getElementById("btn-stop").onclick = function () {
             clearInterval(countDown);
             timer.style.display = 'none';
             document.getElementById("btn-stop").style.display = 'none';
             document.getElementById("btn-start").style.display = 'inline-block';
         }

            if (secondsCount > 0) {
                secondsCount--;
            } else {
                timer.innerHTML = 'time is over';
                clearInterval(countDown);
                document.getElementById("btn-start").style.display = 'inline-block';
            }


        }, 1000);


};


/*scrolltop button*/
var btnPlace = document.body.childNodes.length - 7,
    btn = document.createElement("span"),
    spantext = document.createTextNode("up"),
    sComment = document.createComment("start srolltop button"),
    eComment = document.createComment("end srolltop button"),
    button = document.body.insertBefore(btn, document.body.childNodes[btnPlace]);
   

btn.appendChild(spantext);

document.body.insertBefore(sComment, button);
document.body.insertBefore(eComment, document.body.childNodes[btnPlace + 2]);

button.style.position = 'fixed';
button.style.right = button.style.bottom = '10px';
button.style.backgroundColor = '#025';
button.style.color = '#fff';
button.style.padding = '5px';
button.style.fontSize = '18px';
button.style.borderRadius = '50%';
button.style.cursor = 'pointer';
button.style.display = 'none';

window.onscroll = function () {
    'use strict';
    if (pageYOffset > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }

}
button.onclick = function () {
    'use strict';
    scrollTo(0, 0);
}

