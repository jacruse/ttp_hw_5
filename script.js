var num_cols = 5;
var num_rows = 4;
var mouse_down = false;
var plus_columns = document.getElementById( "inc_col" ),
    minus_columns = document.getElementById( 'dec_col' ),
    plus_rows = document.getElementById( 'inc_row' ),
    minus_rows = document.getElementById( 'dec_row' ),
    fill_all_but = document.getElementById( 'fill_all' ),
    fill_empty_but = document.getElementById( 'fill_empty' ),
    clear_all_but = document.getElementById( 'clear_all' );

increase_columns = function() {
    var tbl = document.getElementById( "unit" );

    for (let i = 0; i < tbl.children.length; i++) {
	var data_node = document.createElement( "td" ),
	    text = document.createTextNode( " " );

	data_node.appendChild(text);
	data_node.setAttribute('padding', '30px');
	data_node.setAttribute('background-color', 'grey');

	var row = tbl.children[i];
	row.appendChild(data_node);
	//console.log(row);
    }
    num_cols += 1;
    //console.log("check");
}

decrease_columns = function() {
    var tbl = document.getElementById( "unit" );

    if ( num_cols > 0 ) {
	for (let i = 0; i < tbl.children.length; i++) {
	    var row = tbl.children[i];

	    row.removeChild(row.children[row.children.length-1]);
	    //console.log(row);
	}
	num_cols -= 1;
    }
    //console.log("check");
}

increase_rows = function() {
    var tbl = document.getElementById( 'unit' ),
	row = document.createElement( "tr" );

    for (let i = 0; i < num_cols; i++) {
	var data_node = document.createElement( "td" ),
	    text = document.createTextNode( " " );

	data_node.appendChild(text);
	data_node.setAttribute('padding', '30px');
	data_node.setAttribute('background-color', 'grey');

	row.appendChild(data_node);
    }

    tbl.appendChild(row);
    num_rows += 1;
}

decrease_rows = function() {
    var tbl = document.getElementById( 'unit' );

    if ( num_rows > 0 ) {
	tbl.removeChild(tbl.children[tbl.children.length-1]);
	num_rows -= 1;
    }
}

change_color = function(e) {
    if (mouse_down) {
	e.target.style.backgroundColor = document.getElementById( 'choice' ).value;
    }
}

fill_all = function() {
    var tbl = document.getElementById( 'unit' );
    for (let i = 0; i < num_rows; i++) {
	for (let j = 0; j < num_cols; j++) {
	    tbl.children[i].children[j].style.backgroundColor = document.getElementById( 'choice' ).value;
	}
    }
}

fill_empty = function() {
    var tbl = document.getElementById( 'unit' );
    for (let i = 0; i < num_rows; i++) {
	for (let j = 0; j < num_cols; j++) {
	    var cell = tbl.children[i].children[j];
	    if ( cell.style.backgroundColor != "cyan" && cell.style.backgroundColor != "magenta" && cell.style.backgroundColor != "yellow" ) {
		cell.style.backgroundColor = document.getElementById( 'choice' ).value;
	    }
	}
    }
}

clear_all = function() {
    var tbl = document.getElementById( 'unit' );
    for (let i = 0; i < num_rows; i++) {
	for (let j = 0; j < num_cols; j++) {
	    tbl.children[i].children[j].style.backgroundColor = 'grey';
	}
    }
}

toggle_down = function() {
    mouse_down = true;
}

toggle_up = function() {
    mouse_down = false;
}

plus_columns.addEventListener( 'mousedown', increase_columns );
minus_columns.addEventListener( 'mousedown', decrease_columns );

plus_rows.addEventListener( 'mousedown', increase_rows );
minus_rows.addEventListener( 'mousedown', decrease_rows );

fill_all_but.addEventListener( 'mousedown', fill_all );
fill_empty_but.addEventListener( 'mousedown', fill_empty );
clear_all_but.addEventListener( 'mousedown', clear_all );

var tbody = document.getElementById('unit');
tbody.addEventListener( 'mouseover', change_color );

document.addEventListener( 'mousedown', toggle_down );
document.addEventListener( 'mouseup', toggle_up );

