import React, { CSSProperties } from 'react'
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { useSelector } from 'react-redux';
import { selectScreenW } from '../screenSlice';


// TEMPLATE CARD
const Card = ()=>{
  return <div style={{width: '300px'}} className='inline-block  h-full border-2 border-gray-950'>2inline block</div>
}



const TestSlider = (props:any) => {

  const [inputValue, setInputValue] = useState("");
  const [stepCount, setStepCount] = useState(0)
  const [count, setCount] = React.useState(0)
  const requestRef = React.useRef(0);
  const previousTimeRef = React.useRef(Date.now());
  const currentPositionRef = useRef(0)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [selectedSlide, setSelectedSlide] = useState(0)
  const frameWidthRef = useRef<any>()
  const sliderWidthRef = useRef<any>()
  const screenW = useSelector(selectScreenW)
  const [mouseDown, setMouseDown] =useState(false)
  const mouseStartRef = useRef(0)
  const [mouseMove, setMouseMove] = useState({
    previousPoint: mouseStartRef.current,
    nextPoint: mouseStartRef.current,
    distanceNextToPrevious:0
  })
  // oturulecek cardlarin sayini avtomatik teyin ede bilmek ucun
  // gelen datani bu state e oturmek lazimdir
  const [cardData, setCardData] = useState<any[]>([1,2,3,4,5,6,7,8,9,10])
  const frameStyle: CSSProperties = {
    width: '100%',
    overflow: 'hidden',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: 'yellowgreen',
    marginTop: '100px',
  }

  const sliderStyle: CSSProperties = {
    whiteSpace: 'nowrap',
    height: '200px',
    width: 'fit-content' ,
    margin: '50px 0px',
    backgroundColor: 'gold',
    transform: `translateX(${currentPosition}%)`,
    transition: '1s',
    
    position: 'relative'
  }

  const controllersContainerStyle:CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px'
      
  }

  const iconStyle:CSSProperties = {
    fontSize: '30px',
    borderRadius: '50%',
    backgroundColor:'black',
    margin: '5px'
  }

  const pointerStyle:CSSProperties   = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor:'black',
    margin: '5px',
  }

  const coverStyle:CSSProperties = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'black',
    opacity: '0.5'
  }




  React.useEffect(() => {
    const animate = () => {
      if (Date.now() - previousTimeRef.current > 5000) {

        setStepCount(value => value + 1)

        previousTimeRef.current = Date.now();

      }
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {

    if (stepCount > 0) {
      if (currentPositionRef.current > -cardData.length +1) {
        if((100+currentPositionRef.current * 100 / cardData.length -100 / cardData.length ) > (frameWidthRef.current.offsetWidth*80/100 *100/sliderWidthRef.current.offsetWidth)){ currentPositionRef.current -= 1 
          setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
            setSelectedSlide(currentPositionRef.current)
        }
        else {
          setCurrentPosition(-100 + frameWidthRef.current.offsetWidth *80/100 /sliderWidthRef.current.offsetWidth *100)
          
          currentPositionRef.current = -cardData.length + 1
          setSelectedSlide(currentPositionRef.current)
        }
      }
     
     
      else {
        currentPositionRef.current = 0
        setCurrentPosition(value => currentPositionRef.current * 100 / cardData.length)
      }

     
      setSelectedSlide(currentPositionRef.current)
    }
  }, [stepCount])

// slider uzunlugunu mueyyen etmek ucun
  useEffect(()=>{
    if(frameWidthRef.current){
      console.log(frameWidthRef.current.offsetWidth)
      console.log(sliderWidthRef.current.offsetWidth)
      console.log(document.documentElement.clientWidth)
    }
  }, [])
 

  const moveLeftF = (e: any) => {

    previousTimeRef.current = Date.now();
  
    if(currentPositionRef.current < 0 ) {
      if(currentPositionRef.current === (-cardData.length + 1) && (frameWidthRef.current.offsetWidth*80/100 >= sliderWidthRef.current.offsetWidth /cardData.length) ){
        currentPositionRef.current  = -cardData.length + 1 +  Math.floor( frameWidthRef.current.offsetWidth*80/100 /(sliderWidthRef.current.offsetWidth /cardData.length))
        setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
     }
      else {
        currentPositionRef.current += 1
      }
      setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
      setSelectedSlide(currentPositionRef.current)
    }
    else currentPositionRef.current = 0
    setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
      setSelectedSlide(currentPositionRef.current)
    
  }

  const moveRightF = () => {
    previousTimeRef.current = Date.now();
    if((100+currentPositionRef.current * 100 / cardData.length -100 / cardData.length ) > (frameWidthRef.current.offsetWidth*80/100 *100/sliderWidthRef.current.offsetWidth))
    { 
      currentPositionRef.current -= 1 
      setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
        setSelectedSlide(currentPositionRef.current)
    }
    else {
      setCurrentPosition(-100 + frameWidthRef.current.offsetWidth *80/100 /sliderWidthRef.current.offsetWidth *100)
      
      currentPositionRef.current = -cardData.length + 1
      setSelectedSlide(currentPositionRef.current)
    }
    console.log(100+currentPositionRef.current * 100 / cardData.length)
    console.log(frameWidthRef.current.offsetWidth*80/100 *100/sliderWidthRef.current.offsetWidth)
    
  }

  const moveStartF = () => {

    previousTimeRef.current = Date.now();
    currentPositionRef.current = 0
    setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
    setSelectedSlide(currentPositionRef.current)
  }

  const moveEndF = () => {
    previousTimeRef.current = Date.now();
    setCurrentPosition(-100 + frameWidthRef.current.offsetWidth *80/100 /sliderWidthRef.current.offsetWidth *100)
      
    currentPositionRef.current = -cardData.length + 1
    setSelectedSlide(currentPositionRef.current)
  }

  const movePointerF = (e:any) => {
    previousTimeRef.current = Date.now();
    currentPositionRef.current = -Number(e.currentTarget.id)
    setSelectedSlide(currentPositionRef.current)
    
    if(currentPositionRef.current >= -cardData.length+1  +  Math.floor( frameWidthRef.current.offsetWidth*80/100 /(sliderWidthRef.current.offsetWidth /cardData.length)))
    { 
      setCurrentPosition(currentPositionRef.current * 100 / cardData.length)
    }
    else{
      setCurrentPosition(-100 + frameWidthRef.current.offsetWidth *80/100 /sliderWidthRef.current.offsetWidth *100)

      
    }
  }

  const mouseDownF = (e:any) => {
    e.preventDefault()
    setMouseDown(true)
    mouseStartRef.current = e.pageX
    setMouseMove({...mouseMove, previousPoint:e.pageX})
  }

  const mouseMoveF = (e:any) => {
    e.preventDefault()
    if(mouseDown){
      setMouseMove({...mouseMove, nextPoint:e.pageX})
      setCurrentPosition(currentPosition +(( mouseMove.nextPoint - mouseMove.previousPoint)/ sliderWidthRef.current.offsetWidth * 100))
      
    }
  }

 

  useEffect(()=>{
    
    previousTimeRef.current = Date.now();
    
    setMouseMove({...mouseMove, previousPoint:mouseMove.nextPoint})
  },[mouseMove.nextPoint])

  useEffect(()=>{
    
  },[mouseMove.previousPoint])

  const mouseUpF =(e:any) => {
    e.preventDefault()
    setMouseDown(false)
    if((sliderWidthRef.current.offsetWidth / cardData.length) /  (mouseMove.nextPoint - mouseStartRef.current) >2 ){
currentPositionRef.current += Math.ceil((mouseMove.nextPoint - mouseStartRef.current) / (sliderWidthRef.current.offsetWidth / cardData.length))
setCurrentPosition(currentPosition + Math.abs(Math.ceil((mouseMove.nextPoint - mouseStartRef.current) / (sliderWidthRef.current.offsetWidth / cardData.length)) * (sliderWidthRef.current.offsetWidth / cardData.length)))

    }
   
    console.log((sliderWidthRef.current.offsetWidth / cardData.length) /  (mouseMove.nextPoint - mouseStartRef.current) )
    console.log(Math.ceil((mouseMove.nextPoint - mouseStartRef.current) / (sliderWidthRef.current.offsetWidth / cardData.length)))
  }





  return (
    <>

      <div  ref = {frameWidthRef} style={frameStyle}>
        <div ref={sliderWidthRef} style={sliderStyle}>

          {
            cardData.map((item, index) => (
              < Card key={index}/>
            ))
          }

           
          <div onMouseDown={mouseDownF} onMouseMove ={mouseMoveF} onMouseUp = {mouseUpF} style={coverStyle} >cover</div>     
     
        </div>
     

        <div style={controllersContainerStyle}>
        {
            cardData.map((item, index) => (
              <div onClick={movePointerF} id={`${index}`} key={index} style={index !== -selectedSlide ? pointerStyle : {...pointerStyle, backgroundColor: 'red'}}></div>
            ))
          }
        </div>
          
          <div style={controllersContainerStyle}>
          <i style={{fontSize: '30px', margin: '10px', cursor: 'pointer'}} onClick={moveStartF} className="fa-solid fa-backward-fast"></i>
            <i style={{fontSize: '30px', margin: '10px', cursor: 'pointer'}} onClick={moveLeftF} className="fa-solid fa-caret-left"></i>
            <i style={{fontSize: '30px', margin: '10px', cursor: 'pointer'}} onClick={moveRightF} className="fa-solid fa-caret-right"></i>
            <i style={{fontSize: '30px', margin: '10px', cursor: 'pointer'}} onClick={moveEndF} className="fa-solid fa-forward-fast"></i>
          </div>

      </div>
    </>
  )
}

export default TestSlider