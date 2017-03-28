var table = document.getElementById("table");
function sortByPrice(){

  let price = document.getElementById("price");
  let fb = firebase.database();
  fb.ref().child('product/').once('value')
    .then(function(snapshot){
      let data = snapshot.val();
      if(data === null) {
        data={}
      }
      let product = {
        name: "dfdf",
        price: 23,
      }
      return fb.ref('product/').push(product);
    })
    .then(function(){
      let table = document.getElementById("table");
      table.innerHTML = '';
      return listMessages();
    })
    .catch(function(err){
    })
}
function listMessages(){
  let table = document.getElementById("table");
  table.innerHTML = '';
  firebase.database().ref('product/').once('value')
  .then(function(snapshot){
      let data = snapshot.val();
      if(data === null){
        data={}
      }
      Object.keys(data).reverse().forEach(function(key){
         let pro = data[key];
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${pro.name}</td>
        <td>${pro.price}</td>`;
        table.appendChild(tr);
      })
    })

}
