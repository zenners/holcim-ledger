import React, { Component } from 'react';

import './Ledger.css'
import DatePicker from './shared/Daterange.js'

var columns = ['Transaction', 'Type', 'Date', 'Debit', 'Credit'];

const FormGroup = props => {
  return (
    <div className="form-group">
      <label className="col-md-4 control-label" for={props.label}>{props.label}</label>
      <div className="col-md-8">
        {props.children}
      </div>
    </div>
  )
}

const Label = props => {
	return(
		props.debit ? <span className="label label-default">DEBIT</span> : <span className="label label-warning">CREDIT</span>
	)
}

export default class Ledger extends Component {

  render() {
  	console.log(this.props.data)
  	var cols = columns.map( (col, i) => ( <th key={i}> {col} </th> ))
  	
    return (
      <div className="container">
      			<h4> Ledger </h4>
      			<hr/>
      			
      		      		
      	
      	
      	<table className="table">
      		<thead>
	  			<tr className="">
	  				<th>Transaction </th>
	  				<th>Description </th>
	  				<th>Date </th>
	  				<th>Type </th>
	  				<th className="head-end">Debit </th>
	  				<th className="head-end">Credit</th>
	  			</tr>
	  		</thead>

	  		
	  		{ Object.keys(this.props.data).map((item, index) => {
	  			var x = this.props.data[item].map((foo, i) => {
	  				var debit = parseInt(foo.debit) > 0
					return (
						<tr className="hoverable" index={i}>
							<td> {foo.transaction} </td>
							<td> {foo.type} </td>
							<td> {foo.date }</td>
							<td> <Label debit={debit} /> </td>
							<td className="head-end"> {foo.debit }</td>
							<td className="head-end"> {foo.credit }</td>
						</tr>
					)
				})
	  			
	  			return (
	  				<tbody key={item}>
	  					<tr className="date-row"> <td colSpan="6"> {item} </td> </tr> 
  						{x}
  					</tbody>
	  			)
	  				
	  		  })
	  		}
	  		
	  			

      	</table>
      </div>
    );
  }
}

