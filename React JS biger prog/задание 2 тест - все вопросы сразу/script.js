/*  Реализуйте тест. Дан массив с вопросами и правильными ответами. Выведите все эти вопросы на экран, а под каждым
вопросом - инпут. В этот инпут пользователь должен ввести правильный ответ на вопрос. Под всеми вопросами должна
находиться кнопка 'сдать тест'. По нажатию на эту кнопку под вопросами вместо инпутов должно появится следующее:
'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные
ответы должны быть зеленого цвета, а неправильные - красного. */

class View extends React.Component {

constructor() {
        super();

        this.state = {};

        }

    render () {

            const questionsList = this.props.question.map ((elem,indexQ)=>{
                return (

                <ol className= 'list-group' key = {indexQ}> <p className=" m-1 p-3 mb-2 bg-primary text-white">{elem.question}</p>
                <div>
                {elem.answers.map((elem, indexA)=>{
                    return (
                    <li className='list-group-item' key={indexA}>
                    {elem}
                    </li>
                    )
                    })}
                    {elem.button}

                </div>

                </ol>
                )
                })

          return (
          <div>
            {questionsList}
          </div>
           )
            }

}


class App extends React.Component {

constructor() {
        super();

        this.state = {questions: [
            {question: 'вопрос 1', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 3,
            button: <p className='m-3'>Введите вариант ответа: <input onChange={this.handleInp.bind (this , 0)}/></p>},
            {question: 'вопрос 2', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 0,
                button: <p className='m-3'>Введите вариант ответа: <input onChange={this.handleInp.bind (this , 1)}/></p>},
            {question: 'вопрос 3', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 2,
                button: <p className='m-3'>Введите вариант ответа: <input onChange={this.handleInp.bind (this , 2)}/></p>},
            {question: 'вопрос 4', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 1,
                button: <p className='m-3'>Введите вариант ответа: <input onChange={this.handleInp.bind (this , 3)}/></p>}
            ], inputsVal: []};

        }

        handleInp(num, e){

            this.state.inputsVal[num] = e.target.value-1;
            this.setState ({inputsVal:this.state.inputsVal})
            }

        doneTest () {


            for (let i =0 ; i<this.state.questions.length; i++) {
                console.log (i, this.state.inputsVal[i], this.state.questions[i].rightAnswer)

                if (this.state.inputsVal[i] == this.state.questions[i].rightAnswer) {

                        this.state.questions[i].button = <p style={{color: 'green'}}>ваш ответ <b>{this.state.questions[i].answers[this.state.inputsVal[i]]}</b>. И это правильно</p>;
                        this.setState ({questions:this.state.questions})


                    } else {

                        this.state.questions[i].button = <p style={{color: 'red'}}>ваш ответ {this.state.questions[i].answers[this.state.inputsVal[i]]} а правильный {this.state.questions[i].answers[this.state.questions[i].rightAnswer]}</p>;
                        this.setState ({questions:this.state.questions})

                        }
                }
            }

    render () {

          return (
            <div>

            <View
            question={this.state.questions}
            handleInp={this.handleInp.bind(this)}
            />
            <button className='m-5 btn btn-primary btn-lg btn-block' onClick={this.doneTest.bind (this)}>ПРОВЕРИТЬ</button>
            </div>

        )
            }

        }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
