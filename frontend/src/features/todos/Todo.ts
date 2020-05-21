export interface Todo {
    duration: number;
    priority: number;
    title: string;
    description: string;
    date: number; // timestamp
    updatedAt: number;
    createdAt: number;
    typeId: string;
    _id: string;
}

export type newTodo = Omit<Todo, 'updatedAt' | 'createdAt'>;
