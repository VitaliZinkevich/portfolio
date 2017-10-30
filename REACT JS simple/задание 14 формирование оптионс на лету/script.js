
class App extends React.Component {

constructor() {
        super();

        this.state = {inpVal:"", options:[],selVal:""};



        }

        handleChange(e){
            this.setState ({inpVal: e.target.value})}

        addItem(){
            //alert (this.state.inpVal)
            this.state.options.push (this.state.inpVal)
            this.setState ({options:this.state.options})
            console.log(this.state.options)
            }

        handleSelect (e){
            this.setState({selVal:e.target.value})
            }

    render () {

            const toView = this.state.options.map ((elem, index)=>{
                return <option key={index} value={index}>{elem}</option>
                })


          return (
            <div>

            <input onChange={this.handleChange.bind(this)} />
            <button onClick = {this.addItem.bind (this)}>добавить</button>
            <select onChange={this.handleSelect.bind(this) }>
            {toView}
            </select>
            <p>Выбранный элемент: {this.state.options[this.state.selVal]}</p>
            </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
