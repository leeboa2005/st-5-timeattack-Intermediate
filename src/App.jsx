import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, subtractValue } from './redux/slices/calculatorSlice';

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
    const [inputValue, setInputValue] = useState(0);
    const dispatch = useDispatch();
    const result = useSelector((state) => state.calculator.result);

    const handleAdd = () => {
        dispatch(addValue(Number(inputValue)));
    };

    const handleSubtract = () => {
        dispatch(subtractValue(Number(inputValue)));
    };

    return (
        <div className="App">
            <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 만큼을{' '}
                <button onClick={handleAdd}>더할게요</button> <button onClick={handleSubtract}>뺄게요</button>
            </div>
            <hr />
            <div>
                <h3>결과</h3>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default App;
