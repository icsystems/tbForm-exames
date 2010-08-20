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
not_tested[0]  = medicines.sort();

var sensivel  = new Array();
var resistent = new Array();

//Document is ready, let's play
$(document).ready(function(){

	$('.number').live('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57)){
			return false;
		}
	});

	$('.hour').live('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57)){
			return false;
		}
	});

	$('.hour').live('keyup', function() {
		var hourForm = $(this).val();
		var format = '##:##';
		var i = hourForm.length;
		var output = format.substring(0,1);
		var text   = format.substring(i)
		if (text.substring(0,1) != output) $(this).val(hourForm + text.substring(0,1))
		$(this).rules('add', {validHour : true});
		if (hourForm.length == 4){
			$(this).valid();
		}
	});

	$(function(){
		$('.data').livequery('click', function() {
			$(this).datepicker({
						dateFormat: 'dd/mm/yy',
						monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
						maxDate: '+0d',
						changeMonth: true,
						changeYear: true,
						maxDate   : '+0y',
						minDate   : '-130y',
						yearRange : '-130:+130',
						dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
						showOn:'focus'}
								).focus();
		});
	});

	var hlcolor = '#FFF8C6';

	var d = new Date();
	var cYear = d.getFullYear();
	years = new Array();

	for (i=cYear-100; i <=cYear; i++)
		years.push(i.toString());


	$('#dataInicioUsoRetroviral').autocomplete({
		lookup: years
	});

	$('#data_sida').autocomplete({
		lookup: years
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
		dep[1] = '#divIGRAResultado'
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
		dep[1] = '#divPCRResultado';
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
	$('#sida').change(function(){
		var dep = new Array();
		dep[0] = '#divSidaContagemLinfocitos';
		dep[1] = '#divSIDAUsoAntiRetroviral';
		dep[2] = '#divDataInicioUsoRetroviral';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='positivo'){
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
	$('#data_rx').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#padrao').change(function(){
		var baixa = new Array();
		baixa[0] = '#divcasoBaixaProbabilidade';
		//Definindo a probabilidade
		if ($(this).val() == 'padraoTipico')
		$('#probabilidadeTBAtivaAposEstudoRX').val('Alta');
		else if ($(this).val() == 'padraoCompativel')
		$('#probabilidadeTBAtivaAposEstudoRX').val('Média');
		else if ($(this).val() == 'padraoAtipico'){
			$('#probabilidadeTBAtivaAposEstudoRX').val('Baixa');
			for(div in baixa){
			if($(baixa[div]).css('display') != 'block')
				$(baixa[div]).toggle(function() {
					$(this).css('background-color', hlcolor);
					$(this).animate({backgroundColor : "white"}, 4000);
				});
			}
		}

	if($(this).val() != 'padraoAtipico')
		for(div in baixa)
			if($(baixa[div]).css('display') != 'none')
				$(baixa[div]).toggle();
	});

	$('div.secondary').css('display', 'none');
	//\Toggle Options
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
	$('.helpicon').click(function(){
		if($(this).parent().attr('id').split('_')[2] == 'cultura')
			$('#layer1').css('top', '1800px');
		if($(this).parent().attr('id').split('_')[2] == 'tbresistente')
			$('#layer1').css('top', '2200px');
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
