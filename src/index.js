import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import './index.css';
import Background from "./images/2022-01-20_10-16-17_659.png";


//アニメーションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {
    entering: {
      transition: "all 1s ease",
      transform: "translateY(0px) ",
      opacity:1,
    },
    entered: {
      transition: "all 1s ease",
      transform: "translateY(0px) ",
      opacity:1,
    },
    exiting: {
      transition: "all 1s ease",
      transform: "translateY(220px)",
      opacity:0,
    },
    exited: {
      transition: "all 1s ease",
      transform: "translateY(220px)",
      opacity:0,
    },
  };

function Pagetitle ({pagenum}){
    const title=["My Protfolio","My Program","My CG","My Activity"];
    return(<h1>{title[pagenum]}</h1>)
}
       
                
function Pagemovebutton({value,func,func2=function(x){},num}){
    return(<button className='pmb' onClick={
        function(){
            func(num)
            func2(false)
        }
}>{value}</button>)}



function Makepage({pagenum,Prop,func}){
    
     switch (pagenum) {   
        case 0:
            //ホーム
            return(
            <>
            </>
            );
            break;
        case 1:
            //Programページ
            return(
            <> 
            <div className='Openbutton'>
            <button  onClick={function(){
                func(true);
            }}>
                Open
            </button>
            </div>
            <Githubpage inProp={Prop}/>
            <Githubpage inProp={Prop}/>
            <Githubpage inProp={Prop}/>
            <Githubpage inProp={Prop}/>
            
            </>
            );
            break;
        case 2:
            //CGページ
            return(<>
            </>);
            break;
        case 3:
            //活動記録ページ
            return(<>
                </>);    
            break;
        default:
            return(
            <>
            </>
            );
            break;
    }
}

function Githubpage({inProp}){
    return(
        <Transition in={inProp} timeout={2000}>
            {state=>(
                <button className='gitbutton' style={{
                    ...transitionStyle[state]
                }} onClick={function(){
                }}>
                Githubpage
                </button>
            )}
        </Transition>
    );
    
}
function Pagechenge() {
    const [pagenumber,setpagenumber]=useState(0);
    const [Prop,setProp]=useState(false)
    if(document.documentElement.clientWidth*Math.sqrt(2)>document.documentElement.clientHeight){
        //console.log("widepage");
        return(
            <div className='PCpagewide'>
            <div className='widepageleft'></div>
            <div className='widepagecenter'>
            <header>
              <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
              <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
              <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
              <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
            </header>
            <Pagetitle pagenum={pagenumber}/>
            <Makepage pagenum={pagenumber} Prop={Prop} func={setProp} className="pagecontents"/>
            </div>
            <div className='widepageright'></div>
            </div>  
            
            );
    
    }else{
        //console.log("longpage");
        return(
            <div className='PCpagelong'>
            <header>
              <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
              <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
              <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
              <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
            </header>
            <Pagetitle pagenum={pagenumber}/>
            <Makepage pagenum={pagenumber} Prop={Prop} func={setProp} className="pagecontents"/>
         
            </div>  
            
            );
    
    }
}

function Smartphonepage(){
    const [pagenumber,setpagenumber]=useState(0);
    const [Prop,setProp]=useState(false)
    return(
        <div className='Smartphonepage'>
        <header>
          <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
          <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
          <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
          <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
        </header>
        <Pagetitle pagenum={pagenumber}/>
        <Makepage pagenum={pagenumber} Prop={Prop} func={setProp} className="pagecontents"/>
        </div>  
        );
}

function switchBypagesize(){
//画面幅を取得して切り替える
if (window.matchMedia('(max-width: 767px)').matches) {
    //スマホ処理
    ReactDOM.render(
        <Smartphonepage />,
        document.getElementById('root')
    );
} else if (window.matchMedia('(min-width:768px)').matches) {
    //PC処理
    ReactDOM.render(
        <Pagechenge />,
        document.getElementById('root')
    );
}

}

window.onload=switchBypagesize;
window.onresize=switchBypagesize;