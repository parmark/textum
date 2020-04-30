import React, {Component} from 'react';
import Thread from './components/Thread';
import './App.css';
import { firestore } from './firebase'

class App extends Component {
  state = {
    threads: []
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection('threads').get()
    let threads = [];

    snapshot.forEach(doc => {
      const data = doc.data();

      threads.push(data);
    })

    this.setState((state) => {
      return {threads: threads}
    })
  }

  // Handles replies to existing threads
  handleReply = (props) => {
    let threads = [...this.state.threads];

    threads[props.id].posts.push(
      {name: document.getElementById(`name-field-${props.id}`).value, 
      content: document.getElementById(`post-field-${props.id}`).value}
    )

    this.setState(() => threads)
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
            <Thread 
              thread={
                {
                  id: this.state.threads.length,
                  posts: []
                }
              }
              reply={this.handleCreate}
            />
            {this.state.threads.slice(0).reverse().map(thread => 
              <Thread 
                thread={thread}
                reply={this.handleReply}
                key={thread.id}
              />
            )}
        </div>
    );
  }
}

export default App;
