/*      Реализуйте органайзер. Он должен представлять собой календарь за текущий месяц. По нажатию на определенную
 * дату календаря мы должны увидеть список дел, запланированных на этот день. Каждое дело можно поредактировать,
 * отметить сделанным или удалить, можно также добавить новое дело. Над календарем должны быть стрелочки 'назад' и
 * 'вперед', с помощью которых можно сменить месяц и год в календаре. */

class App extends React.Component {

constructor() {
       super();

        this.state = {notes: [], areaVal: "", dates:[], editInp:"",
            checkboxVal:[]}

    }
    addItem(){

        this.state.notes.push (this.state.areaVal);
        this.setState ({notes: this.state.notes});
        this.findDate ()
    }

    delItem (index){
    this.state.notes.splice (index,1);
    this.setState ({notes: this.state.notes});

    }

    editItem (index, e){

        this.state.editInp = this.state.notes[index]
        this.setState ({editInp:this.state.editInp})

        console.log (typeof this.state.notes[index])

        const editor = <p><input
        onChange ={this.handleEditor.bind(this, index)}
        onBlur={this.getEdited.bind(this, index)}
        defaultValue={this.state.editInp}
         /></p>

        this.state.notes[index] = editor;
        this.setState ({notes: this.state.notes})

    }


    handleTextArea (e){

        this.setState ({areaVal: e.target.value})

    }


    handleEditor(index, e){

        this.state.editInp = e.target.value;
        this.setState ({editInp: this.state.editInp})

        }

    getEdited(index){

        this.state.notes[index] = this.state.editInp
        this.setState ({notes:this.state.notes})

        }



    findDate (){

        var date = new Date();

        let d = date.getDate().toString()
        let m = date.getMonth().toString()
        let y = date.getFullYear().toString()
        let h = date.getHours().toString()
        let min = date.getMinutes().toString()
        let sec = date.getSeconds().toString()

        let datearr = [d,m,y,h,min,sec]

        for (let i = 0 ;i<datearr.length; i++) {

            if (datearr[i].length == 1) {
                datearr[i] = '0'+ datearr[i];

                }
            }

        this.state.dates.push ( datearr[0]+'/'+datearr[1]+'/'+datearr[2]+' Время: '+datearr[3]+ ' : ' + datearr[4] + ' : ' + datearr[5]);
        this.setState ({dates:this.state.dates})
    }

    taskDone (index) {

        if (this.state.checkboxVal[index] == undefined){
            this.state.checkboxVal[index] = true
            this.setState ({checkboxVal: this.state.checkboxVal})
            } else {
                this.state.checkboxVal[index] = !this.state.checkboxVal[index]
                this.setState ({checkboxVal: this.state.checkboxVal})
                }
        }

    render () {

        const notesList = this.state.notes.map ((elem,index)=>{
            return (<div key={index} className='mb-1 border border-primary'>
            <div className='ml-1'>
            <h4>Дата создания: <span className="badge badge-secondary">{this.state.dates[index]}</span></h4>
            </div>
            <div className='ml-1' key={index}> <div style={{color: 'green'}}><input onChange = {this.taskDone.bind (this, index)}type='checkbox' /> Выполнена</div>
            <h3 style={this.state.checkboxVal[index] == true ? {textDecoration: 'line-through'}:{} }>{elem}</h3></div>

            <div className= 'ml-1 mb-1'>
            <button className= {this.state.checkboxVal[index] == true ? "d-none btn btn-outline-primary":"btn btn-outline-primary" }
            onClick={this.editItem.bind(this,index)}>редактировать</button>
            <button className={this.state.checkboxVal[index] == true ? "d-none ml-1 btn btn-outline-primary":"ml-1 btn btn-outline-primary" }
            onClick={this.delItem.bind(this, index)}>удалить</button>
            </div>
            </div>)
        })


          return (
            <div>
            <h1>Список дел, внесите вашу заметку</h1>
              <div> <textarea style={{width: '75%',height: '100%'}}  className='m-5' onChange={this.handleTextArea.bind(this)}/></div>
              <div><button className= 'mb-3 btn btn-primary btn-lg btn-block' onClick={this.addItem.bind(this)}>Добавить</button></div>
            <div>{notesList}</div>
          </div>
        )
            }

        }

class Calendar extends React.Component {

constructor() {
       super();

        this.state = {}

    }



    render () {





          return
                      }

        }






        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
