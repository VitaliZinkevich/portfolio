/*  Модифицируйте предыдущую задачу так, чтобы пользователь мог выбрать один из вариантов ответа с помощью 4-х радио
 * кнопочек. Варианты ответов также должны храниться в массиве вопросами (придумайте удобную структуру массива,
 * чтобы там лежал и вопрос, и правильный ответ, и варианты ответов).  */




class View extends React.Component {

constructor() {
        super();

        this.state = {};

        }

    render () {


            const questionsList = this.props.question.map ((elem,indexQ)=>{
                return (

                <ol className={this.props.viewQuestions[indexQ] == true ? "d-block" : "d-none" } 
				key = {indexQ}> <p className=" m-1 p-3 mb-2 bg-primary text-white">{elem.question}</p>
                <div>
                {elem.answers.map((elem, indexA)=>{
                    return (
                    <li className='list-group-item' key={indexA}> 
					<p><input 
					type = 'radio'  
					className='mr-1' 
					onChange={this.props.handleInp.bind (null, indexQ, indexA)} 
					value={indexA}
					checked={this.props.inputsVal[indexQ]== indexA}					
					/>
                    {elem}</p>
                    </li>
                    )
                    })}
                    {elem.button}

                </div>
                <div>
                {elem.back}
                {elem.next}

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
            button: <p className='m-3'></p>,
            next:<button onClick={this.next.bind(this, 0)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 0)}>Назад</button>},
            {question: 'вопрос 2', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 0,
                button: <p className='m-3'></p>,
            next:<button onClick={this.next.bind(this, 1)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 1)}>Назад</button>},
            {question: 'вопрос 3', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 2,
                button: <p className='m-3'> </p>,
            next:<button onClick={this.next.bind(this, 2)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 2)}>Назад</button>},
            {question: 'вопрос 4', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : 1,
                button: <p className='m-3'> </p>,
            next:<button onClick={this.next.bind(this, 3)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 3)}>Назад</button>}
            ], inputsVal: [], viewQuestions:[true, false, false, false], check: false};

        }

        handleInp(indexQ, indexA){
			/*
            if (this.state.inputsVal[indexQ] == undefined) {
			
			this.state.inputsVal[indexQ]= true
			this.setState ({inputsVal:this.state.inputsVal})
				
			} else {
				
				this.state.inputsVal[indexQ]= !this.state.inputsVal[indexQ]
				this.setState ({inputsVal:this.state.inputsVal})
			}
			*/
			
			
			
			this.state.inputsVal[indexQ] = indexA
			this.setState ({inputsVal:this.state.inputsVal})
			
			var count = 0, i = this.state.inputsVal.length;

				if (this.state.inputsVal.length == this.state.questions.length) {
					
					
					while (i--) {
					
                    if ( this.state.inputsVal[i] === undefined)
                        
					count++;
					
					   
                }
				
				
                
				if (count == 0) {
                    this.state.check=true
                    this.setState ({check:this.state.check})
                    }
                    
                }
					console.log (count, this.state.inputsVal, this.state.check)
           
		   
		   console.log(this.state.inputsVal)
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

                for (let i =0 ; i<this.state.questions.length; i++) {


                    this.state.viewQuestions[i]= true

                    this.state.questions[i].back = ''
                    this.state.questions[i].next = ''


                    }

                this.setState ({questions:this.state.questions})
                this.setState ({viewQuestions:this.state.viewQuestions})

            }

            back (num){

                this.state.viewQuestions[num] = !this.state.viewQuestions[num]
                var back = num-1;

                if (back == -1) {
                    back = this.state.viewQuestions.length-1
                    }

                this.state.viewQuestions[back] = !this.state.viewQuestions[back]
                this.setState ({viewQuestions:this.state.viewQuestions})

              
            }
            next (num){


                this.state.viewQuestions[num] = !this.state.viewQuestions[num]
                var next = num+1;

                if (next == this.state.viewQuestions.length) {
                    next = 0
                    }

                this.state.viewQuestions[next] = !this.state.viewQuestions[next]
                this.setState ({viewQuestions:this.state.viewQuestions})

                
				}
				
               

    render () {




          const questionsDone = <button className='m-5 btn btn-primary btn-lg btn-block' onClick={this.doneTest.bind (this)}>ПРОВЕРИТЬ</button>;

          return (
            <div>

            <View
            question={this.state.questions}
            handleInp={this.handleInp.bind(this)}
            viewQuestions={this.state.viewQuestions}
			inputsVal={this.state.inputsVal}

            />
            <div>{this.state.check == true? questionsDone:""}</div>
            </div>

        )
            }

        }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
