export function printOwing(invoice) { 
 printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
//신문 타이틀 읽는 것처럼, 
//프린트오잉 함수는 배너출력 후 아웃스탠딩 계산하고 듀데이트 업뎃하고 출력하면 됨 

function printBanner(){
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function calculateOutstanding(invoice){
  return invoice.orders.reduce((sum, order)=> (sum += order.amount) ,0);
}

function recordDueDate(invoice){
  const today = new Date();
  invoice.dueDate = new Date( 
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
  
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
