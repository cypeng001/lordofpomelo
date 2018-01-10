__resources__["/main.js"] = {
	meta: {
		mimetype: "application/javascript"
	}, 

	data: function(exports, require, module, __filename, __dirname){
		
		var clientManager = require('clientManager');
		var heroSelectView = require('heroSelectView');

		function main() {
			clientManager.init();
			setDefaultUser();
			heroSelectView.init();
		}

		function setDefaultUser() {
			if (localStorage) {
				var dusr = localStorage.getItem("username");
				var dpwd = localStorage.getItem("pwd");
				if(dusr){
					$('#loginUser').val(dusr);
					$('#loginPwd').val(dpwd);
				}
			}
		}

		exports.main = main;
	}
};
