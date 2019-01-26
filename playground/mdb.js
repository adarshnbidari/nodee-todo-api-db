
const {MongoClient,ObjectID}=require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log("there was an error in connecting to mongodb server!...");
	}
	
	console.log("connected to mongodb");
	
	const db=client.db('TodoApp');
	
	/* db.collection('Users').deleteMany({name:'sd'}).then((result)=>{
		console.log(result);
	}); */
	
	
	/* db.collection('Users').deleteOne({name:'nagesh'}).then((res)=>{
		console.log(res);
	}); */
	
	
	/* db.collection('Users').findOneAndDelete({name:'adarsh'}).then((res)=>{
		console.log(res);
	}); */
	
	/* db.collection('Todos').findOneAndUpdate({
		_id:new ObjectID("5c4608becd9c7311b48e9967")
	},{
		$set:{
			completed:true
		}
	},{
	returnOriginal:false
	}).then((res)=>{
		console.log('Result updated to ',res);
	});
	 */
	 
	 db.collection('Users').findOneAndUpdate({
		 _id:new ObjectID("5c4b3b933fc7c73218611c03")
	 },{
		 $set:{
			 name:"adarsh"
		 },
		 $inc:{
		 age:1
		 }
	 },{
		 returnOriginal:false
	 }).then((res)=>{
		 console.log(res);
	 });
	
	client.close();
});