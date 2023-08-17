import { request } from 'shared/lib/axios';
import { Task } from './types';
import { CreateTaskDTO, TaskDTO } from './types';

const apiUrl = process.env.REACT_APP_API_URL;
const tasksApiUrl = `${apiUrl}/tasks`;

export async function fetchTasks(): Promise<Task[]> {
    const res = await request.get<TaskDTO[]>(tasksApiUrl);
    return res.data;
}

export async function createTask(newTaskData: CreateTaskDTO): Promise<Task> {
    const res = await request.post<TaskDTO>(tasksApiUrl, newTaskData);
    return res.data;
}

export async function deleteTask(taskId: number): Promise<number> {
    await request.delete(`${tasksApiUrl}/${taskId}`);
    return taskId;
}

export async function completeTask(taskId: number, state: boolean): Promise<number> {
    await request.patch(`${tasksApiUrl}/${taskId}`, { isCompleted: state });
    return taskId;
}
