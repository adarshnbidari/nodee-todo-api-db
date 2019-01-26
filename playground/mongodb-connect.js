// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log("there was an error in connecting to mongodb server!...");
	}
	
	console.log("connected to mongodb");
	
	/* const db=client.db('TodoApp');
	
	db.collection('Todos').insertOne({
		text:'something to do',
		completed:true
	},(err,result)=>{
		if(err){
			return console.log("Unable to insert Todo",err);
		}
		
		console.log(JSON.stringify(result.ops,undefined,2));
		
	}); */
	
	/* const db=client.db('TodoApp');
	db.collection('Users').insertOne({
		name:"adarsh",
		age:21,
		location:"manakur"
	},(err,result)=>{
		if(err){
			return console.log("Unable to insert Users",err);
		}
		
		console.log(result.ops[0]._id.getTimestamp());
		
	}); */
	
	/* const db=client.db('TodoApp');
	db.collection('Users').find({name:"adarsh"}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fecth todos',err);
	}); */
	
	
	client.close();
});