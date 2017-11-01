/*  Модифицируйте предыдущую задачу так, чтобы пользователь мог выбрать несколько
вариантов ответа с помощью 4-х чекбоксов. */

// проверка ответов доделать


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
                    type = 'checkbox'
                    className='mr-1'
                    onChange={this.props.handleInp.bind (null, indexQ, indexA)}
                    value={indexA}
                    selected={this.props.inputsVal[indexQ][indexA]== true}
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
            {question: 'вопрос 1', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : [1,3],
            button: <p className='m-3'>Возможно несколько вариантов.</p>,
            next:<button onClick={this.next.bind(this, 0)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 0)}>Назад</button>},
            {question: 'вопрос 2', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : [1,3],
                button: <p className='m-3'>Возможно несколько вариантов.</p>,
            next:<button onClick={this.next.bind(this, 1)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 1)}>Назад</button>},
            {question: 'вопрос 3', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : [1,3],
                button: <p className='m-3'> Возможно несколько вариантов.</p>,
            next:<button onClick={this.next.bind(this, 2)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 2)}>Назад</button>},
            {question: 'вопрос 4', answers: ['вариант 1','вариант 2','вариант 3','вариант 4'], rightAnswer : [1,3],
                button: <p className='m-3'> Возможно несколько вариантов.</p>,
            next:<button onClick={this.next.bind(this, 3)} className = {'btn btn-outline-primary'}>Вперед</button>, back:<button className = {'btn btn-outline-primary'} onClick={this.back.bind(this, 3)}>Назад</button>}
            ], inputsVal: [[],[],[],[]], viewQuestions:[true, false, false, false], check: false,
            rigthA:[[false,true,false,true],[false,true,false,true],[false,true,false,true],[false,true,false,true]]};

        }

        handleInp(indexQ, indexA){

            if (this.state.inputsVal[indexQ][indexA] == undefined) {

                this.state.inputsVal[indexQ][indexA] = true
                this.setState ({inputsVal:this.state.inputsVal})
            } else {

                this.state.inputsVal[indexQ][indexA] = !this.state.inputsVal[indexQ][indexA]
                this.setState ({inputsVal:this.state.inputsVal})

                }

            var count = 0;

                for (var i = 0; i<this.state.inputsVal.length;i++) {

                    if (this.state.inputsVal[i].length == 0) {
                            count++;
                        }
                }


                if (count == 0) {
                    this.state.check=true
                    this.setState ({check:this.state.check})
                    }

           }

        doneTest () {

                    if(Array.prototype.equals)
                            console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
                        // attach the .equals method to Array's prototype to call it on any array
                        Array.prototype.equals = function (array) {
                            // if the other array is a falsy value, return
                            if (!array)
                                return false;

                            // compare lengths - can save a lot of time
                            if (this.length != array.length)
                                return false;

                            for (var i = 0, l=this.length; i < l; i++) {
                                // Check if we have nested arrays
                                if (this[i] instanceof Array && array[i] instanceof Array) {
                                    // recurse into the nested arrays
                                    if (!this[i].equals(array[i]))
                                        return false;
                                }
                                else if (this[i] != array[i]) {
                                    // Warning - two different object instances will never be equal: {x:20} != {x:20}
                                    return false;
                                }
                            }
                        return true;
                    }

                    Object.defineProperty(Array.prototype, "equals", {enumerable: false});

                    var arr = this.state.inputsVal


                    for (var i = 0; i<arr.length;i++) {


                        for (var j = 0; j<arr[i].length;j++) {

                            if (arr[i][j] == undefined) {

                                arr[i][j] = false;
                            }

                        }
                    }

                    for (var i = 0; i<arr.length;i++) {

                        if (arr[i].length < 4) {

                            var l = 4-arr[i].length

                    for (var k = 0; k<l;k++) {
                            arr[i].push (false)
                            }

                        }

                    }



                // вывод правильных ответов на экран пользователю

                // массив ответов и массив ответов пользователя

                // свои ответы


            for (let i =0 ; i<this.state.questions.length; i++) {


                if (this.state.inputsVal[i].equals(this.state.rigthA[i]) ) {

                        const rightAnswerV = this.state.questions[i].rightAnswer.map ((elem,index)=>{
                                return (<p style={{color: 'green'}}>правильный ответ {this.state.questions[i].answers[elem]}</p>)

                            })

                   const userAns = this.state.inputsVal[i]. map ((e,i)=>{
                                    var arr = []
                                    if (e == true) {
                                        arr.push(i)
                                        }

                                        const ansVal = arr.map ((e,i)=>{
                                            return (<p>{this.state.questions[i].answers[e]}</p>)

                                            })

                                        return ansVal
                                    })

                        const res = <div>  ПОЗДАРАВЛЯЕМ, ВЕРНО
                                    <div> Ваши ответы {userAns}</div>
                                    <div> {rightAnswerV}</div>
                                    </div>

                        this.state.questions[i].button = res
                        this.setState ({questions:this.state.questions})


                    } else {

                         const userAns = this.state.inputsVal[i]. map ((e,i)=>{
                                    var arr = []
                                    if (e == true) {
                                        arr.push(i)
                                        }

                                        const ansVal = arr.map ((e,i)=>{
                                            return (<p>{this.state.questions[i].answers[e]}</p>)

                                            })

                                        return ansVal
                                    })

                        const rightAnswerV1 = this.state.questions[i].rightAnswer.map ((elem,index)=>{
                                return (<p style={{color: 'green'}}>правильный ответ {this.state.questions[i].answers[elem]}</p>)

                            })


                        const wrongAnswerV = <div>
                                                НЕ ВЕРНО
                                            <div>Ваши ответы{userAns}</div>
                                            <div> {rightAnswerV1} </div>

                                            </div>

                        this.state.questions[i].button = wrongAnswerV;
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
