<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

      <!-- Custom fonts for this theme -->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


  <!-- Theme CSS -->
 
</head>
<body>

<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Formulário de Mensagens</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="nome">Nome:</label>  
  <div class="col-md-5">
    <input id="nome" name="nome" type="text" placeholder="Digite seu nome" class="form-control input-md" required="">
    <span class="help-block">O nome é importante é importante para se identificar</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="email">Email:</label>  
  <div class="col-md-5">
    <input id="email" name="email" type="text" placeholder="Digite o e-mail que você mais utiliza" class="form-control input-md" required="">
    <span class="help-block">E-mail precisa ser válido!</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="telefone">Telefone:</label>  
  <div class="col-md-5">
    <input id="telefone" name="telefone" type="text" placeholder="Insira um número de telefone" class="form-control input-md" required="">
    <span class="help-block">O número precisa ser válido!</span>  
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="mensagem">Mensagem:</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="mensagem" name="mensagem">Digite sua mensagem</textarea>
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="enviar"></label>
  <div class="col-md-4">
    <button id="enviar" name="enviar" class="btn btn-primary">Enviar</button>
  </div>
</div>

</fieldset>
</form>    


<!-- Bootstrap core JavaScript -->
<script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact Form JavaScript -->
  <script src="../js/jqBootstrapValidation.js"></script>
  <script src="../js/contact_me.js"></script>
  
  <!-- Custom scripts for this template -->
  <script src="../js/freelancer.min.js"></script>
  <script src="../js/formulario.js"></script>

</body>
</html>