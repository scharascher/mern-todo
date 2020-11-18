import React, { SyntheticEvent } from 'react';
import Input from 'common/components/Input';
import Submit from 'common/components/Submit';
import { newTodoType, TodoType } from 'features/todoTypes/TodoType';

interface Props {
    todoType?: null | TodoType;
    onSubmit: (data: newTodoType) => void;
}

class TodoTypeForm extends React.Component<
    Props,
    newTodoType
> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            _id: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentDidMount(): void {
        if (this.props.todoType) {
            this.setState(() => this.props.todoType as TodoType);
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>): void {
        if (!prevProps.todoType && this.props.todoType) {
            this.setState(() => this.props.todoType as TodoType);
        }
    }

    handleNameChange(event: React.ChangeEvent<{ value: string }>): void {
        const name = event.target.value.toString();
        this.setState(() => ({ name }));
    }

    handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        const data = {
            name: this.state.name,
            _id: this.state._id,
        };
        this.props.onSubmit(data);
    }

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    id="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <Submit>Submit</Submit>
            </form>
        );
    }
}

export default TodoTypeForm;
