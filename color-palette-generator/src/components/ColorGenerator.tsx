import './ColorGenerator.css';
import { SketchPicker } from 'react-color';
import { useState } from 'react'; 

function ColorGenerator() {
  const [currentBackground, setCurrentBackground] = useState('#FFF');
  // const handleOnChange = (color) => {
  //   setCurrentBackground(color)
  // }

  return (
    <div className='ColorGenerator'>
        <SketchPicker 
        color={currentBackground}
        // onChangeComplete={handleOnChange(color)}
        />
       

    </div>
  );
}

export default ColorGenerator;