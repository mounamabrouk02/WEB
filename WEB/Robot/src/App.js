import React from 'react';
import './App.css';
import Card from './components/card';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      cardInfo :[
      {
          nom:'mouna mabrouk',
          filiere:'ISIL',
          image:'mouna mabroukt?set=set2'
      },
      {
        nom:'oussama eddahri',
        filiere:'ISIL',
        image:'oussama eddahri?set=set2'
      },
      {
        nom:'najwa houmam',
        filiere:'MGE',
        image:'najwa houmam?set=set2'    
      },
      {
        nom:'tarik zaidi',
        filiere:'MGE',
        image:'tarik zaidi?set=set2'     
      },
      {
        nom:'hassna saidi',
        filiere:'ERDD',
        image:'hassna saidi?set=set2'     
      },
      {
        nom:'kwtar raissi',
        filiere:'MT',
        image:'kawtar raissi?set=set2'    
      },
      {
        nom:'salima agueram',
        filiere:'GODT',
        image:'salima agueram?set=set2'      
      }
          ],
          name:''
  }
  this.OnChange = this.OnChange.bind(this);
}

  OnChange(e){
    this.setState({
      name: e.target.value
    })
  }
  render() {

    
    return(
<div id="nav">  <input type="text" onChange={this.OnChange} placeholder="Search" />

<div className="App">

    {
      this.state.name === '' ?



this.state.cardInfo.map((item,i) =>   <Card key={i} nom={item.nom} filiere={item.filiere} url={item.image}/>) : 
this.state.cardInfo.map((item,i) =>     item.nom.includes(this.state.name)  ? <Card key={i} nom={item.nom} filiere={item.filiere} url={item.image}/> :'')

    }
    
    </div>
    </div>
    );
  }
}

export default App;