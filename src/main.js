import { lunbotu } from "./lunbotu.js";
import { tab } from "./tabs.js";
import App from './app.vue'
lunbotu()
tab()
App()
import './styles/index.css'
import './styles/index.less'
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
const png=document.createElement('img')
const gif=document.createElement('img')
gif.src=gifSrc
png.src=pngSrc
document.body.appendChild(gif)
document.body.appendChild(png)
import './assets/fonts/iconfont.css'
const fn=()=>{
    console.log('你好');
}
console.log(fn);