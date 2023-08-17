import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import { Card } from 'shared/ui/card';
import { Task } from 'shared/api/task';
import './styles.scss';

interface TaskCardProps extends PropsWithChildren {
    task: Task;
}

export function TaskCard(props: TaskCardProps) {
    const { task, children } = props;

    return <Card text={task.title} className={cn({ completed: task.isCompleted })}>{children}</Card>;
}
