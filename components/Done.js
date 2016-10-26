import React from 'react';

class Done extends React.Component {

  render() {
    return(
      <div className="doneList">
        <h4>{this.props.title}</h4>
        <p>Priority Level: {this.props.priority}</p>
        <p>Created By: {this.props.createdBy}</p>
        <p>Assigned To: {this.props.assignedTo}</p>
        <form method='post' action='/moveToProgress'>
          <input type='text' value={this.props.id} name='id' className='invisible'/>
          <button className='preventReload'>In Progress</button>
        </form>
        <script>

        </script>

        <form method='post' action='/editD' id={this.props.id} >
          <input type='text' value={this.props.id} name='id' className='invisible'/>
          <input type='text' placeholder={this.props.title} name='title'/>
          <input type='text' placeholder={this.props.priority} name='priority'/>
          <input type='text' placeholder={this.props.createdBy} name='createdBy'/>
          <input type='text' placeholder={this.props.assignedTo} name='assignedTo'/>
          <button className='preventReload'>Edit</button>
        </form>

        <form method='post' action='/delete'>
          <input type='text' value={this.props.id} name='id' className='invisible'/>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}
export default Done;