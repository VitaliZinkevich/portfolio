
class App extends React.Component {

constructor() {
       super();


    this.state = {tours: ['Египет','Турция','Кипр'], radioValue: "0"}
    }

    handleRadio1 (index){

        this.state.radioValue = index;
        this.setState ({radioValue: this.state.radioValue});

    }


    render () {
        const tourList = this.state.tours.map ((elem, index)=>{
            return (
            <p key={index}>  <input type='radio'  checked={this.state.radioValue == index} value={index}
            onChange={this.handleRadio1.bind(this, index)} /> {elem} </p>
            )

        })

          return (
          <div>
          {tourList}
          <p>Ваш Выбор: {this.state.tours[this.state.radioValue]}</p>
          </div>

        )
            }

        }

        ReactDOM.render(
            <App />,
            document.getElementById('root')
          );
