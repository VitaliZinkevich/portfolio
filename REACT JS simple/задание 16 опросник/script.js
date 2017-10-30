
class App extends React.Component {

constructor() {
        super();


        this.state = { test: [
        {
            question: 'Вопрос 1',
            answers: [
                'Ответ1',
                'Ответ2',
                'Ответ3',
                'Ответ4',
                'Ответ5',
            ],
            right: 3
        },
        { question: 'Вопрос 2',
        answers: [
                        'Ответ1',
                        'Ответ2',
                        'Ответ3',
                        'Ответ4',
                        'Ответ5',
                    ],
        right: 1
        },
        {
            question: 'Вопрос 3',
            answers: [
                'Ответ1',
                'Ответ2',
                'Ответ3',
                'Ответ4',
                'Ответ5',
            ],
            right: 4
        }
    ], radioVal:[{sel:''},{sel:''},{sel:''}], css: [,,]
};



        }

        handleOpt (index, indexblock){ // номер варианта ответа и блока

                this.state.radioVal[indexblock].sel = index;
                this.setState ({radioVal:this.state.radioVal})


                if (this.state.test[indexblock].right == index) {

                    this.state.css[indexblock] = {color: 'green'}
                    this.setState ({css:this.state.css});


                    } else {

                        this.state.css[indexblock] = {color: 'red'}
                        this.setState ({css:this.state.css});
                        }



                    }


    render () {




        const questions = this.state.test.map ((elem,indexblock)=>{

            return  (<div style={this.state.css[indexblock]}key={indexblock}>
                    {elem.question}

                    <div>
                    {elem.answers.map((elem,index)=>{
                        return <div style={this.state.css[indexblock]}><input

                        checked = {this.state.radioVal[indexblock].sel == index}
                        onChange={this.handleOpt.bind(this, index, indexblock)}
                        value={index} type='radio' /><span >{elem}</span></div>
                        })}

                    </div>
                    </div>)
                     })

          return (
          <div>
          {questions}

          </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
