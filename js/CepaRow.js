
function soroRow(numSoro){
	if(numSoro % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.attr('id', 'soro_'+numSoro)
		.append($('<td />').appendText(numSoro+''))
		.append($('<td />')
			.append($('<select>')
				.addClass('soro')
				.addClass('required')
				.attr('name', 'soroColetado')
				.attr('id'  , 'soroColetado_' + numSoro)
				.append($("<option> ----  </option>"))
				.append($("<option value='sim'> Sim  </option>"))
				.append($("<option value='nao'> N&atilde;o  </option>"))
				.append($("<option value='ignorado'> Ignorado  </option>"))
			)
		)
		.append($('<td />')
			.append($('<input>')
				.addClass('number')
				.attr('name', 'numeroSoro')
				.attr('disabled', 'disabled')
				.attr('id', 'numeroSoro_'+numSoro)
			)
		)
	);
	return content;
}

function sangueRow(numSangue){
	if(numSangue % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.attr('id', 'sangue' + numSangue)
		.append($('<td />').appendText(numSangue+''))
		.append($('<td />')
			.append($('<select>')
				.addClass('sangue')
				.addClass('required')
				.attr('name', 'sangueColetado')
				.attr('id'  , 'sangueColetado_' + numSangue)
				.append($("<option> ----  </option>"))
				.append($("<option value='sim'> Sim  </option>"))
				.append($("<option value='nao'> N&atilde;o  </option>"))
				.append($("<option value='ignorado'> Ignorado  </option>"))
			)
		)
		.append($('<td />')
			.append($('<input>')
				.addClass('number')
				.attr('name', 'numeroSangue')
				.attr('disabled', 'disabled')
				.attr('id', 'numeroSangue_'+numSangue)
			)
		)
	);
	return content;
}

function CEPARow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'origem_cepa_' + numCepa)
				.attr(  'id', 'origem_cepa_' + numCepa)
				.addClass('origem_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> HU </option>')
					.attr('value', 'hu')
				)
				.append($('<option> PAAP </option>')
					.attr('value', 'paap')
				)
				.append($('<option> FIOCRUZ </option>')
					.attr('value', 'fiocruz')
				)
			)
			.attr('rowspan', '3')
		)
		.append($('<td />')
			.append('Método')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'baciloscopia_metodo_' + numCepa)
				.attr(  'id', 'baciloscopia_metodo_' + numCepa)
				.addClass('baciloscopia_metodo')
				.append($('<option> ---- </option>'))
				.append($('<option> Ziehl </option>')
					.attr('value', 'ziehl')
				)
				.append($('<option> Fluorescência </option>')
					.attr('value', 'fluorescencia')
				)
			)
		)
		.append($('<td />')
			.append('Número')
			.addClass('description')
		)
		.append($('<td/>')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'numero_cepa_' + numCepa)
				.attr(  'id', 'numero_cepa_' + numCepa)
				.attr('size', '4')
			)
		)
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'baciloscopia_resultado_cepa_' + numCepa)
				.attr(  'id', 'baciloscopia_resultado_cepa_' + numCepa)
				.addClass('baciloscopia_resultado_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> + </option>')
					.attr('value', '+')
				)
				.append($('<option> ++ </option>')
					.attr('value', '++')
				)
				.append($('<option> +++ </option>')
					.attr('value', '+++')
				)
				.append($('<option> ++++ </option>')
					.attr('value', '++++')
				)
				.append($('<option> Negativo </option>')
					.attr('value', 'negativo')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
			)
		)
		.append($('<td />')
			.append('Data')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_cepa_' + numCepa)
				.attr(  'id', 'data_cepa_' + numCepa)
				.addClass('data_cepa')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Data')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_data_' + numCepa)
				.attr(  'id', 'baciloscopia_data_' + numCepa)
				.attr('size', '10')
				.addClass('baciloscopia_data')
			)
		)
		.append($('<td />')
			.append('Tipo')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.attr('name', 'material_cepa_' + numCepa)
				.attr(  'id', 'material_cepa_' + numCepa)
				.addClass('material_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> Espontâneo </option>')
					.attr('value', 'escarro_espontaneo')
				)
				.append($('<option> Induzido </option>')
					.attr('value', 'escarro_induzido')
				)
				.append($('<option> LBA </option>')
					.attr('value', 'lba')
				)
			)
		)
	);
	content = ($('<tbody cepanum="'+numCepa+'">').append(content))
	return content;
}

