const cloudinary = require('cloudinary').v2;

const file = 'https://play-lh.googleusercontent.com/lNy35u_4HIHu4Wqj0WIENtN0HmeZuEx4V8UwdMw0wxcRKvYbskmPEII05HWxK5nI0g';

cloudinary.config({
	api_key: '194691598616297',
        api_secret: '_8AreTS_K8G4mOZEwNB5_AxF_wA',
        cloud_name: 'dt55uhyrq',
})

cloudinary.uploader
.upload(file, { 
	folder: 'node-cafe',
	eager: [
    		{ width: 200, height: 150, crop: "pad" }, // Redimensiona la img
    		//{ width: 260, height: 200, crop: "crop" } // Corta la img
	],
	quality: 'auto:best'
})
.then(result=>console.log(result))
