/*
            Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и
            зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в
            последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить
            на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов.
            Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную
            зарплату всех работников.

         */


class View extends React.Component {

constructor() {
        super();

        this.state = {};

        }

    render () {

          return (

           <tr>
           <td>{this.props.index+1}</td>
           <td>{this.props.name}</td>
           <td>{this.props.surname}</td>
           <td><input value={this.props.workDays} onChange={this.props.handleDays.bind (null, this.props.index)}/></td>
           <td><input value={this.props.salary} onChange={this.props.handleSalary.bind (null, this.props.index)}/></td>
           <td>{this.props.workDays*this.props.salary}</td>
           </tr>
        )
            }
        }


class Total extends React.Component {

constructor() {
        super();

        this.state = {};

        }

    render () {

          return <h2>Зарплата по всем сотрудникам <span className="badge badge-secondary">{this.props.totalCount()}</span></h2>

            }
        }

class App extends React.Component {

constructor() {
        super();

        this.state = {workers: [
            {name: 'Вася', surname: 'Иванов', workDays: 15, salary: 33},
            {name: 'Петя', surname: 'Воронов', workDays: 20, salary: 9},
            {name: 'Света', surname: 'Петров', workDays: 17, salary: 13},
            {name: 'Дима', surname: 'Царь', workDays: 11, salary: 11},
            {name: 'Виталик', surname: 'Передречный', workDays: 5, salary: 55},
            {name: 'Коля', surname: 'Заречный', workDays: 14, salary: 20},
            {name: 'Алла', surname: 'Петрова', workDays: 26, salary: 15},
            ], heder:[{number: 'Номер',name: 'Имя', surname: 'Фамилия', workDays: 'Отработано дней', salary: 'Зарплата в день',totalsalary: 'Итого зарплата'}],
            handleDaysInp:[], handleSalaryInp:[] };
        }


        totalCount (){
            var sum = 0
            for (let i = 0; i < this.state.workers.length; i++) {
                sum+= this.state.workers[i].workDays * this.state.workers[i].salary
                }
            return sum
            }


            handleDays (index, e) {

                this.state.workers[index].workDays=e.target.value
                this.setState ({workers:this.state.workers})

                }


            handleSalary (index, e){

               this.state.workers[index].salary=e.target.value
               this.setState ({workers:this.state.workers})

                }

    render () {

            const workerList = this.state.workers.map ((elem, index)=> {
                return (<View
                key={index}
                name={elem.name}
                surname={elem.surname}
                workDays={elem.workDays}
                salary={elem.salary}
                index={index}
                handleDays= {this.handleDays.bind(this)}
                handleSalary = {this.handleSalary.bind(this)}
                />)

                })

                const hederList = this.state.heder.map ((elem, index)=> {
                    return (
                    <tr key={index}>
                    <td>{elem.number}</td>
                    <td>{elem.name}</td>
                    <td>{elem.surname}</td>
                    <td>{elem.workDays}</td>
                    <td>{elem.salary}</td>
                    <td>{elem.totalsalary}</td>
                    </tr>

                    )


                    })



        // не присваивает класс thead-light хедеру из бустрапа, он подлючен
          return (

            <div>
            <table className='table table-striped table-bordered table-hover' style={{marginTop: 50}}>

            <thead className='thead-light'>
            {hederList}
            </thead>
            <tbody>
            {workerList}
            </tbody>
            </table>
            <Total
            totalCount={this.totalCount.bind (this)}
            />
            </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
