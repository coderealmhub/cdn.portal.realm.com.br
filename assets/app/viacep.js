// required: <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>

$("#pincode").blur(function(){
		var pincode = this.value.replace(/[^0-9]/, "");
		
		if(pincode.length != 8){
			return false;
		}
		
		var url = "https://viacep.com.br/ws/"+pincode+"/json/";
		
		$.getJSON(url, function(dadosRetorno){
			try{
				$("#address").val(dadosRetorno.logradouro);
				$("#district").val(dadosRetorno.bairro);
				$("#city").val(dadosRetorno.localidade);
				$("#state").val(dadosRetorno.uf);
			}catch(ex){}
		});
});