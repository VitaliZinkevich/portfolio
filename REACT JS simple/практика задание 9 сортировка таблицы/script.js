/*
Дан массив с работниками. У каждого работника есть имя, фамилия, зарплата.
Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы работников можно
было посортировать по любой колонке этот таблицы.     */


class App extends React.Component {

constructor() {
       super();

    this.state = {users: [
        {name: 'Коля',surname : 'Иванов', salary: 30},
        {name: 'Вася',surname : 'Петров', salary: 200},
        {name: 'Петя',surname : 'Сидоров', salary: 10},
    ], heder: [{name: 'Имя',surname : 'Фамилия', salary: "Зарплата"}]}

    }

    sort(arr, name){

        var tmp = "";

        for (var key in arr) {



            if (arr[key] == name) {

                tmp = key

                }
            }


            console.log  (tmp) // свойство по которому сортируем массив

//  взята функция со стековерфлоу
// здесь в целом не ясно методы сортировки массива объектов по ключу объекта
          var sort_by = function(field, reverse, primer){

           var key = primer ?
               function(x) {return primer(x[field])} :
               function(x) {return x[field]};

           reverse = !reverse ? 1 : -1;

           return function (a, b) {
               return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
             }
        }


        if (tmp == 'salary') {
            this.state.users.sort(sort_by(tmp, false, parseInt));
            this.setState ({users:this.state.users})
        } else {

            this.state.users.sort(sort_by(tmp, false));
            this.setState ({users:this.state.users})
            }





    }

    render () {

        const userList = this.state.users.map ((elem,index)=>{
            return (
        <tr key={index}>
        <td>{index+1}</td>
        <td>{elem.name}</td>
        <td>{elem.surname}</td>
        <td>{elem.salary}</td>
        </tr>
            )

        })

        const hederList = this.state.heder.map ((elem,index)=>{
            return (<tr key={index}>

            <td></td>
            <td onClick={this.sort.bind (this, elem, elem.name)}>{elem.name}</td>
            <td onClick={this.sort.bind (this, elem, elem.surname)}>{elem.surname}</td>
            <td onClick={this.sort.bind (this, elem, elem.salary)}>{elem.salary}</td>
            </tr>)

            })


          return (

          <table className='table'>
          <tbody>
          {hederList}
          {userList}
          </tbody>
          </table>
        )
            }

        }


        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
