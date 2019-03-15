import React, {Component} from 'react';
import elvesimg from '../images/elves.jpg'
export class Elves extends Component {
  render(){
    return(
      <>
      <div className="text-center elves containerheight">
                <h1>Elves!</h1>
                <img alt='' className="rounded-circle w-50 m-2" src={elvesimg}/>
                <p className="rowheight">Don't let them fool you... they look blasè, but they deliver!</p>
                <p className="rowheight">A well-placed deadly wound, albeit perfumed, can still kill you.</p>
              </div>
      </>
    )
  }
}
