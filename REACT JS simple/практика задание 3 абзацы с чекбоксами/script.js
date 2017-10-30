
class App extends React.Component {

constructor() {
       super();


    this.state = {items: [ "Абзац первого чекбокса","Абзац второго чекбокса","Абзац третьего чекбокса"],
        checkBox:[false,true,false]}


    }

    handleChange(index){
        this.state.checkBox[index] = !this.state.checkBox[index]
        this.setState({checkBox: this.state.checkBox})
        //alert (this.state.workers[index].salary);

    }



    render () {

        const workerList = this.state.items.map ((elem,index)=>{
            return (
            <div>
            <input type='checkbox' onChange={this.handleChange.bind (this,index)} checked={this.state.checkBox[index]}/>
            <p>{this.state.checkBox[index] ? elem: ""}<span> Состояние чекбокса {this.state.checkBox[index] ? 1:0}</span></p>
            </div>

            )


        })



          return (
        <div>
        {workerList}
        </div>
        )
            }

        }






        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
