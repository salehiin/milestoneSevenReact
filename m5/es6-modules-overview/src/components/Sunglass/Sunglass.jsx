
// import add from '../../Utils/calculate';
import { add, divideTheFirstNumberBYTheSecondNumber as divide, multiply } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';

const Sunglass = () => {

    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vaag = divide(first, second);
    

    return (
        <div>
            <h1>Sunglass</h1>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;