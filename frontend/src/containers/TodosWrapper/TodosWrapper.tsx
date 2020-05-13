import React from 'react';
import './TodosWrapper.scss';
import Todos from 'components/Todos/Todos';
import { connect } from 'react-redux';
import { fetchTodosIfNeeded } from 'actions/todos';

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
