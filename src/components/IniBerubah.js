import React, { Component } from 'react'
import { DiUnmount, Komponendua } from '.'

export class IniBerubah extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      data: [],
      isClicked: false
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  // Dijalankan ketika component pertama kali dipasang
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  // Dijalankan ketika terjadi perubahan state atau props
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter === 4) {
      console.log("counter selumnya itu " + prevState.counter)
    }
  }

  render() {
    const { counter, data, isClicked } = this.state
    return (
      <div>
        <div>
        <button onClick={this.increment} >+</button>
          {counter}
          <button onClick={this.decrement}>-</button>
        </div>
        <Komponendua title={data.title} abcd="abcd" />
        <button onClick={()=>this.setState({
          isClicked: !this.state.isClicked
        })}>Klik Saya Untuk Menampilkan Komponen</button>
        {
          isClicked ? <DiUnmount /> : null
        }
        
      </div>
    )
  }
}
