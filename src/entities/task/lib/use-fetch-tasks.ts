import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Task, fetchTasks } from 'shared/api/task';
import { tasksState } from '../model/atoms';

interface UseFetchTasksReturnValue {
    isLoading: boolean;
    isError: boolean;
}

export function useFetchTasks(): UseFetchTasksReturnValue {
    const [, setTasks] = useRecoilState(tasksState);

    const { isLoading, isError, data } = useQuery<Task[], Error>({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setTasks(data || []);
    }, [data, setTasks]);

    return {
        isLoading,
        isError
    };
}
