
class App extends React.Component {

constructor() {
       super();

    this.state = {workers: [
    {name: 'Коля', surname: 'Иванов', salary: 300},
    {name: 'Вася', surname: 'Петров', salary: 400},
    {name: 'Петя', surname: 'Сидоров', salary: 500},
    ], checkBox:[false,false,false]}

    }

    handleChange(index){

        this.state.checkBox[index] = !this.state.checkBox[index]
        this.setState({checkBox: this.state.checkBox})

    }

    render () {

         const summ = ()=> {

                    var res = 0;

                    for (let i =0; i<this.state.workers.length; i++ ) {
                         if (this.state.checkBox[i]) {
                             res += this.state.workers[i].salary
                             }
                        }
                    return res
                    }

        const workerList = this.state.workers.map ((elem,index)=>{
            return (
            <tr key={index}>
            <td>{index+1}<input type='checkbox' onChange={this.handleChange.bind (this,index)}/>Состояние чекбокса: {this.state.checkBox[index] ? 1:0}</td>
            <td>{elem.name}</td>
            <td>{elem.surname}</td>
            <td>{elem.salary}</td>

            </tr>
            )

        })

          return (
        <div>

          <table>
          {workerList}
          </table>
          <p>Итого по отмеченным: {summ()}</p>
        </div>
        )
            }

        }

        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
