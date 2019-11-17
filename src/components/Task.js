import React, { Component } from 'react';
import './todolist.css';

class Task extends Component {

  constructor(props) {
    super(props);

    this.parentDeleteCallback = props.deleteCallback;
    this.parentToggleCallback = props.toggleCallback;
  }

  deleteTask(e) {
    this.parentDeleteCallback(this.props.task.id, this.props.task.title);
  }

  toggleCheck(e) {
    let task = {...this.props.task};

    task.checked = !task.checked;

    this.parentToggleCallback(task);
  }

  render() {

    return (
      <div>
        <div className={this.props.task.checked ? "checked" : "task"} onClick={this.toggleCheck.bind(this)}>

        <div className="tick"></div>
          {this.props.task.title}
          
        </div>

        <span className="delete" onClick={this.deleteTask.bind(this)}>X</span> <hr />

      </div>
    );
  }
}

export default Task;
