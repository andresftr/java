var d=document;
var tabla=d.getElementById("tabla");
for (var i = 3; i <= 18; i++) {
	var fila=d.createElement('tr');
	for (var j = 3; j <= 9; j++) {
		var col=d.createElement('td');
		var xval= d.createTextNode(i*j);
		col.appendChild(xval);
		fila.appendChild(col);
	}
	tabla.appendChild(fila);
}

var res=d.getElementById("container");
res.appendChild(tabla);