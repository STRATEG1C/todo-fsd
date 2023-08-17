import React from 'react';
import { CheckboxInput } from 'shared/ui/form';
import { useCompleteTask } from '../lib';
import './styles.scss';

interface CompleteTaskActionProps {
    taskId: number;
    state: boolean;
}

export function CompleteTaskAction(props: CompleteTaskActionProps) {
    const { taskId, state } = props;

    const { mutate: completeTask } = useCompleteTask(taskId);

    const handleCompleteTask = (): void => {
        completeTask(!state);
    }

    return <CheckboxInput value={state} className="complete-task" onChange={handleCompleteTask} />
}
