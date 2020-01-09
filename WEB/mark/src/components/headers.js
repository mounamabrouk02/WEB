import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Headers extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row"><div className="col-sm-12"><h1>MARK </h1> <p>Pour écrire en itally ajouter * à la fin et debut du mot</p></div></div>

        );
    }
}


export default Headers;