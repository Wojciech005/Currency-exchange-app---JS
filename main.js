const btn = document.querySelector('button')
        const input = document.querySelector('input')
        const currencyOption = document.querySelectorAll('option')
       

        const liItems = [...document.querySelectorAll('p.result')]

        const ratio = [5, 10, 15, 20]
        
        const moneyPound = [1.16 ,1.40, 1.28, 5.25, 1, 1.78 , 9.04, 149.06, 30.25, 103.04, 10.28, 5107.57]
        const moneyEuro = [1, 1.21, 1.11, 4.54, 0.87 , 1.54, 7.82, 129.05, 26.19, 89.21, 8.90, 4421,04]
        const moneyUsd = [0.83, 1 , 0.91 , 3.75, 0.72 , 1.28, 6.47, 106.72, 21.66, 73.78, 7.36, 3656.02]
        

        let index = 0
        let active = false
        
        changeOption = (e) => {
            const value = input.value;
            const option = document.getElementById('money').value;
            console.log(option)
            if(option === 'euro') {
               document.getElementById('placeHolder').placeholder = 'Euro';
          

        } if (option === 'pound') {
            document.getElementById('placeHolder').placeholder = 'British pound £' ;
           

        }  else if (option === 'dolar') {
            document.getElementById('placeHolder').placeholder = 'Dolar USD $' 
          
        }
        }
      

        const checkCurrence = (e) => {
            const value = input.value;
            const option = document.getElementById('money').value;
            
                if(input.value === '' ) {
                    alert('Get value')
                } if (input.value !== '' || option === 'dolar' ) { 
                    // textP.textContent = value;
                liItems.forEach(liItem => (
                liItem.textContent = (value * moneyUsd[index++]).toFixed(2) ))
            input.value = ''
            index = 0;
            console.log(option)
                } if (input.value !== '' || option === 'euro') {
                    liItems.forEach(liItem => (
                liItem.textContent = (value * moneyEuro[index++]).toFixed(2) ))
            input.value = ''
            index = 0;
            console.log(option)
                } if (input.value !== '' || option === 'pound') {
                    liItems.forEach(liItem => (
                liItem.textContent = (value * moneyPound[index++]).toFixed(2) ))
            input.value = ''
            index = 0;
                }
                
        }
        
        btn.addEventListener('click', checkCurrence)