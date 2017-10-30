
class App extends React.Component {

constructor() {
       super();


    this.state = {workers: [
    {name: 'Коля', surname: 'Иванов', age: 30},
    {name: 'Вася', surname: 'Петров', age: 40},
    {name: 'Петя', surname: 'Сидоров', age: 50},
    ], checkBox:[false,true,false]}


    }

    handleChange(index){
        this.state.checkBox[index] = !this.state.checkBox[index]
        this.setState({checkBox: this.state.checkBox})
        //alert (this.state.workers[index].salary);

    }



    render () {

        const workerList = this.state.workers.map ((elem,index)=>{
            return (
            <li key={index}>
            <input type='checkbox' onChange={this.handleChange.bind (this,index)} checked={this.state.checkBox[index]}/>Состояние чекбокса {this.state.checkBox[index] ? 1+' ':0+' '}
            {this.state.checkBox[index] ? this.state.workers[index].name+' '+this.state.workers[index].surname+' '+this.state.workers[index].age+' ' : this.state.workers[index].name}

            </li>
            )


        })






          return (
        <div>

          <ul>
          {workerList}
          </ul>

        </div>
        )
            }

        }






        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
