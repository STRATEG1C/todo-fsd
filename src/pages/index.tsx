import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TaskListPage } from './task-list-page';

export const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<TaskListPage />} />
        </Routes>
    );
};
