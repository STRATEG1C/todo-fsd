import React, {useEffect, useState} from 'react';
import { TextInput } from 'shared/ui/form';
import { BoxTitle } from 'shared/ui/typography';
import { PrimaryButton } from 'shared/ui/buttons';
import { useCreateTask } from '../lib';
import './styles.scss';

export function AddTask() {
    const [task, setTask] = useState('');

    const { isSuccess, mutate: createTask } = useCreateTask();

    useEffect(() => {
        setTask('');
    }, [isSuccess]);

    const submit = (): void => {
        const trimmedTask = task.trim();

        // Some validation
        if (!trimmedTask.length) return;

        createTask(trimmedTask);
    }

    return (
        <div className="add-task">
            <BoxTitle title="Add new task" />
            <div className="add-task-form">
                <TextInput
                    value={task}
                    name="task"
                    labelText="Task text"
                    placeholder="Enter new task text"
                    fullWidth
                    onChange={setTask}
                />
                <PrimaryButton title="+ Add" onClick={submit} />
            </div>
        </div>
    )
}
