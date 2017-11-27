
class App extends React.Component {

constructor() {
        super();

        this.state = {cards:[
			{rank: 6, suit:'p', value: 6},{rank: 6, suit:'k', value: 6},{rank: 6, suit:'h', value: 6},{rank: 6, suit:'b', value: 6},
			{rank: 7, suit:'p', value: 7},{rank: 7, suit:'k', value: 7},{rank: 7, suit:'h', value: 7},{rank: 7, suit:'b', value: 7},
			{rank: 8, suit:'p', value: 8},{rank: 8, suit:'k', value: 8},{rank: 8, suit:'h', value: 8},{rank: 8, suit:'b', value: 8},
			{rank: 9, suit:'p', value: 9},{rank: 9, suit:'k', value: 9},{rank: 9, suit:'h', value: 9},{rank: 9, suit:'b', value: 9},
			{rank: 10, suit:'p', value: 10},{rank: 10, suit:'k', value: 10},{rank: 10, suit:'h', value: 10},{rank: 10, suit:'b', value: 10},
			{rank: 'jack', suit:'p', value: 11},{rank: 'jack', suit:'k', value: 11},{rank: 'jack', suit:'h', value: 11},{rank: 'jack', suit:'b', value: 11},
			{rank: 'queen', suit:'p', value: 12},{rank: 'queen', suit:'k', value: 12},{rank: 'queen', suit:'h', value: 12},{rank: 'queen', suit:'b', value: 12},
			{rank: 'king', suit:'p', value: 13},{rank: 'king', suit:'k', value: 13},{rank: 'king', suit:'h', value: 13},{rank: 'king', suit:'b', value: 13},
			{rank: 'ace', suit:'p', value: 14},{rank: 'ace', suit:'k', value: 14},{rank: 'ace', suit:'h', value: 14},{rank: 'ace', suit:'b', value: 14}],
			
			trumpCard:false,
			player1Hand:[],
			player2Hand:[],
			start:true,
			
			turn: false,
			
			game:[]
		}
		
		

}	

        
		sortBy (field, reverse, primer){

           var key = primer ?
               function(x) {return primer(x[field])} :
               function(x) {return x[field]};

           reverse = !reverse ? 1 : -1;

           return function (a, b) {
               return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
             }
        }

		
		dealCards (){
			
			function shuffle(array) {
				  var currentIndex = array.length, temporaryValue, randomIndex;

				  // While there remain elements to shuffle...
				  while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				  }

				  return array;
				}

			shuffle(this.state.cards);
			
			
			
			
			this.state.trumpCard = this.state.cards[this.state.cards.length-1]
			this.setState ({trumpCard:this.state.trumpCard})
						
			
			
			for (var i = 0; i<this.state.cards.length; i++) {
				
				if (this.state.cards[i].suit == this.state.trumpCard.suit) {
					this.state.cards[i].value +=10
					
				}
				
			}
			
			this.setState ({cards:this.state.cards})
			
			
			this.setState ({start:!this.state.start})
			
			this.state.player1Hand = this.state.cards.splice(0,6);
			this.state.player2Hand = this.state.cards.splice(0,6);
			this.setState ({cards:this.state.cards})
			
			this.setState ({player1Hand:this.state.player1Hand})
			this.setState ({player2Hand:this.state.player2Hand})
			
			
			
			
			// определяем очередность хода
			var minTrump1 = 50;
			var minTrump2 = 50;
		
			for (var i = 0; i <this.state.player1Hand.length; i++) {
				if (this.state.player1Hand[i].suit == this.state.trumpCard.suit) {
					if (minTrump1>this.state.player1Hand[i].value)
						minTrump1 = this.state.player1Hand[i].value
					
				}
				
			}
			
			for (var i = 0; i <this.state.player2Hand.length; i++) {
				if (this.state.player2Hand[i].suit == this.state.trumpCard.suit) {
					if (minTrump2>this.state.player2Hand[i].value)
						minTrump2 = this.state.player2Hand[i].value
					
				}
				
			}
		

		
		if (minTrump1==minTrump2){
			
			alert ('нет козырей')
			
			
			var cards1 = this.state.player1Hand 
			var cards2 = this.state.player2Hand
			
			
			
			cards1.sort (this.sortBy ('value', false))
			cards2.sort (this.sortBy ('value', false))
			
			
			
			for (var i = 5;i>=0; i--){
				
				if (cards1[i].value == cards2[i].value) {
					
				} else {
					
					if (cards1[i].value > cards2[i].value) {
						
						this.setState({turn:!this.state.turn})
						return
					} else{
						
						this.makeMoveComp()
						return
						}
				}
				
			}
			
		}
	
		if (minTrump1<minTrump2) {
			this.setState({turn:!this.state.turn})
		
		}
		
		if (minTrump1>minTrump2) {
			this.makeMoveComp()
			
		}
		
		
}
		
		
		makeMoveComp(){
			
			this.state.player2Hand.sort (this.sortBy ('value', false))
			
			this.state.game.push (this.state.player2Hand[0])
			this.setState ({game:this.state.game})
			
			this.state.player2Hand.splice (0,1)
			this.setState ({player2Hand:this.state.player2Hand})
			
			
		}
		
		makeMove(index){
	
		
			if (this.state.game.length==0) {
			
			var move = this.state.player1Hand[index]
			
			this.state.player1Hand.splice (index, 1)
			this.setState ({player1Hand:this.state.player1Hand})
			
			this.state.game.push(move)
			this.setState ({game:this.state.game })
			
			this.compAnswer()
			
			if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 && this.state.player2Hand.length == 0) {
				alert ('НИЧЬЯ')
				
				
			} else {
				
				if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 ) {
				alert ('победа ИГРОКА')
				
			}
			}
			
			} else {
				
				var cardsRank = []
				for (var i = 0 ; i< this.state.game.length;i++) {
					
					if (this.state.player1Hand[index].rank == this.state.game[i].rank) {
						
						
						cardsRank.push (this.state.player1Hand[index])
						
					} 
					
				}
				
				
				var flag = cardsRank.indexOf (this.state.player1Hand[index])
				if (flag !=-1) {
					
					this.state.game.push (this.state.player1Hand[index])
						this.setState ({game:this.state.game})
						
						this.state.player1Hand.splice (index,1 )
						this.setState ({player1Hand:this.state.player1Hand})
						this.compAnswer()
					
				} else {
					
					alert ('эту не подкинуть')
				}
				
				if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 && this.state.player2Hand.length == 0) {
				alert ('НИЧЬЯ')
				
				} else {
					
					if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 ) {
					alert ('победа ИГРОКА')
					
				}
				}
				
			}
			
		}
			
		beatMove(index){
			console.log (this.state.game.length)
			
			
			if ((this.state.player1Hand[index].suit == this.state.game[this.state.game.length-1].suit || 
			this.state.player1Hand[index].suit == this.state.trumpCard.suit) &&
			this.state.player1Hand[index].value > this.state.game[this.state.game.length-1].value)  {
				
			var move = this.state.player1Hand[index]
			
			this.state.player1Hand.splice (index, 1)
			this.setState ({player1Hand:this.state.player1Hand})
			
			this.state.game.push(move)
			this.setState ({game:this.state.game})	
				
			this.addMoveComp()}
			else {
				
				alert ('не подходит')
				
			}
			
			if (this.state.game.length == 12) {
				alert ('6 боев')
				this.doneComp()
				this.donePlayer()
				
				
			}
			
			
			if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 && this.state.player2Hand.length == 0) {
				alert ('НИЧЬЯ')
				return
				
			} else {
				
				if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 ) {
				alert ('победа ИГРОКА')
				
			}	
			if (this.state.cards.length == 0 && this.state.player2Hand.length == 0 ) {
				alert ('победа ИГРОКА')
				
			}
			
			}
		}	

		compAnswer (){
			
			
			var answerBySuit = []
			var answerByTrump = []
			
			// ответ компьютера варианты
			
			// если зашли с козыря
			
			if (this.state.game[this.state.game.length-1].suit == this.state.trumpCard.suit) {
				
				
					// ответ в козырную масть
					for (var i = 0 ; i<this.state.player2Hand.length;i++) {
						
						
						if ( this.state.game[this.state.game.length-1].suit == this.state.player2Hand[i].suit && 
							this.state.game[this.state.game.length-1].value < this.state.player2Hand[i].value){
								
									answerBySuit.push (this.state.player2Hand[i])
						}
						
					}
					
					
					if (answerBySuit.length == 0){
						alert ('забрал')
						this.takeComp()
					} else {
						
						answerBySuit.sort (this.sortBy ('value', false))
						var index = 0
						
								for (var i = 0; i<this.state.player2Hand.length;i++) {
								
									if (this.state.player2Hand[i].value == answerBySuit[0].value) {
										
										index = i
										
									}
								
								}
								
						
					var ansMove = this.state.player2Hand[index]
					
					this.state.player2Hand.splice (index,1)
					this.setState ({player2Hand:this.state.player2Hand})
					
					this.state.game.push(ansMove)
					this.setState ({game:this.state.game}) 
						
					}
					
				} 
				
				else {
					// карты в масть на руках
					for (var i = 0 ; i<this.state.player2Hand.length;i++) {
					
					
					if ( this.state.game[this.state.game.length-1].suit == this.state.player2Hand[i].suit && 
						this.state.game[this.state.game.length-1].value < this.state.player2Hand[i].value){
							
								answerBySuit.push (this.state.player2Hand[i])
					}
					
					}
					// козыри на руках
					for (var i = 0 ; i<this.state.player2Hand.length;i++) {
					
					if ( this.state.player2Hand[i].suit == this.state.trumpCard.suit){
							answerByTrump.push (this.state.player2Hand[i])
						}
					
					}
					
					if (answerByTrump.length == 0 && answerBySuit.length == 0) {
						alert ('забрал')
						this.takeComp()
						
					}
					
					if (answerBySuit.length > 0) {
						
						answerBySuit.sort (this.sortBy ('value', false))
						var index = 0
						
						for (var i = 0; i<this.state.player2Hand.length;i++) {
								
									if (this.state.player2Hand[i].value == answerBySuit[0].value) {
										
										index = i
										
									}
								
						}
						
					var ansMove = this.state.player2Hand[index]
					
					this.state.player2Hand.splice (index,1)
					this.setState ({player2Hand:this.state.player2Hand})
					
					this.state.game.push(ansMove)
					this.setState ({game:this.state.game}) 
						
						
						
					} else {
						if (answerByTrump.length>0){
							
							answerByTrump.sort (this.sortBy ('value', false))
						var index = 0
						
						for (var i = 0; i<this.state.player2Hand.length;i++) {
								
									if (this.state.player2Hand[i].value == answerByTrump[0].value && 
									this.state.player2Hand[i].suit == answerByTrump[0].suit) {
										
										index = i
										
									}
								
						}
						
					var ansMove = this.state.player2Hand[index]
					
					this.state.player2Hand.splice (index,1)
					this.setState ({player2Hand:this.state.player2Hand})
					
					this.state.game.push(ansMove)
					this.setState ({game:this.state.game})
						} else {
							
							this.takeComp()
							
						}
						
						
						
					}
					
					
				}
				
			console.log (this.state.game.length)
			if (this.state.game.length == 12) {
				alert ('6 боев')
				this.doneComp()
				this.donePlayer()
				
				
			}
			if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 && this.state.player2Hand.length == 0) {
				alert ('НИЧЬЯ')
				return
				
			} else {
				if (this.state.cards.length == 0 && this.state.player2Hand.length == 0 ) {
				alert ('победа КОМПЬЮТЕРА')
				
			}
				
			}
			
			
}
		
		addMoveComp (){
			var forAddMOve = []
			
			for (var i = 0 ; i < this.state.player2Hand.length;i++) {
				
				for (var j = 0 ; j< this.state.game.length;j++){
					
					if (this.state.player2Hand[i].rank == this.state.game[j].rank &&
					this.state.player2Hand[i].suit != this.state.trumpCard.suit){
						
						forAddMOve.push (this.state.player2Hand[i])
					}
					
				}
				
			}
			
			
			if (forAddMOve.length == 0) {
				
				alert ('отбой')
				this.doneComp()
				this.donePlayer()
				this.setState ({turn:!this.state.turn})
				
			} else {
				
				forAddMOve.sort (this.sortBy ('value', false))
				
				var index = 0;
				
				for (var i = 0 ; i< this.state.player2Hand.length;i++) {
					if (this.state.player2Hand[i].value == forAddMOve[0].value){
						
						index = i
						
					}
					
				}
				
				this.state.game.push (this.state.player2Hand[index])
				this.setState ({game:this.state.game})
				
				this.state.player2Hand.splice (index,1)
				this.setState ({player2Hand:this.state.player2Hand})
				
			}
			
			
		}
		
		doneComp (){
		
		this.state.game = []
		this.setState({game:this.state.game})
		
		var num1 = 6 - this.state.player2Hand.length
		
		for (var i = 0; i<num1; i++){
			if (this.state.cards[i] == undefined) {
				
				return
				
			}
			this.state.player2Hand.push (this.state.cards[i])
			
		}
		
		this.state.cards.splice (0,num1)
		this.setState ({cards:this.state.cards})
		/*
		if (this.state.turn == false) {
			this.makeMoveComp()
			
		}
		*/
		
	}	
	
		donePlayer (){
		
		this.state.game = []
		this.setState({game:this.state.game})
		
		var num1 = 6 - this.state.player1Hand.length
		
		for (var i = 0; i<num1; i++){
			if (this.state.cards[i] == undefined) {
				this.setState({turn:!this.state.turn})
				if (this.state.turn == true) {
				this.makeMoveComp()
				}
				return
				
			}
			this.state.player1Hand.push (this.state.cards[i])
			
		}
		
		this.state.cards.splice (0,num1)
		this.setState ({cards:this.state.cards})
	
		
		this.setState({turn:!this.state.turn})
		
		this.doneComp()
			
		
		if (this.state.turn == true) {
			
			this.makeMoveComp()
			
		}
}	

		donePlayerWithoutChangeTurn (){
		
		this.state.game = []
		this.setState({game:this.state.game})
		
		var num1 = 6 - this.state.player1Hand.length
		
		for (var i = 0; i<num1; i++){
			
			if (this.state.cards[i] == undefined) {
				return
				
			}
			this.state.player1Hand.push (this.state.cards[i])
			
		}
		
		this.state.cards.splice (0,num1)
		this.setState ({cards:this.state.cards})
	
	
	}
		
		takePlayer (){
			
			this.state.player1Hand=this.state.player1Hand.concat (this.state.game)
			
			this.state.game = []
			this.setState ({game:[]})
			
			this.setState ({player1Hand:this.state.player1Hand})
			
			this.doneComp()
			this.makeMoveComp()
			
			if (this.state.cards.length == 0 && this.state.player2Hand.length == 0 ) {
				alert ('победа КОМПЬЮТЕРА')
				
			}
			
		}
		
		takeComp (){
			
			this.state.player2Hand=this.state.player2Hand.concat (this.state.game)
			
			this.state.game = []
			this.setState ({game:[]})
			
			this.setState ({player2Hand:this.state.player2Hand})
			
			this.donePlayerWithoutChangeTurn()
			
				if (this.state.cards.length == 0 && this.state.player1Hand.length == 0 ) {
				alert ('победа ИГРОКА')
				
			}
		
		}
		
    render () {


          return (
		  <div>
		  <div>{this.state.turn==true ? 'ход человека': "ход компа"}</div>
		  <div>{this.state.cards.length}</div>
		  <Hand 
		deal={this.dealCards.bind (this)}
		p1Hand={this.state.player1Hand}
		p2Hand={this.state.player2Hand}
		start={this.state.start}
		turn={this.state.turn}
		makeMove={this.makeMove.bind (this)}
		beatMove={this.beatMove.bind (this)}
		trumpCard={this.state.trumpCard}
		sortBy={this.sortBy}
		
		  />
		  <br/>
		  <br/>
		  <br/>
		  <br/>
		  {this.state.start == true ? <div></div>: <PlayGround
			game={this.state.game}
			doneComp={this.doneComp.bind (this)}
			turn={this.state.turn}
			takePlayer={this.takePlayer.bind (this)}
			donePlayer={this.donePlayer.bind (this)}		
		  
		  />}
		  </div>)
		}
}

class Hand extends React.Component {

constructor() {
        super();

        this.state = {}

        }

    render () {

		this.props.p1Hand.sort(this.props.sortBy ('value',false))
		
		
		const p1 = this.props.p1Hand.map ((elem1, index)=>{	
		
		if (elem1==undefined) {
		return <div key = {index}>игра закончена</div>
			
		} else {
			return (<div 
			onClick={this.props.turn == true ? this.props.makeMove.bind(null,index):this.props.beatMove.bind(null,index)} 
			key ={index} 
			style={{display:'inline-block', border : '1px solid black'}}>
			Номинал {elem1.rank}  Масть {elem1.suit}   
			</div>)
			
		} 
		
		
		})
	
		const p2 = this.props.p2Hand.map ((elem2, index)=>{
		
		return (<div 
		style={{display:'inline-block', border : '1px solid black'}}
		key ={index}>
		карта   
		</div>)})
	
			

          return (
		  <div >
		  
		  <div style={{display:'inline-block'}}>{p2}</div>
		  
		  {this.props.trumpCard == false ? <div></div>: <div> КОЗЫРЬ Номинал {this.props.trumpCard.rank} Масть {this.props.trumpCard.suit} </div>}
		  
		  <div style={{display:'inline-block'}}>{p1}</div>
		  
		  {this.props.start == true ? <button onClick={this.props.deal}>начать</button>: ""}
		  
		  </div>
		  )
	}
}


class PlayGround extends React.Component {

constructor() {
        super();

        this.state = {}

        }
			
			
				
			
			
    render () {
			
			
		const goGame = this.props.game.map ((elem,index)=>{
			if (elem == undefined) {
				
				return <div key={index}>игра закончена</div>
			} else {
				return (
			<div
			
			key ={index} 
			style={{display:'inline-block', border : '1px solid green'}}>
			Номинал {elem.rank}  Масть {elem.suit}   
			
			</div>
			
			)
				
			}
			
		})
          return (
		  <div >
		  {goGame}
			<div>{this.props.turn == true && this.props.game.length >0 ? <button onClick={this.props.donePlayer}>отбой</button>:<div></div>}</div>
			<div>{this.props.turn == false ? <button onClick={this.props.takePlayer}>беру</button>:<div></div>}</div>
		  </div>
		  )
	}
}



    ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
