import React from 'react'


export default React.createClass({
    render(){
        var d = this.props.data
        // console.log(d)
        return(
            <div className="line">
                {d.title}
            </div>
        )
    }
})
