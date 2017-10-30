
class App extends React.Component {

constructor() {
        super();

        this.state = {res:'',
            rates:[{0:1,1:0.5,2:0.43},{0:2,1:1,2:0.85},{0:2.3,1:1.17,2:1}],
            inpVal:"",
            currencies:['byn','usd','eur'],
            selVal1:"0",
            selVal2:""};



        }

        handleChange(e){
            this.setState ({inpVal: e.target.value})}

        convert(){

            const res = this.state.inpVal * this.state.rates[this.state.selVal1][this.state.selVal2]
            this.setState ({res: res});
            }

        handleSelect1 (e){

            this.setState({selVal1:e.target.value})
            }
        handleSelect2 (e){

            this.setState({selVal2:e.target.value})
            }

    render () {

            const toView = this.state.currencies.map ((elem, index)=>{
                return <option  key={index} value={index}>{elem}</option>
                })
            const toView1= this.state.currencies.map ((elem, index)=>{
                return <option  disabled ={this.state.selVal1==index} key={index} value={index}>{elem}</option>
                })


          return (
            <div>


            <input onChange={this.handleChange.bind(this)} />

            <select onChange={this.handleSelect1.bind(this)} >
            {toView}
            </select>

            <select onChange={this.handleSelect2.bind(this)} >
            {toView1}
            </select>

            <button onClick = {this.convert.bind (this)}>Конвертировать</button>
            <p>После перевода: {this.state.res}</p>

            <p>Выбор первого селекта: {this.state.selVal1}</p>
            <p>Выбор второго селекта:{this.state.selVal2}</p>

            </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
