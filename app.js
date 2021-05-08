// Дэлгэцтэй ажиллах контроллер
var uiController = (function() { // ui -> Use Interface 

    // private function
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        ipputValue: '.add__value',
        addBtn: '.add__btn'
    }; 

    return {

        // public function
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.ipputValue).value
            };
        },
        // public function
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();


// Санхүүтэй ажиллах контроллер
var financeController = (function() {

    // орлого объект
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    // зарлага объект
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // орлого зарлага өгөгдлүүдийн объект
    var data = {

        // Бүх орлогууд, зарлагууд хадгалагдах массив
        allItems: {
            inc: [],
            exp: []
        },

        // Бүх орлого болон зардлын нийлбэрийг хадгалах.
        totals: {
            inc: 0,
            exp: 0
        }
    }

})();


// Программын холбогч контроллер
var appController = (function(uiController, financeController) {

    // private function
    var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        console.log(uiController.getInput());
        
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    };

    
    // setup function
    var setupEventListeners = function() {
        var DOM = uiController.getDOMstrings();

        // add__btn class tai icon iig ni darahad 
        document.querySelector(DOM.addBtn).addEventListener("click", function(){
            ctrlAddItem();
        });

        // 13 -> ENTER button darahad
        document.addEventListener("keypress", function(event){
            if(event.keyCode === 13 || event.which === 13) { 
                ctrlAddItem();
            }
        });
    };

    // public function
    return {
        init: function() {
            console.log('Application started ...');
            setupEventListeners();
        }
    };
    
})(uiController, financeController);

appController.init();
