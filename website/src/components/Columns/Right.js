import React from 'react'
import Ranking from './Right-Ranking/Ranking'
class Right extends React.Component{
  constructor(){
    super()
    this.state = {
      names: [],
      scores: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/updateScore')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        this.setState({
          names: [...this.state.names, item.name],
          scores: [...this.state.scores, item.score]
        })
        //console.log(item.name)
      });
      console.log('from mount',data)
      
    })
  }

    render(){
      console.log('state in render: ',this.state.names[0])
      console.log('state in render: ',this.state.scores[0])
        return(
          <div>
          <h3 className = "bb bw2">Ranking</h3>
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">#</th>  
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Score</th>
              </tr>
            </thead>
            <tbody className="lh-copy f3-l">
            <tr>
                <td className="pv3 pr3 bb b--black-20">{1}</td>
                <td className="pv3 pr3 bb b--black-20">{this.state.names[0]} </td>
                <td className="pv3 pr3 bb b--black-20">{this.state.scores[0]}</td>
            </tr>
            <tr>
                <td className="pv3 pr3 bb b--black-20">{2}</td>
                <td className="pv3 pr3 bb b--black-20">{this.state.names[1]} </td>
                <td className="pv3 pr3 bb b--black-20">{this.state.scores[1]}</td>
            </tr>
            <tr>
                <td className="pv3 pr3 bb b--black-20">{3}</td>
                <td className="pv3 pr3 bb b--black-20">{this.state.names[2]} </td>
                <td className="pv3 pr3 bb b--black-20">{this.state.scores[2]}</td>
            </tr>
            <tr>
                <td className="pv3 pr3 bb b--black-20">{4}</td>
                <td className="pv3 pr3 bb b--black-20">{this.state.names[2]} </td>
                <td className="pv3 pr3 bb b--black-20">{30}</td>
            </tr>
            <tr>
                <td className="pv3 pr3 bb b--black-20">{5}</td>
                <td className="pv3 pr3 bb b--black-20">{this.state.names[2]} </td>
                <td className="pv3 pr3 bb b--black-20">{30}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
        )
    }
}
export default Right