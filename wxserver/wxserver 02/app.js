const express = require("express");
const pool=require("./pool");
const cors=require("cors");
//引入第三方模块：处理请求
const session=require("express-session");

var app=express();

app.listen(3030);
 app.use(cors({
// 	origin:["http://127.0.0.1:3001","http://localhost:3001"],
	origin:["http://192.168.31.11:3001"],
	credentials:true
 }))
app.use(express.static(__dirname+"/public"));
app.use(session({
	secret:"128位随机字符",//安全字符串
	resave:false,//请求保存
	saveUninitialized:true,//初始化保存
	cookie:{
		maxAge:1000*60*60*24
	}
}));
//首页
app.get("/imglist",(req,res)=>{
	var sliderlist=[
		{id:1,img_url:"http://192.168.31.11:3030/wuzhen/banner/01.jpg"},
		{id:2,img_url:"http://192.168.31.11:3030/wuzhen/banner/02.jpg"},
		{id:3,img_url:"http://192.168.31.11:3030/wuzhen/banner/03.jpg"},
		{id:4,img_url:"http://192.168.31.11:3030/wuzhen/banner/04.jpg"}
    ];
	var navlist=[
	    { id: 1, name: "今日推荐", img_url:"http://192.168.31.11:3030/wuzhen/nav/01.jpg"},
        { id: 2, name: "热门民宿", img_url:"http://192.168.31.11:3030/wuzhen/nav/02.jpg"},
        { id: 3, name: "精品酒店", img_url:"http://192.168.31.11:3030/wuzhen/nav/03.jpg"},
        { id: 4, name: "差旅民宿", img_url:"http://192.168.31.11:3030/wuzhen/nav/04.jpg"}	
	];
	var hotallist=[
		{ id: 1, name: "蔓蔓青萝", img_url: "http://192.168.31.11:3030/wuzhen/hotal/01.png", price: "120.00", count: 1},
		{ id: 2, name: "岁月如歌", img_url: "http://192.168.31.11:3030/wuzhen/hotal/02.png", price: "128.00", count: 1},
		{ id: 3, name: "灯火阑珊", img_url: "http://192.168.31.11:3030/wuzhen/hotal/03.png", price: "138.00", count: 1},
		{ id: 4, name: "古朴雅致", img_url: "http://192.168.31.11:3030/wuzhen/hotal/04.png", price: "146.00", count: 1},
		];
	res.send({sliderlist,navlist,hotallist});
})
//乌镇详情
app.get("/delslist",(req,res)=>{
	var delslist=[
		{id:1,img_url:"http://192.168.31.11:3030/wuzhen/wzdetail/01.jpg"},
		{id:2,img_url:"http://192.168.31.11:3030/wuzhen/wzdetail/02.jpg"},
		{id:3,img_url:"http://192.168.31.11:3030/wuzhen/wzdetail/03.jpg"},
		{id:4,img_url:"http://192.168.31.11:3030/wuzhen/wzdetail/04.jpg"}
    ];
	var scrollImg=[	
		{id:1,img_url:"http://192.168.31.11:3030/wuzhen/more/01.jpg"},
		{id:2,img_url:"http://192.168.31.11:3030/wuzhen/more/02.jpg"},
		{id:3,img_url:"http://192.168.31.11:3030/wuzhen/more/03.jpg"},
		{id:4,img_url:"http://192.168.31.11:3030/wuzhen/more/04.jpg"},
		{id:5,img_url:"http://192.168.31.11:3030/wuzhen/more/05.jpg"},
		{id:6,img_url:"http://192.168.31.11:3030/wuzhen/more/06.jpg"},
		{id:7,img_url:"http://192.168.31.11:3030/wuzhen/more/07.jpg"},
		{id:8,img_url:"http://192.168.31.11:3030/wuzhen/more/08.jpg"},
		{id:9,img_url:"http://192.168.31.11:3030/wuzhen/more/09.jpg"},
		{id:10,img_url:"http://192.168.31.11:3030/wuzhen/more/10.jpg"},
	];
	res.send({delslist,scrollImg});
})
//乌镇景点门票
app.get("/scence",(req,res)=>{
	/*var scenceEast=[
		{id:1,img_url:"http://127.0.0.1:3030/wuzhen/scence/1_scence01.jpg"},
		{id:2,img_url:"http://127.0.0.1:3030/wuzhen/scence/1_scence02.jpg"},
		{id:3,img_url:"http://127.0.0.1:3030/wuzhen/scence/1_scence03.jpg"},
		{id:4,img_url:"http://127.0.0.1:3030/wuzhen/scence/1_scence04.jpg"},
		{id:5,img_url:"http://127.0.0.1:3030/wuzhen/scence/1_scence05.jpg"}
	];
	var scenceWest=[
		{id:1,img_url:"http://127.0.0.1:3030/wuzhen/scence/2_scence01.jpg"},
		{id:2,img_url:"http://127.0.0.1:3030/wuzhen/scence/2_scence02.jpg"},
		{id:3,img_url:"http://127.0.0.1:3030/wuzhen/scence/2_scence03.jpg"},
		{id:4,img_url:"http://127.0.0.1:3030/wuzhen/scence/2_scence04.jpg"},
		{id:5,img_url:"http://127.0.0.1:3030/wuzhen/scence/2_scence05.jpg"}
	];
	var postcard=[
		{id:1,img_url:"http://127.0.0.1:3030/wuzhen/scence/3_scence01.jpg"},
		{id:2,img_url:"http://127.0.0.1:3030/wuzhen/scence/3_scence02.jpg"},
		{id:3,img_url:"http://127.0.0.1:3030/wuzhen/scence/3_scence03.jpg"},
		{id:4,img_url:"http://127.0.0.1:3030/wuzhen/scence/3_scence04.jpg"},
		{id:5,img_url:"http://127.0.0.1:3030/wuzhen/scence/3_scence05.jpg"}
	];*/
	var all=[
		{id:1,title:"乌镇东栅景区门票",details:"本平台提供代购乌镇东栅景区门票服务，120元/张，有需要者可以提前下单并确定游玩时间，不可更改！",child:[
			{id:1,img_url:"http://192.168.31.11:3030/1_scence01.jpg"},
			{id:2,img_url:"http://192.168.31.11:3030/1_scence02.jpg"},
			{id:3,img_url:"http://192.168.31.11:3030/1_scence03.jpg"},
			{id:4,img_url:"http://192.168.31.11:3030/1_scence04.jpg"},
			{id:5,img_url:"http://192.168.31.11:3030/1_scence05.jpg"}
		]},
		{id:2,title:"乌镇西栅景区门票",details:"本平台提供代购乌镇东栅景区门票服务，150元/张，有需要者可以提前下单并确定游玩时间，不可更改！",child:[
			{id:1,img_url:"http://192.168.31.11:3030/2_scence01.jpg"},
			{id:2,img_url:"http://192.168.31.11:3030/2_scence02.jpg"},
			{id:3,img_url:"http://192.168.31.11:3030/2_scence03.jpg"},
			{id:4,img_url:"http://192.168.31.11:3030/2_scence04.jpg"},
			{id:5,img_url:"http://192.168.31.11:3030/2_scence05.jpg"}
		]},
		{id:3,title:"记一场说走就走的旅行--乌镇明信片",details:"来过就不曾离开--乌镇，记一场说走就走的旅行，明信片数量：30张/套，材质：荷兰白卡纸，尺寸：102mm*142mm（贴足邮资即可邮寄），包装：白卡彩色纸盒，净重：145g/套",child:[
			{id:1,img_url:"http://192.168.31.11:3030/3_scence01.jpg"},
			{id:2,img_url:"http://192.168.31.11:3030/3_scence02.jpg"},
			{id:3,img_url:"http://192.168.31.11:3030/3_scence03.jpg"},
			{id:4,img_url:"http://192.168.31.11:3030/3_scence04.jpg"},
			{id:5,img_url:"http://192.168.31.11:3030/3_scence05.jpg"}
		]},
	]
	res.send(all);
})