import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
        <div className="tasks">
          {this.props.tasks.map((task) => {
            return <Task task={task} 
            deleteCallback={this.props.onDelete} 
            toggleCallback={this.props.onCheck} 
            key={task.id} />
          })
          }
        </div>
    );
  }
}

export default TasksList;
