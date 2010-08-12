function CEPATBResistenteRow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'origem_tbresistente_' + numCepa)
				.attr(  'id', 'origem_tbresistente_' + numCepa)
				.addClass('origem_tbresistente')
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
			.attr('rowspan', '4')
		)
		.append($('<td />')
			.append('Número')
			.addClass('description')
			)
		.append($('<td/>')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'numero_cepa_tbresistente_cultura_' + numCepa)
					.attr(  'id', 'numero_cepa_tbresistente_cultura_' + numCepa)
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
				.attr('name', 'metodo_tbresistente_cepa_' + numCepa)
				.attr(  'id', 'metodo_tbresistente_cepa_' + numCepa)
				.addClass('metodo_tbresistente_cepa')
				.append($('<option> ---- </option>'))
					.attr('value','')
				.append($('<option>Genexpert</option>')
					.attr('value', 'genexpert')
				)
				.append($('<option>MGIT960</option>')
					.attr('value', 'mgit960')
				)
				.append($('<option>REMA</option>')
					.attr('value', 'rema')
				)
				.append($('<option>Proporções</option>')
					.attr('value', 'proporcoes')
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
						.append(addMedicine('sensibilidade_tbresistente', 'R', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'H', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'E', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'S', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'Z', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'C', numCepa))
					)
					.append($('<tr />')
						.append(addMedicine('sensibilidade_tbresistente', 'Et', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'O', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'L', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'T', numCepa))
						.append(addMedicine('sensibilidade_tbresistente', 'M', numCepa))
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
				.attr('name', 'data_cultura_tbresistente_cepa_' + numCepa)
				.attr(  'id', 'data_cultura_tbresistente_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_cultura_tbresistente_cepa_' + numCepa)
					.attr(  'id', 'hora_cultura_tbresistente_cepa_' + numCepa)
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
					.attr('name', 'data_processamento_tbresistente_cultura_' + numCepa)
					.attr(  'id', 'data_processamento_tbresistente_cultura_' + numCepa)
					.addClass('data')
					.attr('size', '11')
					.attr('readonly', 'readonly')
				)
				.append($('<div />')
					.appendText('hora: ')
					.append($('<input/>')
						.attr('disabled', true)
						.attr('name', 'hora_processamento_tbresistente_cultura_' + numCepa)
						.attr(  'id', 'hora_processamento_tbresistente_cultura_' + numCepa)
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
						.append(addMedicine('resistente_tbresistente', 'R', numCepa))
						.append(addMedicine('resistente_tbresistente', 'H', numCepa))
						.append(addMedicine('resistente_tbresistente', 'E', numCepa))
						.append(addMedicine('resistente_tbresistente', 'S', numCepa))
						.append(addMedicine('resistente_tbresistente', 'Z', numCepa))
						.append(addMedicine('resistente_tbresistente', 'C', numCepa))
					)
					.append($('<tr />')
						.append(addMedicine('resistente_tbresistente', 'Et', numCepa))
						.append(addMedicine('resistente_tbresistente', 'O', numCepa))
						.append(addMedicine('resistente_tbresistente', 'L', numCepa))
						.append(addMedicine('resistente_tbresistente', 'T', numCepa))
						.append(addMedicine('resistente_tbresistente', 'M', numCepa))
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
				.attr('name', 'resultado_tbresistente_cepa_' + numCepa)
				.attr(  'id', 'resultado_tbresistente_cepa_' + numCepa)
				.addClass('resultado_tbresistente_cepa')
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
			.attr('id','nao_testado_tbresistente_' + numCepa)
			.html(medicines.toString())
		)
		/*.append($('<td />')
			.append('Número de Dias')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'dias_tbresistente_cepa_' + numCepa)
				.attr(  'id', 'dias_tbresistente_cepa_' + numCepa)
				.attr(  'size', 2)
				.addClass('dias_tbresistente_cepa')
				.addClass('number')
			)
		)*/
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'cultura_coleta_tbresistente_responsavel_' + numCepa)
				.attr(  'id', 'cultura_coleta_tbresistente_responsavel_' + numCepa)
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
				.attr('name', 'data_resultado_tbresistente_cultura_' + numCepa)
				.attr(  'id', 'data_resultado_tbresistente_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_resultado_tbresistente_cultura_' + numCepa)
					.attr(  'id', 'hora_resultado_tbresistente_cultura_' + numCepa)
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
					.attr('name', 'data_tsa_tbresistente_cultura_' + numCepa)
					.attr(  'id', 'data_tsa_tbresistente_cultura_' + numCepa)
					.addClass('data')
					.attr('size', '11')
					.attr('readonly', 'readonly')
			)
		)
		/*.append($('<td />')
			.append('Identificação')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'identificacao_tbresistente_cepa_' + numCepa)
				.attr(  'id', 'identificacao_tbresistente_cepa_' + numCepa)
				.addClass('identificacao_tbresistente_cepa')
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
		)*/
	);
	return content;
}

$(document).ready(function(){
	var cepaTBResistenteNum = 1;
	var content = CEPATBResistenteRow(cepaTBResistenteNum);
	$('table.cepaTBResistente').append(content);
	not_tested_tbresistente[cepaTBResistenteNum] = new Array();
	not_tested_tbresistente[cepaTBResistenteNum] = medicines;
	$('#nao_testado_tbresistente_'+cepaTBResistenteNum).html(not_tested_tbresistente[cepaTBResistenteNum].toString());
	// add row button
	$("#addlineTBResistente_button").click(function(){
		var origemStr = $('#origem_tbresistente_'+ cepaTBResistenteNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaTBResistenteNum++;
			var content = CEPATBResistenteRow(cepaTBResistenteNum);
			$('table.cepaTBResistente').append(content);
			not_tested_tbresistente[cepaTBResistenteNum] = new Array();
			not_tested_tbresistente[cepaTBResistenteNum] = medicines;
			$('#nao_testado_tbresistente_'+cepaTBResistenteNum).html(not_tested_tbresistente[cepaTBResistenteNum].toString());
		}
	});
	$('select.origem_tbresistente').livequery('change', function(){
		var origemStr = $(this).val();
		l = medicines;
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#numero_cepa_tbresistente_cultura_' + num).removeAttr('disabled');
			$('#cultura_coleta_tbresistente_responsavel_' + num).removeAttr('disabled');
			$('#data_cultura_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#hora_cultura_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#hora_processamento_tbresistente_cultura_' + num).removeAttr('disabled');
			$('#hora_resultado_tbresistente_cultura_' + num).removeAttr('disabled');
			$('#data_processamento_tbresistente_cultura_' + num).removeAttr('disabled');
			$('#data_resultado_tbresistente_cultura_' + num).removeAttr('disabled');
			$('#metodo_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#resultado_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#dias_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#identificacao_tbresistente_cepa_' + num).removeAttr('disabled');
			$('#data_tsa_tbresistente_cultura_' + num).removeAttr('disabled');
			for(var i= 0; i<l.length; i++){
				$('#sensibilidade_tbresistente_'+num+'_'+l[i]).removeAttr('disabled');
				$('#resistente_tbresistente_'+num+'_'+l[i]).removeAttr('disabled');
				$('#sensibilidade_tbresistente_'+num+'_'+l[i]).parent().removeClass('disabledField');
				$('#resistente_tbresistente_'+num+'_'+l[i]).parent().removeClass('disabledField');
			}
		} else {
			$('#numero_cepa_cultura_' + num).attr('disabled', true);
			$('#cultura_coleta_responsavel_' + num).attr('disabled', true);
			$('#cultura_coleta_responsavel_' + num).val('');
			$('#data_cultura_cepa_' + num).attr('disabled', true);
			$('#data_cultura_cepa_' + num).val('');
			$('#data_processamento_tbresistente_cultura_' + num).attr('disabled', true);
			$('#data_processamento_tbresistente_cultura_' + num).val('');
			$('#data_resultado_tbresistente_cultura_' + num).attr('disabled', true);
			$('#data_resultado_tbresistente_cultura_' + num).val('');
			$('#hora_cultura_cepa_' + num).attr('disabled', true);
			$('#hora_cultura_cepa_' + num).val('');
			$('#hora_processamento_tbresistente_cultura_' + num).attr('disabled', true);
			$('#hora_processamento_tbresistente_cultura_' + num).val('');
			$('#hora_resultado_tbresistente_cultura_' + num).attr('disabled', true);
			$('#hora_resultado_tbresistente_cultura_' + num).val('');
			$('#numero_cepa_cultura_' + num).val('');
			$('#data_tsa_tbresistente_cultura_' + num).attr('disabled', true);
			$('#data_tsa_tbresistente_cultura_' + num).val('');
			$('#metodo_tbresistente_cepa_' + num).attr('disabled', true);
			$('#metodo_tbresistente_cepa_' + num).val('');
			$('#resultado_tbresistente_cepa_' + num).attr('disabled', true);
			$('#resultado_tbresistente_cepa_' + num).val('');
			$('#identificacao_tbresistente_cepa_' + num).attr('disabled', true);
			$('#dias_tbresistente_cepa_' + num).val('');
			$('#dias_tbresistente_cepa_' + num).attr('disabled', true);
			for(var i= 0; i<l.length; i++){
				$('#sensibilidade_tbresistente_'+num+'_'+l[i]).attr('disabled', true);
				$('#sensibilidade_tbresistente_'+num+'_'+l[i]).attr('checked', false);
				$('#resistente_tbresistente_'   +num+'_'+l[i]).attr('disabled', true);
				$('#resistente_tbresistente_'   +num+'_'+l[i]).attr('checked', false);
				$('#sensibilidade_tbresistente_'+num+'_'+l[i]).parent().addClass('disabledField');
				$('#resistente_tbresistente_'+num+'_'+l[i]).parent().addClass('disabledField');
			}
		}
	});
	$('input.input_resistente_tbresistente').livequery('click', function(){
		console.log('resistencia');
		params = $(this).attr('id').split('_');
		id_sensivel = 'sensibilidade_tbresistente_' + params[2] + '_' + params[3];
		id_resistente = 'resistente_tbresistente_'  + params[2] + '_' + params[3];
		numCepaTBResistente = params[2];
		if($(this)[0].checked){
			$('#' + id_sensivel).attr('disabled', true);
			$('#' + id_sensivel).parent().addClass('disabledField');
			not_tested_tbresistente[numCepaTBResistente] = $.grep(not_tested_tbresistente[numCepaTBResistente], function(value){
				return value != $('#' + id_resistente).val();
			});
			$('#nao_testado_tbresistente_'+numCepaTBResistente).html(not_tested_tbresistente[numCepaTBResistente].toString());
		} else {
			$('#' + id_sensivel).removeAttr('disabled');
			$('#' + id_sensivel).parent().removeClass('disabledField');
			not_tested_tbresistente[numCepaTBResistente].push($(this).val());
			not_tested_tbresistente[numCepaTBResistente].sort();
			$('#nao_testado_tbresistente_'+numCepaTBResistente).html(not_tested_tbresistente[numCepaTBResistente].toString());
		}
	});

	$('input.input_sensibilidade_tbresistente').livequery('click', function(){
		console.log('resistencia');
		params = $(this).attr('id').split('_');
		id_sensivel = 'sensibilidade_tbresistente_' + params[2] + '_' + params[3];
		id_resistente = 'resistente_tbresistente_'  + params[2] + '_' + params[3];
		numCepaTBResistente = params[2];
		if($(this)[0].checked){
			$('#' + id_resistente).attr('disabled', true);
			$('#' + id_resistente).parent().addClass('disabledField');
			not_tested_tbresistente[numCepaTBResistente] = $.grep(not_tested_tbresistente[numCepaTBResistente], function(value){
				return value != $('#' + id_sensivel).val();
			});
			$('#nao_testado_tbresistente_'+numCepaTBResistente).html(not_tested_tbresistente[numCepaTBResistente].toString());
		} else {
			$('#' + id_resistente).removeAttr('disabled');
			$('#' + id_resistente).parent().removeClass('disabledField');
			not_tested_tbresistente[numCepaTBResistente].push($(this).val());
			not_tested_tbresistente[numCepaTBResistente].sort();
			$('#nao_testado_tbresistente_'+numCepaTBResistente).html(not_tested_tbresistente[numCepaTBResistente].toString());
		}
	});
});
