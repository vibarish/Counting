const app = document.querySelector('.app');
    const salaryApp = document.querySelector('.app-salary');

    const salary = document.querySelector('#sum');
    const avans = document.querySelector('#avans');
    const food = document.querySelector('#food');

    const zp = document.querySelector('#display-panel__zp');
    const k = document.querySelector('#display-panel__k');
    const get15 = document.querySelector('#getValueHandler');
    const getAvansBtn = document.querySelector('#getAvansHandler');
    const okladIn = document.getElementsByName('oklad');
    const nadbavka = document.querySelector('#nadbavka');
    const getK = document.querySelector('#getk');
    const zpOutput = document.querySelector('#zp');

    const kBtn = document.getElementById('k-btn');
    const salaryBtn = document.getElementById('salary-btn');

    let total = 0;
    let mySalary = 0;
    let myAvans = 0;
    let result = 0;
    let oklad = 0;
    let expenses = 0;
    let okladFlag = false;

    let myK = 0;

    nadbavka.addEventListener('submit', (event) => {
      event.preventDefault();
      myK = (getK.value * 52800 + 52800 +5800) * 0.87;
      zpOutput.innerHTML = myK.toFixed(2);
    });
    
    kBtn.addEventListener('click', () => {
      salaryApp.classList.remove('app-salary-visible');
      app.classList.add('app-visible');
    });

    salaryBtn.addEventListener('click', () => {
      app.classList.remove('app-visible');
      salaryApp.classList.add('app-salary-visible');
    });

    getAvansBtn.addEventListener('click', () => {
      if (food.value > 0)
      expenses = food.value;
      
      okladIn.forEach(element => {
        if (element.checked) {
          oklad = element.value;
          okladFlag = true;
        } 
      });
  
      mySalary = salary.value;
      myAvans = avans.value;
      if (food.value > 0)
        total = parseInt(myAvans) + parseInt(mySalary) + parseInt(expenses);
      else total = parseInt(myAvans) + parseInt(mySalary);
      if (mySalary > 100 && myAvans > 100 && mySalary < 1000000 && myAvans < 1000000 && okladFlag) {
        let dirtyTotal = total / 0.87 ;
        let premium = (dirtyTotal - oklad - (oklad * 0.1)) / oklad;
        zp.innerHTML = total;
        k.innerHTML = premium.toFixed(2);
      } else {
        if (!okladFlag) {
          alert('Не выбран размер оклада!')
          return;
        };
        if (mySalary > 1000000 || myAvans > 1000000) {
          alert('Зарплата не может быть такой большой!');
          return;
        }
        if (mySalary < 100 || myAvans < 100) {
          alert('Неверные значения зарплаты или(и) оклада');
          return;
        } 
      }
      //  alert('Введите корректные данные!');
      oklad = 0;
    });
