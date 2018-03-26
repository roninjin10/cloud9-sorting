import React, { Component } from 'react';
import Draggable from 'react-draggable';


const Top = ({merge, insertion, quick}) =>  {
  console.log(merge)
  return (
    <div className="Top">
      <ul className="sort">
        <li><button onClick={merge}>Merge Sort</button></li>
        <li><button onClick={insertion}>Insertion Sort</button></li>
        <li><button onClick={quick}>Quick Sort</button></li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  renderNewItems(items) {
    console.log(items)
    let out = []

    let bottom = 500
    let right = 0

    items.forEach(item => {

      out.push(
        <Item
          name={item.name}
          image={item.image}
          bottom={bottom}
          right={right}
        />
      )
      if (right < 1700){
        right += 170
      } else {
        right = 0
        bottom -= 200
      }

    })
    console.log('out', out)
    this.setState({items: out})
    console.log('this.state', this.state)
  }

  componentDidMount() {
    this.renderNewItems(merge.data)
  }

  renderMerge() {
    this.renderNewItems(merge.data)
  }

  renderInsertion() {
    this.renderNewItems(insertion.data)
  }

  renderQuick() {
    this.renderNewItems(quick.data)
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Sorting Algorithms!</h1>
        <Top
          merge={() => this.renderMerge()}
          insertion={() => this.renderInsertion()}
          quick={() => this.renderQuick()}
        />
        <div>{this.state.items}</div>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <Draggable>
        <div className="box" style={{position: 'absolute', bottom: this.props.bottom, right: this.props.right}}>
          <img src={this.props.image} alt={this.props.name} width="160" height="100" />
        </div>
      </Draggable>
    );
  }
}
/*
<Draggable>
          <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}}>
            I already have an absolute position.
          </div>
        </Draggable>
*/
const compare = (a, b) => a > b

const mergeSort = array => {
  if (array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length/2)
  const front = array.slice(0, middle)
  const back = array.slice(middle, array.length)

  return mergeStep(mergeSort(front), mergeSort(back))
}

const mergeStep = (array1, array2) => {
  let out = []
  while (array1.length && array2.length) {
    let x1 = array1[0]
    let x2 = array2[0]

    if (compare(x1, x2)) {
      out.push(x1)
      array1.shift()
    } else {
      out.push(x2)
      array2.shift()
    }
  }
  return out.concat(array1, array2)
}

const merge = {
  name: 'Merge',
  category: 'Best Tv Shows',
  data: [
    {name: 'Sopranos', img: ''},
    {name: 'The Wire', img: ''},
    {name: 'Breaking Bad', img: ''},
    {name: 'Seinfeld', img: ''},
    {name: 'South Park', img: ''},
    {name: 'Game of Thrones', img: ''},
    {name: 'Curb Your Enthusiasm', img: ''},
    {name: 'Parks and Rec', img: ''},
    {name: 'Chappelles Show', img: ''},
    {name: 'Broad City', img: ''},
    {name: 'Boondocks', img: ''},
    {name: 'King of the Hill', img: ''},
    {name: 'Samarai Champloo', img: ''},
    {name: 'Fullmetal Alchemist', img: ''},
    {name: 'Westworld', img: ''},
    {name: 'Who\'s Line Is It Anyways', img: ''},
    {name: 'Judge Judy', img: ''},
    {name: 'Weeds', img: ''},
    {name: 'Silicon Valley', img: ''},
    {name: 'The Fresh Pricne of Bel-Air', img: ''},
    {name: 'Making the Band 2', img: ''}
  ]
}

const insertionSort = array => {
  let out = []
  for (let i = 0; i < array.length; i++) {
    let next = array.shift()
    let insertIndex = out.length
    while(insertIndex && compare(next, out[insertIndex])) {
      insertIndex--
    }
    out.splice(insertIndex,0,next)
  }
  return out
}

const insertion = {
  name: 'Insertion',
  category: 'Worst People',
  data: [
    {name: 'A Slow Driver', img: ''},
    {name: 'A Nazi', img: ''},
    {name: 'A Child', img: ''},
    {name: 'Drake', img: ''},
    {name: 'King Joffrey', img: ''},
    {name: 'Kim Jon Un', img: ''},
    {name: 'Leaver of shopping cart in parking space', img: ''},
    {name: 'William Cory', img: ''}
  ]
}


const quick = {
  name: 'Quick Sort',
  category: 'Would win fight',
  data: [
    {name: 'Hailey with crossbow', img: ''},
    {name: 'Robin with war hammer', img: ''},
    {name: 'Cody with broadsword', img: ''},
    {name: 'Chucky with katana', img: ''},
    {name: 'Peter with sais', img: ''},
    {name: 'Ralph with nunchaku', img: ''},
    {name: 'Rebecca with spartan spear and shield', img: ''},
    {name: 'Lena with shuriken', img: ''}
  ]
}

export default App
