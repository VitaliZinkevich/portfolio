
class App extends React.Component {

constructor() {
        super();

        this.state = {value: 0, lang:['Русский','English'], ruDays:['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВСК'], enDays:['Mon','Thu','Wen','Thu','Fri','Sat','Sun']};

        }

        setVal (){
            this.state.value = this.state.value == 0? 1:0;
            this.setState ({value:this.state.value})
            }


    render () {

        const langList = this.state.lang.map ((elem, index)=>{
            return <option key={index}>{elem}</option>
            })

        const ruDaysList = this.state.ruDays.map ((elem,index)=>{
            return <option key={index}>{elem}</option>
            })

        const enDaysList = this.state.enDays.map ((elem,index)=>{
            return <option key={index}>{elem}</option>
            })





          return (
            <div>

          <select onChange={this.setVal.bind(this)}>
          {langList}
          </select>

          <select>
          {this.state.value == 0 ? ruDaysList:enDaysList}
          </select>

          </div>

        )
            }

        }






    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
