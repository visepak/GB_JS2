/** Некая сеть фастфуда предлагает несколько видов гамбургеров:
 Маленький (50 рублей, 20 калорий).
 Большой (100 рублей, 40 калорий).
 Гамбургер может быть с одним из нескольких видов начинок (обязательно):
 С сыром (+10 рублей, +20 калорий).
 С салатом (+20 рублей, +5 калорий).
 С картофелем (+15 рублей, +10 калорий).
 Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
 Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
 Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою.
 */
class Hamburger {
    constructor(size = '', stuffing = '', topping1 = false, topping2 = false, price = 0, calories = 0) {
        this.size = size; // Маленький (50 рублей, 20 калорий).  Большой (100 рублей, 40 калорий).
        this.stuffing = stuffing;   //С сыром (+10 рублей, +20 калорий).
                                    //С салатом (+20 рублей, +5 калорий).
                                    //С картофелем (+15 рублей, +10 калорий).
        this.topping1 = topping1; //приправой (+15 рублей, +0 калорий)
        this.topping2 = topping2; // полить майонезом (+20 рублей, +5 калорий)
        this.price = price;
        this.calories = calories;
        this._calcSize();
        this._calcStuffing();
        this._addTopping();
    }

    _calcSize() {
        if (this.size === 'small') {
            this.price += 50;
            this.calories += 20;
        }
        if (this.size === 'large') {
            this.price += 100;
            this.calories += 40;
        }

    }

    _calcStuffing() {
        switch (this.stuffing) {
            case 'cheese':
                this.price += 10;
                this.calories += 20;
                break;
            case 'salad':
                this.price += 20;
                this.calories += 5;
                break;
            case 'potato':
                this.price += 15;
                this.calories += 10;
                break;

        }
    }

    _addTopping() {    // Добавить добавку
        if (this.topping1) {
            this.price += 15;
            this.calories += 0;
        }
        if (this.topping2) {
            this.price += 20;
            this.calories += 5;
        }
    }

    removeTopping(topping) { // Убрать добавку

    }

    getToppings(topping) {   // Получить список добавок

    }

    getSize() {              // Узнать размер гамбургера
        return this.size;
    }

    getStuffing() {          // Узнать начинку гамбургера

    }

    getPrice() {       // Узнать цену
        return this.price;
    }

    calculateCalories() {    // Узнать калорийность
        return this.calories;
    }
}

//let burger = new Hamburger();
document.getElementById('calc').addEventListener('click', handleButton);

function handleButton() {
    console.log('кнопка нажимается');
    let $size = document.getElementById('size1').checked ? 'small' : 'large';
    let $stuffing = document.querySelector('.stuffing:checked').value;
    let $topping1 = document.getElementById('topping1').checked;
    let $topping2 = document.getElementById('topping2').checked;
    let burger = new Hamburger($size, $stuffing, $topping1, $topping2);
    console.log(burger.getSize());
    console.log(burger.getPrice());
    document.getElementById('price').value = burger.getPrice();
    document.getElementById('calories').value = burger.calculateCalories();
}
