import './App.css'

import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
              <div id="content">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.createTask(this.task.value)
                }}>
                  <input ref={input => this.task = input} id="newTask" type="text" className="form-control" placeholder="Add task..." required />
                  <input type="submit" hidden={true} />
                </form>
                <ul id="taskList" className="list-unstyled">
                  {this.props.tasks.map((task, key) => (
                    <div className="taskTemplate" className="checkbox" key={key} >
                      <label>
                        <input type="checkbox" checked={task.completed} />
                        <span className="content">{task.content}</span>
                      </label>
                    </div>
                  ))}
                </ul>
                <ul id="completedTaskList" className="list-unstyled">
                </ul>
              </div>
    )
  }
}

export default TodoList
