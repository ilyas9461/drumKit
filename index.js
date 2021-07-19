var numberOfButtons = document.querySelectorAll(".drum").length;
/* Bütün butonlara click olayının eklenmesi ve tıklama olayı tetiklendiğinde
   gerçekleştirilecek işlemler...
*/
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
        // var nodes = document.querySelectorAll('.drum');
        //  alert([].indexOf.call(nodes,e.target)+". buttons clicked...");
        //this.style.color="black";
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });

}
/* sayfaya keypress olayının eklenmesi ve tetiklendiğinde gerçekleştirilecek işlemler*/
document.addEventListener("keypress", function(event) {
    //console.log(event);
    sleep(400);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }

}
//mS cinsinden zaman gecikmesi 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function buttonAnimation(currentKey) {

    var activeKey = document.querySelector("." + currentKey);// tıklanan buto  yada basılan harfe göre
                                                             // css deki stillerden html de bulunan öğe
                                                             // seçiliyor...
    activeKey.classList.add("pressed"); //Seçilen öğeye yeni css de bulunan yeni stil class eklenyor
                                        // ve böylece uygulanması sağlanıyor.

    setTimeout(function() {             // zaman aşımı fonksiyonu ile stil temizleniyor...
                                        // Böylece animasyon tıklama yada basma uygulanmış oluyor...
        activeKey.classList.remove("pressed");
    }, 100);


}