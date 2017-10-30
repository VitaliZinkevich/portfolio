/*Дан инпут. В него вводится строка. Сделайте так, чтобы если длина  введенной строки от 4 до 9 символов - граница
инпута была зеленой, в противном случае - красной.
Инпут должен проверять свое содержимое по мере ввода.*/

class App extends React.Component {

constructor() {
        super();

        this.state = {valueInp: "", viewCss :{border: '3px solid red'}};
        }

     handleInp (e){

            this.setState ({valueInp: e.target.value});

// вопрос в части if. все значения выведены на экран и отображаются при вводе корректно.
// но сам if не верно работает, применяет стили не на тех значениях
// между 4 и 9 не включительно должно быть зеленым, но это не так. особенно при нажатии бэкспейса и значении 8
//  наборе в 1 раз, применяется только с длины 6.

            if (this.state.valueInp.length > 4 && this.state.valueInp.length < 9) {
                console.log ('green')
                this.setState ({viewCss: {border: '3px solid green'}})
                 } else {
                this.setState ({viewCss: {border: '3px solid red'}})
                console.log ('red')
                    }

     }

    render () {

          return (

                <div>
                <input style={this.state.viewCss} onChange={this.handleInp.bind (this)} />
                <p>Значение инпута: {this.state.valueInp}<br/></p>
                <p>Длина значения инпута: {this.state.valueInp.length}</p>
                </div>
        )
            }
}



    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
