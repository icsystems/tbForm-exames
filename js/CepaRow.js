
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
			.attr('rowspan', '6')
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
				.addClass('number')
				.attr('size', '4')
			)
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
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Data da coleta')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_cepa_' + numCepa)
				.attr(  'id', 'data_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
				.css('margin-right', '8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'hora_cepa_' + numCepa)
				.attr(  'id', 'hora_cepa_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
			)
		)
		.append($('<td />')
			.append('Resultado do BAAR')
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
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.addClass(cRow)
		.append($('<td />')
			.append('Responsável pela Coleta')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_coleta_responsavel_' + numCepa)
				.attr(  'id', 'baciloscopia_coleta_responsavel_' + numCepa)
				.attr('size', '20')
				.addClass('baciloscopia_coleta_responsavel')
			)
		)
		.append($('<td />')
			.append('Data do Resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_data_' + numCepa)
				.attr(  'id', 'baciloscopia_data_' + numCepa)
				.attr('size', '10')
				.addClass('data')
				.css('margin-right', '8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_hora_cepa_' + numCepa)
				.attr(  'id', 'baciloscopia_hora_cepa_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Aspecto do escarro')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'aspecto_escarro_' + numCepa)
				.attr(  'id', 'aspecto_escarro_' + numCepa)
				.addClass('aspecto_escarro')
				.append($('<option> ---- </option>'))
				.append($('<option> Saliva </option>')
					.attr('value', 'saliva')
				)
				.append($('<option> Muco Purulento </option>')
					.attr('value', 'muco_purulento')
				)
				.append($('<option> Sanguinolento </option>')
					.attr('value', 'sanguinolento')
				)
				.append($('<option> Liquefeito </option>')
					.attr('value', 'liquefeito')
				)
			)
		)
		.append($('<td />')
			.append('Responsável pela Análise')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'analise_responsavel_' + numCepa)
				.attr(  'id', 'analise_responsavel_' + numCepa)
				.attr('size', '20')
				.addClass('analise_responsavel')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Data do Recebimento')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_recebimento_cepa_' + numCepa)
				.attr(  'id', 'data_recebimento_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
				.css('margin-right','8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'hora_recebimento_cepa_' + numCepa)
				.attr(  'id', 'hora_recebimento_cepa_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
			)
		)
		.append($('<td colspan="2"/>'))
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
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
		.append($('<td colspan="2"/>'))
	);
	content = ($('<tbody cepanum="'+numCepa+'">').append(content))
	return content;
}

$(document).ready( function(){
	var cepaNum = 1;
	var content = CEPARow(cepaNum);
	$('table.cepa').append(content);
	// add row button
	$("#addline_button").click(function(){
		var origemStr = $('#origem_cepa_'+ cepaNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaNum++;
			var content = CEPARow(cepaNum);
			$('table.cepa').append(CEPARow(cepaNum));
			$('input.data').datepicker({
				dateFormat: 'dd/mm/yy',
				monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
				maxDate: '+0d',
				dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
			});
		}
	});

	$('select.origem_cepa').live('change', function(){
		var origemStr = $(this).val();
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#baciloscopia_metodo_' + num).removeAttr('disabled');
			$('#baciloscopia_resultado_cepa_' + num).removeAttr('disabled');
			$('#baciloscopia_data_' + num).removeAttr('disabled');
			$('#baciloscopia_hora_cepa_' + num).removeAttr('disabled');
			$('#baciloscopia_material_cepa_' + num).removeAttr('disabled');
			$('#numero_cepa_' + num).removeAttr('disabled');
			$('#data_cepa_' + num).removeAttr('disabled');
			$('#hora_cepa_' + num).removeAttr('disabled');
			$('#data_recebimento_cepa_' + num).removeAttr('disabled');
			$('#hora_recebimento_cepa_' + num).removeAttr('disabled');
			$('#material_cepa_' + num).removeAttr('disabled');
		} else {
			$('#baciloscopia_metodo_' + num).attr('disabled', true);
			$('#baciloscopia_metodo_' + num).val('----');
			$('#baciloscopia_resultado_cepa_' + num).attr('disabled', true);
			$('#baciloscopia_resultado_cepa_' + num).val('----');
			$('#baciloscopia_material_cepa_' + num).attr('disabled', true);
			$('#baciloscopia_material_cepa_' + num).val('----');
			$('#baciloscopia_data_' + num).attr('disabled', true);
			$('#baciloscopia_data_' + num).val('');
			$('#baciloscopia_hora_cepa_' + num).attr('disabled', true);
			$('#baciloscopia_hora_cepa_' + num).val('');
			$('#numero_cepa_' + num).attr('disabled', true);
			$('#numero_cepa_' + num).val('');
			$('#data_cepa_' + num).attr('disabled', true);
			$('#data_cepa_' + num).val('');
			$('#hora_cepa_' + num).attr('disabled', true);
			$('#hora_cepa_' + num).val('');
			$('#data_recebimento_cepa_' + num).attr('disabled', true);
			$('#data_recebimento_cepa_' + num).val('');
			$('#hora_recebimento_cepa_' + num).attr('disabled', true);
			$('#analise_responsavel_' + num).val('');
			$('#analise_responsavel_' + num).attr('disabled', true);
			$('#hora_recebimento_cepa_' + num).val('');
			$('#material_cepa_' + num).attr('disabled', true);
			$('#material_cepa_' + num).val('');
		}
	});
});
