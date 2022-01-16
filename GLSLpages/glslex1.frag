precision mediump float;
//uniform vec2  m;       // mouse
uniform float t;       // time
uniform vec2  r;       // resolution screan size
//uniform sampler2D smp; // prev scene
/*
//uniform 外部パラメーターが送られてくる関数
vec3 hsv(float h, float s, float v){
	vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
	return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}
*/
void main(void){
/*	vec2 p = (gl_FragCoord.xy * 2.0 - r) / min(r.x, r.y);
	int j = 0;
	vec2 x = vec2(-0.345, 0.654);
	vec2 y = vec2(t * 0.005, 0.0);
	vec2 z = p;
	for(int i = 0; i < 360; i++){
		j++;
		if(length(z) > 2.0){break;}
		z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + x + y;
	}
	float h = abs(mod(t * 15.0 - float(j), 360.0) / 360.0);
	float f = 0.1 / length(p - m);
	vec4 smpColor = texture2D(smp, gl_FragCoord.xy / min(r.x, r.y));
	if(length(smpColor) > 0.0){
		vec3 tmp = mix(hsv(h, 1.0, 1.0) + f, smpColor.rgb, 0.975);
		gl_FragColor = vec4(tmp, 1.0);
	}else{
		gl_FragColor = vec4(hsv(h, 1.0, 1.0) + f, 1.0);
	}
*/
//	float a = gl_FragCoord.y/512.0; 
//	float r=abs(sin(t)+gl_FragCoord.y/512.0)/2.0;
//	float g=abs(cos(t)+gl_FragCoord.x/512.0)/2.0;
//	float b=(r+g)/2.0;
	
	
/*	vec2 p=(gl_FragCoord.xy * 2.0-r)/min(r.x,r.y);
	vec3 destColor =vec3(0.0);
	for(float i=0.0;i<6.0;i++){
		float j=i+1.0;
		vec2 q=p+vec2(cos(t*j),sin(t*j))*0.5;
		destColor += 0.05/length(q);
	}
*/
/*  vec2 p=(gl_FragCoord.xy * 2.0-r)/min(r.x,r.y);
  vec3 destColor =vec3(0.0);
  if(length(p)<0.6&&length(p)>0.4){
	  destColor =vec3(0.5/length(p));
  	
  }
  */
  
  vec2 p=(gl_FragCoord.xy * 2.0-r)/min(r.x,r.y);
//  float f=0.01/abs(length(p)-0.5);		


//	p += vec2(cos(t),sin(t))*0.5;
//	float l=0.1*abs(sin(t))/length(p);
	
//	gl_FragColor =vec4(vec3(l),1.0);
	vec3 destColor=vec3(1.0,0.3,0.7);
	float f=0.0;
	for(float i=0.0;i<10.0;i++){
		float s=sin(t+i*0.628318)*0.5;
		float c=cos(t+i*0.628318)*0.5;
		f+=0.0025/abs(length(p+vec2(c,s))-0.5);
	}
	

	gl_FragColor =vec4(vec3(destColor*f),1.0);
}