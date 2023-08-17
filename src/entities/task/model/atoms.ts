import { atom } from 'recoil';
import { AtomKeys } from 'shared/config/recoil';
import { Task } from 'shared/api/task';

export const tasksState = atom<Task[]>({
   key: AtomKeys.tasksState,
   default: [],
});
