import { useMutation } from '@tanstack/react-query';
import { useTasks } from 'entities/task';
import { completeTask } from 'shared/api/task';

export function useCompleteTask(taskId: number) {
    const { updateTaskCompleted } = useTasks();

    return useMutation({
        mutationFn: (state: boolean) => completeTask(taskId, state),
        onSuccess: (id: number) => updateTaskCompleted(id),
    });
}