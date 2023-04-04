import { HelmetProvider, Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";


const Second = () => {
  const [data, setData] = useState({
    url_d: "",
    width: undefined,
    height: undefined,
    screenDisplay: undefined,
    colorMode: undefined,
    format: undefined,
    device: undefined
  });

  const handleDownload = (fileName, url, width, height, screenDisplay, colorMode, format, device) => {
    let defaultDisplay = screenDisplay==='yes'?true:false;
    let heightValue = height===undefined?720:height;
    let widthValue = width===undefined?1024:width;
    let colorModeValue = colorMode===undefined?"light":colorMode;
    let formatValue= format===undefined?"png":format;
    fileName = formatValue
    let deviceValue = device===undefined?"laptop":device;
    let contentType = "image/"+formatValue;
    const options = {
      method: 'GET',
      params: {url: url, capture_full_page:defaultDisplay, height: heightValue, width: widthValue, device: deviceValue, prefers_color_scheme: colorModeValue, export_format: formatValue},
      responseType: "blob",
      withCredentials: false,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'exponential_api_secret': "5629e31a-cad2-3f33-a0be-18443163017b",
      }
    };
    
    axios.get("https://website-screenshot-api.exponential.host",options).then(res=>{
      fileDownload(res.data,fileName)
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ScreenShoter</title>
          <style>{`
          *{
            font-family: Helventica,sans-serif;
          }
          :root {

--input-color: #99A3BA;
--input-border: #CDD9ED;
--input-background: #fff;
--input-placeholder: #CBD1DC;

--input-border-focus: #275EFE;

--group-color: var(--input-color);
--group-border: var(--input-border);
--group-background: #EEF4FF;

--group-color-focus: #fff;
--group-border-focus: var(--input-border-focus);
--group-background-focus: #678EFE;

}
body{
  background: #7D6E83;
}
.form-field {
display: block;
width: 100%;
padding: 8px 16px;
line-height: 25px;
font-size: 20px;
font-weight: 600;
font-family: inherit;
border-radius: 6px;
-webkit-appearance: none;
color: var(--input-color);
border: 1px solid var(--input-border);
background: var(--input-background);
transition: border .3s ease;
&::placeholder {
    color: var(--input-placeholder);
}
&:focus {
    outline: none;
    border-color: var(--input-border-focus);
}
}

.form-group {
position: relative;
display: flex;
width: 100%;
& > span,
.form-field {
    white-space: nowrap;
    display: block;
    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }
    &:first-child {
        border-radius: 6px 0 0 6px;
    }
    &:last-child {
        border-radius: 0 6px 6px 0;
    }
    &:not(:first-child) {
        margin-left: -1px;
    }
}
.form-field {
    position: relative;
    z-index: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-top: 0;
    margin-bottom: 0;
}
& > span {
    text-align: center;
    padding: 8px 12px;
    font-size: 20px;
    line-height: 25px;
    color: var(--group-color);
    background: var(--group-background);
    border: 1px solid var(--group-border);
    transition: background .3s ease, border .3s ease, color .3s ease;
}
&:focus-within {
    & > span {
        color: var(--group-color-focus);
        background: var(--group-background-focus);
        border-color: var(--group-border-focus);
    }
}
}

html {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
}


          .Second{
  height:  100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.search-bar-container {
  padding-top: 30vh;
  width:35%;
  margin:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
}


.button-50 {
  appearance: button;
  background-color: blue;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box select {
  background-color: #0563af;
  color: white;
  padding: 12px;
  width: 290px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}
.helo{
  background-color: #0563af;
  color: white;
  padding: 12px;
  width: 290px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}
.box::before {
  content: "\f13a";
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}
.goButton{
  padding: 50px 0px 0px;
  display: flex;
  justify-content: center;
}
          `}</style>
        </Helmet>
        <div className="Second">
          <div className="search-bar-container">
            <div className="form-group">
            
              <input className="form-field" type="text" placeholder="https://domain.tld" value={data.url_d} name="url_d" onChange={handleChange} />
            </div>

            <div className="box">
              <input className="helo" type="text" placeholder="height (default: 720)" value={data.height} name="height" onChange={handleChange}/>
              <input className="helo" type="text" placeholder="width (default: 1024)" value={data.width} name="width" onChange={handleChange}/>
              <select value={data.screenDisplay} name="screenDisplay" onChange={handleChange}>
                <option>Full-Screen (default: yes)</option>
                <option>no</option>
                <option>yes</option>
              </select>
              <select value={data.colorMode} name="colorMode" onChange={handleChange}>
              <option>Color Scheme (default: light)</option>
                <option>dark</option>
                <option>light</option>
              </select>
              <select value={data.format} name="format" onChange={handleChange}>
                <option>Export Format(default: png)</option>
                <option>png</option>
                <option>jpeg</option>
                <option>webp</option>
              </select>
              <select value={data.device} name="device" onChange={handleChange}>
                <option>Device (default: Laptop)</option>
                <option>mobile</option>
                <option>tablet</option>
                <option>desktop</option>
              </select>
              <div className="goButton" >
                <button className="button-50" role="button" onClick={() => {
                  var format = 'download.'+data.format
                  handleDownload(format, data.url_d, data.width, data.height, data.screenDisplay, data.colorMode, data.format, data.device)
                }}>Lets Go</button></div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  )
}

export default Second;
