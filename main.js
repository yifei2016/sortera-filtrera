window.onload = function(){
  var table = document.getElementById("table");
}
function submit(){
  let price = document.getElementById("price");
  let fb = firebase.database();
  var productName= document.getElementById("name");
  var productPrice = document.getElementById("productPrice");
 // var currDate = new Date();
  var product = {
    name: productName.value,
    price: Number(productPrice.value),
    // date: currDate.toLocaleString()
    date: moment().format('MM-DD-YYYY, h:mm:ss')
  }
  fb.ref('products/').push(product);
}
//orderBy('name')
function orderBy(key){
  var outputNumber = document.getElementById("outputNumber");
  let fb = firebase.database();
//do new stuff, put debugger before and then check on console
  fb.ref('products/').orderByChild(`${key}`).limitToFirst(Number(outputNumber.value)).once('value')//get once all values, read all orderByChild("name")
  .then(function(snapshot){
    //after snapshot that get all values then can clean
    let table = document.getElementById("table");
    table.innerHTML = "";
    snapshot.forEach(function(child){
      let tr = document.createElement("tr");//child is a object, child.key to get id
      tr.innerHTML = `<td>${child.val().name}</td>
      <td>${child.val().price}</td><td>${child.val().date}</td>`
      table.appendChild(tr);
      console.log(child.val())//object child/hela object  child.val  object
    })
  })
  .catch(function(err){
  })
}
// function orderByPrice(){
//   let fb = firebase.database();
//     fb.ref('products/').orderByChild('price').once('value')//get once all values, read all
//       .then(function(snapshot){
//         let table = document.getElementById("table");
//         table.innerHTML = "";
//         snapshot.forEach(function(child){
//
//           let tr = document.createElement("tr");//child is a object, child.key to get id
//           tr.innerHTML = `<td>${child.val().name}</td>
//           <td>${child.val().price}</td>`
//           table.appendChild(tr);
//           // console.log(child.val())//object child/hela object  child.val  object
//         })
//       })
//
//       .catch(function(err){
//       })
//}
