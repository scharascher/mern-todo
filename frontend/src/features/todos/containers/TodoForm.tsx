import React, { SyntheticEvent } from 'react';
import Input from 'common/components/Input/Input';
import Dropdown from 'common/components/Select/Dropdown';
import { Option } from 'common/helpers/Option';
import DateInput from 'common/components/Date/DateInput';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import Submit from 'common/components/Submit/Submit';
import { newTodo, Todo } from 'features/todos/Todo';
import ManageType from 'features/todos/components/ManageType';
import TypeDropdown from 'features/todos/containers/TypeDropdown';

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
    { todo?: null | Todo; onSubmit: (data: newTodo) => void },
    newTodo
> {
    constructor(props: { todo?: null | Todo; onSubmit: (data: newTodo) => void }) {
        super(props);
        this.state = {
            priority: priorities[0].value as number,
            typeId: '',
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
        const typeId = event.target.value.toString();
        this.setState(() => ({ typeId }));
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
            typeId: this.state.typeId,
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
                <TypeDropdown handleTypeChange={this.handleTypeChange} value={this.state.typeId} />
                <ManageType />
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
