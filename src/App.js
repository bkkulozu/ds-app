import React, { useState } from 'react';
import './App.css';

const Home = () => {
  const [xmlCode, setXmlCode] = useState('');

  const handleGenerateImg = () => {
    const imgXml = `
      <annotations>
        <image>
          <filename>image1.jpg</filename>
          <size>
            <width>800</width>
            <height>600</height>
          </size>
          <object>
            <name></name>
            <bndbox>
              <xmin>100</xmin>
              <ymin>200</ymin>
              <xmax>400</xmax>
              <ymax>500</ymax>
            </bndbox>
          </object>
          <object>
            <name></name>
            <bndbox>
              <xmin>200</xmin>
              <ymin>300</ymin>
              <xmax>500</xmax>
              <ymax>600</ymax>
            </bndbox>
          </object>
          <object>
            <name></name>
            <bndbox>
              <xmin>300</xmin>
              <ymin>400</ymin>
              <xmax>600</xmax>
              <ymax>700</ymax>
            </bndbox>
          </object>
        </image>
      </annotations>
    `;
    setXmlCode(imgXml);
  };

  const handleGenerateVD = () => {
    const vdXml = `
      <annotations>
        <video>
          <filename>video1.mp4</filename>
          <frames>
            <frame>
              <frame_number>1</frame_number>
              <objects>
                <object>
                  <name></name>
                  <bndbox>
                    <xmin>100</xmin>
                    <ymin>200</ymin>
                    <xmax>400</xmax>
                    <ymax>500</ymax>
                  </bndbox>
                </object>
                <object>
                  <name></name>
                  <bndbox>
                    <xmin>200</xmin>
                    <ymin>300</ymin>
                    <xmax>500</xmax>
                    <ymax>600</ymax>
                  </bndbox>
                </object>
                <object>
                  <name></name>
                  <bndbox>
                    <xmin>300</xmin>
                    <ymin>400</ymin>
                    <xmax>600</xmax>
                    <ymax>700</ymax>
                  </bndbox>
                </object>
              </objects>
            </frame>
            <frame>
              <!-- Annotations for subsequent frames -->
            </frame>
          </frames>
        </video>
      </annotations>
    `;
    setXmlCode(vdXml);
  };

  const handleClear = () => {
    setXmlCode('');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([xmlCode], { type: 'text/xml' });
    element.href = URL.createObjectURL(file);
    element.download = 'annotations.xml';
    element.click();
  };

  return (

    <div className="content">
      <p> <a className="here"> <u> <b> Here</b></u></a>, you can create and download a very simplistic sample of an image or video annotation. </p>
      <br /> 
      <br />
      <div className="center">
        <button className="green-button" onClick={handleGenerateImg}>
          Generate img
        </button>
        <button className="green-button" onClick={handleGenerateVD}>
          Generate vd
        </button>
      </div>
      <div className="text-area">
        <textarea value={xmlCode} onChange={(e) => setXmlCode(e.target.value)}></textarea>

      </div>
      <div className="button-row">
        <button className="green-button" onClick={handleDownload}> &#128229;
          Download
        </button>
        <button className="green-button" onClick={handleClear}>   &#10006;  
          
          Clear 
        </button>
      </div>
    </div>
  );
};

const License = () => {
  return (
    <div className="content">
      <h2>Improvements & License </h2>
      <p className='p2'>   
    <b>   Improvements and License: </b> 

 <p>  If you have <u> any questions </u> or request regarding the licensing of this project, please reach out to us at <b> 
  
 <a href="mailto:kulozub@gmail.com" className="mail" > [mail address]</a></b>. 
</p>
<p>
Feel free to customize, learn about and adapt the license explanation according to your specific project requirements and contact information. </p>
</p> 
    </div>
  );
};

const About = () => {
  return (
    <div className="content">
      <h2>About</h2>

      <img src="https://www.cloudfactory.com/hubfs/web19/images/computer-vision-annotation/Data-Annotation-Tools-Key-Elements-large-thumbnail.png" alt="Cloudfactory.com" className="centered-image" />


      <p className="p1">
  Welcome to DSET! This website is designed to provide a simple and efficient solution for automating data annotation. Our main goal is to streamline the annotation process for images and videos, making it easier for you to generate annotation XML files. 
  </p> 
  <p className="p1"> 
  With just a few clicks, you can generate accurate and structured annotations for your data.
   Our intuitive user interface features a top navigation bar with easy access to the Home, License, and About pages. On the Home page, you'll find a centralized interface where you can generate XML annotations for images or videos.
   </p> 
   <p className="p1"> 
    Simply click the "Generate img" or "Generate vd" buttons, and the corresponding XML code will be automatically populated. You can edit the annotations in the provided text area and download the XML file when you're ready. We aim to make the process efficient and hassle-free, without the need for complex routers or databases. Explore our website today and experience a streamlined approach to data annotation!  </p>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };


  return (
    <div className="App">
      <div className="topbar" style={{ backgroundColor: '#F0751B' }}>

        <button>  <h2 className="firstTop"> DSET  </h2> </button>
        <button onClick={() => handlePageChange('Home')}>Home</button>
        <button onClick={() => handlePageChange('About')}>About</button>
        <button onClick={() => handlePageChange('License')}>Improvements</button>

      </div>
      {activePage === 'Home' && <Home />}
      {activePage === 'License' && <License />}
      {activePage === 'About' && <About />}

      <br />
      <br />
      <br />
      <br />       <br />       <br />       <br />
      <br />       <br />
      <br />       <br />      <br />       <br />
      <br />       <br />
      <br /> 


      {/* */}
      <footer className="footer">
        <div className="footer-content">
          <p className="p3">&copy; 2023 DSET </p>
        </div>
      </footer>
    </div>
    
  );
};

export default App;