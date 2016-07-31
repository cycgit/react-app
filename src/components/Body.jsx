import React from 'react'
import List from './List'
import {get, post} from './util/ajax.js'

// post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: '7b71f388-e636-4db0-9e44-7fd43bc038be'}, res =>{
//     console.log(res)
// })

// React.initializeTouchEvents(true)
export default React.createClass({
    getInitialState(){
        return {
            items:[],
            loading: true,
            page: 0
        }
    },
    componentDidMount(){

        this.loadDate()
    },
    loadDate(){
        this.setState({loading: true})
        get('https://cnodejs.org/api/v1/topics', {page: this.state.page+1, limit: 10, mdrender: false}, res =>{
            this.setState({items: this.state.items.concat(res.data), loading: false, page: this.state.page + 1})
        })
    },
    scroll(e){
        if(!this.state.loading){
            var dom = this.refs.body
            var sHeight = dom.scrollHeight
            var cHeight = dom.clientHeight
            var sTop = dom.scrollTop

            var diff = sHeight - cHeight - sTop
            if(diff<20){

                this.loadDate()
            }

        }



    },
    render(){
        let {items, loading} = this.state

        // let icon = loading ? <li className="loading-li"><i className="loading"></i></li> : null


        return(

            <div className="body" ref="body">

            <ul className="content-list">
              {
                    items.map(function(item){
                        return <List data={item} key={item.id}></List>
                    })
              }
            {/* <li className="loading-li"><i className="loading"></i></li> */}
            </ul>

            </div>
        )
    }
})
