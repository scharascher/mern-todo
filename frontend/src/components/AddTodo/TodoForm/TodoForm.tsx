import React, { SyntheticEvent, useState } from 'react';
import './TodoForm.scss';
import Input from '../../common/Input/Input';
import Dropdown from '../../common/Select/Dropdown';
import { Option } from '../../common/Select/Option';
import DateInput from '../../common/Date/DateInput';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import Submit from '../../common/Submit/Submit';
import { Todo } from '../../Todos/TodoHelper';

const userId = '5ea85498f9fd2178271ecb26';
const types: Option[] = [
    {
        value: 'default',
        label: 'Default',
    },
];
const priorities: Option[] = [
    {
        label: 'Minor',
        value: 0,
    },
    {
        label: 'Major',
        value: 1,
    },
    {
        label: 'Critical',
        value: 2,
    },
];

const TodoForm: React.FC<{ onSubmit: (data: Todo) => void }> = (props) => {
    const [priority, setPriority] = useState<number>(priorities[0].value as number);
    const [type, setType] = useState<string>(types[0].value as string);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [duration, setDuration] = useState<number>(10);
    const [date, setDate] = useState<Date>(new Date());

    const handlePriorityChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setPriority(parseInt(event.target.value));
    };

    const handleTypeChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setType(event.target.value.toString());
    };

    const handleTitleChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setTitle(event.target.value.toString());
    };

    const handleDescriptionChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setDescription(event.target.value.toString());
    };

    const handleDurationChange = (event: React.ChangeEvent<{ value: string }>): void => {
        setDuration(parseFloat(event.target.value));
    };

    const handleDateChange = (date: MaterialUiPickersDate): void => {
        setDate(date as Date);
    };

    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        const data = {
            title,
            description,
            type,
            priority,
            duration,
            date,
            userId,
        };
        props.onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input id="title" placeholder="Title" value={title} onChange={handleTitleChange} />
            <Input
                id="description"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <Input
                id="duration"
                placeholder="Duration (min)"
                value={duration}
                onChange={handleDurationChange}
                type="number"
            />
            <DateInput id="date" placeholder="Date" value={date} onChange={handleDateChange} />
            <Dropdown options={types} value={type} onChange={handleTypeChange} placeholder="Type" />
            <Dropdown
                options={priorities}
                value={priority}
                onChange={handlePriorityChange}
                placeholder="Priority"
            />
            <Submit>Submit</Submit>
        </form>
    );
};

export default TodoForm;
