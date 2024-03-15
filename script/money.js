
    document.getElementById('calculate-btn').addEventListener('click',function(){
        const incomeValue=getInputFieldValuById('income-field');
        const foodValue=getInputFieldValuById('food-field');
        const rentValue=getInputFieldValuById('rent-field');
        const clothesValue=getInputFieldValuById('clothes-field');

        // console.log(incomeValue,foodValue,rentValue,clothesValue);
        const totalExpenses=foodValue+rentValue+clothesValue;
        // calculte total expenses
    setElementTextById('total-expenses',totalExpenses);

    
    // calculate back balance 

    const balance=incomeValue-totalExpenses;
    setElementTextById('balance',balance);
    console.log(balance);

        // save function
        document.getElementById('save-btn').addEventListener('click',function(){
        const saveField=getInputFieldValuById('save-field');
        const saveAmount=balance*(saveField/100);
        setElementTextById('save-amount',saveAmount);
        const remainingAmount=balance-saveAmount;
        setElementTextById('remaining-balance',remainingAmount)

     
    })
    
    })

