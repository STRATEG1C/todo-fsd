import { Task } from 'shared/api/task/types';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { tasksState } from './atoms';

interface UseTasksReturnType {
    tasks: Task[];
    setTasks: SetterOrUpdater<Task[]>;
    addTask(task: Task): void;
    removeTask(id: number): void;
    updateTaskCompleted(id: number): void;
}

export function useTasks(): UseTasksReturnType {
    const [tasks, setTasks] = useRecoilState(tasksState);

    const addTask = (task: Task): void => {
        setTasks((prev) => [...prev, task]);
    };

    const removeTask = (taskId: number): void => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    const updateTaskCompleted = (taskId: number): void => {
        setTasks((prev) => {
            const newTasks: Task[] = [];

            prev.forEach((task) => {
                const newTask = { ...task };

                if (newTask.id === taskId) {
                    newTask.isCompleted = !newTask.isCompleted
                }

                newTasks.push(newTask);
            });

            console.log(newTasks);

            return newTasks;
        });
    };

    return {
        tasks,
        setTasks,
        addTask,
        removeTask,
        updateTaskCompleted,
    };
}