import React, { useEffect } from 'react'
import Navbar from "./Navbar.js";
import "./home.css"
import { useState, useRef } from 'react';
import { GrMicrophone } from "react-icons/gr";
import Modal from 'react-modal';
import axios from 'axios';
import backImage from './back.jpg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSpeechSynthesis } from "react-speech-kit"

function Home() {
  const { speak,cancel } = useSpeechSynthesis()
  const [state, newstate] = useState("")

  {
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition()
    const startListerning = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListerning = () => SpeechRecognition.stopListening();


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpenModal = () => {
      setModalIsOpen(true);
    };

    const handleCloseModal = () => {
      setModalIsOpen(false);
    };


    const [isRunning, setIsRunning] = useState(true);
    const animationRef = useRef(null);

    function handleStop() {
      setIsRunning(false);
    }

    function handleContinue() {
      setIsRunning(true);
    }

    function handleReset() {
      animationRef.current.style.animation = "none";
      {/*animationRef.current.offsetHeight;*/ }
      animationRef.current.style.animation = "pulse 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite";
    }



    const [isAnimating, setIsAnimating] = useState(true);
    const [recording, setRecording] = useState("");

    const stopAnimation = () => {
      setIsAnimating(false);
    };

    const startAnimation = () => {
      setIsAnimating(true);
    };




    const [formdata, newformdata] = useState("")


    const hsubmit = async (event) => {

      console.log("api_called")
      event.preventDefault();
      console.log("Check form data:-", formdata)
      axios.post('http://localhost:5000/api', { formdata })
        .then(response => {
          newstate(response.data)
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });

      newformdata("")
    }





    const h1submit = async () => {

      console.log("Check transcript data:-", { transcript })
      axios.post('http://localhost:5000/api/t', { transcript })
        .then(response => {
          newstate(response.data)
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });

    }



    const handleInput = (e) => {
      console.log(e.target.value);
      newformdata(e.target.value)
      console.log("Form data :-", formdata);
    }
    let dummy=""


    return (
      <>
        <Navbar />
        <section className='backgroun first' >
          <div className='heading'>
            <h1 className='head'>Find Solace in the Wisdom of  Shree Krishna</h1>
            <img src={require('./f.png')}></img>

          </div>
          <div className='form'>
            <p className='text'>
              Arjuna,what troubles you, my friend?
            </p>

            <input type='text' value={formdata} onChange={handleInput} className='text' placeholder='How can i find inner peace in the midst of chaos?' ></input>

            <i className='microphone' onClick={() => {
              handleOpenModal();
              startListerning();
              startAnimation();
            }}><GrMicrophone /></i>

          <input type='submit' className='btn' value='Find Wisdom' onClick={hsubmit}></input>
          </div>
          <div className='response'>
            <img src={require("./side.png")}></img>
            <div className='transparent'>
              <p>{state}</p>
             
            </div>
            <div className='below-btn'>
          <button  className='btn1' onClick={() => speak({ text: state })}>Listen</button>
            <button className='btn2'  onClick={() => cancel()}>Stop</button>
            </div>
          </div>
         
        </section>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              backgroundColor: 'black',
              backgroundImage: `url(${backImage})`,
              backgroundSize: 'cover',
              width: '50%',
              height: '50%',
              margin: 'auto',
              borderRadius: '5px',
              outline: 'none',
              padding: '97px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute' /* add this line to make the position of the cross icon relative to the modal */
            }

          }}
        >
          <span className={isAnimating ? "show" : "notshow"}>Listening...</span>
          <div className="close-icon" onClick={() => {
            handleCloseModal();
            resetTranscript();
            stopListerning();
            stopAnimation();
          }}>
            {/* Use your preferred cross icon here */}
            <span className="icon-line line-top"></span>
            <span className="icon-line line-bottom"></span>
            <span className="close-text">Close</span>
          </div>

          <div
            className={isAnimating ? "listening-animation" : "stopped"}
          >
          </div>


          {/* <div className="display-text">{displayText}</div>*/}

          <div className="button-container">
            <button className="continue-button" onClick={() => {
              handleCloseModal();
              stopListerning();
              resetTranscript();
              stopAnimation();
              h1submit()
            }}>Continue</button>
            <button className="reset-button" onClick={() => {
              startAnimation();
              resetTranscript();
              startListerning();
            }}>Reset</button>
            <button className="stop-button" onClick={() => {
              stopAnimation();
              stopListerning();
            }}>Stop</button>
          </div>


          <div className="recording-container">
            <span className="recording-text">{transcript}</span>
          </div>
        </Modal>

      </>
    )
  }
}
export default Home