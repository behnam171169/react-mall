import React, { Component } from 'react';
import './spinercorona.scss';
const Spinercorona=()=>{
    return(
  
 <div class="box">  
    <div class="body">  
      <div class="details">
        <div class="r-detail">        
        </div>
        <div class="m-detail">        
        </div>
         <div class="mm-detail">        
        </div>
        <div class="l-detail">        
        </div>
      </div>
      <div class="shapes">
         <div class="b-shape">        
         </div>
         <div class="t-shape">        
         </div>
         <div class="rb-shape">        
         </div>
         <div class="tm-shape">        
         </div>
         <div class="lm-shape">        
         </div>
         <div class="rm-shape">        
         </div>
         <div class="bm-shape">        
         </div>
         <div class="lt-shape">        
         </div>
      </div>
     <div class="sm-details">
        <div class="r-detail">        
        </div>
        <div class="m-detail">        
        </div>
         <div class="mm-detail">        
        </div>
        <div class="l-detail">        
        </div>
      </div>
      <div class="sm-shapes">
         <div class="b-shape">        
         </div>
         <div class="t-shape">        
         </div>
         <div class="rb-shape">        
         </div>
         <div class="tm-shape">        
         </div>
         <div class="lm-shape">        
         </div>
         <div class="rm-shape">        
         </div>
         <div class="bm-shape">        
         </div>
         <div class="lt-shape">        
         </div>
      </div>               
    </div>
    <div class="centered">
         <div style={{fontSize:10}} class="text">
         COVID-19
        </div> 
    </div> 
   {/* <div class="message">
       <text>Please wait... Your life is on hold</text>
        
   </div> */}
   
 </div>

    )
}
export default Spinercorona;








var FilteredList = React.createClass({
   filterList: function(event){
     var updatedList = this.state.initialItems;
     updatedList = updatedList.filter(function(item){
       return item.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
     });
     this.setState({items: updatedList});
   },
   getInitialState: function(){
      return {
        initialItems: [
          "Apples",
          "Broccoli",
          "Chicken",
          "Duck",
          "Eggs",
          "Fish",
          "Granola",
          "Hash Browns"
        ],
        items: []
      }
   },
   componentWillMount: function(){
     this.setState({items: this.state.initialItems})
   },
   render: function(){
     return (
       <div className="filter-list">
         <form>
         <fieldset className="form-group">
         <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
         </fieldset>
         </form>
       <List items={this.state.items}/>
       </div>
     );
   }
 });
 
 var List = React.createClass({
   render: function(){
     return (
       <ul className="list-group">
       {
         this.props.items.map(function(item) {
           return <li className="list-group-item" data-category={item} key={item}>{item}</li>
         })
        }
       </ul>
     )  
   }
 });
 
 React.render(<FilteredList/>, document.getElementById('app'));