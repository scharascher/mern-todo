export interface ServerTodo {
    duration: number;
    priority: number;
    title: string;
    description: string;
    type: string;
    date: number;
    updatedAt: string;
    createdAt: string;
    typeId: string;
    _id: string;
}

export interface FrontendTodo {
    duration: number;
    priority: number;
    title: string;
    description: string;
    type: string;
    date: number; // timestamp
    updatedAt: Date;
    createdAt: Date;
    typeId: string;
    _id: string;
}

export class Todo implements FrontendTodo {
    duration: number;
    priority: number;
    title: string;
    description: string;
    type: string;
    date: number; // timestamp
    updatedAt: Date;
    createdAt: Date;
    typeId: string;
    _id: string;
    constructor({
        duration,
        priority,
        title,
        description,
        type,
        date,
        updatedAt,
        createdAt,
        typeId,
        _id,
    }: ServerTodo) {
        this.duration = duration;
        this.priority = priority;
        this.title = title;
        this.description = description;
        this.type = type;
        this.date = date;
        this.updatedAt = new Date(updatedAt);
        this.createdAt = new Date(createdAt);
        this.typeId = typeId;
        this._id = _id;
    }
}

export type newTodo = Omit<Todo, 'updatedAt' | 'createdAt' | 'typeId'>;
