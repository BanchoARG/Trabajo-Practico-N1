
    const debtor = `Pedro`;
    const creditor = `Juan`;
    const debt = 20;


    function getTemplate(debtor, creditor, debt){
        return `El mensaje dice que ${debtor} le debe $${debt} a ${creditor}`;
        
    };

   
    console.log(getTemplate(debtor, creditor, debt));
