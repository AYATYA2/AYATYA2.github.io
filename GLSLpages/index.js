import 	{CinematicCamera} from './three.js-master/examples/js/cameras/CinematicCamera.js';

window.addEventListener("DOMContentLoaded", init);
	function init(){
		//ここにコード
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	//レンダラーを作る
    const renderer = new THREE.WebGLRenderer({
		//引数にはHTML上のcanvas要素を参照
		canvas: document.querySelector("#myCanvas")
	});
	//レンダラーのサイズを設定
    renderer.setSize(WIDTH, HEIGHT);
	//ピクセルの比率を設定
	renderer.setPixelRatio(window.devicePixelRatio);
  	//シーンを作成　
  	const scene =new THREE.Scene();  
	 //カメラを作成
	 const camera=new CinematicCamera(
		45,//画角
		800/600,//アスペクト比
		1,//描画開始距離
		10000//描画終了距離
	 ); 
	 camera.position.set(0, 0, +1000);
	 //カメラをシーンに追加
	 scene.add(camera);
	 //立方体 のジオメトリ
	 // new THREE.BoxGeometry(幅, 高さ, 奥行き)
	const geometry = new THREE.BoxGeometry(50, 50, 50);
	//マテリアルを作成
	const material=new THREE.MeshStandardMaterial(
		//マテリアルの色を設定
		//{color:0x0000ff}
	);
	const group =new THREE.Group();
	scene.add(group);
	for(let i=0;i<100;i++){
		//ジオメトリとマテリアルからメッシュを作成
		const box =new THREE.Mesh(geometry,material);
		box.position.x=(Math.random()-0.5)*1000;
		box.position.y=(Math.random()-0.5)*1000;
		box.position.z=(Math.random()-0.5)*1000;
		box.rotation.x=Math.random()*2*Math.PI;
		box.rotation.y=Math.random()*2*Math.PI;
		box.rotation.z=Math.random()*2*Math.PI;
		//sceneにメッシュを追加
		group.add(box);
	}
	//ライトを作成　引数　色　平行光源
	const light =new THREE.DirectionalLight(0xff0000);
	//ライトの強さ
	light.intensity = 2;
	//ライトの位置を設定
	light.position.set(1,1,1);
	//ライトを追加
	scene.add(light);
	scene.add(new THREE.AmbientLight(0x00ffff));//環境光源
	//フォグを追加 .Fog(色、開始距離、終点距離)
	scene.fog=new THREE.Fog(0x000000,50,2000);
	//scene.bokehpass=new THREE.BokehPass();
	tick();
	function tick(){
		requestAnimationFrame(tick);
		renderer.render(scene,camera);
	}	
	//レンダリング
	renderer.render(scene,camera);
	}
