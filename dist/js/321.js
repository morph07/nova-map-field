"use strict";(self.webpackChunkmostafaznv_nova_map_field=self.webpackChunkmostafaznv_nova_map_field||[]).push([[321],{3704:(e,t,r)=>{function n(e,t){let r=e.length-t,n=0;do{for(let r=t;r>0;r--)e[n+t]+=e[n],n++;r-=t}while(r>0)}function o(e,t,r){let n=0,o=e.length;const i=o/r;for(;o>t;){for(let r=t;r>0;--r)e[n+t]+=e[n],++n;o-=t}const a=e.slice();for(let t=0;t<i;++t)for(let n=0;n<r;++n)e[r*t+n]=a[(r-n-1)*i+t]}r.d(t,{Z:()=>i});class i{async decode(e,t){const r=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,r,i,a,l){if(!t||1===t)return e;for(let e=0;e<a.length;++e){if(a[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(a[e]!==a[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const s=a[0]/8,c=2===l?1:a.length;for(let l=0;l<i&&!(l*c*r*s>=e.byteLength);++l){let i;if(2===t){switch(a[0]){case 8:i=new Uint8Array(e,l*c*r*s,c*r*s);break;case 16:i=new Uint16Array(e,l*c*r*s,c*r*s/2);break;case 32:i=new Uint32Array(e,l*c*r*s,c*r*s/4);break;default:throw new Error(`Predictor 2 not allowed with ${a[0]} bits per sample.`)}n(i,c)}else 3===t&&(i=new Uint8Array(e,l*c*r*s,c*r*s),o(i,c,s))}return e}(r,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return r}}},3321:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(3704);class o extends n.Z{decodeBlock(e){return e}}}}]);