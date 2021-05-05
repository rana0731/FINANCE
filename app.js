// Дэлгэцтэй ажиллах контроллер
var uiController = (function() { // ui -> Use Interface 
    
})();


// Санхүүтэй ажиллах контроллер
var financeController = (function() {
    
})();


// Программын холбогч контроллер
var appController = (function(uiController, financeController) {

    var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        console.log("Дэлгэцээс өгөдөл авах хэсэг");
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    };

    document.querySelector(".add__btn").addEventListener("click", function(){
        ctrlAddItem();
    });

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13) { // 13 -> enter button
            ctrlAddItem();
        }
    });
})(uiController, financeController);



// var hunController = (function(){
//         // data encapsulation
    
//         // private data
//     var bodol = "Javascript толгой эргүүлмээр юм...";
//     function tsusGuih() {}

//         // private function
//     function huchilTurugchiigAgaaraasSorjTsusRuuOruulah(){}

//     return {
//         yarih: function() {
//             bodol = "Javascript бол лаг";
//             huchilTurugchiigAgaaraasSorjTsusRuuOruulah();
//             tsusGuih();
//             console.log("hi");
//         }
//     };
// })()