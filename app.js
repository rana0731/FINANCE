// Дэлгэцтэй ажиллах контроллер
var uiController = (function() { // ui -> Use Interface 

    // (private data)
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        ipputValue: '.add__value',
        addBtn: '.add__btn'
    }; 

    return {

        // (public function)
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //inc эсвэл exp ийг буцаана.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.ipputValue).value
            };
        },
        // (public function)
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();


// Санхүүтэй ажиллах контроллер
var financeController = (function() {

    // орлого объект (private function)
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    // зарлага объект (private function)
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // орлого зарлага өгөгдлүүдийн объект (private data)
    var data = {

        // Бүх орлогууд, зарлагууд хадгалагдах массив
        items: {
            inc: [],
            exp: []
        },

        // Бүх орлого болон зардлын нийлбэрийг хадгалах.
        totals: {
            inc: 0,
            exp: 0
        }
    };

    // (public funtion)
    return {
        addItem: function(type, desc, val) {
            var item, id;

            //  [1, 2, 5, x] x нь 5+1=6 байна. Хамгийн сүүлийн id ийг олоод түүнийг нэгээр нэмэгдүүлнэ
            if(data.items[type].length === 0) id = 1;
            else{ 
                id = data.items[type][DataTransfer.items[type].length-1].id + 1;
            }

            if(type === 'inc'){
                item = new Income(id, desc, val);
            } else {
                item = new Expense(id, desc, val);// type === exp
            }
            data.items[type].push(item);
        },

        seeData: function() {
            return data;
        }
    };

    


})();

// Программын холбогч контроллер
var appController = (function(uiController, financeController) {

    // (private data)
    var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        var input = uiController.getInput();
        
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        financeController.addItem(input.type, input.desc, input.val);

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

    // (public funtion)
    return {
        init: function() {
            console.log('Application started ...');
            setupEventListeners();
        }
    };
    
})(uiController, financeController);

appController.init();
