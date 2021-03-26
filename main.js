$(function () {
	let $taskInput = $("#taskInput");
	let $tasksList = $("#tasksList");
	let $notification = $("#notification");
	let cout = 0;

	let displayNotification = function() {
		if (!$tasksList.children().length) {
			$notification.fadeIn("fast");
		} else{
			$notification.css("display", "none")
		}
	}

	$("#taskAdd").on("click" , function() {
		if(!$taskInput.val()) {return false;}

		$tasksList.append("<li id='doneID'>" + $taskInput.val() + "<button type='button' class='done' onclick='actionDone()'>сделано</button><button class='delete'>&#10006</button></li>");
		
		$taskInput.val("");
		
		displayNotification();
		
		$(".delete").on("click", function() {
			let $parent = $(this).parent();
			
			$parent.css("animation" ,"fadeOut .3s linear" );

			
			setTimeout(function() {
				$parent.remove();
				displayNotification();		
			}, 295);
		})
		$(".done").on("click", function() {
			let $parent = $(this).parent();
			if(cout===0){
				$parent.css("opacity" ,"0.5" );
				cout = 1;
			}else {
				$parent.css("opacity" ,"1" );
				cout = 0;
			}
		})
	})
})
