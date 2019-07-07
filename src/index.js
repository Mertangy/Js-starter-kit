import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('Ksh0,0.00');
console.log(`I wuold pay ${courseValue} for this awesome course`);
