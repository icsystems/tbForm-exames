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

/*------------------------------Edition and Relation-----------------------------*/
	//Relation between forms
	//Diagnóstico - Consulta e FollowUp
	var urlString = $(location).attr('href');
	var numPaciente = urlString[urlString.length - 2];
	if (urlString.search("edit") != -1)
		var numForm = parseInt(urlString[urlString.length - 4]);
	else
		var numForm = parseInt(urlString[urlString.length - 4]) + 1;
	$.ajax({
		type: 'POST',
		url:'../../../patientLastRegister/' + numForm + '/' + numPaciente + '/',
		dataType: "html",
		success: function(text){
			if (window.DOMParser)
			{
				parser=new DOMParser();
				xml=parser.parseFromString(text,"text/xml");
			}else{ // Internet Explorer
				xml=new ActiveXObject("Microsoft.XMLDOM");
				xml.async="false";
				xml.loadXML(text);
			}
			//console.log(text);
			//console.log(xml);
			if (urlString.search("edit") != -1){
				//Edit
				var elements = xml.getElementsByTagName('exames')[0].childNodes;
				$(elements).each(function(){
					var el = $(this).get(0);
					if($(el)[0].nodeType == xml.ELEMENT_NODE){
						var tagname = $(el)[0].tagName;
						//console.log(tagname + ' : ' + $(el).text());
						var hlcolor = '#FFF8C6';
						//Radio
						if (tagname == 'amostra')
							$('input[name=amostra]').each(function(){
								if ($(el).text().search($(this).val()) != -1)
									$(this).attr('checked',true);
							});
						//Checkbox
						if (tagname == 'fitaHain')
							$('input[name=fitaHain]').each(function(){
								if ($(el).text().search($(this).val()) != -1)
									$(this).attr('checked',true);
							});
						if (tagname == 'isoniazida')
							$('input[name=isoniazida]').each(function(){
								if ($(el).text().search($(this).val()) != -1)
									$(this).attr('checked',true);
							});
						if (tagname == 'rifampicina')
							$('input[name=rifampicina]').each(function(){
								if ($(el).text().search($(this).val()) != -1)
									$(this).attr('checked',true);
							});
						//Tables
						if (tagname == 'soroColetado')
						{
							var values = $(el).text().split(' ');
							var i;
							var index = 1;
							for (i=0;i<values.length;i++)
								if (values[i] != "")
								{
									$('table').find('#soroColetado_' + index.toString()).val(values[i]);
									if (values[i] == 'sim')
										$('#numeroSoro_' + index.toString()).removeAttr('disabled');
									if (i < values.length - 2)
										if (values[i+2] != ''){
											$('#numeroSoro_' + index.toString()).val('1');
											$('#addSoro_button').click();
										}
									index++;
								}
						}
						if (tagname == 'numeroSoro')
						{
							var values = $(el).text().split(' ');
							var i;
							var index = 1;
							for (i=0;i<values.length;i++)
								if (values[i] != "")
								{
									$('table').find('#numeroSoro_' + index.toString()).val(values[i]);
									index++;
								}
						}
						if (tagname == 'sangueColetado')
						{
							var values = $(el).text().split(' ');
							var i;
							var index = 1;
							for (i=0;i<values.length;i++)
								if (values[i] != "")
								{
									$('table').find('#sangueColetado_' + index.toString()).val(values[i]);
									if (values[i] == 'sim')
										$('#numeroSangue_' + index.toString()).removeAttr('disabled');
									if (i < values.length - 2)
										if (values[i+2] != ''){
											$('#numeroSangue_' + index.toString()).val('1');
											$('#addSangue_button').click();
										}
									index++;
								}
						}
						if (tagname == 'numeroSangue')
						{
							var values = $(el).text().split(' ');
							var i;
							var index = 1;
							for (i=0;i<values.length;i++)
								if (values[i] != "")
								{
									$('table').find('#numeroSangue_' + index.toString()).val(values[i]);
									index++;
								}
						}
						if (tagname.search('origem_cepa') != -1)
						{
							//console.log($('#'+tagname));
							//console.log($('table').find('#'+tagname));
							if (tagname[tagname.length - 1] > 1)
								$('#addline_button').click();
							var num = tagname[tagname.length - 1];
							$('#baciloscopia_metodo_' + num).removeAttr('disabled');
							$('#baciloscopia_coleta_responsavel_' + num).removeAttr('disabled');
							$('#baciloscopia_data_' + num).removeAttr('disabled');
							$('#baciloscopia_hora_cepa_' + num).removeAttr('disabled');
							$('#baciloscopia_material_cepa_' + num).removeAttr('disabled');
							$('#numero_cepa_' + num).removeAttr('disabled');
							$('#data_cepa_' + num).removeAttr('disabled');
							$('#hora_cepa_' + num).removeAttr('disabled');
							$('#baciloscopia_resultado_cepa_' + num).removeAttr('disabled');
							$('#data_recebimento_cepa_' + num).removeAttr('disabled');
							$('#hora_recebimento_cepa_' + num).removeAttr('disabled');
							$('#material_cepa_' + num).removeAttr('disabled');
							$('#analise_responsavel_' + num).removeAttr('disabled');
							$('#aspecto_escarro_' + num).removeAttr('disabled');
						}
						if (tagname.search('origem_cultura') != -1)
						{
							if (tagname[tagname.length - 1] > 1)
								$('#addlineCultura_button').click();
							var num = tagname[tagname.length - 1];
							$('#numero_cepa_cultura_' + num).removeAttr('disabled');
							$('#cultura_coleta_responsavel_' + num).removeAttr('disabled');
							$('#data_cultura_cepa_' + num).removeAttr('disabled');
							$('#hora_cultura_cepa_' + num).removeAttr('disabled');
							$('#data_processamento_cultura_' + num).removeAttr('disabled');
							$('#hora_processamento_cultura_' + num).removeAttr('disabled');
							$('#data_resultado_cultura_' + num).removeAttr('disabled');
							$('#hora_resultado_cultura_' + num).removeAttr('disabled');
							$('#metodo_cultura_cepa_' + num).removeAttr('disabled');
							$('#resultado_cultura_cepa_' + num).removeAttr('disabled');
							$('#dias_cultura_cepa_' + num).removeAttr('disabled');
							$('#identificacao_cultura_cepa_' + num).removeAttr('disabled');
						}
						if (tagname.search('origem_tbresistente') != -1)
						{
							if (tagname[tagname.length - 1] > 1)
								$('#addlineTBResistente_button').click();
							var num = tagname[tagname.length - 1];
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
						}
						if (tagname.search('valores_tbresistente_sensibilidade') != -1)
						{
							var num = tagname[tagname.length - 1];
							var values = $(el).text().split(',');
							var i;
							for (i=0;i<values.length;i++){
								$('#sensibilidade_tbresistente_' + num + '_' + values[i]).attr('checked',true);
								$('#sensibilidade_tbresistente_' + num + '_' + values[i]).removeAttr('disabled');
								$('#resistente_tbresistente_' + num + '_' + values[i]).attr('checked',false);
								$('#resistente_tbresistente_' + num + '_' + values[i]).attr('disabled',true);
							}
						}
						if (tagname.search('valores_tbresistente_resistencia') != -1)
						{
							var num = tagname[tagname.length - 1];
							var values = $(el).text().split(',');
							var i;
							for (i=0;i<values.length;i++){
								$('#resistente_tbresistente_' + num + '_' + values[i]).attr('checked',true);
								$('#resistente_tbresistente_' + num + '_' + values[i]).removeAttr('disabled');
								$('#sensibilidade_tbresistente_' + num + '_' + values[i]).attr('checked',false);
								$('#sensibilidade_tbresistente_' + num + '_' + values[i]).attr('disabled',true);
							}
						}
						if (tagname.search('valores_tbresistente_nao_testado') != -1)
							$('#nao_testado_tbresistente_' + tagname[tagname.length-1]).html($(el).text());

						$('#'+tagname).val($(el).text());
						$('#'+tagname).change();
					}
				});
			}else{
			//Relation
				var elements = xml.getElementsByTagName('documento')[0].childNodes;
				$(elements).each(function(){
					var el = $(this).get(0);
					if($(el)[0].nodeType == xml.ELEMENT_NODE){
						var tagname = $(el)[0].tagName;
						idDiv = $('#'+tagname).parent().attr('id');
						//console.log(tagname + ' : ' + $(el).text());
						var hlcolor = '#FFF8C6';
						if (tagname == 'numeroPaciente')
							$('#' + tagname).val($(el).text());
						if (tagname == 'unidade')
							$('#' + tagname).val($(el).text());
					}
				});
			}
		}
	});
/*-------------------------------------------------------------------------------*/
	$("#form_exams").keypress(function(e) {
		if (e.which == 13) {
			return false;
		}
	});

	$('.text').livequery('keypress', function(e){
		if((e.which > 32 && e.which < 65)||
			(e.which > 90 && e.which < 97)||
			(e.which > 122 && e.which < 127)||
			(e.which > 127 && e.which < 192)){
			return false;
		}
	});

	$('.number').livequery('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57)){
			return false;
		}
	});

	$('.hour').livequery('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57))
			return false;
		$('.hour').timeEntry({show24Hours: true});
	});

	/*$('.hour').livequery('keyup', function() {
		$('.hour').timeEntry({show24Hours: true});
	});*/

	$(function(){
		$('.data').livequery('click', function() {
			$(this).datepicker({
						dateFormat: 'dd/mm/yy',
						monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
						monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Aug','Set','Out','Nov','Dez'],
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
	//Prova Realizada?
	$('#provaRealizada').change(function(){
		var dep = new Array();
		dep[0] = '#divResultadoLeitura';
		dep[1] = '#divDataAplicacao';
		dep[2] = '#divDataLeitura';
		dep[3] = '#divPt';
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
	//testesMoleculares
	$('#testesMoleculares').change(function(){
		var dep = new Array();
		dep[0] = '#divPCRMetodo';
		dep[1] = '#divPCRResultado';
		dep[2] = '#divDataColetaPCR';
		dep[3] = '#divDataRecebimentoLaboratorioPCR';
		dep[4] = '#divDataResultadoPCR';
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
	$('#data_coleta_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_recebimento_laboratorio_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#data_coleta_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#data_coleta_pcr').val('');
			$('#data_resultado_pcr').val('');
		}
	});
	$('#data_recebimento_laboratorio_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_recebimento_laboratorio_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#data_coleta_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
		if (Date.parse($('#data_recebimento_laboratorio_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#data_resultado_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
	});
	$('#data_resultado_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#data_coleta_pcr').val('');
			$('#data_resultado_pcr').val('');
		}
		if (Date.parse($('#data_recebimento_laboratorio_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#data_resultado_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
	});
	$('#pcrMetodo').change(function(){
		var dep = new Array();
		dep[0] = '#divOutroMetodoPCR';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='outro'){
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
		var ped = new Array();
		ped[0] = '#divSidaContagemLinfocitos60dias';
		ped[1] = '#divSIDAUsoAntiRetroviral';
		ped[2] = '#divDataInicioUsoRetroviral';
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
			for(div in ped){
				var elems = $('*', ped[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(ped[div]).css('display') != 'none')
					$(ped[div]).toggle();
			}
		}
	});
	$('#genXpert').change(function(){
		var dep = new Array();
		dep[0] = '#divGenXpertPositivo';
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
	$('#testesMolecularesResistencia').change(function(){
		var dep = new Array();
		dep[0] = '#divGenXpert';
		dep[1] = '#divFitaHain';
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
	$('#sidaUsoAntiRetroviral').change(function(){
		var dep = new Array();
		dep[0] = '#divDataInicioUsoRetroviral';
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
		} else {
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
		dep[0] = '#divSIDAUsoAntiRetroviral';
		dep[1] = '#divSidaContagemLinfocitos60dias';
		var ped = new Array();
		ped[0] = '#divDataInicioUsoRetroviral';
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
			for(div in ped){
				var elems = $('*', ped[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(ped[div]).css('display') != 'none')
					$(ped[div]).toggle();
			}
		}
	});

	$('div.secondary').css('display', 'none');
	//Toggle Options
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
