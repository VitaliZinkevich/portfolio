/*      Реализуйте органайзер. Он должен представлять собой календарь за текущий месяц. По нажатию на определенную
 * дату календаря мы должны увидеть список дел, запланированных на этот день. Каждое дело можно поредактировать,
 * отметить сделанным или удалить, можно также добавить новое дело. Над календарем должны быть стрелочки 'назад' и
 * 'вперед', с помощью которых можно сменить месяц и год в календаре. */


class NotesView extends React.Component {

constructor() {

       super();

        this.state = {}

    }

    render () {

        const dateL = this.props.dateN+'-'+this.props.monthN
        var flag = false;
        var notesList = "";
        for (var i = 0; i < this.props.notes.length;i++) {

            if (this.props.notes[i].date == dateL) {
            flag = true

            notesList = this.props.notes[i].value.map ((elem, indexNote)=>{
             return (<div className='mb-1 mt-1 border border-primary'
             key={indexNote}>
             <div className='ml-1 mt-1 text-success' >
             <input type = 'checkbox' checked = {this.props.doneVal[i][indexNote] == true} onChange={this.props.doneTask.bind(null, i, indexNote)}/> Выполнено</div>
             <div className='ml-1' style={this.props.doneVal[i][indexNote] == true ? {textDecoration: 'line-through'}:{}}>{elem}</div>

             <div className='ml-1 mb-1'>
             <button className="btn btn-outline-primary" disabled = {this.props.doneVal[i][indexNote] == true} onClick={this.props.delTask.bind(null, i, indexNote)}>Удалить</button>
             <button className="ml-1 btn btn-outline-primary" disabled = {this.props.doneVal[i][indexNote] == true} onClick={this.props.editTask.bind(null, i, indexNote)}>Редактировать</button>

             </div>
            <div>
            </div>
             </div>)
              })

                }

            }

        if (flag == false) {

             notesList = 'заметок на дату нет'
              }

          return (<div>
            <h5>Заметки на текущую дату</h5>
         <div className='m-5'> <textarea cols="54"  onChange={this.props.handleTextarea}/> </div>
         <div> <button className='mb-3 btn btn-primary btn-lg btn-block' onClick={this.props.addNote} >добавить</button></div>
            <div>
        {notesList}

          </div>
          </div>)

            }

}

var date = new Date ();
var y = date.getFullYear(), m = date.getMonth(), today = date.getDate();


class Calendar extends React.Component {

constructor() {
       super();

        this.state = {currentM: m, currentY:y,currentD: today,
            month: ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
            notes: [{date: '1-10', value:[1,2,3]}],textareaV:"", editInp:'', doneVal:[[]]
            }

        }

        doneTask (i, indexNote) {



            if (this.state.doneVal[i][indexNote] == undefined) {

                this.state.doneVal[i][indexNote] = true;
                this.setState ({doneVal:this.state.doneVal})

                } else {

                    this.state.doneVal[i][indexNote] = !this.state.doneVal[i][indexNote]
                    this.setState ({doneVal:this.state.doneVal})

                    }

                    console.log (this.state.doneVal)
            }

        delTask (i, indexNote) {

            this.state.notes[i].value.splice (indexNote, 1)
            this.setState ({notes:this.state.notes})

            }

        handleEdit (e) {
            this.setState ({editInp:e.target.value})
            }

        doneEdit (i, indexNote) {

            this.state.notes[i].value[indexNote] = this.state.editInp
            this.setState ({notes:this.state.notes})
            }

        editTask (i, indexNote) {

            var defVal = this.state.notes[i].value[indexNote]
            this.state.notes[i].value[indexNote] = <div>
            <input
            onChange = {this.handleEdit.bind (this)}
            onBlur = {this.doneEdit.bind (this, i, indexNote)}
            defaultValue={defVal}
            />
            </div>
            this.setState ({notes:this.state.notes})

            }

        handleTextarea(e) {

            this.setState ({textareaV:e.target.value})

            }

        addNote (){

            let val = this.state.currentD+'-'+this.state.currentM
            var flag = false
            for (var i=0; i<this.state.notes.length;i++) {
                if (this.state.notes[i].date == val) {
                    this.state.notes[i].value.push (this.state.textareaV)
                    this.setState ({notes:this.state.notes})
                    flag = true;

                    }
                }

            if (flag == false) {
                    this.state.notes.push ({date : val ,value :[this.state.textareaV]} )
                    this.setState ({notes:this.state.notes})

                    this.state.doneVal.push ([false])
                    this.setState ({doneVal:this.state.doneVal})

                }



}

        back () {

            this.state.currentM--;
            if (this.state.currentM == -1){
                this.state.currentM =11;
                this.state.currentY --;
                this.setState ({currentY:this.state.currentY})
                }
            this.setState ({currentM:this.state.currentM})

            }

        next () {

            this.state.currentM++;
            if (this.state.currentM == 12){
                this.state.currentM =0;
                this.state.currentY ++;
                this.setState ({currentY:this.state.currentY})
                }
            this.setState ({currentM:this.state.currentM})

            }

        testClick (e) {



            var t = e.target.innerHTML
            if (t){
                this.setState ({currentD:t})
                }



            // alert (e.target.innerHTML)

            }

        prepareTable () {

            var y = this.state.currentY;
            var m = this.state.currentM;
            var today = this.state.currentD

            var firstDay = new Date(y, m, 1).getDay().toString();
            var lastDay = new Date(y, m + 1, 0).toString();

            firstDay = firstDay - 1

            if (firstDay == -1) {
                firstDay = 6
                }

            lastDay = lastDay.slice (8, 10);
            var arr = [[],[],[],[],[],[]]
            var k = 1;

            for ( var i = 0; i<1; i++) {
                 for (var j = 0; j<7;j++) {
                    if (firstDay <= j) {
                        arr[i][j]=k
                        k++
                        }
                        else {
                        arr[i][j]=""
                        }
                    }
            }

            for ( var x = 1; x<arr.length;x++) {
                 for (var l = 0; l<7;l++) {
                    if (k>lastDay) {
                    arr[x][l]= ""
                    k++
                    } else {
                        arr[x][l]=k
                        k++
                        }
                }
            }

            return arr
}

    render () {

          return (
            <div className='m-2'>
                <div className = 'row'>
                <div className = 'col-1'></div>
                        <div className = 'col-5'>
                                <div>
                                <div >
                                <h5 className='d-inline'>  Дата  <span className="badge badge-secondary">{this.state.currentD}</span></h5>
                                <h5 className='d-inline'>  Месяц <span className="badge badge-secondary">{this.state.month[this.state.currentM]}</span></h5>
                                <h5 className='d-inline'>  Год <span className="badge badge-secondary"> {this.state.currentY}</span></h5>


                                </div>




                              <CalendarView
                                testClick={this.testClick.bind (this)}
                                prepareTable={this.prepareTable.bind (this)}
                                back={this.back.bind (this)}
                                next={this.next.bind (this)}
                                currentM={this.state.currentM}
                                currentD={this.state.currentD}

                               />
                               </div>
                       </div>

                                <div className = 'col-5'>
                                <div>
                                <NotesView

                                notes={this.state.notes}
                                addNote = {this.addNote.bind (this)}
                                handleTextarea={this.handleTextarea.bind (this)}
                                dateN={this.state.currentD}
                                monthN={this.state.currentM}
                                doneTask={this.doneTask.bind (this)}
                                delTask={this.delTask.bind (this)}
                                editTask={this.editTask.bind (this)}
                                doneVal={this.state.doneVal}

                                    />

                                </div>
                                </div>

                <div className = 'col-1'></div>
                </div>
            </div>)
                      }
}

class CalendarView extends React.Component {

            constructor() {
       super();

        this.state = {}

    }


    render (){

            const heder =  <tr>
                <td>ПН</td>
                <td>ВТ</td>
                <td>СР</td>
                <td>ЧТ</td>
                <td>ПТ</td>
                <td>СБТ</td>
                <td>ВСК</td>
                </tr>

            const daysList = this.props.prepareTable().map((elem,indexTR)=>{

                return (
                <tr key = {indexTR}>

                    {elem.map ((elem,indexTD)=>{

                        return (<td

                        style={ elem == this.props.currentD ? {backgroundColor:'green'}:{}}
                        onClick={this.props.testClick}

                        key={indexTD}>{elem}</td>)
                        })

                    }</tr>)})

        return (

                <div className='m-2'>

                <button className="m-2 btn btn-outline-primary" onClick={this.props.back}>Назад</button>
                <button className="m-2 ml-1 btn btn-outline-primary" onClick={this.props.next}>Вперед</button>

                <table className='table m-2 table-striped'>
                <thead>
                {heder}
                </thead>
                <tbody >
                {daysList}
                </tbody>
                </table>

                </div>
                )
    }
}



        ReactDOM.render(
            <Calendar  />,
            document.getElementById('root')
          );

