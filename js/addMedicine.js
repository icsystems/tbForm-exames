function addMedicine(type, medicine, numCepa){
	content = ($('<td />')
		.append($('<label />')
			.attr('for', type + '_' + numCepa + '_' + medicine )
			.append($('<input />')
				.attr('disabled', true)
				.attr('type', 'checkbox')
				.val( medicine )
				.attr('id', type + '_' + numCepa + '_' + medicine )
				.addClass('input_'+type)
			)
			.append(' '+ medicine)
		)
	);
	return content;
}
