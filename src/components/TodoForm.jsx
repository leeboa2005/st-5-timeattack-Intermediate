import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            dispatch(addTodo({ title, content }));
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label>제목: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>내용: </label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">추가</button>
        </form>
    );
}
