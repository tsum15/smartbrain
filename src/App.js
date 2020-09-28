import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 400
        }
      }
    }
  }

const app = new Clarifai.App({
 apiKey: 'c8623266e2f94649adcd071b97f34da9'
});


class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
      console.log('click');
      app.models.predict('e15d0f873e66047e579f90cf82c9882z',"https://samples.clarifai.com/face-det.jpg")
      .then(response => {
        //var concepts = response['outputs'][0]['data']['concepts']
        console.log(response);
      })
  }

  render() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/*<FaceRecognition />*/}
    </div>
  );
  }
}

export default App;
