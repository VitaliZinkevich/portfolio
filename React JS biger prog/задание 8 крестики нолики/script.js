/*Реализуйте игру крестики-нолики. Играют два игрока, каждый ходит по очереди. */


// какие компоненты нужны ???
/*
 * 1 поле для ингры, на нем ставим крестики и нолики с него проверяем победителей
 * 2 табло для игры вывод счета и количество партий
 *
 *
 *
 * */

class App extends React.Component {

constructor() {

        super();

        this.state = {field:[["","",""],["","",""],["","",""]],turn:true, oWin:0,xWin:0, draw:0, games:0};
        }


        handleClick (tr, td) {


            if (this.state.field[tr][td] == "") {

                if (this.state.turn== true){

                this.state.field[tr][td] ="X"
                this.setState ({field:this.state.field})
                this.setState ({turn:!this.state.turn})
                } else {

                this.state.field[tr][td] ="O"
                this.setState ({field:this.state.field})
                this.setState ({turn:!this.state.turn})
                    }

                } else {

                    alert ('поле занято')

                    }

                // проверка на победу
                // строка
                var flag1=0
              for (var i = 0 ; i<this.state.field[tr].length;i++){

                  if (this.state.field[tr][i]==this.state.field[tr][td]){
                    flag1++}
                    }
                // столбец
                var flag2=0
                for (var i = 0 ; i<this.state.field[tr].length;i++){

                  if (this.state.field[i][td]==this.state.field[tr][td]){
                    flag2++}
                   }
                // диагональ 1
                var flag3=0
                var col=0, row=0
                for (var i = 0 ; i<this.state.field[tr].length;i++){

                    if (this.state.field[col][row]==this.state.field[tr][td]){
                                 flag3++}
                    col++
                    row++
                    }
                // диагональ 2
                var flag4 = 0
                var col=0, row=2
                for (var i = 0 ; i<this.state.field[tr].length;i++){

                    if (this.state.field[col][row]==this.state.field[tr][td]){
                                 flag4++}
                    col++
                    row--

                    }


                    if (flag1 == 3 || flag2 == 3 || flag3 == 3 || flag4 ==3) {

                    let sign = this.state.turn == true ? "X":"O"
                        alert ('Победа  ' + sign)

                    sign == "X" ? this.setState ({xWin:this.state.xWin+1}):this.setState ({oWin:this.state.oWin+1})
                     this.setState ({field:[["","",""],["","",""],["","",""]]})
                     this.setState ({games: this.state.games+1})


                        } else { // проверка на ничью
                            var flagDraw = 0
                            for (var i = 0 ; i<this.state.field.length;i++) {

                                for (var j = 0 ; j<this.state.field[i].length;j++){
                                    if (this.state.field[i][j] == "") {
                                    flagDraw++
                            }

                        }

                    }

                            }






                if (flagDraw == 0) {
                    alert ('Ничья')
                   this.setState ({draw:this.state.draw+1})
                   this.setState ({games: this.state.games+1})

                    this.setState ({field:[["","",""],["","",""],["","",""]]})
                   }

            }


    render () {

          return (
            <div className='d-inline'>
            <Score
            draw={this.state.draw}
            games={this.state.games}
            xWin={this.state.xWin}
            oWin={this.state.oWin}

            />
          <Field
          field={this.state.field}
          handleClick={this.handleClick.bind(this)}
          />

            </div>

        )
            }

        }


class Field extends React.Component {

constructor() {

        super();

        this.state = {};
        }

    render () {

            const fild = this.props.field.map ((elem, indexTR)=> {

                return (<tr key = {indexTR}>{
                    elem.map ((elem, indexTD)=>{
                       return <td
                       style={{height: 150, width:150, fontSize: '50px',verticalAlign:'middle'}}
                       key ={indexTD}
                       onClick={this.props.handleClick.bind (null,indexTR,indexTD)}
                       align= "center"
                       className="border-primary"

                       >{elem}
                       </td>
                        })
                    }</tr>)
                })


          return (
          <div>
            <table className='table table-bordered  m-5'>
            <thead>
            </thead>
            <tbody>
            {fild}
            </tbody>
            </table>
            </div>
     )
    }

}


class Score extends React.Component {

constructor() {

        super();

        this.state = {};
        }

    render () {




          return (
          <div>
            <table className='table table-bordered table-striped m-5'>
            <thead>
            <tr className='bg-info text-center'>
            <td>ВСЕГО ИГР</td>
            <td>КРЕСТИКИ</td>
            <td>НОЛИКИ</td>
            <td>НИЧЬЯ</td>
            </tr>
            </thead>
            <tbody>
            <tr className='text-center font-weight-bold'>
            <td>{this.props.games}</td>
            <td>{this.props.xWin}</td>
            <td>{this.props.oWin}</td>
            <td>{this.props.draw}</td>
            </tr>
            </tbody>
            </table>
            </div>
     )
    }

}


    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );

