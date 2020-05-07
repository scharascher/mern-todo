import React, { SyntheticEvent } from 'react';
import './TodoForm.scss';
import Input from '../common/Input/Input';
import Dropdown from '../common/Select/Dropdown';
import { Option } from '../common/Select/Option';
import DateInput from '../common/Date/DateInput';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import Submit from '../common/Submit/Submit';
import { Todo } from '../../pages/Todos/TodoHelper';

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

class TodoForm extends React.Component<
    { todo?: null | Todo; onSubmit: (data: Omit<Todo, '_id'>) => void },
    Omit<Todo, '_id'>
> {
    constructor(props: { todo?: null | Todo; onSubmit: (data: Omit<Todo, '_id'>) => void }) {
        super(props);
        this.state = {
            priority: priorities[0].value as number,
            type: types[0].value as string,
            title: '',
            description: '',
            duration: 10,
            date: +new Date(),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    componentDidUpdate(
        prevProps: Readonly<{ todo?: Todo | null; onSubmit: (data: Omit<Todo, '_id'>) => void }>,
    ): void {
        if (!prevProps.todo) {
            this.setState(() => this.props.todo as Omit<Todo, '_id'>);
        }
    }

    handlePriorityChange(event: React.ChangeEvent<{ value: string }>): void {
        const priority = parseInt(event.target.value);
        this.setState(() => ({ priority }));
    }

    handleTypeChange(event: React.ChangeEvent<{ value: string }>): void {
        const type = event.target.value.toString();
        this.setState(() => ({ type }));
    }

    handleTitleChange(event: React.ChangeEvent<{ value: string }>): void {
        const title = event.target.value.toString();
        this.setState(() => ({ title }));
    }

    handleDescriptionChange(event: React.ChangeEvent<{ value: string }>): void {
        const description = event.target.value.toString();
        this.setState(() => ({ description }));
    }

    handleDurationChange(event: React.ChangeEvent<{ value: string }>): void {
        const duration = parseFloat(event.target.value);
        this.setState(() => ({ duration }));
    }

    handleDateChange(newDate: MaterialUiPickersDate): void {
        const date = +(newDate as Date);
        this.setState(() => ({ date }));
    }

    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        const data = {
            title: this.state.title,
            description: this.state.description,
            type: this.state.type,
            priority: this.state.priority,
            duration: this.state.duration,
            date: this.state.date,
        };
        this.props.onSubmit(data);
    }

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <Input
                    id="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />
                <Input
                    id="duration"
                    placeholder="Duration (min)"
                    value={this.state.duration}
                    onChange={this.handleDurationChange}
                    type="number"
                />
                <DateInput
                    id="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
                <Dropdown
                    options={types}
                    value={this.state.type}
                    onChange={this.handleTypeChange}
                    placeholder="Type"
                />
                <Dropdown
                    options={priorities}
                    value={this.state.priority}
                    onChange={this.handlePriorityChange}
                    placeholder="Priority"
                />
                <Submit>Submit</Submit>
            </form>
        );
    }
}

export default TodoForm;
