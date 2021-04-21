var vm = new Vue({
	el:".vue",
	data:{
		query:"",
		musicList:[],
		musicUrl:"",
		musicName:"Music Name",
		musicAuthorName:"Author",
		musicCover:"",
		classPlayKey:{
			iconfont:true,
			"icon-icon_play":true,
			"icon-zanting":false,
			classMiddle:true,
		},
		musicCoverRotate:{
			musicCover:true,
			rotate:false
		}
	},
	methods:{
		clickSearch(){
			console.log(this.query);
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords="+this.query)
			.then(function(response){
				//返回搜索到的内容数组
				that.musicList = response.data.result.songs;
				console.log(response);
			});
		},
		selectMusic(musicId, name, author){
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id="+musicId)
			.then(function(response){
				console.log(response);
				that.musicAuthorName = "";
				that.musicUrl = response.data.data[0].url;
				//拿到点击音乐的歌曲名
				that.musicName = name;
				//遍历作者名，因为有的作者是两个或多个人创作的
				author.forEach( function( item, index){
					that.musicAuthorName = that.musicAuthorName + item.name + " ";
					console.log(that.musicAuthorName);
				});
			},function(err){
				console.log(err);
			});
			//获取歌曲封面地址
			axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
			.then(function(response){
				console.log(response.data.songs[0].al.picUrl);
				that.musicCover = response.data.songs[0].al.picUrl;
			},function(err){
				console.log(err);
			});
			//获取评论 http://autumnfish.cn/comment/hot?type=0&id=(musicId)
		},
		//播放按键方法
		musicPlay(){
			var audioId = document.getElementById('music');
				if ( audioId.paused ){
					audioId.play();
				}else{
					audioId.pause();
				}
		},
		//音频监听
		pause(){
			this.musicCoverRotate.rotate = false;
			this.classPlayKey['icon-icon_play'] = true;
			this.classPlayKey['icon-zanting'] = false;
		},
		play(){
			this.musicCoverRotate.rotate = true;
			this.classPlayKey['icon-zanting'] = true;
			this.classPlayKey['icon-icon_play'] = false;
		}
	}
})