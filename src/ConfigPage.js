import React from 'react'
import ConfigContainer from './ConfigContainer/ConfigContainer'

import './Config.css'

export default class ConfigPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            theme: 'light',
          }

    }

    render(){

            return(
                <div className="Config">
                    <div className={this.props.theme==='light' ? 'Config-light' : 'Config-dark'}>
                        <ConfigContainer commands={this.state.commands} saveConfig={(commands)=>this.saveConfig(commands)} theme = {this.state.theme}/>
                    </div>
                </div>
            )


    }
}
