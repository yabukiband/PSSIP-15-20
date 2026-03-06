// ==================================================
// КОНТРОЛЬНЫЕ ВОПРОСЫ ПО ТЕМЕ "ОБЪЕКТЫ В JAVASCRIPT"
// ==================================================

console.log('=================================');
console.log('ОТВЕТЫ НА КОНТРОЛЬНЫЕ ВОПРОСЫ');
console.log('=================================\n');

// ========== ВОПРОС 1: Что такое объект? ==========
console.log('1. ЧТО ПОНИМАЕТСЯ ПОД ОБЪЕКТОМ В JAVASCRIPT?');
console.log('-----------------------------------------');
console.log('Объект в JavaScript - это неупорядоченная коллекция свойств,');
console.log('где каждое свойство состоит из ключа (имени) и значения.');
console.log('Значениями могут быть данные любых типов или функции (методы).\n');

console.log('Примеры известных объектов в JavaScript:');
console.log('- Глобальные объекты: console, Math, Date, JSON');
console.log('- Объекты браузера: window, document, navigator');
console.log('- Встроенные объекты: Array, Object, String, Number');
console.log('- DOM-элементы (при работе в браузере)\n');

// Демонстрация известных объектов
console.log('Демонстрация:');
console.log('  Math.PI =', Math.PI);
console.log('  Date.now() =', Date.now());
console.log('  JSON.stringify({a: 1}) =', JSON.stringify({a: 1}));
console.log('-----------------------------------------\n');


// ========== ВОПРОС 2: Пример пользовательского объекта ==========
console.log('2. ПРИМЕР ОПИСАНИЯ ПОЛЬЗОВАТЕЛЬСКОГО ОБЪЕКТА');
console.log('-----------------------------------------');

// Создание объекта с помощью литерала
const student = {
    // Свойства (данные)
    firstName: 'Иван',
    lastName: 'Петров',
    age: 20,
    course: 3,
    university: 'МГУ',
    grades: [5, 4, 5, 4, 5],
    
    // Методы (функции)
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    
    getAverageGrade() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    },
    
    sayHello() {
        console.log(`  Привет! Я ${this.getFullName()}, студент ${this.course} курса ${this.university}`);
    }
};

console.log('Создан объект student:');
console.log(student);
student.sayHello();
console.log('  Средний балл:', student.getAverageGrade());
console.log('-----------------------------------------\n');


// ========== ВОПРОС 3: Доступ к свойствам ==========
console.log('3. ПРИМЕР ДОСТУПА К СВОЙСТВАМ ОБЪЕКТА');
console.log('-----------------------------------------');

const book = {
    title: 'Война и мир',
    author: 'Л.Н. Толстой',
    year: 1869,
    pages: 1300
};

console.log('Объект book:', book);
console.log('Способы доступа к свойствам:');

// Доступ через точку (dot notation)
console.log('  Через точку:');
console.log('    book.title =', book.title);
console.log('    book.author =', book.author);
console.log('    book.year =', book.year);

// Доступ через квадратные скобки (bracket notation)
console.log('  Через квадратные скобки:');
console.log('    book["title"] =', book["title"]);
console.log('    book["author"] =', book["author"]);
console.log('    book["pages"] =', book["pages"]);

// Доступ через переменную
const propertyName = 'year';
console.log('  Через переменную:');
console.log('    const propertyName = "year";');
console.log('    book[propertyName] =', book[propertyName]);
console.log('-----------------------------------------\n');


// ========== ВОПРОС 4: Удаление свойства (delete) ==========
console.log('4. КОМАНДА DELETE - УДАЛЕНИЕ СВОЙСТВА');
console.log('-----------------------------------------');

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 25000,
    color: 'silver'
};

console.log('Исходный объект car:');
console.log(car);

// Удаление свойства price
delete car.price;
console.log('После удаления свойства price:');
console.log(car);

// Удаление свойства color
delete car.color;
console.log('После удаления свойства color:');
console.log(car);

// Проверка, что свойства действительно удалены
console.log('car.price после удаления:', car.price); // undefined
console.log('car.color после удаления:', car.color); // undefined

// Удаление несуществующего свойства (не вызывает ошибку)
delete car.engine;
console.log('Удаление несуществующего свойства car.engine - ошибки нет');
console.log('-----------------------------------------\n');


// ========== ВОПРОС 5: Проверка существования свойства ==========
console.log('5. ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВА');
console.log('-----------------------------------------');

const user = {
    name: 'Анна Смирнова',
    email: 'anna@example.com',
    role: 'admin'
};

console.log('Объект user:', user);

// Способ 1: Оператор in (проверяет и собственные, и унаследованные свойства)
console.log('Способ 1: Оператор "in"');
console.log('  "name" in user:', 'name' in user);           // true
console.log('  "email" in user:', 'email' in user);         // true
console.log('  "phone" in user:', 'phone' in user);         // false
console.log('  "toString" in user:', 'toString' in user);   // true (унаследованное свойство)

// Способ 2: Метод hasOwnProperty (только собственные свойства)
console.log('\nСпособ 2: Метод hasOwnProperty()');
console.log('  user.hasOwnProperty("name"):', user.hasOwnProperty('name'));       // true
console.log('  user.hasOwnProperty("role"):', user.hasOwnProperty('role'));       // true
console.log('  user.hasOwnProperty("toString"):', user.hasOwnProperty('toString')); // false (унаследовано)

// Способ 3: Проверка на undefined
console.log('\nСпособ 3: Сравнение с undefined');
console.log('  user.name !== undefined:', user.name !== undefined);       // true
console.log('  user.phone !== undefined:', user.phone !== undefined);     // false

// Способ 4: Оператор optional chaining (современный способ)
console.log('\nСпособ 4: Optional chaining (?.)');
console.log('  user?.name:', user?.name);           // Анна Смирнова
console.log('  user?.phone:', user?.phone);         // undefined
console.log('-----------------------------------------\n');


// ========== ВОПРОС 6: Перебор свойств объекта ==========
console.log('6. ПЕРЕБОР СВОЙСТВ ОБЪЕКТА');
console.log('-----------------------------------------');

const product = {
    id: 101,
    name: 'Ноутбук',
    brand: 'HP',
    price: 55000,
    inStock: true
};

console.log('Объект product:', product);

// Способ 1: Цикл for...in
console.log('Способ 1: Цикл for...in');
for (let key in product) {
    console.log(`  ${key}: ${product[key]}`);
}

// Способ 2: Object.keys() - возвращает массив ключей
console.log('\nСпособ 2: Object.keys()');
const keys = Object.keys(product);
console.log('  Ключи:', keys);
keys.forEach(key => {
    console.log(`  ${key}: ${product[key]}`);
});

// Способ 3: Object.values() - возвращает массив значений
console.log('\nСпособ 3: Object.values()');
const values = Object.values(product);
console.log('  Значения:', values);

// Способ 4: Object.entries() - возвращает массив пар [ключ, значение]
console.log('\nСпособ 4: Object.entries()');
const entries = Object.entries(product);
console.log('  Пары [ключ, значение]:', entries);
console.log('  Перебор entries:');
entries.forEach(([key, value]) => {
    console.log(`    ${key}: ${value}`);
});

// Способ 5: Современный метод Object.getOwnPropertyNames()
console.log('\nСпособ 5: Object.getOwnPropertyNames()');
const propNames = Object.getOwnPropertyNames(product);
console.log('  Собственные свойства:', propNames);
console.log('-----------------------------------------\n');


// ========== ПРАКТИЧЕСКАЯ ЧАСТЬ: ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ ==========
console.log('=================================');
console.log('ПРАКТИЧЕСКАЯ ЧАСТЬ');
console.log('=================================\n');

// Пример 1: Создание объекта через конструктор
console.log('Пример 1: Создание объектов через конструктор');

function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.makeSound = function(sound) {
        return `${this.name} говорит: ${sound}`;
    };
}

const dog = new Animal('Бобик', 'Собака', 3);
const cat = new Animal('Мурка', 'Кошка', 2);

console.log('  dog:', dog);
console.log('  cat:', cat);
console.log('  dog.makeSound("Гав!"):', dog.makeSound('Гав!'));
console.log('  cat.makeSound("Мяу!"):', cat.makeSound('Мяу!'));
console.log('-----------------------------------------\n');

// Пример 2: Динамическое добавление свойств
console.log('Пример 2: Динамическое добавление свойств');

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy'
};

console.log('  Исходный объект:', smartphone);

// Добавляем свойства
smartphone.price = 30000;
smartphone['color'] = 'Black';
smartphone.getInfo = function() {
    return `${this.brand} ${this.model}, цена: ${this.price}`;
};

console.log('  После добавления свойств:', smartphone);
console.log('  Вызов метода:', smartphone.getInfo());
console.log('-----------------------------------------\n');

// Пример 3: Вычисляемые имена свойств
console.log('Пример 3: Вычисляемые имена свойств');

const prefix = 'user_';
const userId = 12345;

const dynamicObject = {
    [prefix + 'id']: userId,
    [prefix + 'name']: 'Динамический пользователь',
    [prefix + 'created']: new Date().toLocaleDateString(),
    ['get' + 'Info']() {
        return `ID: ${this.user_id}, Имя: ${this.user_name}`;
    }
};

console.log('  Объект с вычисляемыми именами:', dynamicObject);
console.log('  Вызов метода:', dynamicObject.getInfo());
console.log('-----------------------------------------\n');

// Пример 4: Копирование и объединение объектов
console.log('Пример 4: Копирование и объединение объектов');

const defaults = {
    theme: 'light',
    language: 'ru',
    notifications: true
};

const userSettings = {
    theme: 'dark',
    fontSize: 14
};

// Object.assign() - объединение объектов
const settings = Object.assign({}, defaults, userSettings);
console.log('  Object.assign({}, defaults, userSettings):', settings);

// Spread оператор (современный способ)
const settings2 = { ...defaults, ...userSettings };
console.log('  Spread оператор: { ...defaults, ...userSettings } =', settings2);
console.log('-----------------------------------------\n');

// Пример 5: Деструктуризация объектов
console.log('Пример 5: Деструктуризация объектов');

const employee = {
    fullName: 'Елена Иванова',
    position: 'Разработчик',
    salary: 120000,
    department: 'IT',
    address: {
        city: 'Москва',
        street: 'Ленина'
    }
};

// Деструктуризация
const { fullName, position, salary } = employee;
console.log('  Деструктуризация: const { fullName, position, salary } = employee;');
console.log('  fullName:', fullName);
console.log('  position:', position);
console.log('  salary:', salary);

// Вложенная деструктуризация
const { address: { city, street } } = employee;
console.log('  Вложенная деструктуризация:');
console.log('  city:', city);
console.log('  street:', street);
console.log('-----------------------------------------\n');

console.log('=================================');
console.log('ВСЕ ПРИМЕРЫ УСПЕШНО ВЫПОЛНЕНЫ!');
console.log('=================================');