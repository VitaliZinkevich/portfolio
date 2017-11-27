

class App extends React.Component {

constructor() {
        super();

        this.state = {
			playGroundComp:[["","S","","","","S","","","S",""],
							["","S","","","","","","","",""],
							["","","","","S","S","","","",""],
							["S","","","","","","","","",""],
							["S","","","S","S","S","S","","",""],
							["S","","","","","","","","",""],
							["","S","S","","","","","S","",""],
							["","","","","","","","S","",""],
							["","S","","","S","","","S","",""],
							["","","","","","","","","",""]],
							
			playGroundHuman:[["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""]],
			
			humanFire:		[["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""]],
			
			compFire:		[["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""],
							["","","","","","","","","",""]],
			setUp: true,
			
			tdType: {border: '2px solid black', width: '50px',height:'50px',backgroundColor : 'grey'},
			tdTypeF: {border: '2px solid black', width: '50px',height:'50px',backgroundColor : 'red'},
			tdTypeS: {border: '2px solid black', width: '50px',height:'50px',backgroundColor : 'green'}
		}

        }

		componentDidMount() {
			alert ('установите корабли в 1 поле')
		 }

		message (){
			 alert ('выставте сначала свои корабли')
			 
		 }
		
		message1 (){
			 alert ('корабли выставлены, ходы по соседнему полю')
			 
		 }
		 
		setShips(i,i1){
			
			this.state.playGroundHuman[i][i1] = 'S'
			
			var count = 0
		
			for (var i = 0 ; i<this.state.playGroundHuman.length; i++ ) {
				
				for (var j = 0 ; j<this.state.playGroundHuman[i].length; j++ ){
					if (this.state.playGroundHuman[i][j]=="S")
					count ++
				}
				
			if (count == 20) {
				
				
				alert ('Корабли выставлены, начинайте игру с хода по полю компьютера')
				this.setState({setUp:!this.state.setUp})
				return false
			}
				
			}
			
			this.setState ({playGroundHuman:this.state.playGroundHuman})
			
		 }
		 
		fire (i,i1) {
			
			
		if (this.state.humanFire[i][i1] == 1 || this.state.humanFire[i][i1] == 2 ) {
			
			
		}else {
			
			if (this.state.playGroundComp[i][i1]=='S'){
				
				this.state.humanFire[i][i1] = 1;
				this.setState ({humanFire:this.state.humanFire})
				this.checkForWin()
				return false
				
			
			} else {
				this.state.humanFire[i][i1] = 2;
				this.setState ({humanFire:this.state.humanFire})
				this.chooseTd()
			}
			
			}
		
}
		
		checkForWin(){
			
			var countH = 0
			var countC = 0
		
		for (var i = 0 ; i<this.state.humanFire.length; i++ ) {
				
				for (var j = 0 ; j<this.state.humanFire[i].length; j++ ){
					if (this.state.humanFire[i][j]== 1)
					countH ++
				}
			
			
		}
		
		
		for (var i = 0 ; i<this.state.compFire.length; i++ ) {
				
				for (var j = 0 ; j<this.state.compFire[i].length; j++ ){
					if (this.state.compFire[i][j] == 1 )
					countC ++
				}
			
			
		}
		if (countC == 20) {
			alert ('Победил КОМПЬЮТЕР')
		}
		if (countH == 20) {
			alert ('Победил ЧЕЛОВЕК')
			
		}
		
		}		
		
		chooseTd (){
			
			var tr = Math.floor(Math.random() * this.state.compFire.length);
			
			
			var td = Math.floor(Math.random() * this.state.compFire[tr].length)
			console.log (tr, td)
			
			if (this.state.compFire[tr][td] == 1 || this.state.compFire[tr][td] == 2) {
				
				this.chooseTd()
				
			} else {
				
				this.backFire (tr,td)
			}
			
		}
		
		backFire (tr,td) {
			
			if (this.state.playGroundHuman[tr][td]=='S'){
				
				this.state.compFire[tr][td] = 1;
				this.setState ({compFire:this.state.compFire})
				this.checkForWin()
				this.chooseTd()
				
			
			} else {
				this.state.compFire[tr][td] = 2;
				this.setState ({compFire:this.state.compFire})
				return false
			}
			
			
			
		}
		
    render () {
			
			
			
          return (
            <div>
			
         <Field 
		 
		 playGroundComp={this.state.playGroundComp}
		 playGroundHuman={this.state.playGroundHuman}
		 setUp={this.state.setUp}
		 setShips={this.setShips.bind (this)}
		 fire={this.fire.bind (this)}
		 message={this.message.bind(this)}
		 message1={this.message1.bind(this)}
		 tdType={this.state.tdType}
		 tdTypeF={this.state.tdTypeF}
		 tdTypeS={this.state.tdTypeS}
		 humanFire={this.state.humanFire}
		 compFire={this.state.compFire}
		 
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
			
			
			
			const compPG = this.props.playGroundComp.map((e,i)=>{
			return (<tr  key={i}>{e.map((e1,i1)=>{
				
				return (<td key={i1}  
				style={this.props.setUp == true ? this.props.tdType : 
				this.props.humanFire[i][i1] == 1 ? this.props.tdTypeS:
				this.props.humanFire[i][i1] == 2 ? this.props.tdTypeF: this.props.tdType}
				
				onClick={this.props.setUp == true ?  this.props.message :this.props.fire.bind (null, i, i1)}
				></td>)
				
			})}</tr>)
			})
			
			const humPG = this.props.playGroundHuman.map((e,i)=>{
			return (<tr  key={i}>{e.map((e1,i1)=>{
				
				return (<td  
				style={this.props.setUp == true ? this.props.tdType : 
				this.props.compFire[i][i1] == 1 ? this.props.tdTypeS:
				this.props.compFire[i][i1] == 2 ? this.props.tdTypeF: this.props.tdType}
				
				key={i1}
				
				onClick={this.props.setUp == true ? this.props.setShips.bind (null, i, i1): this.props.message1}
				
				>{e1}
				</td>)
				
			})}</tr>)
			})
	
          return (
		  
            <div >
			
			<div style={{display:'inline'}}>
			<span> палуб 4-1 штука, палуб 3-2 штуки, палуб 2-3 штуки, палуб 1-4 штуки</span>
			
			</div>
			
			<div style={{display:'inline'}}>
			
			<table style={{width: '500px',height:'500px',display:'inline'}} className="table">
			<tbody>
			{humPG}	
			</tbody>
			</table>
            </div> 
			
			<div style={{display:'inline'}}>
			<div style={{display:'inline'}}>
			<p > Поле компьютера</p>
			</div>
			
		
			<table style={{width: '500px',height:'500px',display:'inline'}} className="table">
			<tbody>
			{compPG}
			</tbody>			
			</table>
			
            </div>
			

			
            </div> 
			

        )
            }

}



    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
