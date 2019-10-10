import React from 'react'

export default class Population extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      data: []
    }
  }

  // componentWillMount(){
  // }

  // componentWillUpdate(){
  // }

  // componentWillReceiveProps(){
  // }

  componentDidMount(){
    this.getInfo()
  }
  componentDidUpdate(prevProp){
    if(prevProp.countryName !== this.props.countryName){
      this.getInfo()
    }
  }

  getInfo(){
    fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
    .then((res)=>{
      return res.json()
    })
    .then((json)=>{
      console.log(json);
      this.setState({
        data: json.data,
        isLoading: false,
      })
    })
    .catch((error)=>{
      console.log(error)
      this.setState({
        isLoading: false,
      })
    })
  }

  render(){
    const { data, isLoading } = this.state
    return (
      <div>
        {isLoading && 'Loading...'}
        {!isLoading && data.length && data.map(({State, Year, Population, "ID State": key})=>{
          return <div key={key}>
            State: {State}, {Year}: {Population}
          </div>
        })}
      </div>
    )
  }
}