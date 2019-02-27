var lute;
var luteX = 96;
var luteY = 96;

var previous_indicator;
var pause_indicator;
var next_indicator;
var indicatorX = 24;
var indicatorY = 24;

var buttonX = 216;
var buttonY = 72;
var small_buttonX = 72;
var small_buttonY = 72;

var left_sword_button;
var right_sword_button;

var ll_number_button;
var lr_number_button;
var rl_number_button;
var rr_number_button;

var pause_menu;

var background;
var background_left;
var background_right;

var background_arr = [];

var midground;
var foreground;

var backgroundX = 1920;
var backgroundY = 768;

var exit_level_button;
var main_menu_button;
var close_button;
var play_button;
var stats_button;
var h2p_button;
var settings_button;
var logout_button;
var account_button;

var login_button;

var hint_button;

var level1_indicator;
var level2_indicator;

function createGUI() {

	background = createImage(scene_bg_imgs[current_scene], backgroundX, backgroundY);
	background_left = createImage(scene_bg_imgs[current_scene], backgroundX, backgroundY);
	background_right = createImage(scene_bg_imgs[current_scene], backgroundX, backgroundY);

	switch(current_scene) {

		case 0:

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			left_sword_button = createButton("res/sword-left.png", "Login", buttonX, buttonY, function() {
        var key = document.getElementById('usernameInput').value;
      	if(key in database.users) {
    	    if(database["users"][key]["password"] == document.getElementById('passwordInput').value) {
            document.getElementById('usernameInput').value = "";
            document.getElementById('passwordInput').value = "";
        		// login_error.alpha = 0;
            // var login_error = createTextBlock("0px", "200px", "200px", "600px", "darkred", 30, "normal", "Username and/or Password did not match.\n Please try again.", 0, enable);
        		// message.render = 1;
        		// message.current_user = key;
            changeScene(2);
    	    } else {
            document.getElementById('usernameInput').value = "";
            document.getElementById('passwordInput').value = "";
	          document.getElementById('errorText').textContent = "Invalid password";
        		// password_input.text = "";
        		// login_error.alpha = 1;
    	    }
      	}	else {
          document.getElementById('usernameInput').value = "";
          document.getElementById('passwordInput').value = "";
          document.getElementById('errorText').textContent = "Invalid username";
    	    // login_error.alpha = 1;
      	}
      });
			right_sword_button = createButton("res/sword-right.png", "Signup", buttonX, buttonY, function() {	changeScene(1); });
			secret_button = createButton("res/secret_button.png", "", backgroundX, backgroundY, function() { changeScene(8); });

			break;

		case 1:

    // password_error.text = "Passwords did not match.\n Please try again.";
    // fieldInput_error.text = "Please fill-in\n every field";

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			left_sword_button = createButton("res/sword-left.png", "Create", buttonX, buttonY, function() {
				var key = document.getElementById('usernameInput').value;
				if(key in database.users || key == "") {
					// document.getElementById('firstnameInput').value = "";
					// document.getElementById('lastnameInput').value = "";
					// document.getElementById('usernameInput').value = "";
					// document.getElementById('passwordInput').value = "";
					// document.getElementById('confirmInput').value = "";
					document.getElementById('errorText').textContent = "Invalid username";
				}	else {
					if(document.getElementById('firstnameInput').value == "") {
						document.getElementById('errorText').textContent = "Invalid firstname";
					} else {
						if(document.getElementById('lastnameInput').value == "") {
							document.getElementById('errorText').textContent = "Invalid lastname";
						} else {
							if(document.getElementById('passwordInput').value == "") {
								document.getElementById('errorText').textContent = "Invalid password";
							} else {
								if(document.getElementById('passwordInput').value != document.getElementById('confirmInput').value) {
									document.getElementById('errorText').textContent = "Passwords do not match";
								} else {
					        changeScene(2);
								}
							}
						}
					}
				}
			});
        // if(firstname_input.text == "" || lastname_input.text == "" || username_input.text == "" || password_input.text == "" || re_password_input.text == "") {
        //
      	//     fieldInput_error.alpha = 1;
      	//     firstname_input.text = "";
      	//     lastname_input.text = "";
      	//     username_input.text = "";
      	//     password_input.text = "";
      	//     re_password_input.text = "";
        //
      	// } else {
        //
        //   if(password_input.text != re_password_input.text) {
        //
        // 		password_error.alpha = 1;
        // 		fieldInput_error.alpha = 0;
        // 		password_input.text = "";
        // 		re_password_input.text = "";
        //
        //   } else {
        //
        // 		var key = username_input.text;
        //
        // 		database["stats"][key] = {
        // 		    hits: 0,
        // 		    misses: 0
        // 		};
        //
        // 		database["users"][key] = {
        // 		    firstname: firstname_input.text,
        // 		    lastname: lastname_input.text,
        // 		    password: password_input.text
        // 		};
        //
        // 		firstname_input.text = "";
        // 		lastname_input.text = "";
        // 		username_input.text = "";
        // 		password_input.text = "";
        // 		re_password_input.text = "";
        // 		fieldInput_error.alpha = 0;
        // 		password_error.alpha = ;
        // 		message.current_user = key;
        // 		message.render = 0;
        //
        //   }
      	// }
      // });
			right_sword_button = createButton("res/sword-right.png", "Cancel", buttonX, buttonY, function() {

      	// firstname_input.text = "";
      	// lastname_input.text = "";
      	// username_input.text = "";
      	// password_input.text = "";
      	// re_password_input.text = "";
      	// fieldInput_error.alpha = 0;
      	// password_error.alpha = 0;
      	// message.render = 0;

        changeScene(0);
      });

			break;

		case 2:

			background = createImage("res/menu.png", backgroundX, backgroundY);
			background_left = createImage("res/menu-left.png", backgroundX, backgroundY);
			background_right = createImage("res/menu-right.png", backgroundX, backgroundY);

			play_button = createButton("res/menu-button.png", "Play", buttonX, buttonY, function() { changeScene(8); });
			stats_button = createButton("res/menu-button.png", "Stats", buttonX, buttonY, function() { changeScene(4); });
			h2p_button = createButton("res/menu-button.png", "How To Play", buttonX, buttonY, function() { changeScene(5); });
			settings_button = createButton("res/menu-button.png", "Settings", buttonX, buttonY, function() { changeScene(6); });
			logout_button = createButton("res/menu-button.png", "Logout", buttonX, buttonY, function() { changeScene(0); });
			account_button = createButton("res/menu-button.png", "Account", buttonX, buttonY, function() { changeScene(7); });

			break;

		case 3:

	    pause_menu = createImage("res/hit-target-pause-menu.png", backgroundX, backgroundY);
	    pause_menu.visible = false;

	    close_button = createButton("res/hit-target-pause-close-button.png", "", buttonX, buttonY, function() {
				pauseAnimation(false);
				visibleButton(false);
				visibleForm(true);
	    });

	    close_button.visible = false;

	    main_menu_button = createButton("res/hit-target-pause-button.png", "Main Menu", buttonX, buttonY, function() { changeScene(2);  visibleForm(true);});
	    main_menu_button.visible = false;

	    exit_level_button = createButton("res/hit-target-pause-button.png", "Exit Level", buttonX, buttonY, function() { changeScene(8);  visibleForm(true);});
	    exit_level_button.visible = false;

	    settings_button = createButton("res/hit-target-pause-button.png", "Settings", buttonX, buttonY, function() { changeScene(6);  visibleForm(true);});
	    settings_button.visible = false;

	    login_button = createButton("res/login-button.png", "Pause", buttonX, buttonY, function() {
				pauseAnimation(true);
				visibleButton(true);
				visibleForm(false);
	    });

	    hint_button = createButton("res/hint-button.png", "Hint", small_buttonX, small_buttonY, function() {  changeScene(9); visibleForm(true); });
	    hint_button.visible = false;

			if (stage.canvas.width < 900) {
				ll_number_button = createButton("res/number-button-ll.png", "", backgroundX, 288, function() {
					if(digit > 0)
						digit--;
					if(digit < 0)
						digit = 0;

					console.log(digit);
				});
				lr_number_button = createButton("res/number-button-lr.png", "", backgroundX, 288, function() {
					if(digit < 2)
						digit++;
					if(digit > 2)
						digit = 2;

					console.log(digit);
				});
				rl_number_button = createButton("res/number-button-rl.png", "", backgroundX, 288, function() {
					multiplier -= adder;
					document.getElementById("hundredsPlace").textContent = Math.floor(multiplier/100 % 10);
					document.getElementById("tensPlace").textContent = Math.abs(Math.floor(multiplier/10 % 10));
					document.getElementById("onesPlace").textContent = Math.abs(Math.floor(multiplier % 10));
				});
				rr_number_button = createButton("res/number-button-rr.png", "", backgroundX, 288, function() {
					multiplier += adder;
					document.getElementById("hundredsPlace").textContent = Math.floor(multiplier/100 % 10);
					document.getElementById("tensPlace").textContent = Math.abs(Math.floor(multiplier/10 % 10));
					document.getElementById("onesPlace").textContent = Math.abs(Math.floor(multiplier % 10));
				});
			}

			break;

		case 4:

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { changeScene(2); });

			break;

		case 5:

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { changeScene(2); });

			break;

		case 6:

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

	    login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { oneWayScene(); });

			break;

		case 7:

			foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { changeScene(2); });

			break;

		case 8:

			midground = createImage("res/map.png", backgroundX, backgroundY);

			foreground = createButton("res/map-banner.png", "Select a level", backgroundX, 231, function() {});

			login_button = createButton("res/login-button.png", "Menu", buttonX, buttonY, function() { changeScene(2); });

			level1_indicator = createButton("res/map-indicator.png", "", indicatorX, indicatorY, function() {

        current_level = 1;
        hide_knight = false;
        hide_archer1 = false;
        hide_archer2 = false;
        hide_archer3 = false;
        hide_archer4 = false;
        hit_counter = 0;
        miss_upper_counter = 0;
        miss_lower_counter = 0;
        changeScene(3);

      });

			level2_indicator = createButton("res/map-indicator.png", "", indicatorX, indicatorY, function() {

        current_level = 2;
        hide_knight = false;
        hide_archer1 = false;
        hide_archer2 = false;
        hide_archer3 = false;
        hide_archer4 = false;
        hit_counter = 0;
        miss_upper_counter = 0;
        miss_lower_counter = 0;
        changeScene(3);

      });

			break;

    case 9:

      foreground = createImage("res/login_scroll.png", backgroundX, backgroundY);

	    login_button = createButton("res/login-button.png", "Back", buttonX, buttonY, function() { changeScene(3); pauseAnimation(true); visibleButton(true); visibleForm(false);});

      break;

		default:

	}

	previous_indicator = createImage("res/previous-indicator.png", indicatorX, indicatorY);
    previous_indicator.addEventListener("click", previousSound);
    previous_indicator.visible = false;

	pause_indicator = createImage("res/pause-indicator.png", indicatorX, indicatorY);
    pause_indicator.addEventListener("click", playSound);
    pause_indicator.visible = false;

	next_indicator = createImage("res/next-indicator.png", indicatorX, indicatorY);
    next_indicator.addEventListener("click", nextSound);
    next_indicator.visible = false;

	lute = createImage("res/lute.png", luteX, luteY);
    lute.addEventListener("click", muteSound);
    lute.visible = false;

  // lute.regX = 160;
  // lute.regY = 160;
  // createjs.Tween.get(lute, {loop: false})
  //   .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
  //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
  //   .to({alpha: 0, y: 125}, 100)
  //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
  //   .to({x: 100}, 800, createjs.Ease.getPowInOut(2));

  landscape_warning = new createjs.Shape();

  phone_rotation = createSprite(phone_rotationS, 288, 288);
  stage.removeChild(phone_rotation);

}

function scaleGUI() {

	scale_image(background, 0, 0);
	scale_image(background_left, backgroundX, 0);
	scale_image(background_right, -backgroundX, 0);

	switch(current_scene) {

		case 0:
			scale_image(foreground, 0, 0);
			// scale_image(left_sword_button,-(buttonX/2 + 10) * scene_scale_Y, (buttonY/2 + 140) * scene_scale_Y);
			// scale_image(right_sword_button, (buttonX/2 + 50) * scene_scale_Y, (buttonY/2 + 140) * scene_scale_Y);
      if (stage.canvas.width < 900) {
  			scale_gui2(left_sword_button, (buttonX/2 + 30) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
  			scale_gui2(right_sword_button, -(buttonX/2 + 65) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
      } else {
  			scale_image(left_sword_button, (buttonX/2 + 30) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
  			scale_image(right_sword_button, -(buttonX/2 + 65) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
      }
			scale_image(secret_button, 0, 0);
			break;

		case 1:
			scale_image(foreground, 0, 0);
      // if (stage.canvas.width < 900) {
  		// 	scale_gui(left_sword_button, -(buttonX/2 + 10) * scene_scale_Y, (buttonY/2 + 140) * scene_scale_Y);
  		// 	scale_gui(right_sword_button, (buttonX/2 + 50) * scene_scale_Y, (buttonY/2 + 140) * scene_scale_Y);
      // } else {
  			scale_image(left_sword_button, (buttonX/2 + 30) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
  			scale_image(right_sword_button, -(buttonX/2 + 65) * scene_scale_Y, -(buttonY/2 + 200) * scene_scale_Y);
      // }
			break;

		case 2:
			scale_image(background, 0, 0);
			scale_image(background_left, -(backgroundX) * scene_scale_Y, 0);
			scale_image(background_right, (backgroundX) * scene_scale_Y, 0);
      if (stage.canvas.width < 900) {
  			scale_gui(play_button, 0, 105);
  			scale_gui(stats_button, 0, 20);
  			scale_gui(h2p_button, 0, -65);
  			scale_gui(settings_button, 0, -150);
  			scale_gui(logout_button, -(buttonX/2 + 10), -(buttonY/2 + 10), "left", "top");
  			scale_gui(account_button, (buttonX/2 + 10), -(buttonY/2 + 10), "right", "top");
      } else {
  			scale_gui(play_button, 0, 200 * scene_scale_Y);
  			scale_gui(stats_button, 0, 100 * scene_scale_Y);
  			scale_gui(h2p_button, 0, 0 * scene_scale_Y);
  			scale_gui(settings_button, 0, -100 * scene_scale_Y);
  			scale_gui(logout_button, -(buttonX/2 + 10), -(buttonY/2 + 10), "left", "top");
  			scale_gui(account_button, (buttonX/2 + 10), -(buttonY/2 + 10), "right", "top");
      }
			break;

		case 3:
	    if (stage.canvas.width < 900) {
				scale_image(pause_menu, 0, 0);
				scale_gui(close_button, -412, 350);
				scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "right", "bottom");
        scale_gui(hint_button, stage.canvas.width - (small_buttonX/2 + 116), stage.canvas.height/2 - (small_buttonY/2 + 10));
	    } else {
				scale_image(pause_menu, 0, 0);
				scale_gui(close_button, -517 * scene_scale_Y, 325 * scene_scale_Y);
				scale_gui(main_menu_button, 0, 180 * scene_scale_Y);
				scale_gui(exit_level_button, 0, 110 * scene_scale_Y);
				scale_gui(settings_button, 0, 40 * scene_scale_Y);
        scale_gui(hint_button, 350 * scene_scale_Y, -232 * scene_scale_Y);
				scale_gui(login_button, (buttonX/2 + 10), (buttonY/2 + 10), "right", "bottom");
      }
			if (stage.canvas.width < 900) {
				scale_image(ll_number_button, 0, stage.canvas.height/2 - (288/2) * scene_scale_Y);
				scale_image(lr_number_button, 0, stage.canvas.height/2 - (288/2) * scene_scale_Y);
				scale_image(rl_number_button, 0, stage.canvas.height/2 - (288/2) * scene_scale_Y);
				scale_image(rr_number_button, 0, stage.canvas.height/2 - (288/2) * scene_scale_Y);
			}
			break;

		case 4:
			scale_image(foreground, 0, 0);
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
			break;

		case 5:
			scale_image(foreground, 0, 0);
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
			break;

		case 6:
			scale_image(foreground, 0, 0);
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
			break;

		case 7:
			scale_image(foreground, 0, 0);
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
			break;

		case 8:
			scale_image(midground, 0, 0);
			scale_image(foreground, 0, stage.canvas.height/2 - (231/2));
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
      scale_gui(level1_indicator, (indicatorX/2 + 72), -stage.canvas.height/2 + (indicatorY/2 + 285));
		  scale_gui(level2_indicator, (indicatorX/2 + 168), -stage.canvas.height/2 + (indicatorY/2 + 150));

			break;

    case 9:
			scale_image(foreground, 0, 0);
			scale_gui(login_button, -(buttonX/2 + 10), (buttonY/2 + 10), "left", "bottom");
			break;

		default:

	}

	// GUI in front of everything
  if (stage.canvas.width < 900) {
  	scale_gui(previous_indicator, stage.canvas.width/2 - (indicatorX/4 * 13), stage.canvas.height/2 - (indicatorY/4 * 3));
  	scale_gui(pause_indicator, stage.canvas.width/2 - (indicatorX/4 * 8), stage.canvas.height/2 - (indicatorY/4 * 3));
  	scale_gui(next_indicator, stage.canvas.width/2 - (indicatorX/4 * 3), stage.canvas.height/2 - (indicatorY/4 * 3));
  	scale_gui(lute, stage.canvas.width/2 - (luteX/2), stage.canvas.height/2 - (luteY/2 + 32));
  } else {
  	scale_gui(previous_indicator, 50, -232);
  	scale_gui(pause_indicator, 0, -232);
  	scale_gui(next_indicator, -50, -232);
  	scale_gui(lute, -350, -232);
  }

  landscape_warning.graphics.clear()
  landscape_warning.graphics.beginFill("#000000").drawRect(0, 0, stage.canvas.width, stage.canvas.height);

  scale_image(phone_rotation, 0, 0);

}


function pauseAnimation(paused) {
    if(paused){
	henchman_left.paused = true;
	henchman_left_center.paused = true;
	boss.paused = true;
	henchman_right.paused = true;
	henchman_right_center.paused = true;
	projectile.paused = true;
/*
	if(structure_center.currentAnimationFrame != 0 && structure_center.currentAnimationFrame != 11)
	    structure_center.paused = true;

	if(structure_left_center.currentAnimationFrame != 0 && structure_left_center.currentAnimationFrame != 11)
	    structure_left_center.paused = true;

	if(structure_right_center.currentAnimationFrame != 0 && structure_right_center.currentAnimationFrame != 11)
	    structure_right_center.paused = true;

	if(structure_left.currentAnimationFrame != 0 && structure_left.currentAnimationFrame != 11)
	    structure_left.paused = true;

	if(structure_right.currentAnimationFrame != 0 && structure_right.currentAnimationFrame != 11)
	    structure_right.paused = true;

	if(catapult.currentAnimationFrame != 0 && catapult.currentAnimationFrame != 11)
	    catapult.paused = true;

*/
	/*structure_center.paused = true;
	structure_left_center.paused = true;
	structure_right_center.paused = true;
	structure_left.paused = true;
	structure_right.paused = true;
	catapult.paused = true;*/
    }
    else {
	henchman_left.paused = false;
	henchman_left_center.paused = false;
	boss.paused = false;
	henchman_right.paused = false;
	henchman_right_center.paused = false;
	projectile.paused = false;
/*
	if(structure_center.currentAnimationFrame != 0 && structure_center.currentAnimationFrame != 11)
	    structure_center.paused = false;

	if(structure_left_center.currentAnimationFrame != 0 && structure_left_center.currentAnimationFrame != 11)
	    structure_left_center.paused = false;

	if(structure_right_center.currentAnimationFrame != 0 && structure_right_center.currentAnimationFrame != 11)
	    structure_right_center.paused = false;

	if(structure_left.currentAnimationFrame != 0 && structure_left.currentAnimationFrame != 11)
	    structure_left.paused = false;

	if(structure_right.currentAnimationFrame != 0 && structure_right.currentAnimationFrame != 11)
	    structure_right.paused = false;

	if(catapult.currentAnimationFrame != 0 && catapult.currentAnimationFrame != 11)
	    catapult.paused = false;
*/
	/*structure_center.paused = false;
	structure_left_center.paused = false;
	structure_right_center.paused = false;
	structure_left.paused = false;
	structure_right.paused = false;
	catapult.paused = false;*/
    }
}

function visibleButton(visible) {
    if(visible) {
	pause_menu.visible = true;
	close_button.visible = true;
	main_menu_button.visible = true;
	exit_level_button.visible = true;
	settings_button.visible = true;
	previous_indicator.visible = true;
	pause_indicator.visible = true;
	next_indicator.visible = true;
	lute.visible = true;
	hint_button.visible = true;
    }
    else {
	pause_menu.visible = false;
	close_button.visible = false;
	main_menu_button.visible = false;
	exit_level_button.visible = false;
	settings_button.visible = false;
	previous_indicator.visible = false;
	pause_indicator.visible = false;
	next_indicator.visible = false;
	lute.visible = false;
	hint_button.visible = false;
    }
}
