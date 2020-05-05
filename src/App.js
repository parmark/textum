import React, {Component} from 'react';
import Thread from './components/Thread';
import './App.css';
import { firestore } from './firebase'
import firebase from 'firebase/app'


class App extends Component {
  state = {
    threads: [],
    numberOfPosts: 0
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection('threads').get()
    let threads = [];
    let numberOfPosts = 0;

    snapshot.forEach(doc => {
      threads.push({id: doc.id, posts: doc.data().posts});
      numberOfPosts = numberOfPosts + doc.data().posts.length
    })

    this.setState({
      threads: threads,
      numberOfPosts: numberOfPosts
    })
  }

  // Handles replies to existing threads
  handleReply = async (props) => {

    /* Define new data */
    let threads = this.state.threads;
    const post = {
      id: this.state.numberOfPosts,
      name: document.getElementById(`name-field-${props.index}`).value,
      content: document.getElementById(`post-field-${props.index}`).value
    }

    /* Upload and download new data */
    const threadRef = await firestore.collection('threads').doc(props.id);
    threadRef.update({
        posts: firebase.firestore.FieldValue.arrayUnion(post)
    })

    /* Add changes to state */
    threads[props.index].posts.push(post)
    this.setState(() => threads)
    this.setState({numberOfPosts: this.state.numberOfPosts + 1})
  }

  // Handles replies to new threads
  handleCreate = async (props) => {
    /* Define new data */
    let thread = {
      posts: [
        {
          id: this.state.numberOfPosts,
          name:  document.getElementById(`name-field-${props.id}`).value,
          content: document.getElementById(`post-field-${props.id}`).value
        }
      ]
    }

    /* Upload and download new data */
    const docRef = await firestore.collection('threads').add(thread);
    const doc = await docRef.get();

    /* Add changes to state */
    const { threads } = this.state;
    this.setState({ 
      threads: [{id: doc.id, posts: doc.data().posts }, ...threads],
      numberOfPosts: this.state.numberOfPosts + 1
    })
  }

  render() {
    return (
        <div className='App'>
            <Thread 
              thread={
                {
                  posts: []
                }
              }
              reply={this.handleCreate}
            />
            {this.state.threads.slice(0).reverse().map(thread => 
              <Thread 
                thread={thread}
                reply={this.handleReply}
                index={this.state.threads.indexOf(thread)}
                id={thread.id}
                key={thread.id}
              />
            )}
        </div>
    );
  }
}

export default App;
