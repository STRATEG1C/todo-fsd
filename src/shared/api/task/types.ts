export interface TaskDTO {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface CreateTaskDTO {
    title: string;
    isCompleted: boolean;
}

export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}