
class App extends React.Component {

constructor() {
       super();
		
		
    this.state = {}
	
		
    }
	
	


    render () {
		
		
		
		
          return (

          <h1>111</h1>
        )
            }

        }
		
		class App2 extends React.Component {

constructor() {
       super();
		
		
    this.state = {}
	
		
    }
	
	


    render () {
		
		
		
		
          return (

          <h1>2222</h1>
        )
            }

        }





 ReactDOM.render(
            <div><App /> <App2 /></div>,
       
            document.getElementById('root')
          ); 
		  ReactDOM.render(
            <App />,
            document.getElementById('root1')
          ); 
		  ReactDOM.render(
            <App />,
            document.getElementById('root2')
          );
