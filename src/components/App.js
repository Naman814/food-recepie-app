import { useEffect, useState } from 'react';
import {Jumbotron,Container,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'
import Food from './food'
function App() {

  const [recepie,setRecepie]=useState([])
  const [query,setQuery]=useState('')

  useEffect(()=>{
    fetch('https://api.edamam.com/search?q=banana&app_id=5e0294f2&app_key=37cdb83bd2c553470ed3100376478a47')
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits)
        setRecepie(data.hits)
    })

  },[]);
    

  const handleClick=(e)=>{

    console.log(query)

   e.preventDefault()
    fetch('https://api.edamam.com/search?q='+query+'&app_id=5e0294f2&app_key=37cdb83bd2c553470ed3100376478a47')
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits)
        setRecepie(data.hits)
    })
        
  }
  
  return (
    <div className="outer">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">FOOD APP 👨‍🍳</Navbar.Brand>
    <Nav className="mr-auto">
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" spellCheck="false" className="mr-sm-2"   onChange={(e)=>{setQuery(e.target.value)}} value={query} />
      <Button variant="outline-info" type="submit" onClick={handleClick}>Search</Button>
    </Form>
  </Navbar>
      
    <Jumbotron fluid>
  <Container>
    <h1><b>Food Recepie App</b></h1>
    <h2>
    Search your Delicious Recepies here!
    </h2>
  </Container>
</Jumbotron>
<div className="row" style={{textAlign:'center',padding:'1.5rem',justifyContent:'space-around',backgroundColor:'#f54748'}}>
   { recepie.map((data)=>{
     console.log(data.recipe)
      return <Food title={data.recipe.label} src={data.recipe.image}  calorie={data.recipe.calories} method={data.recipe.url} type={data.recipe.dishType}/>
    })
   }
</div>
 
    </div>
  );
}

export default App;
