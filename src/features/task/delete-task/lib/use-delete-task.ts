import { useMutation } from '@tanstack/react-query';
import { useTasks } from 'entities/task';
import { deleteTask } from 'shared/api/task';

export function useDeleteTask(taskId: number) {
    const { removeTask } = useTasks();

    return useMutation({
        mutationFn: () => deleteTask(taskId),
        onSuccess: (id: number) => removeTask(id),
    });
}