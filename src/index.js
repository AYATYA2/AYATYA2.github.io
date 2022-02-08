import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { ReactMediaRecorder } from 'react-media-recorder'
import './index.css';
import Background from "./images/2022-01-20_10-16-17_659.png";
import gittab from "./images/gittab.png";
import antgittab from "./images/antmemorytag.png";
import palnetstag from "./images/planetstag.png";
import cgtitle from "./images/movietitle.png";
import unyounyo from "./movies/1910697.mp4";
//アニメーションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {
    entered: {
        transition: "all 1s ease",
        transform: "translateY(0px) ",
        opacity:1,
      },
    entering: {
      transition: "all 1s ease",
      transform: "translateY(220px) ",
      opacity:0,
    },
  
    exiting: {
      //transition: "all 1s ease",
      transform: "translateY(220px)",
      opacity:0,
    },
    exited: {
      //transition: "all 1s ease",
      transform: "translateY(220px)",
      opacity:0,
    },
  };
  const titletransitionStyle = {
    entering: {
      transition: "all 1s ease",
      transform: "translateX(50vw) ",
      opacity:0,
    },
    entered: {
      transition: "all 1s ease",
      transform: "translateX(0vw) ",
      opacity:1,
    },
    exiting: {
      //transition: "all 1s ease",
      transform: "translateX(50vw)",
      opacity:0,
    },
    exited: {
      //transition: "all 1s ease",
      transform: "translateX(50vw)",
      opacity:0,
    },
  };
//ページ遷移アニメーション用
  const pagechengetransitionStyle = {
    entering: {
      transition: "all 1s ease",
      transform: "translateX(-200%) ",
      opacity:1,
    },
    entered: {
      transition: "all 1s ease",
      transform: "translateX(-200%) ",
      opacity:1,
    },
    exiting: {
      //transition: "all 1s ease",
      transform: "translateX(100%)",
      width:0 ,
      opacity:0,
      
    },
    exited: {
      //transition: "all 1s ease",
      transform: "translateX(100%)",
      
      opacity:1,
    },
  };

function Pagetitle ({pagenum,Prop}){
    const title=["My Protfolio","My Program","My CG","My Activity","My Illustration"];
    return(
        <Transition in={Prop} timeout={1500}>
            {state=>(
            <h1 style={
                    titletransitionStyle[state]
                }>{title[pagenum]}</h1>)}
        </Transition>
    );
}      
    
function Pagemovebutton({value,func,func2,num}){
    return(<button className='pmb' onClick={
        function(){
            func(num)
            func2(false)
        }
}>{value}</button>)}


//ページ遷移アニメーション
function Pagechengeanimation({prop,func}){

        //ページ遷移コールバック
    const Pagechengecallback={
        onExited:function(){
            setTimeout(func(true),1000);
            //console.log(true);
        },
        //OnExit:()=>func(true),
        //OnExiting:()=>func(true),
    };
    return(
        <Transition in={prop} timeout={{enter:1000,exit:1,}} {...Pagechengecallback} >
            {state=>(
                <div > 
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' ></div> 
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n02"></div> 
            <div  style={
               pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n03"></div>
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n04"></div>
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n05"></div>   
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n06"></div> 
            <div  style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n07"></div> 
            <div style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n08"></div> 
            <div style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n09"></div> 
            <div style={
                pagechengetransitionStyle[state]
            } className='pagechengeanimation' id="n10"></div>
            </div>)}
        </Transition> 
    );
}

function Makepage({pagenum,Prop,func}){
 
     switch (pagenum) {   
        case 0:
            //ホーム
            return(
                <div className='home'>
                <footer>
                    連絡先
                </footer>
                </div>
            );
            break;
        case 1:
            //Programページ
            return(
            <div className='myprogram'> 
          
            <Githubpage inProp={Prop} tab={"anttab"} url={'https://github.com/MediaPrograming/AntSimulation'}/>
            <Githubpage inProp={Prop} tab={"planetstab"} url={'https://github.com/AYATYA2/planets-in-room'}/>
            <Githubpage inProp={Prop} tab={"gittab"} url={'https://www.google.com'}/>
            <Githubpage inProp={Prop} tab={"gittab"} url={'https://www.google.com'}/>
            
            </div>
            );
            break;
        case 2:
            //CGページ
            return(
            <div className='mycg'>

            <CGcontents inProp={Prop} url={unyounyo}/>
            
            </div>);
            break;
        case 4:
                //イラストページ
                return(
                <div className='myillustration'>
                <CGimgcontents inProp={Prop} url={gittab}/>
    
                </div>);
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
function Githubpage({inProp,tab,url}){
    return(
        <Transition in={inProp} timeout={1500}>
            {state=>
                (<div className='gitbutton' id={tab} style={
                    transitionStyle[state]
                } onClick={()=>{
                    window.open(url,'_blank')
                     
                }
                }>
                    Githubpage
                  
                </div>
                )}
        </Transition>
    );
    
}


function CGcontents({inProp,url}){
    return(
        <Transition in={inProp} timeout={1500}>
            {state=>
                (
                    <ReactMediaRecorder 
                    video
                    render={({status,startRecording,stopRecording})=>(
                    <div className='cgcontents'style={
                    transitionStyle[state]
                    }>
                        <video src={url} controls className='movie'/>
                    </div>
                    )}
                    />
                )}
        </Transition>    
    );
}
function CGimgcontents({inProp,url}){
    return(
        <Transition in={inProp} timeout={1500}>
            {state=>
                (
                    <div className='cgimgcontents' style={
                        transitionStyle[state]
                    }>
                   <img src={url} className='cg'></img> 
                   </div>
                )}
        </Transition>    
    );
}
function Pagechenge() {
    const [pagenumber,setpagenumber]=useState(0);
    const [Prop,setProp]=useState(true);

 
    
    if(document.documentElement.clientWidth*Math.sqrt(2)>document.documentElement.clientHeight){
        //console.log("widepage");
        return(
            <div >
            <Pagechengeanimation prop={Prop} func={setProp}></Pagechengeanimation>
            <div className='PCpagewide' >
            <div className='widepageleft'></div>
            <div className='widepagecenter' id={"page"+pagenumber}>
            <header>
              <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
              <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
              <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
              <Pagemovebutton value={"イラスト"} func={setpagenumber} func2={setProp} num={4}/>
              <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
            </header>
            <Pagetitle pagenum={pagenumber} Prop={Prop}/>
            <Makepage pagenum={pagenumber} Prop={Prop} func={setProp} className="pagecontents"/>
            </div>
            <div className='widepageright'></div>
            </div>  
            </div>
            );
    
    }else{
        //console.log("longpage");
        return(
            <div className='PCpagelong' id={"page"+pagenumber}>
            <Pagechengeanimation prop={Prop} func={setProp}></Pagechengeanimation>
            <header>
              <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
              <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
              <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
              <Pagemovebutton value={"イラスト"} func={setpagenumber} func2={setProp} num={4}/>
              <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
            </header>
            <Pagetitle pagenum={pagenumber} Prop={Prop}/>
            <Makepage pagenum={pagenumber} Prop={Prop} func={setProp} className="pagecontents"/>
         
            </div>  
            
            );
    
    }
}

function Smartphonepage(){
    const [pagenumber,setpagenumber]=useState(0);
    const [Prop,setProp]=useState(true);
    
    //<Pagechengeanimation prop={Prop}></Pagechengeanimation>
    return(
        <div className='Smartphonepage' id={"page"+pagenumber}>
        <Pagechengeanimation prop={Prop} func={setProp}></Pagechengeanimation>
        <header>
          <Pagemovebutton value={"Top"} func={setpagenumber} func2={setProp} num={0}/>
          <Pagemovebutton value={"Programing"} func={setpagenumber} func2={setProp} num={1}/>
          <Pagemovebutton value={"CG"} func={setpagenumber} func2={setProp} num={2}/>
          <Pagemovebutton value={"イラスト"} func={setpagenumber} func2={setProp} num={4}/>
          <Pagemovebutton value={"Activity"} func={setpagenumber} func2={setProp} num={3}/>
        </header>
        <Pagetitle pagenum={pagenumber} Prop={Prop}/>
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