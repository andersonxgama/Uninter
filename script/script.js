$(document).ready(function()
{
	var inicio;	
	var opcoes = $("#opcoes").detach();
	var perguntas = $("#perguntas").detach();
	var sugestao_container = $("#sugestao_container").detach();
	var opcao1, opcao2, adm, letras, edfisica, pedagogia, analise, mkt, sugestao_adm, sugestao_letras, sugestao_edfisica, sugestao_pedagogia, sugestao_analise, sugestao_mkt;
	
	$("#btn_inicio").click(function()
	{
		inicio = $("#inicio").detach();
		$("#container").append(opcoes);
		$("#combo2").prop("selectedIndex", 1);
	});
	
	$(document).on("click","#btn_cursos",function()
	{		
		if($("#combo1 option:selected").text() == $("#combo2 option:selected").text())
		{
			$("#aviso_cursos").text("Favor selecionar cursos diferentes");
		}
		else
		{
			opcao1 = $("#combo1 option:selected").text();
			opcao2 = $("#combo2 option:selected").text();
			opcoes = $("#opcoes").detach();
			$("#container").append(perguntas);
			adm = $("#pergunta_adm").detach();
			letras = $("#pergunta_letras").detach();
			edfisica = $("#pergunta_edfisica").detach();
			pedagogia = $("#pergunta_pedagogia").detach();
			analise = $("#pergunta_analise").detach();
			mkt = $("#pergunta_mkt").detach();
			
			if(opcao1 == "Administração (Bacharelado)")
			{
				$("#pergunta_container").append(adm);
			}
			
			if(opcao1 == "Letras (Bacharelado)")
			{
				$("#pergunta_container").append(letras);
			}
			
			if(opcao1 == "Educação Física (Licenciatura)")
			{
				$("#pergunta_container").append(edfisica);
			}
			
			if(opcao1 == "Pedagogia (Licenciatura)")
			{
				$("#pergunta_container").append(pedagogia);
			}
			
			if(opcao1 == "Análise e Desenv. de Sistemas (Tecnólogo)")
			{
				$("#pergunta_container").append(analise);
			}
			
			if(opcao1 == "Marketing Digital (Tecnólogo)")
			{
				$("#pergunta_container").append(mkt);
			}
			
			if(opcao2 == "Administração (Bacharelado)")
			{
				$("#pergunta_container").append(adm);
			}
			
			if(opcao2 == "Letras (Bacharelado)")
			{
				$("#pergunta_container").append(letras);
			}
			
			if(opcao2 == "Educação Física (Licenciatura)")
			{
				$("#pergunta_container").append(edfisica);
			}
			
			if(opcao2 == "Pedagogia (Licenciatura)")
			{
				$("#pergunta_container").append(pedagogia);
			}
			
			if(opcao2 == "Análise e Desenv. de Sistemas (Tecnólogo)")
			{
				$("#pergunta_container").append(analise);
			}
			
			if(opcao2 == "Marketing Digital (Tecnólogo)")
			{
				$("#pergunta_container").append(mkt);
			}
		}
	});
	
	$(document).on("click",".pergunta",function()
	{
		//alert($(this).attr("id").replace("pergunta_", ""));
		perguntas = $("#perguntas").detach();
		$("#container").append(sugestao_container);
		sugestao_adm = $("#sugestao_adm").detach();
		sugestao_letras = $("#sugestao_letras").detach();
		sugestao_edfisica = $("#sugestao_edfisica").detach();
		sugestao_pedagogia = $("#sugestao_pedagogia").detach();
		sugestao_analise = $("#sugestao_analise").detach();
		sugestao_mkt = $("#sugestao_mkt").detach();
		
		if($(this).attr("id").replace("pergunta_", "") == "adm")
		{
			$("#sugestao_container").append(sugestao_adm);
		}
		
		if($(this).attr("id").replace("pergunta_", "") == "letras")
		{
			$("#sugestao_container").append(sugestao_letras);
		}
		
		if($(this).attr("id").replace("pergunta_", "") == "edfisica")
		{
			$("#sugestao_container").append(sugestao_edfisica);
		}
		
		if($(this).attr("id").replace("pergunta_", "") == "pedagogia")
		{
			$("#sugestao_container").append(sugestao_pedagogia);
		}
		
		if($(this).attr("id").replace("pergunta_", "") == "analise")
		{
			$("#sugestao_container").append(sugestao_analise);
		}
		
		if($(this).attr("id").replace("pergunta_", "") == "mkt")
		{
			$("#sugestao_container").append(sugestao_mkt);
		}
	});
});