function createLogin(engine, canvas, message, database) {                       // function that returns the login scene

  var scene = new BABYLON.Scene(engine);                                        // create the scene
  scene.attachControl();

  var camera = new BABYLON.UniversalCamera(
    "login_cam",
    new BABYLON.Vector3(0, 0, -10),
    scene);                                                                     // creates camera pointed at the scene
  camera.setTarget(BABYLON.Vector3.Zero());                                     // targets the camera to scene origin
  camera.attachControl(canvas, true);                                           // attaches the camera to the canvas

  var background = new BABYLON.Layer("bg", "res/login.png", scene, true);       // background layer

  // GUI
  var advTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI"); // AdvancedDynamicTexture for the controls of the gui
  advTexture.idealWidth = 1920;                                                 // Ideal screen width for the UI to scale to
  advTexture.idealHeight = 1080;                                                // Ideal screen height for the UI to scale to
  advTexture.attach();
  var enable = true;                                                            // render enable bit for the ADT controls

  var username = "";
  var password = "";

  var username_text = new BABYLON.GUI.TextBlock();                              // username textblock
  username_text.top = "-110px";
  username_text.left = "-265px";
  username_text.height = "55px";
  username_text.width = "250px";
  username_text.color = "saddlebrown";
  username_text.fontFamily = "Blackadder ITC";
  username_text.fontStyle = "italic";
  username_text.fontSize = 55;
  username_text.text = "Username:";
  username_text.isEnabled = enable;

  var username_input = new BABYLON.GUI.InputText();                             // username input box
  username_input.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  username_input.top = "-105px";
  username_input.left = "95px";
  username_input.width = "500px";
  username_input.height = "45px";
  username_input.maxWidth = 0.15;
  username_input.color = "black";
  username_input.background = "lightyellow";
  username_input.thickness = 0;
  username_input.focusedBackground = "white";
  username_input.isEnabled = enable;
  username_input.onTextChangedObservable.add(function() {
    if (username_input.currentKey != "Delete" || username_input.currentKey != "Backspace") {
      username = username_input.text;
    }
  });

  var username_line = createLine(805, 370, 1305, 370, 1.5, "saddlebrown");

  var password_text = new BABYLON.GUI.TextBlock();                              // password textblock
  password_text.top = "-25px";
  password_text.left = "-270px";
    password_text.height = "55px";
    password_text.width = "250px";
  password_text.color = "saddlebrown";
  password_text.fontFamily = "Blackadder ITC";
  password_text.fontStyle = "italic";
  password_text.fontSize = 55;
  password_text.text = "Password:";
  password_text.isEnabled = enable;

  var password_input = new BABYLON.GUI.InputPassword();                         // password input box
  password_input.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    password_input.top = "-25px";
    password_input.left = "95px";
  password_input.width = "500px";
  password_input.height = "45px";
  password_input.maxwidth = 0.15;
  password_input.color = "black";
  password_input.background = "lightyellow";
  password_input.thickness = 0;
  password_input.focusedBackground = "white";
  password_input.isEnabled = enable;
  password_input.onTextChangedObservable.add(function() {
    if (password_input.currentKey != "Delete" || password_input.currentKey != "Backspace") {
      password = password_input.text;
    }
  });

  var password_line = createLine(805, 451, 1305, 451, 1.5, "saddlebrown");

  var login_button = BABYLON.GUI.Button.CreateImageWithCenterTextButton("login_button", "Login", "res/login-button.png");         // login button
  login_button.top = "90px";
  login_button.left ="-130px";
  login_button.height = "60px";
  login_button.width = "200px";
  login_button.color = "gold";
  login_button.thickness = 0;
  login_button.fontFamily = "Blackadder ITC";
  login_button.fontStyle = "italic";
  login_button.fontSize = 26;
  login_button.isEnabled = enable;
  login_button.onPointerClickObservable.add(function() {
  	var key = username_input.text;
  	if( key in database.users) {
  	    if(database["users"][key]["password"] == password_input.text) {
  		username_input.text = "";
  		password_input.text = "";
  		login_error.alpha = 0;
  		message.render = 1;
  		message.current_user = key;
  	    }
  	    else {
  		username_input.text = "";
  		password_input.text = "";
  		login_error.alpha = 1;
  	    }
  	}
  	else {
  	    username_input.text = "";
  	    password_input.text = "";
  	    login_error.alpha = 1;
  	}
  });


  var account_button = BABYLON.GUI.Button.CreateImageWithCenterTextButton("account_button", "Create Account", "res/login-button.png");
  account_button.top = "90px";
  account_button.left = "130px";
  account_button.width = "200px";
  account_button.height = "60px";
  account_button.color = "gold";
  account_button.thickness = 0;
  account_button.fontFamily = "Blackadder ITC";
  account_button.fontStyle = "italic";
  account_button.fontSize = 26;
  account_button.isEnabled = enable;
  account_button.onPointerClickObservable.add(function() {
  	username_input.text = "";
  	password_input.text = "";
  	login_error.alpha = 0;
  	message.render = 7;
  });

  var login_error = new BABYLON.GUI.TextBlock();
  login_error.top = "200px";
  login_error.left = "0px";
  login_error.height = "200px";
  login_error.width = "600px";
  login_error.color = "darkred";
  login_error.fontFamily = "blackadder ITC";
  //login_error.fontStyle = "bold";
  login_error.fontSize = 30;
  login_error.text = "Username and/or Password did not match.\n Please try again.";
  login_error.isEnabled = enable;
  login_error.alpha = 0;


  var lute = BABYLON.GUI.Button.CreateImageWithCenterTextButton("lute_butt", "", "res/lute.png");
  lute.height = "110px";
  lute.width = "110px";
  lute.fontFamily = "Blackadder ITC";
  lute.fontStyle = "italic";
  lute.fontSize = 36;
  lute.color = "gold";
  lute.thickness = 0;
  lute.top = "350px";
  lute.left = "875px";
  advTexture.addControl(lute);
  // lute.left = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  lute.onPointerClickObservable.add(function() {
    message.music_pause = !message.music_pause;
    console.log(message.music_pause);
  });

  advTexture.addControl(username_text);                                         // add controls to texture
  advTexture.addControl(username_input);
  advTexture.addControl(password_text);
  advTexture.addControl(password_input);
  advTexture.addControl(login_button);
  advTexture.addControl(account_button);
  advTexture.addControl(username_line);
  advTexture.addControl(password_line);
  advTexture.addControl(login_error);
  return scene;

};
