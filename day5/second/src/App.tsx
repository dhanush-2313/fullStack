
import './App.css'

const card: { container: React.CSSProperties; box: React.CSSProperties } = {
  container:{
    display:"flex",
    justifyContent :"center"
  },
  box:{
    border:"2px solid black",
    margin:"5px",
    padding:"5px",
    textAlign:"center"
  }
}

function App() {
  return (
    <div style={card.container}> 
      <Sample name="John" role="Developer"/>
      <Sample name="Doe" role="Designer"/>
      <Sample name="Jane" role="Manager"/>
    </div>

  ) 
}

const Sample = (props:any) => {
  return (
    <div style={card.box}>
      <h1>{props.name}</h1>
      <p>His role: {props.role}</p>
    </div>
  )

}

export default App
