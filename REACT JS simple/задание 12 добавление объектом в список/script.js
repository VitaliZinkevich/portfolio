
class App extends React.Component {

constructor() {
        super();

        this.state = {workers: [
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
    ], nameInp:"", surnameInp:"", salaryInp:"", selectVal:0};



        }

        handleName (e){this.setState ({nameInp: e.target.value})}
        handleSurname (e){this.setState ({surnameInp: e.target.value})}
        handleSalary (e){this.setState ({salaryInp: e.target.value})}
        handleSelect (e){this.setState ({selectVal: this.state.selectVal == 0 ? 1:0})}

        addWorker (){


            this.state.workers.push ({name: this.state.nameInp, surname: this.state.surnameInp, salary: this.state.salaryInp, gender : this.state.selectVal == 0 ? 'male':'female' })
            console.log (this.state.workers)
            this.setState ({workers:this.state.workers})
            }

    render () {


            const wrokerList =  this.state.workers.map ((elem, index)=>{
                return <tr key ={index}><td>{elem.name}</td><td>{elem.surname}</td><td>{elem.salary}</td><td>{elem.gender}</td></tr>
                })

          return (
            <div>

          <table>
            {wrokerList}
          </table>

            <input onChange={this.handleName.bind(this)}/>
            <input onChange={this.handleSurname.bind(this)}/>
            <input onChange={this.handleSalary.bind(this)}/>

            <select onChange={this.handleSelect.bind(this)}>

            <option>male</option>
            <option>female</option>
            </select>

            <button onClick={this.addWorker.bind(this)}>добавить</button>



            </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
