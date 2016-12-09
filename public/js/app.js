"use strict";


class App{
	constructor(){
	 	this.forms = [
	 		{
	 			
	 			"Name" : "Lyn Berg",
	 			"Age" : "18",
	 			"Cellnumber" : "09324785149",
	 			"Picture" : "img/EgUUnhv4.jpg",
	 			"Birthmonth" : "December 25",
	 			"Address" : "Toril, Davao City"
	 		},
	 		{
	 			
	 			"Name" : "Adriel Ylarde",
	 			"Age" : "20",
	 			"Cellnumber" : "09218900858",
	 			"Picture" : "img/qsQEkz0o.jpg",
	 			"Birthmonth" : "March 27",
	 			"Address" : "5-3 V. Mapa Extension, Davao City"
	 		},
	 		{
	 			
	 			"Name" : "April Joy",
	 			"Age" : "21",
	 			"Cellnumber" : "09315487625",
	 			"Picture" : "img/a.jpg",
	 			"Birthmonth" : "January 25",
	 			"Address" : "Tugbok, Davao City"
	 		},
	 		{
	 			
	 			"Name" : "Carl Buenaluz",
	 			"Age" : "16",
	 			"Cellnumber" : "09354865798",
	 			"Picture" : "img/d.jpg",
	 			"Birthmonth" : "May 24",
	 			"Address" : "Calinan, Davao City"
	 		},
	 		{
	 			
	 			"Name" : "Angelo Pereira",
	 			"Age" : "25",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/njRg-su6.jpg",
	 			"Birthmonth" : "November 2",
	 			"Address" : "City of Tagum"
	 		},
	 		{
	 			
	 			"Name" : "Dboy Juaban",
	 			"Age" : "25",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/ZiQaBxSo.jpg",
	 			"Birthmonth" : "June 11",
	 			"Address" : "Sasa, Davao City"
	 		},
	 		{
	 			
	 			"Name" : "Ceasar Lubaton",
	 			"Age" : "24",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/Xr1Xj4Ru.jpg",
	 			"Birthmonth" : "May 2",
	 			"Address" : "Magallanes,Davao City"
	 		},
	 		{
	 			
	 			"Name" : "Reyman Caumanday",
	 			"Age" : "23",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/CvYLQ9VVIAAErMi.jpg",
	 			"Birthmonth" : "October 2",
	 			"Address" : "Tagum City"
	 		},
	 		{
	 			
	 			"Name" : "Deo Dexter Guillermo",
	 			"Age" : "23",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/bgx088AJ.jpg",
	 			"Birthmonth" : "September 25",
	 			"Address" : "Marbel"
	 		},
	 		{
	 			
	 			"Name" : "CJ Polpol",
	 			"Age" : "23",
	 			"Cellnumber" : "09325481654",
	 			"Picture" : "img/VtpejFIn.jpg",
	 			"Birthmonth" : "November 11",
	 			"Address" : "Davao City"
	 		},
	 	];
	 }

	 render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createForm(){
		let n =document.getElementById('newName');
		let e =document.getElementById('newAge');
		let c =document.getElementById('newCellnumber');
		let p =document.getElementById('newPicture');
		let b =document.getElementById('newBirthmonth');
		let a =document.getElementById('newAddress');

		let form = {"Name":n.value,"Age":e.value,"Cellnumber":c.value,"Picture":p.value,"Birthmonth":b.value,"Address":a.value};
		this.forms.push(form);

		n.value = e.value = c.value = p.value = b.value = a.value = ''; 
		this.formListInfo();
	}

	deleteForm(key){
		let table = document.getElementById('formListInfo');
		table.deleteRow(key);
		this.forms.splice(key,1);

		// let f = this.forms;
		// let dummy = [];
		// for(let i=0;i<f;i++){
		// 	if(key!=i){
		// 		dummy.push(f[i]);
		// 	}
		// }
		// this.forms = dummy;
		let details = document.getElementById('formDetails');
		details.innerHTML = "";
		
		this.formListInfo();	
		this.showFormList();	
	}

	updateForm(key){
		let n = document.getElementById('updateName');
		let e = document.getElementById('updateAge');
		let c = document.getElementById('updateCellnumber');
		let b = document.getElementById('updateBirthmonth');
		let a = document.getElementById('updateAddress');

		let f = this.forms[key];
		let form = {"id":f.id,"Name":n.value,"Age":e.value,"Cellnumber":c.value,"Picture":p.value,"Birthmonth":b.value,"Address":a.value};

		this.forms[key] = form;
		let details = document.getElementById('formDetails');
		details.innerHTML = "";
		
		this.formListInfo();
		this.showFormList();
	}
}




class Component extends App{
	constructor(){
		super();
	}

	formList(){
		this.render(
			`
		<div class="header clearfix">
            <nav>
              <ul class="nav nav-pills float-xs-right">
                <li class="nav-item">
                  <a class="nav-link active" "red-text" href="#" onclick="component.showLandingPage()">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showFormList()">Form List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showFormCreate()">Form Create</a>
                </li>
              </ul>
            </nav>
            <h3 class="text-muted red-text">User-Registration App</h3>
          </div>


		<div id="landingpage">
          <div class="jumbotron">
            <h1 class="display-3">User-Registration App</h1>
            <p class="lead">A multi-purpose form app that is used for registrations.</p>
            
          </div>

          <div class="row marketing">
            <div class="col-lg-6">
              <h4>WELCOME!</h4>
              <p>Getting Started.</p>

              <h4>USER-FRIENDLY</h4>
              <p>Easy to use.</p>

            </div>

            <div class="col-lg-6">
              <h4>EFFICIENT</h4>
              <p>No cost needed and provides quick transactions.</a></p>

              <h4>FLEXIBLE</h4>
              <p>All forms of registration.</p>

            </div>
          </div>          

		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="formCreate"></div>						
					</div>
				</div>

				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1>Form List</h1>
						<table id="formList" class="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Age</th>
									<th>Cellnumber</th>
									<th>Birthmonth</th>
									<th>Address</th>
								</tr>
							</thead>
							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									<i class="material-icons">&#xE87C;</i>
							      </div>
							      <input type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="formListInfo"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="formDetails"></div>
				</div>
				
          <footer class="footer">
            <p>&copy; Copyright 2016 Ylarde Productions</p>
          </footer>

			`
			,document.getElementById('app'));
		this.formListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showFormList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showFormCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}			

	formListInfo(){
		let html = "";
		let f = this.forms;
		for(let i=0;i<f.length;i++){
			html += `
				<tr>
					<td>${f[i].Name}</td>
					<td>${f[i].Age}</td>
					<td>${f[i].Cellnumber}</td>
					<td>${f[i].Birthmonth}</td>
					<td>${f[i].Address}</td>
					<td><button class="btn btn-primary"  onclick="component.formDetails(${i})">Show Image</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('formListInfo'));
	}

	formDetails(key){
		this.reRender(
			`
				<h1>Form Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.forms[key].Picture}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="formDetailsInfo">
				        <h4 class="media-heading">${this.forms[key].Name}</h4>
				        Age: ${this.forms[key].Age}<br/>
						Cellnumber: ${this.forms[key].Cellnumber}<br/>
						Birthmonth: ${this.forms[key].Birthmonth}<br/>
						Address: ${this.forms[key].Address}<br/>
						<button class="btn btn-success" onclick="component.formUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteForm(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showFormList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('formDetails'));
			this.showUpdateDelete();
	}

	formCreate(){
		this.render(
			`
				<h1>Form Create</h1>
				Name: <input class="form-control" id="newName" type="" placeholder="Enter Name" /><br/>
				Age: <input class="form-control" id="newAge" type="" placeholder="Enter Age" /><br/>
				Cellnumber: <input class="form-control" id="newCellnumber" type="" placeholder="Enter Cellnumber" /><br/>
				Picture: <input class="form-control" id="newPicture" type="" placeholder="Enter Picture" /><br/>
				Birthmonth: <input class="form-control" id="newBirthmonth" type="" placeholder="Enter birth month" /><br/>
				Address: <input class="form-control" id="newAddress" type="" placeholder="Enter Address" /><br/>
				<button class="btn btn-primary" onclick="component.createForm()">Create</button>
			`,document.getElementById('formCreate'));
	}

	formUpdate(key){
		this.reRender(
			`
				<h4 class="media-heading">${this.form[key].Name}</h4>
		       Age: <input id="updateAge" type="text" value="${this.forms[key].Age}" /><br/>
				Cellnumber: <input id="updateCellnumber" type="text" value="${this.forms[key].Cellnumber}" /><br/>
				Birthmonth: <input id="updateBirthmonth" type="text" value="${this.forms[key].Birthmonth}" /><br/>
				Address: <input id="updateAddress" type="text" value="${this.forms[key].Address}" /><br/>
				<button class="btn btn-success" onclick="component.updateForm(${key})">Save</button>
			`,document.getElementById('formDetailsInfo'));
	}
}

let component = new Component();
component.formList();
component.formCreate();
