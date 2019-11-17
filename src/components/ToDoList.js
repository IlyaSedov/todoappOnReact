import React, { Component } from 'react';
import './todolist.css';
import AddTask from './AddTask';
import TasksList from './TasksList';
import Footer from './Footer';

class ToDoList extends Component {

  constructor() {
    super();


    this.state = {
      tasks: [],
      filter: "all"
    }
  }

  createNewTask(task) {

    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  handleClick(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
    // this.handleChange(true) //аааааа собакааа как инпут очиститьььььььь 
  }

  deleteTask(taskId, taskTitle) {
    const ifDelete = window.confirm('Удалить "' + taskTitle + '"?')

    if (ifDelete) {
      const newTasksList = this.state.tasks.filter((t) => {
        return t.id !== taskId;
      });

      this.setState({
        tasks: newTasksList
      });
    }
  }

  checkTask(task) {
    const newTasksList = [...this.state.tasks]

    newTasksList.forEach((t) => {
      if (t.id === task.id) {
        t.checked = task.checked;
        return;
      }
    })

    this.setState({
      tasks: newTasksList
    });
  }

  changeFilter(filterValue) {
    this.setState({
      filter: filterValue
    });
  }

  clearCompleted() {
    const ifClear = window.confirm('Удалить все завершенные дела?')

    if (ifClear) {
      this.setState({
        tasks: this.state.tasks.filter((t) => !t.checked)
      });
    }
  }

  saveTodos = () => {
    const tasks = this.state.tasks;
    localStorage.setItem("storage", JSON.stringify(tasks));
  };
  componentDidUpdate() {
    this.saveTodos();
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("storage"));
    const tasks = (data && [...data]) || [];
    this.setState({ tasks });
  }

  render() {

    let filteredTasks = [];

    if (this.state.filter === 'all') filteredTasks = this.state.tasks;
    if (this.state.filter === 'active') filteredTasks = this.state.tasks.filter((t) => !t.checked);
    if (this.state.filter === 'completed') filteredTasks = this.state.tasks.filter((t) => t.checked);

    return (
      <div className="todolist">
        <AddTask
          onCreate={this.createNewTask.bind(this)}
          onClick={this.handleClick.bind(this)} 
          ifAllChecked={this.state.tasks.filter((t) => !t.checked).length}/> 

        <TasksList
          tasks={filteredTasks}
          onDelete={this.deleteTask.bind(this)}
          onCheck={this.checkTask.bind(this)} />

        <Footer
          tasks={this.state.tasks}
          filter={this.state.filter}
          onFilterChanged={this.changeFilter.bind(this)}
          onClearCompleted={this.clearCompleted.bind(this)}
        />

      </div>
    );
  }
}

export default ToDoList;
