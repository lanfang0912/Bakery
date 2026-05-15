// Shared course data & utilities
const COLORS = [
  { id:'orange',  hex:'#d4813e', bg:'#fdf0e3' },
  { id:'red',     hex:'#e05c5c', bg:'#fdeaea' },
  { id:'green',   hex:'#5c9e6e', bg:'#e8f5ed' },
  { id:'blue',    hex:'#5c7db5', bg:'#eaeff8' },
  { id:'purple',  hex:'#8a5cb5', bg:'#f3eaf8' },
  { id:'teal',    hex:'#4aa3a3', bg:'#e5f5f5' },
  { id:'pink',    hex:'#d4607a', bg:'#fbeaee' },
  { id:'indigo',  hex:'#5c6db5', bg:'#eaecf8' },
];

const INITIAL_EVENTS = [
  {id:1,  date:'2026-05-08', start:'10:00', end:'14:30', teacher:'高昱翔師傅',       title:'牧羊人派分享會',                     link:'https://forms.gle/cGicRJjabtRTsFLF8', color:'orange'},
  {id:2,  date:'2026-05-13', start:'09:30', end:'12:30', teacher:'鄭元勳老師',       title:'台灣市場創業小吃',                   link:'https://forms.gle/1T5qbrPXwJXgBaGh7', color:'red'},
  {id:3,  date:'2026-05-13', start:'13:30', end:'16:30', teacher:'鄭元勳老師',       title:'雞肉料理系列',                       link:'https://forms.gle/1T5qbrPXwJXgBaGh7', color:'red'},
  {id:4,  date:'2026-05-20', start:'09:30', end:'12:30', teacher:'邱穎珊老師',       title:'中秋明月酥＆夏日西瓜酥',             link:'https://forms.gle/RczmFEmX3e3Y8Wk67', color:'green'},
  {id:5,  date:'2026-05-20', start:'13:00', end:'16:00', teacher:'邱穎珊老師',       title:'宮廷花藝千層酥',                     link:'https://forms.gle/RczmFEmX3e3Y8Wk67', color:'green'},
  {id:6,  date:'2026-05-23', start:'09:30', end:'12:30', teacher:'江翰澤 卡森老師',  title:'小雞嗶嗶雞蛋仔課程',                 link:'https://forms.gle/HzLKNL9kUrKqK5dg6', color:'blue'},
  {id:7,  date:'2026-05-23', start:'13:30', end:'16:30', teacher:'江翰澤 卡森老師',  title:'舒芙小圓餅課程',                     link:'https://forms.gle/HzLKNL9kUrKqK5dg6', color:'blue'},
  {id:8,  date:'2026-05-26', start:'09:00', end:'12:00', teacher:'羅因生老師',       title:'12兩古早味懷舊大餅',                 link:'https://forms.gle/8Bn511gnfpCLBgqH7', color:'purple'},
  {id:9,  date:'2026-05-26', start:'13:00', end:'16:00', teacher:'羅因生老師',       title:'18度C冰皮月餅',                      link:'https://forms.gle/8Bn511gnfpCLBgqH7', color:'purple'},
  {id:10, date:'2026-05-29', start:'09:30', end:'12:00', teacher:'Edalyn 老師',      title:'新書分享會：顏值蛋糕卷進行式',       link:'https://forms.gle/7hM8CgQuWGqbYoVH7', color:'pink'},
  {id:11, date:'2026-05-29', start:'13:00', end:'15:30', teacher:'Edalyn 老師',      title:'流心奶黃月餅分享會',                 link:'https://forms.gle/7hM8CgQuWGqbYoVH7', color:'pink'},
  {id:12, date:'2026-05-30', start:'10:00', end:'14:30', teacher:'姚吱滋老師',       title:'經典酥餅 × 萬用燒餅皮實作課',        link:'https://forms.gle/xMaRDxKcwgeiWNhW6', color:'teal'},
  {id:13, date:'2026-06-01', start:'09:00', end:'12:30', teacher:'謝岳恩老師',       title:'高顏值螺旋千層酥專修班',             link:'https://forms.gle/LJ9aV7qjkT2ii36v7', color:'orange'},
  {id:14, date:'2026-06-01', start:'13:30', end:'17:00', teacher:'謝岳恩老師',       title:'高顏值乳酪控必修班',                 link:'https://forms.gle/LJ9aV7qjkT2ii36v7', color:'orange'},
  {id:15, date:'2026-06-02', start:'09:30', end:'12:30', teacher:'雙張老師合體',     title:'戚風蛋糕專修班',                     link:'https://forms.gle/RFxLjNTc7jwnL32s5', color:'red'},
  {id:16, date:'2026-06-02', start:'13:30', end:'16:30', teacher:'雙張老師合體',     title:'韓式마들렌 小幽浮瑪德蕾蛋糕',       link:'https://forms.gle/RFxLjNTc7jwnL32s5', color:'red'},
  {id:17, date:'2026-06-06', start:'09:30', end:'12:30', teacher:'超人老師',         title:'炒飯基礎1課程',                      link:'https://forms.gle/nmC6LEibYQantWaG9', color:'green'},
  {id:18, date:'2026-06-06', start:'13:30', end:'16:30', teacher:'超人老師',         title:'進階炒飯課程實作課',                 link:'https://forms.gle/nmC6LEibYQantWaG9', color:'green'},
  {id:19, date:'2026-06-08', start:'09:30', end:'12:30', teacher:'葉子翔老師',       title:'蘿蜜雅盾牌餅乾',                     link:'https://forms.gle/pPMMPdmuJTjxh8V19', color:'blue'},
  {id:20, date:'2026-06-08', start:'13:30', end:'17:00', teacher:'葉子翔老師',       title:'香草蜂蜜蛋糕捲',                     link:'https://forms.gle/pPMMPdmuJTjxh8V19', color:'blue'},
  {id:21, date:'2026-06-15', start:'09:30', end:'14:00', teacher:'陳聖天老師',       title:'眷村麵食館系列二',                   link:'https://forms.gle/GwJFxxhytVG1KKTW6', color:'purple'},
  {id:26, date:'2026-06-15', start:'15:00', end:'17:00', teacher:'陳聖天老師',       title:'獨家快閃班：北京宮廷驢打滾',         link:'https://forms.gle/GwJFxxhytVG1KKTW6', color:'purple'},
  {id:22, date:'2026-06-27', start:'09:30', end:'15:30', teacher:'許粡源老師',       title:'健康意識。無糖無油養身麵包專修。系列1', link:'https://forms.gle/h1dXc2vwKNLYxo8w8', color:'teal'},
  {id:23, date:'2026-06-29', start:'09:00', end:'12:30', teacher:'謝岳恩老師',       title:'蟹式甜燒餅｜千層酥脆專修班',         link:'https://forms.gle/C8r36BSdm3asVsRC7', color:'orange'},
  {id:24, date:'2026-06-29', start:'13:30', end:'16:30', teacher:'謝岳恩老師',       title:'拍手金讚鳳梨酥',                     link:'https://forms.gle/C8r36BSdm3asVsRC7', color:'orange'},
  {id:25, date:'2026-07-04', start:'09:00', end:'12:00', teacher:'陳志峰老師',       title:'北海道乳酪塔',                       link:'https://forms.gle/siGdGj5UD7Hz9KZ67', color:'pink'},
];

const STORAGE_KEY = 'bakery_events_v1';
const WEEKDAYS = ['日','一','二','三','四','五','六'];

function colorById(id) { return COLORS.find(c=>c.id===id) || COLORS[0]; }

function loadEvents() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (!s) return JSON.parse(JSON.stringify(INITIAL_EVENTS));
    const stored = JSON.parse(s);
    const storedIds = new Set(stored.map(e => e.id));
    // Merge any new INITIAL_EVENTS ids that don't exist in stored data yet
    INITIAL_EVENTS.forEach(e => { if (!storedIds.has(e.id)) stored.push({...e}); });
    return stored;
  } catch { return JSON.parse(JSON.stringify(INITIAL_EVENTS)); }
}

function persistEvents(evts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(evts));
}

function formatDate(dateStr) {
  const [y,m,d] = dateStr.split('-').map(Number);
  const dow = WEEKDAYS[new Date(y,m-1,d).getDay()];
  return `${m}/${String(d).padStart(2,'0')} (${dow})`;
}
