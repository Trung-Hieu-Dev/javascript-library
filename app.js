const customer = ['Ken', 'Tom', 'Anna'];
const activeCustomer = ['Ken', 'Tom'];

const inActiveCustomer = _.difference(customer, activeCustomer);

console.log(inActiveCustomer)