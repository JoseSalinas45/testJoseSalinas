$( document ).ready( function ()
{
	$.ajax( {
		url: "https://rickandmortyapi.com/api/character/2",
		type: "GET",
		dataType: "JSON"
	} ).done( function ( response )
	{
		let cont = 1;

		if ( response !== null )
		{
			$("#filaCinco_nombre").text(response.name);
			$("#filaCinco_genero").text(response.gender);
			$(".filaCinco_imagen").attr("src",response.image);
			$.each( response.episode, function ( i, item )
			{
				if(cont<=5)
				{
					$( "#filaCinco_episodio" ).append( `<li value="cont"><a href="${item}" target="_blank">${item}</li>` );
					cont++;
				}
				else
					return false;
			} );
		}
	} ).fail( function ( jqXHR, textStatus, errorThrown ) { console.log( textStatus ); console.log( errorThrown ); } );
})
	