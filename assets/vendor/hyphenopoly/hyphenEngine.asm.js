/*
 hyphenEngine.asm.js 3.3.0 - client side hyphenation for webbrowsers
 �2019  Mathias Nater, Z�rich (mathiasnater at gmail dot com)
 https://github.com/mnater/Hyphenopoly

 Released under the MIT license
 http://mnater.github.io/Hyphenopoly/LICENSE
*/
function asmHyphenEngine(p,h,n){function y(c,k){c|=0;k|=0;var e;for(e=(B(c|0,40503)&255)<<1|0;0!=(l[e>>1]|0);)e=e+2|0;l[e>>1]=c;f[(e>>1)+512|0]=k}function C(c){c|=0;var k;if(0!=(c|0)){for(k=(B(c|0,40503)&255)<<1|0;(l[k>>1]|0)!=(c|0);)if(k=k+2|0,512<=(k|0))return 255;return f[(k>>1)+512|0]|0}return 255}"use asm";var f=new p.Uint8Array(n),l=new p.Uint16Array(n),t=new p.Int32Array(n),B=p.Math.imul,D=h.to|0,z=h.po|0,G=h.pl|0,H=h.vs|0,A=h.pt|0,r=h.wo|0,E=h.tw|0,q=h.hp|0,u=h.hw|0;return{convert:function(){var c,
k=0,e=0,a,b,w=0,m,d,h=0,F=0;var p=(l[D>>1]<<1)+1<<2;var v=b=a=A;var q=d=m=H;var x=0;var g=D+2|0;for(c=12;(g|0)<(z|0);){var n=l[g>>1]|0;var r=l[g+2>>1]|0;var u=C(r)|0;255==(u|0)?(y(n,c),0!=(r|0)&&y(r,c),c=c+1|0):y(n,u);l[768+(x<<1)>>1]=n;x=x+1|0;g=g+4|0}for(g=z|0;(g|0)<(z+G|0);)if(0==(f[g|0]|0))k=f[g+1|0]|0,g=g+2|0;else{255==(f[g|0]|0)&&(h=f[g+1|0]|0,F=f[g+2|0]|0,g=g+3|0);for(;(e|0)<(k|0);)0==(e|0)?c=h:1==(e|0)?c=F:(c=f[g|0]|0,g=g+1|0),11<(c|0)?(d=d+1|0,-1==(a|0)&&(a=b=b+p|0,t[v+w>>2]=a),w=(c-12|0)<<
3,v=a,a=t[v+w>>2]|0,0==(a|0)&&(a=t[v+w>>2]=-1)):(f[d|0]=c|0,q=d),e=e+1|0;f[q+1|0]=255;t[v+w+4>>2]=m|0;d=m=q+2|0;e=0;a=v=A}return x|0},hyphenate:function(c,k){c|=0;k|=0;var e=0,a,b=0,h;for(a=l[r>>1]|0;0!=(a|0);){f[q+b|0]=0;a=C(a|0)|0;if(255==(a|0))return 0;a=a-12|0;f[E+b|0]=a|0;b=b+1|0;a=l[r+(b<<1)>>1]|0}f[q+b|0]=0;for(a=b;(e|0)<(a|0);){var m=A;for(b=e|0;(b|0)<(a|0);){var d=f[E+b|0]<<3;var n=t[m+d>>2]|0;m=t[m+d+4>>2]|0;if(0<(m|0))for(d=0,h=f[m|0]|0;255!=(h|0);){var p=q+e+d|0;(h|0)>(f[p|0]|0)&&(f[p|
0]=h|0);d=d+1|0;h=f[m+d|0]|0}if(0<(n|0))m=n|0;else break;b=b+1|0}e=e+1|0}b=1;d=0;for(a=a-2|0;(b|0)<=(a|0);)l[u+(b<<1)+d>>1]=l[r+(b<<1)>>1]|0,((b|0)>=(c|0)|0)&((b|0)<=(a-k|0)|0)&&f[q+b+1|0]&1&&(l[u+(b<<1)+d+2>>1]=173,d=d+2|0),b=b+1|0;l[u>>1]=a+(d>>1)|0;return 1}}};