import React, { SyntheticEvent } from 'react';
import './TodoForm.scss';
import Input from 'components/Input/Input';
import Dropdown from 'components/Select/Dropdown';
import { Option } from 'helpers/Option';
import DateInput from 'components/Date/DateInput';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import Submit from 'components/Submit/Submit';
import { Todo } from 'helpers/Todo';

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
    { todo?: null | Todo; onSubmit: (data: Todo) => void },
    Todo
> {
    constructor(props: { todo?: null | Todo; onSubmit: (data: Todo) => void }) {
        super(props);
        this.state = {
            priority: priorities[0].value as number,
            type: types[0].value as string,
            title: '',
            description: '',
            duration: 10,
            date: +new Date(),
            _id: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    componentDidMount(): void {
        if (this.props.todo) {
            this.setState(() => this.props.todo as Todo);
        }
    }

    componentDidUpdate(
        prevProps: Readonly<{ todo?: Todo | null; onSubmit: (data: Todo) => void }>,
    ): void {
        if (!prevProps.todo) {
            this.setState(() => this.props.todo as Todo);
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
            _id: this.state._id,
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
