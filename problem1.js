let getBalanceByCategoryInPeriod = (transactions = [], category, start, end) => {
  
    if(transactions.length == 0){
      return 0;
    }
    
    let categoryArray = ['groceries', 'eating_out', 'other', 'salary'];
    if(categoryArray.indexOf(category)>-1 === false) {
       return 'category mismatched!';
    }
    
    let startTime = start.toISOString()
    let endTime = end.toISOString()
   
    let filteredCategoryArray = transactions.filter(d => {
        let time = new Date(d.time).toISOString();
        return (time >= startTime && time < endTime && d.category === category);
    });
    
   let balanceAmount = 0;
    filteredCategoryArray.forEach((row,index) => {
     balanceAmount += parseInt(row.amount);
    });
   return balanceAmount;
   console.log('filteredCategoryArray',filteredCategoryArray);
  }


