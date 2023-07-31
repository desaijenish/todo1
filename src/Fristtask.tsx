import React, { useState } from 'react';
import './App.css';
import { escape } from 'querystring';


function Fristtask() {



//1.--------------------------------------------------------------------------------

  // sum of array elements

  // const array:number[] = [1,2,3,4,5]
  // let b:number = 0

  // array.map( (e)=>{
  //   b=e+e
  // } )

//2.-------------------------------------------------------------------------------

  // find longest word
  // create a typescript function that accepts a sentence or string and returns the logest word in the sentance


//   const  long = (a:string , b:string , c:string ) => {

//     if(a.length > b.length && a.length > c.length){
//      return a
//     }else if(b.length > c.length){
//       return b
//     }else{
//       return c
//     }

//   }

//  console.log(long('hello world','this is a string','string'))

//3,--------------------------------------------------------------------------------

  //find maximum value
  // create a typescript fuction that accepts an array of numbers and returns the maximum value the  array test it with differents array if number

  // const max = (a:number , b:number , c:number):number => {
  //   if(a > b && a > c){
  //     return a
  //   }else if(b > c){
  //     return b
  //   }else{
  //     return c
  //   }

  // }

  // console.log(max(1,10,5))
  
//4.--------------------------------------------------------------------------------


//   class student{
//     name:string
//     rollnumber:number
//     gander:string
//     sub1:number
//     sub2:number
//     sub3:number

//     constructor(mainname:string , rollnumber:number ,gan:string,sub1:number,sub2:number,sub3:number){
//       this.name = mainname
//       this.rollnumber = rollnumber
//       this.gander = gan
//       this.sub1 = sub1
//       this.sub2 = sub2
//       this.sub3 = sub3
//     }

//     task():number{
//       const sum:number = this.sub1+this.sub2+this.sub3
//       return sum/3                                                              
//     }

//   }

//   const student1 = [ 
//     new student('jenish',1,'male',90,91,90),
//     new student('rohit' , 2 , 'male' , 43 , 33 ,43),
//     new student('desai' , 3 , 'male' , 34 ,56,56),
//     new student('df' , 4 , 'female' , 67 ,76, 67),
//     new student('rachhi', 5 ,'female',54,87,65)
//  ]

//  for(let i = 0 ; i<student1.length ; i++){
//   console.log(student1[i].task())
//  }

//5.calculate area of differents

  // circle

  // interface circle{
  //   red:number
  // }

  // const circlearea = (circle:circle):number =>{
  //   return Math.PI * circle.red * circle.red
  // }

  // const redus:circle = {red : 32}
  // console.log(circlearea(redus))


  //trigle

  // interface trigle{
  //   basavalue:number
  //   heightvalue:number
  // }

  // const triagleare = (a:number,b:number)=>{
  //   return a + b / 2
  // }

  // const basavalue = 12
  // const heightvalue = 10

  // console.log(triagleare(basavalue,heightvalue))


  // square

  // class Square {
  //   private sideLength: number;
  
  //   constructor(sideLength: number) {
  //     this.sideLength = sideLength;
  //   }
  
  //   getArea(): number {
  //     return this.sideLength * this.sideLength;
  //   }
  // }
  // const square1 = new Square(5); 


  // console.log("Area of Square 1:", square1.getArea()); 


  // ractagle

  // class ractagle{
  //   private width:number ;
  //   private height:number;
    
  //   constructor(width:number , height:number){
  //     this.width = width
  //     this.height = height
  //   }  

  //   task():number{
  //     return this.width * this.height
  //   }
  // }

  // const ract = new ractagle(10,20)
  
  // console.log(ract.task())

  //--------------------------------------------------------------------------------------

  interface are{
      area():number
      
  }

  class circle implements are{
    are_a:number
   
    constructor(a:number ){
      this.are_a =a
    }
    area(){
      return Math.PI * this.are_a * this.are_a
    }
  }
  const circlearea = new circle(12) 
  console.log(circlearea.area())

  //-------------------------------------------------------------------

  class triagle implements are {
    basevalue:number
    heightvalue:number

    constructor(a:number , b:number){
      this.basevalue = a
      this.heightvalue =b
    }
    area(): number {
      return   this.basevalue + this.heightvalue / 2
    }
  }

  const triagleare = new triagle(21 ,34)

  console.log(triagleare.area())


  //--------------------------------------------------------------------

  class square implements are {
    a:number
    constructor(a:number){
      this.a = a
    }
    area(){
      return this.a*this.a
    }
  }

  const squrearea = new square(5)
  console.log(squrearea.area())

  //----------------------------------------------------------------------

  class ractagle implements are{
    width:number
    height:number

    constructor(a:number , b:number){
      this.width = a
      this.height = b
    }

    area(){
      return this.height * this.width
    }
  }

  const ractaglearea = new ractagle(12,23)
  console.log(ractaglearea.area())



  return (
    <div>
      {/* <h1>{b}</h1> */}
    </div>
  );
}

export default Fristtask;