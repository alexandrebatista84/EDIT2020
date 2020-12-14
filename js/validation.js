function validation() {
	
	var x = document.getElementById("nome").value;
	var y = document.getElementById("email").value;
	var z = document.getElementById("telefone").value;
	var a = document.getElementById("texto").value;
	

	if (x == "" || y == "" || z == "" || a == "" ) {
	  alert("Todos os campos têm de ser preenchidos");
	  return false;
	}

	
  }
