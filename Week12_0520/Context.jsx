import React from 'react';
import { useTodoState, useTodoDispatch } from './TodoContext';
function Sample() {
    const state = useTodoState();
    const dispatch = useTodoDispatch();
    return <div>Sample</div>;
}