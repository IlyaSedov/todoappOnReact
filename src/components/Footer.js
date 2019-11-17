import React, { Component } from 'react';

class Footer extends Component {

    handleFilterChanged(e) {
        this.props.onFilterChanged(e.currentTarget.dataset.value);
    }

    render() {
        return (
            <div className="footer">
                <div>
                    <span className="active-items">Активных дел: {this.props.tasks.filter((t) => !t.checked).length}</span>
                </div>

                <div className="footer-buttons">

                    <button className={this.props.filter === "all" ? "selected" : ""}
                        data-value="all"
                        onClick={this.handleFilterChanged.bind(this)}>Все</button>

                    <button className={this.props.filter === "active" ? "selected" : ""}
                        data-value="active"
                        onClick={this.handleFilterChanged.bind(this)}>Активные</button>

                    <button className={this.props.filter === "completed" ? "selected" : ""}
                        data-value="completed"
                        onClick={this.handleFilterChanged.bind(this)}>Завершенные</button>

                </div>

                <div className="delete-completed">
                    <span onClick={this.props.onClearCompleted}>Удалить завершенные</span>
                </div>
            </div>
        )
    }
}


export default Footer;