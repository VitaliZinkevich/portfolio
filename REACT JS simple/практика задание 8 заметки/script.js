
class App extends React.Component {

constructor() {
       super();

        this.state = {notes: [], areaVal: "", dates:[], editInp:""}

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



    editItem (index){


        const editor = <p><input onChange ={this.handleEditor.bind(this)}
        onBlur={this.getEdited.bind(this, index)}
        defaultValue={this.state.notes[index]}
        /></p>

        this.state.notes[index] = editor;
        this.setState ({notes: this.state.notes})


    }


    handleTextArea (e){
        this.setState ({areaVal: e.target.value})

    }

    handleEditor(e){
        this.setState ({editInp:e.target.value})
        }

    getEdited(index){

        this.state.notes[index] = this.state.editInp
        this.setState ({notes:this.state.notes})

        }



    findDate (){

        var date = new Date();
        this.state.dates.push ( date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+' Время: '+date.getHours()+ ' : ' + date.getMinutes() + ' : ' + date.getSeconds());
        this.setState ({dates:this.state.dates})
    }





    render () {

        const notesList = this.state.notes.map ((elem,index)=>{
            return <p key={index}>{elem}<div><p>
            Дата создания: {this.state.dates[index]}

            </p></div> <button onClick={this.editItem.bind(this, index)}>редактировать</button>
            <button onClick={this.delItem.bind(this, index)}>удалить</button></p>
        })


          return (

          <div>
          <div><textarea rows="4" cols="50" onChange={this.handleTextArea.bind(this)}/><button onClick={this.addItem.bind(this)}>
          добавить</button></div>
        <div>{notesList}</div>
          </div>
        )
            }

        }






        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
