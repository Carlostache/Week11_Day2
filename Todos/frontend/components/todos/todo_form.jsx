import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.uniqueId(),
            title: '',
            body: '',
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    uniqueId() {
        return new Date().getTime();
    }

    updateTitle(e) {
        this.setState({title: e.target.value})
    }

    updateBody(e) {
        this.setState({body: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.addTodo(this.state);

        this.setState({
            id: this.uniqueId(),
            title: '',
            body: '',
            done: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Todo</h1>
                    <label>Title
                        <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
                    </label>
                    <label>Body
                        <input type="text" value={this.state.body} onChange={this.updateBody}></input>
                    </label>
                    <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}

export default TodoForm;