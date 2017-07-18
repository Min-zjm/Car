//head
$(function(){
	$(document).scroll(function(){               // document
		var show=$(document).scrollTop()        //  document
//		console.log(show);
		if(show>=142){
			$('.header .header-bottom').css({
				  position:'fixed',             //#####
				  zIndex:999 ,                 //#####
				  background:'rgba(0, 0, 0, 0.5)',
				  top:'-50px'
			})
		$('.header .header-bottom').fadeIn()   //#####
		
		}else if(show<142){
			  $('.header .header-bottom').css({
			  	  position:'static',         //#####
			  	  zIndex:999,               //#####
				  background:'#000',
				  top:0
				 
			  })
			}
			
		
	})
})
//banner
$(function(){
    var imgs=['../../img/car15.jpg','../../img/car10.jpg','../../img/car17.jpg']
    var index=0;         //***********
    function change(n){
    	if(n==0){
    		index--
    		 if(index<0){
    		 	index=2
    		 }
    	}else{
    	    index++;
    	    if(index>2){
    	    	index=0
    	    }
    	}
    	$('.banner').css({
    		  background:"url("+imgs[index]+") no-repeat", //********
    		  backgroundSize:'100% 109%',
    	})
    	$('.banner').fadeIn()
    }
    var time=setInterval(change,2000);
    function start(){
    	 setInterval(change,2000);
    }
    function stop(){
    	 clearInterval(time)
    }
    $('.banner .banner-leftImg').click(function(){
             change(0)
           
    })
    $('.banner .banner-rightImg').click(function(){
    	    change(1)
    })
//  $('.banner').hover(function(){
//  	$('.banner').stop()
//  	stop()
//  	    
//  },function(){
//  	$('.banner').stop()
//  	start()
//  })
//  $('.banner').hover(function(){
//  	$('.banner').stop()
//  	stop()
//  	    
//  },function(){
//  	$('.banner').stop()
//  	start()
//  })

})

//vehicle
$(function(){
	  $('.vehicle .vehicle-top .vehicle-top1 .grayCar2').find('li').hover(function(){
	  	   $(this).css({
	  	   	   color:'purple'
	  	   })
	  },function(){
	  	   $(this).css({
	  	   	   color:'#a9a9a9'
	  	   })
	  })
	  $('.vehicle .vehicle-top .vehicle-top1 .grayCar3').find('li').hover(function(){
	  	   $(this).addClass('active')
	  },function(){
	  	   $(this).siblings().removeClass('active')
	  })
	  
	  $('.vehicle .vehicle-top .vehicle-top1 .price #range #rangeLeft').mousemove(function(e){
	        var box=document.getElementById('#range');
	   	    var a=document.getElementById('#rangeLeft');
		 	   a.addEventListener('mousedown',start);    //鼠标按下
		 	   a.addEventListener('mouseup',stop);      //鼠标-抬起
		 	   function start(e){
		 	   	  if(e.button==0){                     //鼠标左键-0=e.button
		 	   	  	//console.log(e.button)
		 	   	  	  document.addEventListener('mousemove',move);//添加鼠标-移动事件
		 	   	  	  
		 	   	  }
		 	   }
		 	   function stop(e){
		 	   	   if(e.button==0){    // 那个键的位置
		 	   	   	 document.removeEventListener('mousemove',move); //去除鼠标-移动事件
		 	   	   	
		 	   	   }
		 	   }
			   function move(e){
			 		 var x=e.clientX;   //获取鼠标的x坐标
			 		 var w=rangeLeft.offsetWidth;     
			 		  a.style.left=x-w+"px";            
			   } 
	  })
	  
	 
	  
//	    var box = document.getElementsByClassName('box')[0];        
//      var title = document.getElementsByClassName('title')[0];        
//      //0.声明一个开关变量        
//      var off = 0;        
//      //0.1声明一个变量一保存鼠标与盒子之间的距离        
//      var cur = {};        
//      //1.给标题添加鼠标按下事件        
//      title.onmousedown = function(e){                            
//          off = 1;
//          //1.1 计算鼠标位置-盒子到页面的位置，得到一个差，永远不变
//          cur.x = e.clientX-box.offsetLeft;
//          cur.y = e.clientY-box.offsetTop;            
//      }        
//      //2.添加鼠标移动事件        
//      document.onmousemove = function(e){            
//          //2.1判断按下的开关状态  如果是真再运行            
//          if(!off) return;
//          var left = e.clientX - cur.x;            
//          var tops = e.clientY - cur.y;
//          //限制box不超出浏览器
//          left = left<0?0:left;
//          tops = tops<0?0:tops;
//          left = left >= window.innerWidth-400 ? window.innerWidth-400 : left;
//          tops = tops >= window.innerHeight-300 ? window.innerHeight-300 : tops;
//          
//          box.style.left = left+'px';
//          box.style.top = tops+'px';            
//      }        
//      //3.添加鼠标抬起事件
//      title.onmouseup = title.onmouseout= function(){            
//          console.log('鼠标抬起');            
//          off = 0;            
//      }            
})

//.featured
$(function(){
	   var index=0;
	   var length=2;
	    
	   function left(){
	   	    var first= $(".featured .carChoose .carPrice").eq(0)//
	   	    
	   	    $(".featured .carChoose").append(first)
	   	    $('.featured .carChoose .carPrice').eq(index).animate({
	   	         left:0,         //left:0 
	        })
	   	    $('.featured .carChoose .carPrice').eq(index).css({
	   	         left:-1100         // left:-1100,
	        },1000)
	   	     
	   }
	   function right(){
	        var last= $(".featured .carChoose .carPrice").eq(2)//
		    $(".featured .carChoose").prepend(last) //(开头添加 最后一个)
		    $(".featured .carChoose").css({
		    	left:-500
		    })
		    $(".featured .carChoose").animate({
		     	left:0
		    },500)
      
	   }
        
	    
	    $('.featured .btn .btn-left').click(function(){
    	     index--;
	   	     if(index<0){
	   	     	index=2;
	   	     }
	   	     left()
	   	     console.log(index)
        })
      
	    $('.featured .btn .btn-right').click(function(){
    	     index++;
	   	     if(index==3){
	   	     	index=0;
	   	     }
	   	     right()
        })
	   
//	   $('.featured .carChoose').find('ul').eq(0).css({left:0});
//	   var car=$('.featured .carChoose');
//	   var timeout=1000;
//	   function rights(){
//	   	     index++;
//	   	     if(index==3){
//	   	     	index=0;
//	   	     }
//	   }
//	   var premium=car.find('ul');
//	   var first=premium.first();
//		   car.append(first);
//		   first.stop().css('left',-500);
//		   first.stop().animate({
//		   	left:0
//		   },timeout);
//	   function lefts(){
//	   	  index--;
//	   	  if(index<0){
//	   	  	  index=length
//	   	  }
//	   	  var preminu=car.find('.preminu');
//	   	  var last=premium.last();
//	   	  last.stop().animate({left:-500},timeout,function(){
//	   	  	last.css('left',0)
//	   	  	car.prepend(last);
//	   	  })
//	   }
//	  
//	   var lock=false;
//	   $('.featured .btn .btn-left').click(function(){
//	        if(!lock){
//	        	lefts();
//	        	lock=true;
//	        	setTimeout(function(){
//	        		lock=false;
//	        	},timeout);
//	        }
//
//	   })
//	   $('.featured .btn .btn-right').click(function(){
//	   	      if(!lock){
//	        	rights();
//	        	lock=true;
//	        	setTimeout(function(){
//	        		lock=false;
//	        	},timeout);
//	        }
//     })


	   
	 
})
//welcome
$(function(){
	var index=0;
	var img=['img/Ellipse1.png','img/Composite Path2.png','img/Composite Path3.png','img/Composite Path4.png'];
	$('.welcome .welcome-right .welcome-leftImg li .imghover0').hover(function(){
		 $(this).attr('src','img/Ellipse1.png')
	},function(){
		// $(this).eq(index).attr('src',+'img(index)'+)
	})
})
//auto
$(function(){
	$('.auto .carKnowledge li .readMore').hover(function(){
		  $(this).css({
		  	   background:'#d8572f'
		  })
		   $(this).find('.readMore2').css({
		  	   background:'white',
		  	   color:'black'
		  })
	},function(){
		  $(this).css({
		  	   background:'white'
		  })
		   $(this).find('.readMore2').css({
		  	   background:'gray',
		  	   color:'white'
		  })
	})
})
