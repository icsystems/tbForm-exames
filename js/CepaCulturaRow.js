function CEPACulturaRow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'origem_cultura_' + numCepa)
				.attr(  'id', 'origem_cultura_' + numCepa)
				.addClass('origem_cultura')
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
			.attr('rowspan', '5')
		)
		.append($('<td />')
			.append('Número')
			.addClass('description')
		)
		.append($('<td/>')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'numero_cepa_cultura_' + numCepa)
				.attr(  'id', 'numero_cepa_cultura_' + numCepa)
				.attr('size', '5')
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
				.attr('name', 'metodo_cultura_cepa_' + numCepa)
				.attr(  'id', 'metodo_cultura_cepa_' + numCepa)
				.addClass('metodo_cultura_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> LJ </option>')
					.attr('value', 'lj')
				)
				.append($('<option> MGIT </option>')
					.attr('value', 'mgit')
				)
				.append($('<option> Ogawa </option>')
					.attr('value', 'ogawa')
				)
			)
		)
		.append($('<td />')
			.append('Sensibilidade')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<fieldset />')
				.addClass('fs_sensibilidade')
				.attr('id', 'sensibilidade_' + numCepa )
				.append($('<table />')
					.addClass('table_sensibilidade')
					.append($('<tr />')
						.append(addMedicine('sensibilidade', 'R', numCepa))
						.append(addMedicine('sensibilidade', 'H', numCepa))
						.append(addMedicine('sensibilidade', 'E', numCepa))
						.append(addMedicine('sensibilidade', 'S', numCepa))
						.append(addMedicine('sensibilidade', 'Z', numCepa))
						.append(addMedicine('sensibilidade', 'C', numCepa))
					)
					.append($('<tr />')
						.append(addMedicine('sensibilidade', 'Et', numCepa))
						.append(addMedicine('sensibilidade', 'O', numCepa))
						.append(addMedicine('sensibilidade', 'L', numCepa))
						.append(addMedicine('sensibilidade', 'T', numCepa))
						.append(addMedicine('sensibilidade', 'M', numCepa))
					)
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
				.attr('name', 'data_cultura_cepa_' + numCepa)
				.attr(  'id', 'data_cultura_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_cultura_cepa_' + numCepa)
					.attr(  'id', 'hora_cultura_cepa_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
		.append($('<td />')
			.append('Data do Processamento')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_processamento_cultura_' + numCepa)
				.attr(  'id', 'data_processamento_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_processamento_cultura_' + numCepa)
					.attr(  'id', 'hora_processamento_cultura_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
		.append($('<td />')
			.append('Resistência')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<fieldset />')
				.addClass('fs_resistente')
				.attr('id', 'resistente_' + numCepa )
				.append($('<table />')
					.addClass('table_resistente')
					.append($('<tr />')
						.append(addMedicine('resistente', 'R', numCepa))
						.append(addMedicine('resistente', 'H', numCepa))
						.append(addMedicine('resistente', 'E', numCepa))
						.append(addMedicine('resistente', 'S', numCepa))
						.append(addMedicine('resistente', 'Z', numCepa))
						.append(addMedicine('resistente', 'C', numCepa))
					)
					.append($('<tr />')
						.append(addMedicine('resistente', 'Et', numCepa))
						.append(addMedicine('resistente', 'O', numCepa))
						.append(addMedicine('resistente', 'L', numCepa))
						.append(addMedicine('resistente', 'T', numCepa))
						.append(addMedicine('resistente', 'M', numCepa))
					)
				)
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan= "2"/>')
			.append('Responsável')
			.addClass('description')
		)
		.append($('<td />')
			.append('Resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.css(  'width', '100px')
				.attr('disabled', true)
				.attr('name', 'resultado_cultura_cepa_' + numCepa)
				.attr(  'id', 'resultado_cultura_cepa_' + numCepa)
				.addClass('resultado_cultura_cepa')
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
				.append($('<option> Negativo </option>')
					.attr('value', 'negativo')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
			)
		)
		.append($('<td />')
			.append('Não Testado ')
			.addClass('description')
		)
		.append($('<td />')
			.attr('id', 'nao_testado_'+ numCepa)
			.html(medicines.toString())
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'cultura_coleta_responsavel_' + numCepa)
				.attr(  'id', 'cultura_coleta_responsavel_' + numCepa)
				.attr('size', '20')
				.addClass('cultura_coleta_responsavel')
			)
		)
		.append($('<td />')
			.append('Data do resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_resultado_cultura_' + numCepa)
				.attr(  'id', 'data_resultado_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_resultado_cultura_' + numCepa)
					.attr(  'id', 'hora_resultado_cultura_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
		.append($('<td />')
			.append('Data do TSA')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_tsa_cultura_' + numCepa)
				.attr(  'id', 'data_tsa_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>'))
		.append($('<td />')
			.append('Identificação')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'identificacao_cultura_cepa_' + numCepa)
				.attr(  'id', 'identificacao_cultura_cepa_' + numCepa)
				.addClass('identificacao_cultura_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> Micobacterium Tuberculosis (MTB)</option>')
					.attr('value', 'mtb')
				)
				.append($('<option> Micobacterium N&atilde;o Tuberculosis (MNT)</option>')
					.attr('value', 'mnt')
				)
				.append($('<option> N&atilde;o se aplica </option>')
					.attr('value', 'nao_se_aplica')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
			)
		)
		.append($('<td colspan="2"/>'))
	);
	return content;
}

$(document).ready(function(){
	var cepaCulturaNum = 1;
	var content = CEPACulturaRow(cepaCulturaNum);
	$('table.cepaCultura').append(content);
	not_tested[cepaCulturaNum] = new Array();
	not_tested[cepaCulturaNum] = not_tested[0];
	$('#nao_testado_'+cepaCulturaNum).html(not_tested[cepaCulturaNum].toString());
	// add row button
	$("#addlineCultura_button").click(function(){
		var origemStr = $('#origem_cultura_'+ cepaCulturaNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaCulturaNum++;
			var content = CEPACulturaRow(cepaCulturaNum);
			$('table.cepaCultura').append(CEPACulturaRow(cepaCulturaNum));
			not_tested[cepaCulturaNum] = new Array();
			not_tested[cepaCulturaNum] = not_tested[0];
			$('#nao_testado_'+cepaCulturaNum).html(not_tested[cepaCulturaNum].toString());
		}
	});
	$('select.origem_cultura').live('change', function(){
		var origemStr = $(this).val();
		l = medicines;
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#numero_cepa_cultura_' + num).removeAttr('disabled');
			$('#cultura_coleta_responsavel_' + num).removeAttr('disabled');
			$('#data_cultura_cepa_' + num).removeAttr('disabled');
			$('#hora_cultura_cepa_' + num).removeAttr('disabled');
			$('#data_processamento_cultura_' + num).removeAttr('disabled');
			$('#data_tsa_cultura_' + num).removeAttr('disabled');
			$('#hora_processamento_cultura_' + num).removeAttr('disabled');
			$('#data_resultado_cultura_' + num).removeAttr('disabled');
			$('#hora_resultado_cultura_' + num).removeAttr('disabled');
			$('#metodo_cultura_cepa_' + num).removeAttr('disabled');
			$('#resultado_cultura_cepa_' + num).removeAttr('disabled');
			$('#dias_cultura_cepa_' + num).removeAttr('disabled');
			$('#identificacao_cultura_cepa_' + num).removeAttr('disabled');
			for(var i= 0; i<l.length; i++){
				$('#sensibilidade_'+num+'_'+l[i]).removeAttr('disabled');
				$('#resistente_'+num+'_'+l[i]).removeAttr('disabled');
				$('#sensibilidade_'+num+'_'+l[i]).parent().removeClass('disabledField');
				$('#resistente_'+num+'_'+l[i]).parent().removeClass('disabledField');
			}
		} else {
			$('#numero_cepa_cultura_' + num).attr('disabled', true);
			$('#numero_cepa_cultura_' + num).val('');
			$('#cultura_coleta_responsavel_' + num).attr('disabled', true);
			$('#cultura_coleta_responsavel_' + num).val('');
			$('#data_cultura_cepa_' + num).attr('disabled', true);
			$('#data_cultura_cepa_' + num).val('');
			$('#hora_cultura_cepa_' + num).attr('disabled', true);
			$('#hora_cultura_cepa_' + num).val('');
			$('#data_processamento_cultura_' + num).attr('disabled', true);
			$('#data_processamento_cultura_' + num).val('');
			$('#hora_processamento_cultura_' + num).attr('disabled', true);
			$('#hora_processamento_cultura_' + num).val('');
			$('#data_tsa_cultura_' + num).attr('disabled', true);
			$('#data_tsa_cultura_' + num).val('');
			$('#data_resultado_cultura_' + num).attr('disabled', true);
			$('#data_resultado_cultura_' + num).val('');
			$('#hora_resultado_cultura_' + num).attr('disabled', true);
			$('#hora_resultado_cultura_' + num).val('');
			$('#metodo_cultura_cepa_' + num).attr('disabled', true);
			$('#metodo_cultura_cepa_' + num).val('');
			$('#resultado_cultura_cepa_' + num).attr('disabled', true);
			$('#resultado_cultura_cepa_' + num).val('');
			$('#identificacao_cultura_cepa_' + num).attr('disabled', true);
			$('#dias_cultura_cepa_' + num).val('');
			$('#dias_cultura_cepa_' + num).attr('disabled', true);
			for(var i= 0; i<l.length; i++){
				$('#sensibilidade_'+num+'_'+l[i]).attr('disabled', true);
				$('#sensibilidade_'+num+'_'+l[i]).attr('checked', false);
				$('#resistente_'   +num+'_'+l[i]).attr('disabled', true);
				$('#resistente_'   +num+'_'+l[i]).attr('checked', false);
				$('#sensibilidade_'+num+'_'+l[i]).parent().addClass('disabledField');
				$('#resistente_'+num+'_'+l[i]).parent().addClass('disabledField');
			}
		}
	});
	$('input.input_resistente').live('click', function(){
		params = $(this).attr('id').split('_');
		id_sensivel = 'sensibilidade_' + params[1] + '_' + params[2];
		id_resistente = 'resistente_'  + params[1] + '_' + params[2];
		numCepa = params[1];
		if($(this)[0].checked){
			$('#' + id_sensivel).attr('disabled', true);
			$('#' + id_sensivel).parent().addClass('disabledField');
			not_tested[numCepa] = $.grep(not_tested[numCepa], function(value){
				return value != $('#' + id_resistente).val();
			});
			$('#nao_testado_'+numCepa).html(not_tested[numCepa].toString());
		} else {
			$('#' + id_sensivel).removeAttr('disabled');
			$('#' + id_sensivel).parent().removeClass('disabledField');
			not_tested[numCepa].push($(this).val());
			not_tested[numCepa].sort();
			$('#nao_testado_'+numCepa).html(not_tested[numCepa].toString());
		}
	});


	$('input.input_sensibilidade').live('click', function(){
		params = $(this).attr('id').split('_');
		id_sensivel = 'sensibilidade_' + params[1] + '_' + params[2];
		id_resistente = 'resistente_'  + params[1] + '_' + params[2];
		numCepa = params[1];
		if($(this)[0].checked){
			$('#' + id_resistente).attr('disabled', true);
			$('#' + id_resistente).parent().addClass('disabledField');
			not_tested[numCepa] = $.grep(not_tested[numCepa], function(value){
				return value != $('#' + id_sensivel).val();
			});
			$('#nao_testado_'+numCepa).html(not_tested[numCepa].toString());
		} else {
			$('#' + id_resistente).removeAttr('disabled');
			$('#' + id_resistente).parent().removeClass('disabledField');
			not_tested[numCepa].push($(this).val());
			not_tested[numCepa].sort();
			$('#nao_testado_'+numCepa).html(not_tested[numCepa].toString());
		}
	});

});