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

(function($) {
/* jQuery object extension methods */
	$.fn.extend({
		appendText: function(e) {
			if ( typeof e == "string" )
				return this.append( document.createTextNode( e ) );
			return this;
		}
	});
})(jQuery);


function CEPARow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td/>')
			.append($('<input/>')
				.attr('name', 'numero_cepa_' + numCepa)
				.attr(  'id', 'numero_cepa_' + numCepa)
				.attr('size', '4')
			)
			.attr('rowspan', '4')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('name', 'data_cepa_' + numCepa)
				.attr(  'id', 'data_cepa_' + numCepa)
				.addClass('data_cepa')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.attr('rowspan', '4')
		)
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
			.attr('rowspan', '4')
		)
		.append($('<td />')
			.append($('<select /> ')
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
			.attr('rowspan', '4')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'baciloscopia_material_cepa_' + numCepa)
				.attr(  'id', 'baciloscopia_material_cepa_' + numCepa)
				.addClass('baciloscopia_material_cepa')
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
			.attr('rowspan', '4')
		)
		.append($('<td />')
			.append('Método')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.css(  'width', '220px')
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
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_R' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'R' )
									.attr('id', 'sensibilidade_' + numCepa + '_R' )
									.addClass('input_sensibilidade')
								)
								.append(' R')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_H' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'H' )
									.attr('id', 'sensibilidade_' + numCepa + '_H' )
									.addClass('input_sensibilidade')
								)
								.append(' H')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_E' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'E' )
									.attr('id', 'sensibilidade_' + numCepa + '_E' )
									.addClass('input_sensibilidade')
								)
								.append(' E')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_S' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'S' )
									.attr('id', 'sensibilidade_' + numCepa + '_S' )
									.addClass('input_sensibilidade')
								)
								.append(' S')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_Z' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'Z' )
									.attr('id', 'sensibilidade_' + numCepa + '_Z' )
									.addClass('input_sensibilidade')
								)
								.append(' Z')
							)
						)
					)
					.append($('<tr />')
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_Et' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'Et' )
									.attr('id', 'sensibilidade_' + numCepa + '_Et' )
									.addClass('input_sensibilidade')
								)
								.append(' Et')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_O' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'O' )
									.attr('id', 'sensibilidade_' + numCepa + '_O' )
									.addClass('input_sensibilidade')
								)
								.append(' O')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_L' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'L' )
									.attr('id', 'sensibilidade_' + numCepa + '_L' )
									.addClass('input_sensibilidade')
								)
								.append(' L')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_T' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'T' )
									.attr('id', 'sensibilidade_' + numCepa + '_T' )
									.addClass('input_sensibilidade')
								)
								.append(' T')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'sensibilidade_' + numCepa + '_M' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'M' )
									.attr('id', 'sensibilidade_' + numCepa + '_M' )
									.addClass('input_sensibilidade')
								)
								.append(' M')
							)
						)
					)
				)
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
				.css(  'width', '220px')
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
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_R' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'R' )
									.attr('id', 'resistente_' + numCepa + '_R' )
									.addClass('input_resistente')
								)
								.append(' R')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_H' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'H' )
									.attr('id', 'resistente_' + numCepa + '_H' )
									.addClass('input_resistente')
								)
								.append(' H')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_E' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'E' )
									.attr('id', 'resistente_' + numCepa + '_E' )
									.addClass('input_resistente')
								)
								.append(' E')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_S' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'S' )
									.attr('id', 'resistente_' + numCepa + '_S' )
									.addClass('input_resistente')
								)
								.append(' S')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_Z' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'Z' )
									.attr('id', 'resistente_' + numCepa + '_Z' )
									.addClass('input_resistente')
								)
								.append(' Z')
							)
						)
					)
					.append($('<tr />')
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_Et' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'Et' )
									.attr('id', 'resistente_' + numCepa + '_Et' )
									.addClass('input_resistente')
								)
								.append(' Et')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_O' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'O' )
									.attr('id', 'resistente_' + numCepa + '_O' )
									.addClass('input_resistente')
								)
								.append(' O')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_L' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'L' )
									.attr('id', 'resistente_' + numCepa + '_L' )
									.addClass('input_resistente')
								)
								.append(' L')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_T' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'T' )
									.attr('id', 'resistente_' + numCepa + '_T' )
									.addClass('input_resistente')
								)
								.append(' T')
							)
						)
						.append($('<td />')
							.append($('<label />')
								.attr('for', 'resistente_' + numCepa + '_M' )
								.append($('<input />')
									.attr('type', 'checkbox')
									.val( 'M' )
									.attr('id', 'resistente_' + numCepa + '_M' )
									.addClass('input_resistente')
								)
								.append(' M')
							)
						)
					)
				)
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Número de Dias')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('name', 'dias_cultura_cepa_' + numCepa)
				.attr(  'id', 'dias_cultura_cepa_' + numCepa)
				.attr(  'size', 2)
				.addClass('dias_cultura_cepa')
				.addClass('number')
			)
		)
		.append($('<td />')
			.append('Não Testado ')
			.addClass('description')
		)
		.append($('<td />')
			.attr('id', 'nao_testado_'+ numCepa)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Identificação')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.css(  'width', '220px')
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
		.append($('<td />')
			.attr('colspan', 2)
		)
	);
	content = ($('<tbody cepanum="'+numCepa+'">').append(content))
	$.each(not_tested, function(i,val){
		var el = 'nao_testado_' + numCepa;
		$(el).append(val + ', ');
	});
	return content;
}

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
	//Teste do HIV
	$('#HIVteste').change(function(){
		var dep = new Array();
		dep[0] = '#divDataHIV';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='positivo' || $(this).val()=='negativo'){
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
		if( $(this).val() == 'ignorado'){
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
	$('table.datatable').append(content);
	not_tested[cepaNum] = new Array();
	not_tested[cepaNum] = not_tested[0];
	$('#nao_testado_'+cepaNum).html(not_tested[cepaNum].toString());
	// add row button
	$("#addline_button").click(function(){
		cepaNum++;
		var content = CEPARow(cepaNum);
		$('table.datatable').append(CEPARow(cepaNum));
		not_tested[cepaNum] = new Array();
		not_tested[cepaNum] = not_tested[0];
		$('#nao_testado_'+cepaNum).html(not_tested[cepaNum].toString());
		$('input.data_cepa').datepicker({
			dateFormat: 'dd/mm/yy',
			monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
			maxDate: '+0d',
			dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
		});
	});
	$('input.data_cepa').datepicker({
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

	$('#outros_exames_1').keydown(function(){
		if($(this).val() != '')
			$('#outrosExames1').removeAttr('disabled');
		else
			$('#outrosExames1').attr('disabled', 'disabled');
	});
	$('#outros_exames_2').keydown(function(){
		if($(this).val() != '')
			$('#outrosExames2').removeAttr('disabled');
		else
			$('#outrosExames2').attr('disabled', 'disabled');
	});
	$('#outros_exames_3').keydown(function(){
		if($(this).val() != '')
			$('#outrosExames3').removeAttr('disabled');
		else
			$('#outrosExames3').attr('disabled', 'disabled');
	});
	$('#outros_exames_1').change(function(){
		if($(this).val() != '')
			$('#outrosExames1').removeAttr('disabled');
		else
			$('#outrosExames1').attr('disabled', 'disabled');
	});
	$('#outros_exames_2').change(function(){
		if($(this).val() != '')
			$('#outrosExames2').removeAttr('disabled');
		else
			$('#outrosExames2').attr('disabled', 'disabled');
	});
	$('#outros_exames_3').change(function(){
		if($(this).val() != '')
			$('#outrosExames3').removeAttr('disabled');
		else
			$('#outrosExames3').attr('disabled', 'disabled');
	});


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
