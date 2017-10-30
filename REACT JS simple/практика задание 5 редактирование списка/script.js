/*
Дан массив. Выведите элементы этого массив в виде списка .    Сделайте так, чтобы по нажатию на li
внутри нее появился инпут, с помощью которого можно будет поредактировать текст этой li.
По потери фокуса текст из инпута должен записаться обратно в li,         а инпут исчезнуть.
*/

class App extends React.Component {

constructor() {
       super();


    this.state = {workers: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ],
        editInp:''}
    }

    redact (index){ // появляется инпут

         this.state.editInp=this.state.workers[index]
         this.setState ({editInp:this.state.editInp})

        const editor = <span> <input  onChange = {this.handleChangeInp.bind (this)}
        onBlur={this.doneEdit.bind (this, index)}
        defaultValue={this.state.editInp}
        /> </span>

        this.state.workers[index] = editor;
        this.setState ({workers:this.state.workers})
            }

        doneEdit(index){ // вносятся изменения с инпута в список по потери фокуса инпутом

        this.state.workers[index]=this.state.editInp;
        this.setState ({workers:this.state.workers});
            }

        handleChangeInp (e){ // отслеживается значение инпута
            this.state.editInp = e.target.value
            this.setState ({editInp:this.state.editInp})

            }

        render () {

        const workerList = this.state.workers.map ((elem,index)=>{
            return (

            <li key={index} onClick={this.redact.bind (this, index)}>
            {elem}
            </li>

            )
        })

          return (
        <div>
          <ul>
          {workerList}
          </ul>
        <p>Состояние вводимого инпута: {this.state.editInp}</p>
        </div>
        )
            }

        }


        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
