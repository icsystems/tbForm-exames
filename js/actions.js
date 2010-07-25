/**
 * Actions.js
 *
 * Author: Fernando.Ferreira@icsystems.com.br
 * Date:   March 15th, 2010
 */

if(typeof(String.prototype.trim) === "undefined")
{
	String.prototype.trim = function()
	{
		return String(this).replace(/^\s+|\s+$/g, '');
	};
}

var not_tested = new Array();
not_tested[0]  = new Array();
not_tested[0]  = ['R', 'H','E', 'S', 'Z', 'Et', 'O', 'L', 'T', 'M'].sort();

var sensivel  = new Array();
var resistent = new Array();

//Document is ready, let's play
$(document).ready(function(){
	var hlcolor = '#FFF8C6';
	$('#data_antiHIV').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	$('#data_aplicacao').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	$('#data_leitura').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	$('#data_rx').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	$('#data_rx_90dias').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	//Toggle options
	// Soro
	$('#soroColetado').change(function(){
		var dep = new Array();
		dep[0] = '#divNSoro';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val() == 'ignorado'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	$('#sangueColetado').change(function(){
		var dep = new Array();
		dep[0] = '#divNSangue';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val() == 'ignorado'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//IGRA
	$('#IGRA').change(function(){
		var dep = new Array();
		dep[0] = '#divIGRAMetodo';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//PCR
	$('#pcr').change(function(){
		var dep = new Array();
		dep[0] = '#divPCRMetodo';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	})
	//Detecão TB Resistente
	$('#detecao_tb_resistente').change(function(){
		var dep = new Array();
		dep[0] = '#divTbResistenteMetodo';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//HIV
	$('#exameSida').change(function(){
		var dep = new Array();
		dep[0] = '#divSIDA';
		dep[1] = '#divDataSida';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//Probabilidade de TBativa
	$('#probabilidadeTBAtiva').change(function(){
		var alta = new Array();
		alta[0] = '#divCativacao';
		alta[1] = '#divPadraoTipico';
		alta[2] = '#divCompativel';
		alta[3] = '#divAtipico';
		var baixa = new Array();
		baixa[0] = '#divcasoBaixaProbabilidade';
		// Se alta ou media, disponibilizar colunas listadas a cima
		if($(this).val()=='alta' || $(this).val() == 'media'){
			for(div in alta){
				var elems = $('*', alta[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(alta[div]).css('display') != 'block')
					$(alta[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
			for(div in baixa){
				var elems = $('*', baixa[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(baixa[div]).css('display') != 'none')
					$(baixa[div]).toggle();
			}
		}
		// Se baixa, ocultar colunas listadas a cima
		if($(this).val()=='baixa'){
			for(div in alta){
				if($(alta[div]).css('display') != 'none')
					$(alta[div]).toggle();
			}
			for(div in baixa){
				var elems = $('*', baixa[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(baixa[div]).css('display') != 'block')
					$(baixa[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
	});

	$('select', '#sensivel_td').change(function(){
		var text = $('#sensivel_div').html();
		var v = '';
		if(text.trim() != '') v= ', ';
		$('#sensivel_div').html(text + v + $(this).val());
	});

	//Probabilidade de TBativa
	$('#probabilidadeTBAtivaAposEstudoRX').change(function(){
		var alta = new Array();
		alta[0] = '#divCativacao90dias';
		alta[1] = '#divPadraoTipico90dias';
		alta[2] = '#divCompativel90dias';
		alta[3] = '#divAtipico90dias';
		var baixa = new Array();
		baixa[0] = '#divcasoBaixaProbabilidade90dias';
		// Se alta ou media, disponibilizar colunas listadas a cima
		if($(this).val()=='alta' || $(this).val() == 'media'){
			for(div in alta){
				if($(alta[div]).css('display') != 'block')
					$(alta[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
			for(div in baixa){
				var elems = $('*', baixa[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(baixa[div]).css('display') != 'none')
					$(baixa[div]).toggle();
			}
		}
		// Se baixa, ocultar colunas listadas a cima
		if($(this).val()=='baixa'){
			for(div in alta){
				var elems = $('*', alta[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(alta[div]).css('display') != 'none')
					$(alta[div]).toggle();
			}
			for(div in baixa){
				if($(baixa[div]).css('display') != 'block')
					$(baixa[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
	});
	$('div.secondary').css('display', 'none');
	//\Toggle Options
	var cepaNum = 1;
	var content = CEPARow(cepaNum);
	$('table.cepa').append(content);
	not_tested[cepaNum] = new Array();
	not_tested[cepaNum] = not_tested[0];
	$('#nao_testado_'+cepaNum).html(not_tested[cepaNum].toString());
	// add row button
	$("#addline_button").click(function(){
		var origemStr = $('#origem_cepa_'+ cepaNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaNum++;
			var content = CEPARow(cepaNum);
			$('table.cepa').append(CEPARow(cepaNum));
			not_tested[cepaNum] = new Array();
			not_tested[cepaNum] = not_tested[0];
			$('#nao_testado_'+cepaNum).html(not_tested[cepaNum].toString());
			$('input.data_cepa').datepicker({
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
		} else {
			$('#baciloscopia_metodo_' + num).attr('disabled', true);
			$('#baciloscopia_metodo_' + num).val('----');
		}
	});

	$('select.baciloscopia_metodo').live('change',  function(){
		var origemStr = $(this).val();
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#baciloscopia_data_' + num).removeAttr('disabled');
			$('#baciloscopia_material_cepa_' + num).removeAttr('disabled');
		} else {
			$('#baciloscopia_data_' + num).attr('disabled', true);
			$('#baciloscopia_data_' + num).val('');
			$('#baciloscopia_material_cepa_' + num).attr('disabled', true);
			$('#baciloscopia_material_cepa_' + num).val('----');
		}
	});
	$('select.baciloscopia_material_cepa').live('change',  function(){
		var origemStr = $(this).val();
		num = parseInt($(this).attr('id').split('_')[3]);
		console.log(origemStr);
		if(origemStr.replace(/-/g,'')){
			console.log('AKI-> ' +origemStr.replace(/-/g,''));
			$('#numero_cepa_' + num).removeAttr('disabled');
			$('#data_cepa_' + num).removeAttr('disabled');
			$('#material_cepa_' + num).removeAttr('disabled');
		} else {
			console.log(origemStr.replace(/-/g,''));
			$('#numero_cepa_' + num).attr('disabled', true);
			$('#numero_cepa_' + num).val('----');
			$('#data_cepa_' + num).attr('disabled', true);
			$('#data_cepa_' + num).val('');
			$('#material_cepa_' + num).attr('disabled', true);
			$('#material_cepa_' + num).val('');
		}
	});

	$('input.data_cepa').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('input.baciloscopia_data').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
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

	//Soro
	var soroNum = 1;
	var content = soroRow(soroNum);
	$('table.soro').append(content);
	// add row button
	$("#addSoro_button").click(function(){
		if($('#soroColetado_'+soroNum).val() == 'sim'){
			if($('#numeroSoro_'+soroNum).valid()){
				$('#numeroSoro_'+ numSoro).attr('readonly', 'true');
				$('#soroColetado_'+ numSoro).attr('readonly', 'true');
				soroNum++;
				var content = soroRow(soroNum);
				$('table.soro').append(content);
			}
		}
	});
	$('select.soro').live('change', function(){
		params = $(this).attr('id').split('_');
		numSoro = params[1];
		if($(this).val() == 'sim'){
			$('#numeroSoro_'+ numSoro).removeAttr('disabled');
			$('#numeroSoro_'+ numSoro).addClass('required');
		} else {
			$('#numeroSoro_'+ numSoro).attr('disabled', 'disabled');
			$('#numeroSoro_'+ numSoro).val('');
			$('#numeroSoro_'+ numSoro).removeClass('required');
			$('#numeroSoro_'+ numSoro).valid();
		}
	});
	//Sangue
	var sangueNum = 1;
	var content = sangueRow(sangueNum);
	$('table.sangue').append(content);
	// add row button
	$("#addSangue_button").click(function(){
		if($('#sangueColetado_'+sangueNum).val() == 'sim'){
			if($('#numeroSangue_'+sangueNum).valid()){
				$('#numeroSangue_'+ numSangue).attr('readonly', 'true');
				$('#sangueColetado_'+ numSangue).attr('readonly', 'true');
				sangueNum++;
				var content = sangueRow(sangueNum);
				$('table.sangue').append(content);
			}
		}
	});
	$('select.sangue').live('change', function(){
		params = $(this).attr('id').split('_');
		numSangue = params[1];
		if($(this).val() == 'sim'){
			$('#numeroSangue_'+ numSangue).removeAttr('disabled');
			$('#numeroSangue_'+ numSangue).addClass('required');
		} else {
			$('#numeroSangue_'+ numSangue).attr('disabled', 'disabled');
			$('#numeroSangue_'+ numSangue).val('');
			$('#numeroSangue_'+ numSangue).removeClass('required');
			$('#numeroSangue_'+ numSangue).valid();
		}
	});

	//Display help tipbox
	$('#helpicon').css('cursor', 'pointer');
	$('#helpicon').css('*cursor', 'hand');
	$("#layer1").hide();
	$('#helpicon').click(function(){
		$('#layer1').show();
	});
	$('#layer1').draggable();

	$('#close').click(function(){
		$("#layer1").hide();
	});
	///////////////

	$('#form_exams').validate({
		rules: {
			soroColetado: {
				required: true
			},
			sangueColetado: {
				required: true
			},
			resultadoLeitura:{
				required: true,
				number: true
			},
			data_aplicacao:{
				date: true,
				required: true
			},
			data_leitura:{
				date: true,
				required: true
			},
			pt:{
				required: true
			},
			HIVteste:{
				required: true
			},
			probabilidadeTBAtiva: {
				required: true
			},
			data_rx: {
				date: true,
				required: true
			}
		}
	});
});
