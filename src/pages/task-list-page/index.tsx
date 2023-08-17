import React from 'react';
import { TaskList } from 'widgets/task-list';
import { PageLayout } from 'shared/ui/page-layout';
import { AddTask } from 'features/task/add-task';

export function TaskListPage() {
    return (
        <PageLayout title="Your tasks">
            <AddTask />
            <TaskList />
        </PageLayout>
    );
}
