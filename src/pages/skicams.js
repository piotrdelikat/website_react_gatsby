import React from 'react';
import CameraCard from '../components/cameraCard'

class SkicamsPage extends React.Component {
    constructor () {
        super()
        this.state = {
          selectedSkicams: ['Andalo', 'Monte Bondone'],
          skicamsData: {},
          responseReceived: false 
        };
      }
 
    componentDidMount() {
        this.getSkicamsData('https://makevoid-skicams.p.mashape.com/cams.json')
        .then(data => {
            for (const key of Object.keys(data)) {
                if (this.state.selectedSkicams.includes(data[key].name)) {
                    const skicamLocation = data[key].name
                    this.setState({
                        skicamsData: {
                            ...this.state.skicamsData,
                            [skicamLocation]: data[key]
                        }
                    })  
                }
            }
            this.setState({responseReceived: true})
        })
        .catch(error => console.error(error))
    }

    getSkicamsData = url => {
        return fetch(url, {
            headers: {
                "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
            },
        })
        .then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error))
    } 

    render() {
        const { skicamsData } = this.state


        return (
        <div className='container content-container'>
            {   
                this.state.responseReceived ?
                <div className="row no-md-gutters">
                    <div className="col-12 col-md-6">
                        <CameraCard location={'Andalo'} data={skicamsData['Andalo']} selectedCameras={[59,60]}/> 
                    </div>
                    <div className="col-12 col-md-6">
                        <CameraCard location={'Monte Bondone'} data={skicamsData['Monte Bondone']} selectedCameras={[487, 488]}/>
                    </div>
                </div> :
                <div className="row">
                    <div className="col text-center">
                    <p className="loading">Loading</p>    
                    </div>
                </div>
            }
        </div>
        )
    }
}

export default SkicamsPage;
