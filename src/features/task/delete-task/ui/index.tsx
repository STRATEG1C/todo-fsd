import React from 'react';
import { SecondaryButton } from "shared/ui/buttons";
import { useDeleteTask } from '../lib';
import './styles.scss';

interface DeleteTaskActionProps {
    taskId: number;
}

export function DeleteTaskAction(props: DeleteTaskActionProps) {
    const { taskId } = props;

    const { mutate: deleteTask } = useDeleteTask(taskId);

    return <SecondaryButton title="Remove" className="remove-task" onClick={deleteTask} />
}
