import './ColorGenerator.css';
import { SwatchesPicker } from 'react-color';
import { useState } from 'react'; 


function ColorGenerator() {
  const [currentBackground1, setCurrentBackground1] = useState('#FFF');
  const [currentBackground2, setCurrentBackground2] = useState('#FFF');
  const [currentBackground3, setCurrentBackground3] = useState('#FFF');

  const handleOnChange1 = (color: {hex: string}) => {
    setCurrentBackground1(color.hex);
  }
  const handleOnChange2 = (color: {hex: string}) => {
    setCurrentBackground2(color.hex);
  }

  const handleOnChange3 = (color: {hex: string}) => {
    setCurrentBackground3(color.hex);
  }
  
  const appStyle1 = {
    color: '#494949',
    'background-color': currentBackground1,
    border: '0.5rem solid #FFD699',
    width: '100%',
  }

  const appStyle2 = {
    color: '#494949',
    'background-color': currentBackground2,
    border: '0.5rem solid #FFD699',
    width: '100%',
  }

  const appStyle3 = {
    color: '#494949',
    'background-color': currentBackground3,
    border: '0.5rem solid #FFD699',
    width: '100%',
  }

  return (
    <div className='ColorGenerator__mainDiv'>
      <div className='ColorGenerator' style={appStyle1}>
          <SwatchesPicker 
          color={currentBackground1}
          onChangeComplete={handleOnChange1}
          />
          <h1 className='ColorGenerator__colorText'>Hex-code: {currentBackground1}</h1>
        

      </div>

      <div className='ColorGenerator' style={appStyle2}>
          <SwatchesPicker 
          color={currentBackground2}
          onChangeComplete={handleOnChange2}
          />
          <h1 className='ColorGenerator__colorText'>Hex-code: {currentBackground2}</h1>
    

      </div>

      <div className='ColorGenerator' style={appStyle3}>
          <SwatchesPicker 
          color={currentBackground3}
          onChangeComplete={handleOnChange3}
          />
          <h1 className='ColorGenerator__colorText'>Hex-code: {currentBackground3}</h1>
    

      </div>
    </div>
  );
}

export default ColorGenerator;