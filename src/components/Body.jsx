import React from 'react'
import List from './List'
import {get, post} from './util/ajax.js'



export default React.createClass({
    getInitialState(){
        return {
            items:[]
        }
    },
    componentDidMount(){
        get('https://cnodejs.org/api/v1/topics', {page: 1, limit: 5, mdrender: false}, res =>{


            this.setState({items: res.data})
        })


    },
    render(){
        var items = this.state.items
        return(

            <div className="body">
              {
                    items.map(function(item){
                        return <List data={item}></List>
                    })
              }
            </div>
        )
    }
})
