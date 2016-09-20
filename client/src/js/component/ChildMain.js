var React=require('react');
var Gc=require('./Gc');

var ChildMain=React.createClass({


  render:function(){
    var commentNodes = this.props.movieArr.map(function(arr) {
     return (
       <div>
       <Gc allData={arr} key={arr.imdbID} />
       </div>
     );
   }.bind(this)
 );
   return (
         <div className="commentList">
           {commentNodes}
         </div>
       );
  }
});

module.exports=ChildMain;
