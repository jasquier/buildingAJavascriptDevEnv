import '../index.css';

import numeral from 'numeral';

// TODO poke around with numeral
const courseValue = numeral(1000).format('$0,0.00');
// eslint-disable-next-line
console.log(`I would pay ${courseValue} for this awesome course!`);
