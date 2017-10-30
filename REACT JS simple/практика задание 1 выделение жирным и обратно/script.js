
class App extends React.Component {

constructor() {
       super();


    this.state = {checkBox: [false,false,false], items:['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ],
        css:[]
        }

    }

    crossText (index){


    this.state.checkBox[index] = !this.state.checkBox[index]
    this.setState({checkBox: this.state.checkBox})

    if (this.state.checkBox[index] == false) {

        this.state.css[index]={fontWeight: 400}
        this.setState ({css: this.state.css})

    } else {

        this.state.css[index]={fontWeight: 800}
        this.setState ({css: this.state.css})
    }

    }
    render () {

        const itemsList = this.state.items.map ((elem,index)=>{
            return <li key={index} style={this.state.css[index]}><input type='checkbox' onChange={this.crossText.bind(this, index)} />{elem} Состояние чекбокса {this.state.checkBox[index]== true ? '1':'0'}</li>
        })

          return (
            <ul>
                        {itemsList}
            </ul>

        )
            }

        }

        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
