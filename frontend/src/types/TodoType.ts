export interface TodoType {
    name: string;
    updatedAt: number;
    createdAt: number;
    _id: string;
}

export type newTodoType = Omit<TodoType, 'updatedAt' | 'createdAt' | '_id'> & { _id?: string };
