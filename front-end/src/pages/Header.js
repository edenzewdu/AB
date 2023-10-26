import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const logo = [{
  "version": "1.0",
  "image": {
    "name": "/home/videosdownloader/public_html/image/public/uploadt/AB_ETHIOPIAN_TRADITIONAL_CLOTHES__2_-removebg-preview.png",
    "baseName": "AB_ETHIOPIAN_TRADITIONAL_CLOTHES__2_-removebg-preview.png",
    "format": "PNG",
    "formatDescription": "PNG",
    "mimeType": "image/png",
    "class": "DirectClass",
    "geometry": {
      "width": 500,
      "height": 153,
      "x": 0,
      "y": 0
    },
    "resolution": {
      "x": 37.8,
      "y": 37.8
    },
    "printSize": {
      "x": 13.2275,
      "y": 4.04762
    },
    "units": "PixelsPerCentimeter",
    "type": "TrueColorAlpha",
    "baseType": "Undefined",
    "endianness": "Undefined",
    "colorspace": "sRGB",
    "depth": 8,
    "baseDepth": 8,
    "channelDepth": {
      "alpha": 8,
      "red": 8,
      "green": 8,
      "blue": 8
    },
    "pixels": 306000,
    "imageStatistics": {
      "Overall": {
        "min": 0,
        "max": 255,
        "mean": 32.593,
        "median": 0,
        "standardDeviation": 19236.4,
        "kurtosis": 2.96374,
        "skewness": 2.13904,
        "entropy": 0.232621
      }
    },
    "channelStatistics": {
      "alpha": {
        "min": 0,
        "max": 255,
        "mean": 38.4983,
        "median": 0,
        "standardDeviation": 22456.8,
        "kurtosis": 1.87746,
        "skewness": 1.93812,
        "entropy": 0.201018
      },
      "red": {
        "min": 0,
        "max": 255,
        "mean": 35.2759,
        "median": 0,
        "standardDeviation": 20523.5,
        "kurtosis": 2.33655,
        "skewness": 2.01655,
        "entropy": 0.240707
      },
      "green": {
        "min": 0,
        "max": 255,
        "mean": 28.223,
        "median": 0,
        "standardDeviation": 16888,
        "kurtosis": 3.32056,
        "skewness": 2.18424,
        "entropy": 0.248068
      },
      "blue": {
        "min": 0,
        "max": 255,
        "mean": 28.3749,
        "median": 0,
        "standardDeviation": 17077.2,
        "kurtosis": 3.94005,
        "skewness": 2.29748,
        "entropy": 0.240692
      }
    },
    "alpha": "#00000000",
    "renderingIntent": "Perceptual",
    "gamma": 0.45455,
    "chromaticity": {
      "redPrimary": {
        "x": 0.64,
        "y": 0.33
      },
      "greenPrimary": {
        "x": 0.3,
        "y": 0.6
      },
      "bluePrimary": {
        "x": 0.15,
        "y": 0.06
      },
      "whitePrimary": {
        "x": 0.3127,
        "y": 0.329
      }
    },
    "matteColor": "#BDBDBD",
    "backgroundColor": "#FFFFFF",
    "borderColor": "#DFDFDF",
    "transparentColor": "#00000000",
    "interlace": "None",
    "intensity": "Undefined",
    "compose": "Over",
    "pageGeometry": {
      "width": 500,
      "height": 153,
      "x": 0,
      "y": 0
    },
    "dispose": "Undefined",
    "iterations": 0,
    "compression": "Zip",
    "orientation": "Undefined",
    "properties": {
      "Creation Time": "2023:04:04 20:37:40",
      "date:create": "2023-10-26T03:43:14+00:00",
      "date:modify": "2023-10-26T03:43:14+00:00",
      "png:cHRM": "chunk was found (see Chromaticity, above)",
      "png:gAMA": "gamma=0.45455 (See Gamma, above)",
      "png:IHDR.bit-depth-orig": "8",
      "png:IHDR.bit_depth": "8",
      "png:IHDR.color-type-orig": "6",
      "png:IHDR.color_type": "6 (RGBA)",
      "png:IHDR.interlace_method": "0 (Not interlaced)",
      "png:IHDR.width,height": "500, 153",
      "png:pHYs": "x_res=3780, y_res=3780, units=1",
      "png:sRGB": "intent=0 (Perceptual Intent)",
      "png:text": "1 tEXt/zTXt/iTXt chunks were found",
      "signature": "afb263d91d18482c2467f1d02099d7d8b126b1565e1b041e34fe3a6f07043aed"
    },
    "tainted": false,
    "filesize": "42174B",
    "numberPixels": "76500",
    "pixelsPerSecond": "11.338MB",
    "userTime": "0.000u",
    "elapsedTime": "0:01.006",
    "version": "ImageMagick 7.0.10-58 Q16 x86_64 2021-01-14 https://imagemagick.org"
  }
}]

const Header = () => {
  const logoUrl = logo[0].image.name;
  return (
    <div>
      <div className='header'>
        <div className='gift'>
          <lord-icon
            src="https://cdn.lordicon.com/pgmktfgp.json"
            trigger="hover"
            colors="primary:#c69cf4,secondary:#320a5c"
            className='gift-icon'
          ></lord-icon>
        </div>
        <div className='cart'>
          <lord-icon
            src="https://cdn.lordicon.com/cosvjkbu.json"
            trigger="hover"
            colors="primary:#6c16c7,secondary:#4f1091,tertiary:#320a5c"
            className='cart-icon'
          ></lord-icon>
        </div>
      </div>
      <div className='pp' >

        <div className='ppp' >
          <div className='profile-picture' >
            <img alt="Profile" className="logo-image" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px',
            }} />
            <div style={{ width: '45px', height: '45px', margin: '17px', marginRight: '10px', borderRadius: '50%', backgroundImage: 'linear-gradient(to right, rgb(250, 130, 10), rgb(300, 200, 0))', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', color: 'white', justifyContent: 'center' }}>
              </span>
            </div>
            <div style={{ fontSize: '17px', fontStyle: 'italic', fontWeight: 'bold', justifyContent: 'center', marginTop: '30px', marginRight: '10px' }}></div>
          </div>
          <div className='login-box' style={{ justifyContent: 'right' }}>
            <a className='login' >
              Logout
            </a>
          </div>
        </div>
        <div className='login-section'>
          <div className='login-box' style={{
            textAlign: 'right', width: '110PX'
          }}>
            <img src={{}} alt='login-icon' className='login-icon' style={{ width: '20PX' }}></img>
          </div>
        </div>
      </div>
      <div className='logo'>
        {/* Use the JSON data to set the image source */}
        <img src={logoUrl} alt='logo' />
      </div>
    </div>
  );
};

export default Header;