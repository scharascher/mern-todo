import React from 'react';
import 'features/todos/containers/TodosWrapper/TodosWrapper.scss';
import Todos from 'features/todos/components/Todos/Todos';
import { connect } from 'react-redux';
import { fetchTodosIfNeeded } from 'features/todos/todosActions';

class TodosWrapper extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.dispatch(fetchTodosIfNeeded());
    }

    render(): React.ReactNode {
        return <Todos todos={this.props.todos} isFetching={this.props.isFetching} />;
    }
}

const mapStateToProps = (state: any) => {
    const { isFetching, lastUpdated, items: todos } = state.todos || {
        isFetching: true,
        items: [],
    };

    return {
        todos,
        isFetching,
        lastUpdated,
    };
};

export default connect(mapStateToProps)(TodosWrapper);
