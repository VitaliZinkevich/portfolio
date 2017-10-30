
class App extends React.Component {

constructor() {
        super();

        this.state = {workers: [
        {name: 'Первый', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Шестой', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Одинадцатый', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Шестьнадцатый', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Коля', surname: 'Иванов', salary: 300, gender : 'male'},
        {name: 'Вася', surname: 'Иванов', salary: 400, gender : 'male'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'},
        {name: 'Света', surname: 'Иванов', salary: 500, gender : 'female'}
    ], toView:[]};


        }

        showList(index=0){

            const tmp = this.state.workers.slice (index*5, index*5+5)
            this.setState ({toView: tmp})

            }

    render () {

                if (this.state.toView.length ==0) {
                    const tmp = this.state.workers.slice (0, 5)
                    this.setState ({toView: tmp})
                    }

                const display = this.state.toView.map ((elem,index)=>{
                    return <tr key={index}><td>{elem.name}</td><td>{elem.surname}</td><td>{elem.salary}</td><td>{elem.gender}</td></tr>
                    })




                const links = ()=>{
                let numLinks = Math.ceil(this.state.workers.length/5)
                var arr =[];
                for (var i=1; i<=numLinks; i++) {
                      arr.push(i);
                        }
                const readyLinks =  arr.map ((elem,index)=>{
                    return <a onClick={this.showList.bind(this, index)} key={index} href="#">{' '+elem+' '}</a>
                    })
                return readyLinks;
                }




// вывести таблицу на первое открытие страницы. элементы с 1 по 5

          return (


            <div>



            {links()}

          <table>

            {display}

          </table>

            </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
