$(document).ready(function(){
	$(".index-container").height($(window).height());
	$(window).resize(function(){
		$(".index-container").height($(window).height());
	})
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		loop: false,
		//effect : 'fade',
		noSwiping : true,
		nextButton:'.level .chiose .row .col-xs-6 label',
	});
	$(".start").click(function(){
		mySwiper.slideTo(1, 500, false);
	});

	$(".level .chiose .row .col-xs-6 label").click(function(){	
		event.stopPropagation();					
		$(this).attr("style","background-color:#3498db;");
		$(this).find(".serial").attr("style","color:#3498db;");
	});

	$(".level-four .chiose .row .col-xs-6 label").click(function(){
		var waitting = setTimeout(function(){
			$(".waitting").attr("style","display:none;");
			$(".resulit").removeAttr("style");
		},2850);
	});
});
/*第一题*/
function titleOne(){								
	var tvImg1=document.getElementById("tv-img1");
	var Title1=document.getElementById("title1")
	var Result11=document.getElementById("result11");
	var Result12=document.getElementById("result12");
	var Result13=document.getElementById("result13");
	var Result14=document.getElementById("result14");
	//创建行
	var Title1Array=new Array();
	//创建列
	Title1Array[0]=new Array();
	Title1Array[1]=new Array();
	Title1Array[2]=new Array();
	//列举数据
	Title1Array[0][0]="img/latiao.gif";Title1Array[0][1]="你不小心吃辣条噎到，殊不知既触发了穿越的条件，快决定去哪！";
	Title1Array[0][2]="火影村";Title1Array[0][3]="尸魂界";Title1Array[0][4]="葫芦山";Title1Array[0][5]="数码世界";

	Title1Array[1][0]="img/caihongqiao.gif";
	Title1Array[1][1]="一天你捡到了一根骨骼精奇的树枝，殊不知这居然是世界树的树枝，于是你无意打开了彩虹桥，选择去哪吧少年（少女）哟！";
	Title1Array[1][2]="那美克星";Title1Array[1][3]="黄道十二宫";Title1Array[1][4]="伟大航道";Title1Array[1][5]="春田花花幼稚园";

	Title1Array[2][0]="img/shenlong.gif";
	Title1Array[2][1]="某次夜宵时分，你突发奇想地在深夜饭堂买了七个馒头，并对着夜空中的星大喊：”出来吧神龙！”好吧你中奖了，神龙说由于馒头质量较差，只能满足传送你去一个地方的愿望，你要去哪？";
	Title1Array[2][2]="亚美斯特利斯";Title1Array[2][3]="纽约地下水道";Title1Array[2][4]="湘北高中篮球场";Title1Array[2][5]="大雄房间的抽屉";

	var showContent1=parseInt(Math.random()*3);
	for(var i=0;i<Title1Array.length;i++){
		if (i==showContent1) {
			tvImg1.style.backgroundImage="url("+Title1Array[i][0]+")";	
			Title1.innerHTML=Title1Array[i][1];
			Result11.innerHTML=Title1Array[i][2];
			Result12.innerHTML=Title1Array[i][3];
			Result13.innerHTML=Title1Array[i][4];
			Result14.innerHTML=Title1Array[i][5];
		}
	}
}
/*第二题*/
function titleTwo(){
	var tvImg2=document.getElementById("tv-img2");
	var Title2=document.getElementById("title2")
	var Result21=document.getElementById("result21");
	var Result22=document.getElementById("result22");
	var Result23=document.getElementById("result23");
	var Result24=document.getElementById("result24");
	//创建行
	var Title2Array=new Array();
	//创建列
	Title2Array[0]=new Array();
	Title2Array[1]=new Array();
	Title2Array[2]=new Array();
	//列举数据
	Title2Array[0][0]="img/baishi.gif";Title2Array[0][1]="你重生为人，碰巧福利日抽到一张万能拜师卡，你决定师从……？";
	Title2Array[0][2]="龟仙人";Title2Array[0][3]="安西光义教授";Title2Array[0][4]="智慧女神雅典娜";Title2Array[0][5]="美少女战士";

	Title2Array[1][0]="img/lingdao.gif";
	Title2Array[1][1]="你来到了杂草世界总部工作，你希望跟随哪位领导？";
	Title2Array[1][2]="碇源堂司令";Title2Array[1][3]="唐三藏";Title2Array[1][4]="金·布拉德雷统领";Title2Array[1][5]="白胡子";

	Title2Array[2][0]="img/bishaji.gif";
	Title2Array[2][1]="世界第一武道会开始了，每个人都应该有个必杀技，你决定用种子积分换……？";
	Title2Array[2][2]="龟波气功";Title2Array[2][3]="天马流星拳";Title2Array[2][4]="卍解";Title2Array[2][5]="动感光波";

	var showContent2=parseInt(Math.random()*3);
	for(var i=0;i<Title2Array.length;i++){
		if (i==showContent2) {
			tvImg2.style.backgroundImage="url("+Title2Array[i][0]+")";
			Title2.innerHTML=Title2Array[i][1];
			Result21.innerHTML=Title2Array[i][2];
			Result22.innerHTML=Title2Array[i][3];
			Result23.innerHTML=Title2Array[i][4];
			Result24.innerHTML=Title2Array[i][5];
		}
	}
}

/*第三题*/
function titleThree(){				
	var tvImg3=document.getElementById("tv-img3");
	var Title3=document.getElementById("title3")
	var Result31=document.getElementById("result31");
	var Result32=document.getElementById("result32");
	var Result33=document.getElementById("result33");
	var Result34=document.getElementById("result34");
	//创建行
	var Title3Array=new Array();
	//创建列
	Title3Array[0]=new Array();
	Title3Array[1]=new Array();
	Title3Array[2]=new Array();
	//列举数据
	Title3Array[0][0]="img/shiwu.gif";Title3Array[0][1]="你冒险时候遇到了白雪公主，第一眼就让你惊为天人，于是你决定请她吃点什么";
	Title3Array[0][2]="毒苹果";Title3Array[0][3]="毒奶粉";Title3Array[0][4]="皮鞋凤爪";Title3Array[0][5]="6元麻辣烫";

	Title3Array[1][0]="img/juesai.gif";
	Title3Array[1][1]="你在旅途中无意参加了黑暗料理界决赛，你觉得是时候展现真正的技术了!";
	Title3Array[1][2]="魔幻麻婆豆腐";Title3Array[1][3]="菠菜罐头";Title3Array[1][4]="铜锣烧";Title3Array[1][5]="鸭脖";

	Title3Array[2][0]="img/koman.gif";
	Title3Array[2][1]="风雪交加的夜晚，你在某个别墅遇到了命案，你决定模仿某个大神来破案，你选择……？";
	Title3Array[2][2]="柯南";Title3Array[2][3]="黑猫警长";Title3Array[2][4]="金田一";Title3Array[2][5]="夏洛克·福尔摩斯";

	var showContent3=parseInt(Math.random()*3);
	for(var i=0;i<Title3Array.length;i++){
		if (i==showContent3) {
			tvImg3.style.backgroundImage="url("+Title3Array[i][0]+")";
			Title3.innerHTML=Title3Array[i][1];
			Result31.innerHTML=Title3Array[i][2];
			Result32.innerHTML=Title3Array[i][3];
			Result33.innerHTML=Title3Array[i][4];
			Result34.innerHTML=Title3Array[i][5];
		}
	}
}

/*第四题*/
function titleFour(){	
	var tvImg4=document.getElementById("tv-img4");
	var Title4=document.getElementById("title4")
	var Result41=document.getElementById("result41");
	var Result42=document.getElementById("result42");
	var Result43=document.getElementById("result43");
	var Result44=document.getElementById("result44");
	//创建行
	var Title4Array=new Array();
	//创建列
	Title4Array[0]=new Array();
	Title4Array[1]=new Array();
	Title4Array[2]=new Array();
	//列举数据
	Title4Array[0][0]="img/pikaqiu.gif";Title4Array[0][1]="人生总是需要目标的，难得一次，你想成为什么？";
	Title4Array[0][2]="神奇宝贝大师";Title4Array[0][3]="忍者神龟";Title4Array[0][4]="大力水手";Title4Array[0][5]="国家炼金术师";

	Title4Array[1][0]="img/gaoda.gif";
	Title4Array[1][1]="人总会长大成人的，难得一次，你想成为哪种老司机？";
	Title4Array[1][2]="高达";Title4Array[1][3]="初号机";Title4Array[1][4]="变形金刚";Title4Array[1][5]="AE86";

	Title4Array[2][0]="img/haizewang.gif";
	Title4Array[2][1]="人总是应该拥有梦想的，面对自己的内心，你想展望一个什么未来？";
	Title4Array[2][2]="海贼王";Title4Array[2][3]="游戏王";Title4Array[2][4]="界王";Title4Array[2][5]="奥特之王";

	var showContent4=parseInt(Math.random()*3);
	for(var i=0;i<Title4Array.length;i++){
		if (i==showContent4) {
			tvImg4.style.backgroundImage="url("+Title4Array[i][0]+")";
			Title4.innerHTML=Title4Array[i][1];
			Result41.innerHTML=Title4Array[i][2];
			Result42.innerHTML=Title4Array[i][3];
			Result43.innerHTML=Title4Array[i][4];
			Result44.innerHTML=Title4Array[i][5];
		}
	}
}
/*结果*/
function titleResult(){	
	var tvImgr=document.getElementById("tv-imgr");
	var Titler=document.getElementById("titler")
	var Resultr1=document.getElementById("resultr1");
	var Resultr2=document.getElementById("resultr2");
	var Resultr3=document.getElementById("resultr3");
	var Resultr4=document.getElementById("resultr4");
	var Resultr5=document.getElementById("resultr5");
	var Resultr6=document.getElementById("resultr6");
	var Resultr7=document.getElementById("resultr7");
	var Resultr8=document.getElementById("resultr8");
	var Resultr9=document.getElementById("resultr9");
	var Resultr10=document.getElementById("resultr10");
	//创建行
	var TitlerArray=new Array();
	//创建列
	TitlerArray[0]=new Array();
	TitlerArray[1]=new Array();
	TitlerArray[2]=new Array();
	TitlerArray[3]=new Array();
	TitlerArray[4]=new Array();
	TitlerArray[5]=new Array();
	TitlerArray[6]=new Array();
	TitlerArray[7]=new Array();
	TitlerArray[8]=new Array();
	TitlerArray[9]=new Array();
	//列举数据
	TitlerArray[0][0]="img/r1.jpg";
	TitlerArray[0][1]="孙悟空";
	TitlerArray[0][2]="《龙珠》";
	TitlerArray[0][3]="「我肚子饿了……」";
	TitlerArray[0][4]="<span>龟派气功</span>——由龟仙人所创的绝技，使用时用双手合成花萼状，把花萼手放在腰间，在双手掌心聚出一个光球，然后大喊“龟…派…气…功！”";

	TitlerArray[1][0]="img/r2.jpg";
	TitlerArray[1][1]="星马豪";
	TitlerArray[1][2]="《四驱兄弟》";
	TitlerArray[1][3]="「冲啊，跃动冲锋！」";
	TitlerArray[1][4]="<span>冲啊，跃动冲锋！</span>——跃动炸弹为跃动冲锋龙卷风落地后再次起跳。（每次只要进入比赛状态小豪的奔跑速度总能跟得上时速达到60km/h的四驱车，并且还能声控四驱车加速)";

	TitlerArray[2][0]="img/r3.jpg";
	TitlerArray[2][1]="大空翼";
	TitlerArray[2][2]="《足球小将》";
	TitlerArray[2][3]="「足球是我的朋友！足球是我的梦想！」";
	TitlerArray[2][4]="<span>冲力倒挂金钩</span>——在最重要的时刻主角光环一定爆发，在谁都想不到的情况下一定能一记倒挂金钩超远距离射进龙门，然后震惊全场！";

	TitlerArray[3][0]="img/r4.jpg";
	TitlerArray[3][1]="大娃";
	TitlerArray[3][2]="《葫芦兄弟》";
	TitlerArray[3][3]="「妖精！放了我爷爷！」";
	TitlerArray[3][4]="<span>巨大化</span>——天生神力，无所不能，可以随意变大缩小，可惜有勇无谋。";

	TitlerArray[4][0]="img/r5.jpg";
	TitlerArray[4][1]="小智";
	TitlerArray[4][2]="《神奇宝贝》";
	TitlerArray[4][3]="「就决定是你了！皮卡丘！」";
	TitlerArray[4][4]="<span>去吧精灵球！</span>——训练师需要抛出球击中野生神奇宝贝，才可以确定目标并收复。球在进行“接收”操作时，球会发出红色光包裹神奇宝贝。不同之处在于，收复野生精灵时必须击中它，而收回神奇宝贝时只需要对准并让红光接触神奇宝贝即可。";

	TitlerArray[5][0]="img/r6.jpg";
	TitlerArray[5][1]="月野兔";
	TitlerArray[5][2]="《美少女战士》";
	TitlerArray[5][3]="「我要代表月亮，消灭你！」";
	TitlerArray[5][4]="<span>Moon Tiara Boomerang</span>——变身为水手月亮之后，拿着月之冕，大喊咒语，消灭邪恶的妖魔！";

	TitlerArray[6][0]="img/r7.jpg";
	TitlerArray[6][1]="哆啦A梦";
	TitlerArray[6][2]="《哆啦A梦》";
	TitlerArray[6][3]="「真拿你没办法~」";
	TitlerArray[6][4]="<span>百宝袋</span>——每当有问题出现，掏一掏百宝袋，你就会发现问题解决了。";

	TitlerArray[7][0]="img/r8.jpg";
	TitlerArray[7][1]="野原新之助";
	TitlerArray[7][2]="《蜡笔小新》";
	TitlerArray[7][3]="「动感超人，啊哈哈哈哈」";
	TitlerArray[7][4]="<span>摇屁股</span>——脱下裤子撅起小屁屁跳舞，可是每一次都会被妈妈打。";

	TitlerArray[8][0]="img/r9.jpg";
	TitlerArray[8][1]="奥特曼";
	TitlerArray[8][2]="《奥特曼》";
	TitlerArray[8][3]="「为了维护世界和平」";
	TitlerArray[8][4]="<span>变身</span>——举起神奇的棒子即可在强光过后化身巨人！！每次打完架都会叮咚叮咚！！";

	TitlerArray[9][0]="img/r10.jpg";
	TitlerArray[9][1]="木之本樱";
	TitlerArray[9][2]="《百变小樱》";
	TitlerArray[9][3]="「隐藏着黑暗力量的钥匙啊,在我面前显示你真正的力量！现在以你的主人，小樱之名命令你——封印解除！」";
	TitlerArray[9][4]="<span>库洛牌</span>——封印着法力及生命的神秘卡牌，通过消耗魔力，发挥不同的能力！";

	var showContentr=parseInt(Math.random()*3);
	for(var i=0;i<TitlerArray.length;i++){
		if (i==showContentr) {
			tvImgr.style.backgroundImage="url("+TitlerArray[i][0]+")";
			Titler.innerHTML=TitlerArray[i][1];
			Resultr1.innerHTML=TitlerArray[i][2];
			Resultr2.innerHTML=TitlerArray[i][3];
			Resultr3.innerHTML=TitlerArray[i][4];
		}
	}

	$(".share-btn").click(function(){
		$(".share").removeAttr("style");
	});
	$(".share-bottom .btn").click(function(){
		$(".share").attr("style","display:none;");
	});
}

titleOne();
titleTwo();
titleThree();
titleFour();
titleResult();