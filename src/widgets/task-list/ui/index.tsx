import React from 'react';
import { DeleteTaskAction } from 'features/task/delete-task';
import { CompleteTaskAction } from 'features/task/complete-task';
import { TaskCard, useFetchTasks, useTasks } from 'entities/task';

export function TaskList() {
    const { tasks } = useTasks();

    const { isLoading } = useFetchTasks();

    return (
        <div className="task-list">
            {isLoading && <div>Loading...</div>}
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                >
                    <CompleteTaskAction taskId={task.id} state={task.isCompleted} />
                    <DeleteTaskAction taskId={task.id} />
                </TaskCard>
            ))}
        </div>
    )
}
