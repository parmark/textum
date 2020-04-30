import React, {Component} from 'react';
import Thread from './components/Thread';

class App extends Component {
  state = {
    threads: [
      {
        id: 0,
        posts: [
          {
            name: 'Nonomy', 
            content: '^&%*&^$%*&'
          }, 
          {
            name: 'Chii-sama', 
            content: '&*^#*(&*($....?'
          }, 
          {
            name: null, 
            content: '....!!'
          }
        ] 
      }, 
      {
        id: 1, 
        posts: [
          {
            name: 'Nonomy', 
            content: '^&%*&^$%*&'
          }, 
          {
            name: 'Chii-sama', 
            content: "&*^#*(&*($....?"
          }, 
          {
            name: null, 
            content: '....!!'
          }
        ] 
      }
    ]
  }

  // Handles replies to existing threads
  handleReply = (props) => {
    let threads = [...this.state.threads];

    threads[props.id].posts.push(
      {name: document.getElementById(`name-field-${props.id}`).value, 
      content: document.getElementById(`post-field-${props.id}`).value}
    )

    console.log(this.state)

    this.setState(() => threads)

    console.log(this.state)
  }

  // Handles replies to new threads
  handleCreate = (props) => {
    let threads = [...this.state.threads];

    threads.push({
      id: this.state.threads.length,
      posts: [
        {
          name:  document.getElementById(`name-field-${props.id}`).value,
          content: document.getElementById(`post-field-${props.id}`).value
        }
      ] 
    })

    this.setState(() => ({threads}))

  }

  render() {
    return (
        <div className='App'>
            {this.state.threads.map(thread => 
              <Thread 
                thread={thread}
                reply={this.handleReply}
                key={thread.id}
              />
            )}
            <Thread 
              thread={
                {
                  id: this.state.threads.length,
                  posts: []
                }
              }
              reply={this.handleCreate}
            />
        </div>
    );
  }
}

export default App;
