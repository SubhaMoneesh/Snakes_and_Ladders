
var x=0;
var o=0;
var start=0;
var i=0;

var lad={1:37,6:13,7:30,14:25,20:41,27:83,35:43,50:66,70:90,77:97,86:93};
var bit={15:5,48:10,45:24,61:18,63:59,73:52,88:67,91:87,94:74,98:79};

// $(".col"+x).html('<img  class="x" src="x.png">');
$(".col"+o).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');

function shuru(){
	$(document).keypress(function(){
	if (start===0){
		$("#level-title").text("Player 1's turn");
		start=1;
		begin();
	}
});
}

function begin(){
	$(document).keypress(function(){
		if (i%2==0){
			insx(x);
			i++;
			setTimeout(function(){
				$("#level-title").text("Player 2's turn");
			},1000)
		}
		else{
			inso(o);
			i++;
			setTimeout(function(){
				$("#level-title").text("Player 1's turn");
			},1000)
		}
	});
}

// function ladx(x){
// 	setTimeout(function(){
// 				for (var k in lad){
// 					if(x===k){
// 						$(".col"+lad[k]).html('<img class="x" src="x.jpg">');
// 					}
// 				}
// 			},2000);
// }

// function lado(o){
// 	setTimeout(function(){
// 				for (var k in lad){
// 					if(o===k){
// 						$(".col"+lad[k]).html('<img class="o" src="o.jpg">');
// 					}
// 				}
// 			},2000);
// }

function insx(n){
	$(".dice1").attr("src","");
	$(".ll").text("");
	if (x===o){
		$(".col"+n).html('<img class="o" src="o.jpg">');
	}
	else{
		$(".col"+n).html('');
	}
	var a=Math.floor(Math.random()*6)+1;
		x+=a;
		setTimeout(function(){
			$(".dice").attr("src","dice"+a+".png");
		},150);
		if (x===99 || o===99){
			setTimeout(function(){
				gameover();
			},1000);
		}
		else if (x>99){
			x=x-a;
			if (x===o){
					$(".col"+x).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
				}
				else{
					$(".col"+x).html('<img class="x" src="x.jpg">');
				}
		}
		else{
			setTimeout(function(){
				if (x===o){
					$(".col"+x).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
				}
				else{
					if (x in lad){
						$(".ll").text("climbing the ladder..");
						var audio = new Audio("ding-36029.mp3");
						audio.play();
						$(".col"+x).html('<img class="x" src="x.jpg">');
						setTimeout(function(){
							$(".col"+x).html('');
							x=lad[x];
						$(".col"+x).html('<img class="x" src="x.jpg">');
					},500);
					}
					else if(x in bit){
						$(".ll").text("you've been swallowed!!!");
						var audio = new Audio("surprise-sound-effect-99300.mp3");
						audio.play();
						$(".col"+x).html('<img class="x" src="x.jpg">');
						setTimeout(function(){
							$(".col"+x).html('');
							x=bit[x];
						$(".col"+x).html('<img class="x" src="x.jpg">');
					},500);
					}
					else{
						$(".col"+x).html('<img class="x" src="x.jpg">');
					}
				}
			},1300);
		}
}

function inso(n){
	$(".dice").attr("src","");
	$(".ll").text("");
	if (x===o){
		$(".col"+n).html('<img class="x" src="x.jpg">');
	}
	else{
		$(".col"+n).html('');
	}
	var b=Math.floor(Math.random()*6)+1;
		o+=b;
		setTimeout(function(){
			$(".dice1").attr("src","dice"+b+".png");
		},150);
		if (o===99 || x===99){
			setTimeout(function(){
				gameover();
			},1000);
		}
		else if (o>99){
			o=o-b;
			if (x===o){
					$(".col"+o).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
				}
				else{
					$(".col"+o).html('<img class="o" src="o.jpg">');
				}
		}
		else{
			setTimeout(function(){
				if (x===o){
					$(".col"+o).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
				}
				else{
					if (o in lad){
						$(".ll").text("climbing the ladder..");
						var audio = new Audio("ding-36029.mp3");
						audio.play();
						$(".col"+o).html('<img class="o" src="o.jpg">');
						setTimeout(function(){
							$(".col"+o).html('');
							o=lad[o];
						$(".col"+o).html('<img class="o" src="o.jpg">');
					},500);
					}
					else if(o in bit){
						$(".ll").text("you've been swallowed!!!");
						var audio = new Audio("surprise-sound-effect-99300.mp3");
						audio.play();
						$(".col"+o).html('<img class="o" src="o.jpg">');
						setTimeout(function(){
							$(".col"+o).html('');
							o=bit[o];
						$(".col"+o).html('<img class="o" src="o.jpg">');
					},500);
					}
					else{
						$(".col"+o).html('<img class="o" src="o.jpg">');
					}
				}
			},1300);
		}
}

function gameover(){
	if (x===99){
		var audio = new Audio("windows-error-sound-effect-35894.mp3");
		audio.play();
		$(".ll").text("");
		$("body").addClass("game-over");
      	setTimeout(function () {
        	$("body").removeClass("game-over");
      		}, 300);
		setTimeout(function(){
			$(".col"+o).html('')
			$(".col"+x).html('')
			x=0;
			o=0;
			i=0;
			$(".col"+o).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
			$("#level-title").html("Player 1 Won !! <br>Press Any Key To Start");
		},200);
	}
	else if (o===99){
		var audio = new Audio("windows-error-sound-effect-35894.mp3");
		audio.play();
		$(".ll").text("");
		$("#level-title").text("Player 2 won");
		$("body").addClass("game-over");
      	setTimeout(function () {
        	$("body").removeClass("game-over");
      		}, 300);
		setTimeout(function(){
			$(".col"+o).html('')
			$(".col"+x).html('')
			x=0;
			o=0;
			i=0;
			$(".col"+o).html('<img class="o" src="o.jpg"><img  class="x" src="x.jpg">');
			$("#level-title").html("Player 2 Won !! <br>Press Any Key To Start");
		},200);
	}
}

setTimeout(function(){
	shuru();
},500);