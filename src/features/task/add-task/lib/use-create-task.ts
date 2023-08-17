import { useMutation } from '@tanstack/react-query';
import { useTasks } from 'entities/task';
import { createTask } from 'shared/api/task';

export function useCreateTask() {
    const { addTask } = useTasks();

    return useMutation({
        mutationFn: (newTaskText: string) => createTask({ title: newTaskText, isCompleted: false }),
        onSuccess: (data) => addTask(data),
    });
}